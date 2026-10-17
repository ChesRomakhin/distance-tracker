# Фаза 3 — Карта с фоном, энкаунтеры с расстановкой: план реализации

## Контекст

Фазы 1–2 закрыты: мир в метрах, экспорт/импорт JSON. Сейчас доска — пустое поле с сеткой, а энкаунтер — просто ростер `entries: [{ adversaryId, count }]` без позиций. Фаза 3 из `PLAN.md` добавляет **карты** как отдельную сущность (фон по URL с калибровкой), энкаунтеры с **расстановкой** (карта + позиции противников + точки спауна PC) и деплой готовой сцены. В конце экран игроков получает карту отдельным сообщением.

Решения, принятые с пользователем:
- **Калибровка — в диалоге карты** во вкладке Maps: превью картинки с сеткой 1.5 м, две точки + метры, px на клетку, смещение. Gesture-код `Graph.jsx` не трогаем.
- **Deploy сцены заменяет доску** одним шагом undo. PC, которые уже стояли на доске, переходят на точки спауна и сохраняют HP, Stress, Hope и Armor. Ростер без карты и позиций по-прежнему добавляется поверх доски.
- **Сетка доски скрыта**, пока фон загружен.

Первым шагом реализации этот план сохраняется в репозиторий как `PHASE3.md`, как это было в фазах 1 и 2.

## Что сейчас

- `Encounter = { id, name, entries, adversaries }`, хелпер `findEncounterAdversary` (`src/constants.js:165`). С `entries` работают `handleDeployEncounter` (`App.jsx:333`), `REMOVE_ADVERSARY`, `EncounterBuilder.jsx` (`tierSummary`, редактор, карточка), `BattleSidePanel` (`AddUnits`), `transfer.js` (`selfContained`, `normalize`, `applyImport`) и `DataModal`.
- Доска — `state.tokens`. Undo хранит снимки `tokens` (`boardPast/boardFuture`, `BOARD_ACTIONS`).
- `STATE_UPDATE { tokens, focusedId, ringAnchor }` уходит игрокам при любом изменении. `REQUEST_STATE` повторно его же присылает.
- `transfer.js`: `EXPORT_VERSION = 1`, `MIGRATIONS = {}`, `LIBRARIES` — список видов, у которых бывают конфликты имён. В `ConflictDialog` словарь `KIND` уже подготовлен под новые виды.
- `spawnPositions(sizes, tokens, center)` (`constants.js:73`) ищет свободные места вокруг точки. Используется и для «лишних» PC.
- Тестов нет. Проверка — `npm run build` и вручную.

## Модель данных

```js
// constants.js
makeMap(over) → { id: null, name: '', background: null, walls: [], rooms: [], props: [], ...over }
// background: { url, pxPerMeter, offset: { x, y } }   offset — где левый верхний угол картинки, в метрах

makeEncounter(over) → { id: null, name: '', mapId: null, adversaries: [], placements: [], spawnPoints: [], ...over }
// placement: { ref: { lib: id } | { local: id }, label: string | null, x: number | null, y: number | null, size: number | null }
//   label null → имя считается при деплое ("Goblin 1", "Goblin 2"…); x/y null → место выбирается при деплое
//   size null → size монстра
// spawnPoints: [{ x, y }] — порядок важен
```

`walls/rooms/props` пустые, их заполнит фаза 4. Хранить их уже сейчас нужно, чтобы не мигрировать карты ещё раз.

Состояние доски (не карта, карта переиспользуется) — плоские поля state: `tokens`, `sceneMapId: null`, `spawnPoints: []`. Снимок undo становится объектом `{ tokens, sceneMapId, spawnPoints }` (хелпер `boardOf(state)`). `UNDO`/`REDO` разворачивают его в state. `state.maps: []` — список карт.

