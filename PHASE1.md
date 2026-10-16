# Фаза 1 — Масштаб и UI: план реализации

Задачи из `PLAN.md`:
1. Мировые координаты в метрах, `PX_PER_M` только для отрисовки; доску при миграции очистить.
2. Кольца: Melee 1.5 м, Very Close 4.5 м, Close 9 м, Far 18 м; Very Far — подпись «> 18 м» без кольца.
3. Подписи колец и легенды в метрах вместо прозовых диапазонов SRD.
4. Токен диаметром 1.5 м; поле `size` (множитель) у токена и у монстра в библиотеке.

## Что сейчас

- Координаты токенов (`tok.x/y`) и `ringAnchor` — пиксели SVG при zoom = 1. Вся геометрия в `src/components/Graph.jsx`.
- `src/constants.js`: `RING_RADII` (55/120/230/420/700 px), `TOKEN_R = 26` px, `DIST_LABEL` с футами SRD.
- `src/App.jsx`: `spawnXY()` генерирует пиксели из размера окна; reducer хранит `tokens` в state, который целиком уходит в `localStorage` (`src/storage.js`, ключ `daggerheart-tracker-v1`).
- Экран игроков получает токены через `STATE_UPDATE` и рисует тем же `Graph` — отдельной логики не нужно.

## Ключевое решение: где жить метрам

Мир хранится в метрах, viewBox SVG остаётся в пикселях. Перевод только в `Graph.jsx`:

```js
// constants.js
export const PX_PER_M = 35;          // 1.5 м → 52.5 px ≈ текущий TOKEN_R*2, зум 100% выглядит как сейчас
export const toPx = m => m * PX_PER_M;
```

Почему не `<g transform="scale(PX_PER_M)">` и не viewBox в метрах: тогда толщины линий, шрифты, `strokeDasharray`, кнопка удаления и все пороги придётся пересчитывать в метры. При переводе через `toPx` они остаются в пикселях как есть, а `ZOOM_MIN/MAX` и логику панорамирования трогать не нужно.

При `PX_PER_M = 35` Far 18 м = 630 px (сейчас Far 420, Very Far 700), то есть масштаб на экране почти не изменится.

## Шаги

### 1. `src/constants.js`
- Добавить `PX_PER_M`, `toPx`.
- Удалить `RING_RADII`, добавить `DIST_METERS`:
  ```js
  export const DIST_METERS = { 'Melee': 1.5, 'Very Close': 4.5, 'Close': 9, 'Far': 18 };
  // 'Very Far' нет: кольцо не рисуется
  ```
- `DIST_LABEL` → `'Melee 1.5 m'`, `'Very Close 4.5 m'`, `'Close 9 m'`, `'Far 18 m'`, `'Very Far > 18 m'`.
  Цифры формировать из `DIST_METERS`, чтобы не держать их в двух местах.
- Удалить `TOKEN_R`, добавить `TOKEN_DIAMETER_M = 1.5` и хелпер `tokenRadiusM(tok) = 0.75 * (tok.size ?? 1)`.
- `makeAdversary`: добавить `size: 1`.
- `tokenStatsFromAdversary`: копировать `size: a.size ?? 1`. `tokenStatsFromCharacter`: `size: 1`.

### 2. `src/components/Graph.jsx`
- **Кольца**: итерировать `DISTANCES.filter(d => DIST_METERS[d] != null)`, радиус `toPx(ringRadiusM(d))` (см. открытый вопрос про размер). Заливку Very Far убрать вместе с кольцом. Позиция подписи `toPx(anchor.x + r) + 8`.
- **«Живые» кольца** при `hasMoved` — те же радиусы.
- **`hasMoved`**: порог `> 1` px → `> 0.03` м (≈ 1 px при zoom 1).
- **Токены**: `cx = toPx(tok.x)`, `r = toPx(tokenRadiusM(tok))`. Всё, что сейчас считается от `TOKEN_R` (обводка фокуса `+7`, тень, подпись имени `+13`, кнопка × `delX/delY`, призрак на якоре), считать от этого `r` в пикселях. Шрифт инициалов масштабировать с `r` (`Math.max(13, r * 0.5)`), чтобы большой токен не выглядел пустым.
- **Перетаскивание** (`startDrag`, `startTouchDrag`): `onMoveToken(id, tx0 + dsx / z / PX_PER_M, ...)`. Пороги «сдвинулся/клик» (9 и 25 px²) остаются в экранных пикселях.
- **Легенда**: уже идёт по `DISTANCES` + `DIST_LABEL`, поменяется сама. Very Far в легенде остаётся (это зона, просто без кольца).