Хелперы в `constants.js`, они заменяют работу с `entries`:
- `placementAdversary(enc, p, library)` — `ref.local` ищется в `enc.adversaries`, `ref.lib` в библиотеке. `findEncounterAdversary` удалить, когда не останется вызовов (сейчас его использует ещё `transfer.js`).
- `encounterGroups(enc)` → `[{ ref, count, placed }]` — группировка по `ref` для карточки, редактора и `tierSummary`.
- `refId(ref)` = `ref.local ?? ref.lib`. ID глобально уникальны, так что ключ группы однозначен.
- `placementsFromEntries(enc)` — миграция ростера: каждая `entry` превращается в `count` позиций `{ ref, label: null, x: null, y: null, size: null }`. `ref` — `local`, если id есть в `enc.adversaries`, иначе `lib`. Функция используется и в `storage.js`, и в `MIGRATIONS[1]`.

## Шаги

### 1. Миграция хранилища — `src/storage.js`
- В `loadState` идемпотентно: каждый энкаунтер с `entries` и без `placements` пропускается через `placementsFromEntries`, затем `entries` удаляется, добавляются `mapId: null`, `spawnPoints: []`. `SCHEMA_VERSION` **не** поднимаем: токены уже в метрах, доску чистить незачем.
- В `initial` (`App.jsx`) добавить `maps: []`, `sceneMapId: null`, `spawnPoints: []`. Слияние `{ ...fallback, ...parsed }` даст значения по умолчанию старым данным.

### 2. Reducer — `src/App.jsx`
- `BOARD_ACTIONS` + снимок `boardOf(state)` вместо `state.tokens`.
- Карты: `ADD_MAP`, `EDIT_MAP`, `REMOVE_MAP`. Удаление сбрасывает `mapId` у энкаунтеров и `sceneMapId`, если они указывали на эту карту.
- Доска (все в `BOARD_ACTIONS`): `SET_SCENE_MAP { mapId }` (токены остаются), `ADD_SPAWN { x, y }`, `REMOVE_SPAWN { index }`, `MOVE_SPAWN { index, x, y }` (перетаскивание, снимок через `BOARD_SNAPSHOT`, как у токенов). Отдельно `DEPLOY_SCENE { mapId, spawnPoints, keep: [token], add: [spec] }`: `keep` — перенесённые PC-токены со старым id и новыми x/y, `add` получают id из `nextId`. `CLEAR` чистит и `spawnPoints`, карту оставляет.
- Энкаунтеры: `SAVE_BOARD_TO_ENCOUNTER { encounter }` — готовая запись из `scene.js`. Без id → добавить с новым id. С id → заменить `mapId/placements/spawnPoints/adversaries`, имя оставить. Локальные монстры приходят из `scene.js` с временными отрицательными id. Reducer выдаёт им настоящие из `nextId` и переписывает соответствующие `ref.local`, чтобы id оставались глобально уникальными.
- `REMOVE_ADVERSARY`: фильтровать `placements` по `ref.lib`, а не `entries`.

### 3. Логика сцен — `src/scene.js` (новый, чистые функции)
- `encounterFromBoard(state, { name, existing, pcSpawns })` → энкаунтер.
  - Токены `refKind: 'adversary'` становятся `placements` с `label = tok.name`, `x/y`, `size = tok.size`. Если `refId` найден в библиотеке → `{ lib }`. Иначе монстр ищется в `enc.adversaries` всех энкаунтеров (как `findAdversary` в `App.jsx:377`), копируется в новый `adversaries`, ref → `{ local }`.
  - `refKind: 'custom'` NPC пропускаются. Их число возвращается для предупреждения.
  - `spawnPoints` = `state.spawnPoints`. Если их нет и задан `pcSpawns`, берутся позиции PC-токенов. `mapId = state.sceneMapId`.
- `isScene(enc)` = есть `mapId`, позиции или `spawnPoints`. Это и определяет, «замена доски» будет при деплое или «добавить поверх».
- `planDeploy(enc, { library, characters, pcIds, tokens, center })` → `{ keep, add, spawnPoints, mapId }`:
  - Противники: `label ?? автоимя` (нумерация внутри одного `ref`, как сейчас `${name} ${i + 1}`), `tokenStatsFromAdversary(adv)` + `size`. С позицией — ставятся на неё. Без позиции — `spawnPositions` вокруг `center`. `center` = центр фона карты, если он известен, иначе центр видимой области.
  - PC в порядке `pcIds`: i-й встаёт на `spawnPoints[i]`. Лишние PC — `spawnPositions` вокруг последней точки (без точек — вокруг `center`), с учётом уже занятых мест. PC, у которого был токен на доске, попадает в `keep` с теми же статами, остальные создаются через `tokenStatsFromCharacter`.

### 4. Deploy — `src/App.jsx` + `src/components/DeployDialog.jsx` (новый)
- `handleDeployEncounter(enc)`: если `!isScene(enc)` — прежнее поведение (добавить поверх доски, на `placements`). Иначе открыть `DeployDialog`.
- `DeployDialog` («Кто из PC на сессии?»): чекбоксы персонажей с порядком (стрелки ↑↓ или порядок отметки). По умолчанию отмечены те, кто уже стоит на доске, а если там никого — все. Подпись: «Карта: X · противников N · точек спауна M. Текущая доска будет заменена (Ctrl+Z — отменить)». Кнопки Deploy / Cancel. Диалог одновременно подтверждает замену доски.
- По подтверждению: `planDeploy` → `dispatch DEPLOY_SCENE` → `setView('map')` → вписать сцену в экран (см. шаг 6) → toast с Undo.

### 5. Вкладка Maps — `src/components/MapLibrary.jsx`, `src/components/MapEditor.jsx` (новые)
- `MapLibrary` построен по образцу `EncounterBuilder` (`LibraryHeader`, `card-grid`, `entity-card`). На карточке: имя, миниатюра фона (`<img>` с `onError` → «no image»), размер в метрах (если картинка загружена), «используется в N энкаунтерах». Кнопки: **Open on board** (`SET_SCENE_MAP`, переход на карту), Edit, Export, Delete (через `confirm`, текст упоминает энкаунтеры, которые на неё ссылаются).
- Вкладка `['maps', 'Maps']` в `TABS` (`App.jsx:416`), после Encounters.
- `MapEditor` (`Dialog wide`):
  - Поля: Name, Background URL. Подсказка из `PLAN.md`: ссылка должна вести прямо на картинку, ссылки «поделиться» Drive/Dropbox не подойдут.
  - Превью: `<svg viewBox="0 0 naturalW naturalH">` с `<image>` и сеткой 1.5 м поверх (`pxPerMeter`, `offset`), в контейнере с прокруткой и зумом (кнопки ±). Координаты клика → пиксели картинки через `getScreenCTM().inverse()`.
  - Калибровка: (a) «Две точки»: два клика → линия → поле «расстояние, м» (по умолчанию 1.5) → `pxPerMeter = dPx / m`. (b) Числовое поле «px на клетку 1.5 м» ↔ `pxPerMeter * 1.5`, синхронно с (a).
  - Смещение: числовые X/Y в метрах и кнопка «Кликнуть на угол клетки». Она подбирает offset так, чтобы этот угол попал на линию сетки мира: `offset = -(p / ppm) mod 1.5`.
  - Ошибка загрузки → `data-error` «Картинка не загрузилась… карта будет работать без фона». Сохранение не блокируется.
- Хук `useImage(url)` → `{ status: 'loading' | 'ok' | 'error', w, h }` (`new Image()`, без canvas, поэтому CORS не мешает) в `src/useImage.js`. Его используют `MapEditor`, `MapLibrary` (размер) и `Graph`.

### 6. Доска — `src/components/Graph.jsx`
- Новые props: `map` (сцена или null), `spawnPoints`, `spawnMode`, `onAddSpawn`, `onRemoveSpawn`, `onMoveSpawn`, `fitKey`.
- Фон: `useImage(map?.background?.url)`. При `ok` — `<image>` первым слоем, `x = toPx(offset.x)`, `width = toPx(w / pxPerMeter)`, `preserveAspectRatio="none"`, `pointerEvents: none`. Сетка (`Graph.jsx:334`) рисуется только без загруженного фона.
- При `error` у GM — плашка поверх доски: «Фон карты не загрузился: <url>. Карта работает без него». У игрока — ничего.
- `fitAll` учитывает границы фона, когда токенов нет (и вместе с ними). Изменение `fitKey` (новая сцена) → `fitAll` в `requestAnimationFrame`. У игрока это срабатывает и при приходе новой карты, по аналогии с `fittedRef`.
- Точки спауна (только GM): кружки с номером 1..N, пунктир. В `spawnMode` клик по пустому месту → `onAddSpawn`, клик по точке → `onRemoveSpawn`, перетаскивание точки → `onMoveSpawn`. Вне режима точки видны бледно и не интерактивны. Реализуется новым `gesture.kind: 'spawn'` в существующем `beginPointer` / `onMove` / `onUp`, отдельных обработчиков не нужно.
- Подсказки (`hint`) в `spawnMode` показывают инструкцию для точек.