### 3. `src/App.jsx`
- `spawnXY()` → метры: то же выражение, делённое на `PX_PER_M` (токены появляются в видимой области при стартовом виде).
- `ADD_TOKEN` / `ADD_PC`: класть `size` (из `stats`, иначе 1).
- `CLEAR`, `MOVE_TOKEN` не меняются: в reducer уже лежат метры.
- `ringAnchor` и так берётся из `tok.x/y`, поэтому сам становится метрами.

### 4. Миграция — `src/storage.js` + `App.jsx`
- Добавить в `initial` поле `schemaVersion: 2`.
- В `loadState`: если `parsed.schemaVersion !== fallback.schemaVersion` (у старых данных его нет), то `merged.tokens = []` и `merged.schemaVersion = fallback.schemaVersion`. Библиотеки, энкаунтеры, `nextId` и `seedVersion` не трогать.
- `size` у существующих монстров не дописывать: везде читается `a.size ?? 1`. SRD-сид тоже идёт без `size` и работает так же.
- Ключ `localStorage` не менять: по нему лежат библиотеки пользователя.

### 5. Размер в UI
- `AdversaryLibrary.jsx` → `FIELDS`: `{ key: 'size', label: 'Size', type: 'number', step: 0.5 }`. На карточке показывать pill `Size ×2`, только если `size !== 1`.
- `EntityForm.jsx`: прокинуть `step={f.step}` в `<input type="number">` (иначе браузер помечает 0.5 как невалидное значение) и при сохранении подставлять `size` ≤ 0 или пустой → 1. Сейчас пустое число становится 0, а для размера это даст невидимый токен.
- `BattleSidePanel.jsx` → `SelectedUnit`: ряд кнопок `½ · 1 · 2 · 3` (или `StatStepper` с шагом 0.5) → `onUpdateStats(id, { size })`. Это закрывает пункт «`size` у токена»: размер меняется на доске у конкретного токена, библиотека не меняется. Для PC и custom-токенов тоже работает.

### 6. Проверка (тестов в проекте нет, только `vite build`)
- `npm run build` проходит.
- `npm run dev`, затем вручную:
  - С заполненным `localStorage` старой версии: доска пустая, монстры/персонажи/энкаунтеры на месте.
  - Добавить PC и монстра: диаметр токена визуально равен радиусу кольца Melee, кольца 1.5/4.5/9/18 м, подписи и легенда в метрах, у Very Far нет кольца.
  - Перетаскивание, зум колёсиком и кнопками, подтверждение позиции (призрак и пунктир) работают как раньше.
  - Монстр с `size: 2` из библиотеки ставится вдвое больше, размер меняется в боковой панели.
  - `?role=player` во второй вкладке: токены, размеры и кольца совпадают с экраном GM.

## Решено: кольца у больших токенов — от края

Если радиусы колец считать от центра, у токена `size: 2` (радиус 1.5 м) кольцо Melee (1.5 м) совпадёт с краем токена, и «вплотную» к нему не встанет никто.

**Рекомендация:** считать дистанцию от края токена, приняв цель стандартного размера:
`ringRadiusM(d, tok) = DIST_METERS[d] + (tokenRadiusM(tok) - 0.75)`.
Для `size: 1` ничего не меняется, для больших токенов кольца раздвигаются на разницу радиусов. Подписи остаются «Melee 1.5 m» и т.д. Если нужен вариант «от центра», это одна строка в `ringRadiusM`.

## Затронутые файлы

`src/constants.js`, `src/components/Graph.jsx`, `src/App.jsx`, `src/storage.js`, `src/components/AdversaryLibrary.jsx`, `src/components/EntityForm.jsx`, `src/components/BattleSidePanel.jsx`.