### 7. Toolbar на карте — `src/App.jsx` + `src/components/SaveBoardDialog.jsx` (новый)
- Слева от `+ PC`: селект **Map: [None / список карт]** → `SET_SCENE_MAP`. Кнопка **Spawn points** (toggle `spawnMode`, `aria-pressed`, Esc выходит). Кнопка **Save to encounter**.
- `SaveBoardDialog`: радио «Новый энкаунтер [имя, по умолчанию имя карты]» / «Перезаписать [select]». Сводка: карта, N противников, M точек. Предупреждение «K своих NPC не сохраняются (нет статблока)». Если точек нет, а на доске есть PC — чекбокс «Использовать позиции PC как точки спауна» (включён). Save → `encounterFromBoard` → `SAVE_BOARD_TO_ENCOUNTER` → toast.

### 8. Энкаунтеры — `src/components/EncounterBuilder.jsx`, `BattleSidePanel.jsx`
- `tierSummary`, `summary`, строка состава и `nameOf` переходят на `encounterGroups` + `placementAdversary`.
- Редактор: строки — группы по `ref`. `+` добавляет позицию без координат. `−` удаляет сначала позицию без координат, иначе последнюю. ✕ удаляет группу. Рядом с количеством pill «N on map», если у части есть координаты. Селект **Map** (None / карты). Только для чтения: «Spawn points: M» с подсказкой «задаются на доске → Save to encounter». Очистка неиспользуемых `adversaries` при сохранении остаётся, но по `placements`.
- На карточке — имя карты, если она есть. Кнопка Deploy недоступна при пустых `placements`.
- `BattleSidePanel` → `AddUnits`: `disabled={!enc.placements.length}`. `tierSummary` уже обновлён.

### 9. Экран игроков — `src/App.jsx`
- `sceneMap = state.maps.find(m => m.id === state.sceneMapId) ?? null`.
- GM: `useEffect` по `[sceneMap]` → `postMessage({ type: 'SCENE_UPDATE', map: sceneMap })`. Это происходит при смене сцены и при правке текущей карты в `MapEditor`. На `REQUEST_STATE` отвечать двумя сообщениями: `SCENE_UPDATE`, затем `STATE_UPDATE`. В `latestRef` добавить `sceneMap`. `STATE_UPDATE` не меняется, точки спауна игрокам не уходят.
- Игрок: локальный `useState` `scene`, обработчик `SCENE_UPDATE` → `setScene(map)` и инкремент `fitKey`. `Graph` получает `map={isGM ? sceneMap : scene}`.

### 10. Экспорт / импорт — `src/transfer.js`, `DataModal.jsx`, `ConflictDialog.jsx`
- `EXPORT_VERSION = 2`. `MIGRATIONS[1]`: энкаунтеры → `placementsFromEntries`, `mapId: null`, `spawnPoints: []`.
- `buildBackup`: + `maps: state.maps`. Энкаунтеры ссылаются на `mapId` и `ref.lib` из того же файла.
- `buildSelection(state, { …, mapIds })`: выбранные карты + карты выбранных энкаунтеров (без дублей) в `maps`. `selfContained` копирует всех используемых монстров в `adversaries` и переводит `ref.lib` → `ref.local`.
- `normalize`: `maps` через `withIds(…, makeMap)` (+ проверка, что `background.url` — строка, `pxPerMeter > 0`, иначе фон `null`). У энкаунтеров `placements` нормализуются (числа или null; `ref` с `lib` или `local`, иначе запись отбрасывается), так же `spawnPoints`.
- `LIBRARIES` += `{ kind: 'map', fileKey: 'maps', stateKey: 'maps', make: makeMap }`. Конфликты, «совпадает по содержимому» и `replace/rename/skip` работают без изменений.
- `applyImport`: `summary.added.map`. У энкаунтера `mapId` → `idMaps.map.get(...) ?? null`, `placements[].ref.local` → `localIds`, `ref.lib` → `idMaps.adversary`; неразрешённые отбрасываются. Неиспользуемые локальные монстры фильтруются по `placements`.
- `DataModal`: `PickGroup` «Maps», карты в `summaryText` и `takenNames`, текст подсказки бэкапа. Подсказка про энкаунтеры: «…с копиями монстров и своей картой».
- `ConflictDialog.KIND.map`: `library: 'map list'`, `line: m => m.background ? \`${(m.background.pxPerMeter * 1.5).toFixed(0)} px / cell\` : 'no background'`.

### 11. Стили — `src/App.css`
Превью калибровки (прокрутка, курсор crosshair), точки спауна, плашка «фон не загрузился», миниатюра карты в карточке, селект карты в toolbar (на узком экране — сокращение). Всё по образцу существующих классов (`panel`, `entity-card`, `data-error`).

### 12. Документация
- `PHASE3.md` — этот план (первый шаг).
- `PLAN.md`: отметить пункты фазы 3. Добавить в целевую модель `Encounter` уточнения `label/x/y/size` могут быть `null`. Добавить поля доски `sceneMapId/spawnPoints`. Фразу «Карты… — когда появятся (фазы 3–4)» в фазе 2 поправить на «карты — в фазе 3».

## Вне фазы 3
- Редактирование позиций прямо в `EncounterEditor` (только через доску → Save to encounter).
- Перетаскивание фона мышью на доске (смещение задаётся в диалоге).
- Режимы Edit/Play, стены, пропсы — фаза 4.

## Затронутые файлы
Новые: `src/scene.js`, `src/useImage.js`, `src/components/MapLibrary.jsx`, `src/components/MapEditor.jsx`, `src/components/DeployDialog.jsx`, `src/components/SaveBoardDialog.jsx`, `PHASE3.md`.
Изменяются: `src/App.jsx`, `src/constants.js`, `src/storage.js`, `src/transfer.js`, `src/components/Graph.jsx`, `src/components/EncounterBuilder.jsx`, `src/components/BattleSidePanel.jsx`, `src/components/DataModal.jsx`, `src/components/ConflictDialog.jsx`, `src/App.css`, `PLAN.md`.

## Проверка
- `npm run build` проходит.
- `npm run dev`, вручную:
  - **Миграция**: с `localStorage` фазы 2 (энкаунтеры с `entries`) энкаунтеры открываются в редакторе с теми же количествами, Deploy добавляет их поверх доски как раньше, токены на доске сохранились.
  - **Карта**: создать карту с URL прямой картинки → калибровка двумя точками (клетка картинки совпадает с сеткой превью) → «px на клетку» показывает то же значение → Open on board: токен 1.5 м равен клетке картинки, сетки доски нет. Сломанный URL → предупреждение в диалоге и на доске, доска работает.
  - **Сохранение сцены**: карта на доске, 3 монстра (один из импортированного энкаунтера, local), 1 custom NPC, 2 точки спауна → Save to encounter (новый) → предупреждение про custom NPC; в Encounters карточка с картой и «2 spawn points».
  - **Deploy**: на доске 2 PC с отмеченным HP → Deploy сцены → в диалоге отмечены эти PC, добавить третьего → доска заменена, монстры на своих позициях, PC 1–2 на точках с прежним HP, третий рядом с точкой 2. Ctrl+Z возвращает прежнюю доску вместе с картой и точками.
  - **Игроки**: `?role=player` во второй вкладке видит фон и токены, но не точки спауна. Смена карты в селекте → у игрока новая карта и вписывание в экран. Перезагрузка вкладки игрока → карта приходит через `REQUEST_STATE`.
  - **Экспорт/импорт**: экспорт энкаунтера с карточки → удалить карту и одного монстра → импорт: карта вернулась в список, энкаунтер ссылается на неё, монстр — local. Повторный импорт того же файла → карта «already up to date». Изменить калибровку и импортировать снова → диалог конфликта для карты (Replace / Rename / Skip). Файл версии 1 из фазы 2 импортируется с миграцией.
  - Удалить карту, используемую энкаунтером и доской → энкаунтер без карты, доска без фона, без ошибок.
