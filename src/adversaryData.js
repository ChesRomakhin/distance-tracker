// Auto-generated from the Daggerheart SRD 2.0 (DH_SRD_2_2026_08_25.pdf) adversary stat blocks.
// Do not edit by hand; regenerate from the SRD if needed.

export const SRD_ADVERSARIES = [
  {
    "name": "Acid Burrower",
    "tier": 1,
    "type": "Solo",
    "description": "A horse-sized insect with digging claws and acidic blood.",
    "motives": "Burrow, drag away, feed, reposition",
    "difficulty": 14,
    "thresholds": {
      "major": 8,
      "severe": 15
    },
    "hpMax": 8,
    "stressMax": 3,
    "atk": "+3",
    "attack": {
      "name": "Claws",
      "range": "Very Close",
      "damage": "1d12+2 phy"
    },
    "experience": "Tremor Sense +2",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Burrower can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Earth Eruption",
        "type": "Action",
        "text": "Mark a Stress to have the Burrower burst out of the ground. All creatures within Very Close range must succeed on an Agility Reaction Roll or be knocked over, making them Vulnerable until they next act."
      },
      {
        "name": "Spit Acid",
        "type": "Action",
        "text": "Make an attack against all targets in front of the Burrower within Close range. Targets the Burrower succeeds against take 2d6 physical damage and must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can't mark an Armor Slot, they must mark an additional HP and you gain a Fear."
      },
      {
        "name": "Acid Bath",
        "type": "Reaction",
        "text": "When the Burrower takes Severe damage, all creatures within Close range are bathed in their acidic blood, taking 1d10 physical damage. This splash covers the ground within Very Close range with blood, and all creatures other than the Burrower who move through it take 1d6 physical damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Ahuizotl",
    "tier": 1,
    "type": "Skulk",
    "description": "A doglike ambush predator that has a clawed hand on the end of a long prehensile tail and drags victims into rivers to drown them.",
    "motives": "Ambush, drown, restrain",
    "difficulty": 12,
    "thresholds": {
      "major": 5,
      "severe": 9
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Bite",
      "range": "Melee",
      "damage": "1d6+2 phy"
    },
    "experience": "Stealth +2, Swimming +2",
    "features": [
      {
        "name": "Aquatic Attacker",
        "type": "Passive",
        "text": "When the Ahuizotl attacks from the water, it has advantage on the attack and deals an extra 1d6 damage."
      },
      {
        "name": "Tail Swat",
        "type": "Action",
        "text": "Mark a Stress to make an attack against a target within Very Close range. On a success, deal 1d8+2 physical damage."
      },
      {
        "name": "Drag and Bag",
        "type": "Action",
        "text": "Spend a Fear to have the Ahuizotl grab a target within Close range with its tail, pull the target into Melee range, and temporarily Restrain them. The Ahuizotl has advantage on attacks against targets Restrained in this way."
      }
    ],
    "notes": ""
  },
  {
    "name": "Atototl",
    "tier": 1,
    "type": "Standard",
    "description": "A majestic green water bird that has a ten-foot wingspan and is hunted for the fortune-telling stone inside their stomach.",
    "motives": "Avoid, escape, misdirect",
    "difficulty": 12,
    "thresholds": {
      "major": 8,
      "severe": 12
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Talons",
      "range": "Melee",
      "damage": "1d8+1 phy"
    },
    "experience": "Flight +3, Jungles +3",
    "features": [
      {
        "name": "Wind Lord",
        "type": "Passive",
        "text": "While the Atototl is flying, attacks against it is made with disadvantage."
      },
      {
        "name": "Stone of Omens",
        "type": "Passive",
        "text": "Inside the Atototl is a stone that foretells good or ill fortune, depending on its color. A PC who searches the Atototl's remains finds the stone and makes a fate roll. On an even result, the PC gains Hope equal to half the result, which they can distribute among the PCs however they wish. On an odd result, you gain Fear equal to half the result."
      },
      {
        "name": "Archer's Bane",
        "type": "Reaction",
        "text": "When a creature beyond Very Close range would deal damage to the Atototl with a weapon attack, you can spend a Fear to make an attack roll against them. On a success, whirling winds reflect the attack and deal the attacker's damage back to them."
      }
    ],
    "notes": ""
  },
  {
    "name": "Bear",
    "tier": 1,
    "type": "Bruiser",
    "description": "A large bear with thick fur and powerful claws.",
    "motives": "Climb, defend territory, pummel, track",
    "difficulty": 14,
    "thresholds": {
      "major": 9,
      "severe": 17
    },
    "hpMax": 7,
    "stressMax": 2,
    "atk": "+1",
    "attack": {
      "name": "Claws",
      "range": "Melee",
      "damage": "1d8+3 phy"
    },
    "experience": "Ambusher +3, Keen Senses +2",
    "features": [
      {
        "name": "Overwhelming Force",
        "type": "Passive",
        "text": "Targets who mark HP from the Bear's standard attack are knocked back to Very Close range."
      },
      {
        "name": "Bite",
        "type": "Action",
        "text": "Mark a Stress to make an attack against a target within Melee range. On a success, deal 3d4+10 physical damage and the target is Restrained until they break free with a successful Strength Roll."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Bear makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Bugboar",
    "tier": 1,
    "type": "Bruiser",
    "description": "A large bipedal creature that has a tusked snout and coarse fur.",
    "motives": "Ambush, bully, seek carnage and shiny things",
    "difficulty": 13,
    "thresholds": {
      "major": 8,
      "severe": 15
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Spiked Mace",
      "range": "Very Close",
      "damage": "1d8+6 phy"
    },
    "experience": "Traps +3",
    "features": [
      {
        "name": "Surprise!",
        "type": "Passive",
        "text": "If the Bugboar makes its first attack in a scene before it's marked HP or Stress, it has advantage on the attack and deals an extra 1d8 damage."
      },
      {
        "name": "Brutal",
        "type": "Reaction",
        "text": "When the Bugboar makes a successful standard attack, you can mark a Stress to deal an extra 1d6 damage."
      },
      {
        "name": "Warheart",
        "type": "Reaction",
        "text": "When a condition would be imposed on the Bugboar, you can spend a Fear to negate it."
      }
    ],
    "notes": ""
  },
  {
    "name": "Cave Ogre",
    "tier": 1,
    "type": "Solo",
    "description": "A massive humanoid who sees all sapient life as food.",
    "motives": "Bite off heads, feast, rip limbs, stomp, throw enemies",
    "difficulty": 13,
    "thresholds": {
      "major": 8,
      "severe": 15
    },
    "hpMax": 8,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Club",
      "range": "Very Close",
      "damage": "1d10+2 phy"
    },
    "experience": "Throw +2",
    "features": [
      {
        "name": "Ramp Up",
        "type": "Passive",
        "text": "You must spend a Fear to spotlight the Ogre. While spotlighted, they can make their standard attack against all targets within range."
      },
      {
        "name": "Bone Breaker",
        "type": "Passive",
        "text": "The Ogre's attacks deal direct damage."
      },
      {
        "name": "Hail of Boulders",
        "type": "Action",
        "text": "Mark a Stress to pick up heavy objects and throw them at all targets in front of the Ogre within Far range. Make an attack against these targets. Targets the Ogre succeeds against take 1d10+2 physical damage. If they succeed against more than one target, you gain a Fear."
      },
      {
        "name": "Rampaging Fury",
        "type": "Reaction",
        "text": "When the Ogre marks 2 or more HP, they can rampage. Move the Ogre to a point within Close range and deal 2d6+3 direct physical damage to all targets in their path."
      }
    ],
    "notes": ""
  },
  {
    "name": "Common Ruffian",
    "tier": 1,
    "type": "Standard",
    "description": "A local laborer or artisan pushed by circumstances to assail others.",
    "motives": "Do violence, seek security and survival",
    "difficulty": 12,
    "thresholds": {
      "major": 6,
      "severe": 10
    },
    "hpMax": 4,
    "stressMax": 4,
    "atk": "+0",
    "attack": {
      "name": "Improvised Weapon",
      "range": "Melee",
      "damage": "1d8 phy"
    },
    "experience": "Desperate +3",
    "features": [
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Ruffians within Close range of them. The Ruffians move into Melee range of the target and make one shared attack roll. On a success, they deal 1d8 physical damage each. Combine this damage."
      },
      {
        "name": "Survival Instinct",
        "type": "Reaction",
        "text": "When the Ruffian marks half their HP, roll a d6. On a result of 4 or higher, the Ruffian flees the scene. Otherwise, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Construct",
    "tier": 1,
    "type": "Solo",
    "description": "A roughly humanoid being of stone and steel, assembled and animated by magic.",
    "motives": "Destroy environment, serve creator, smash target, trample groups",
    "difficulty": 13,
    "thresholds": {
      "major": 7,
      "severe": 15
    },
    "hpMax": 9,
    "stressMax": 4,
    "atk": "+4",
    "attack": {
      "name": "Fist Slam",
      "range": "Melee",
      "damage": "1d20 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Relentless (2)",
        "type": "Passive",
        "text": "The Construct can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Weak Structure",
        "type": "Passive",
        "text": "When the Construct marks HP from physical damage, they must mark an additional HP."
      },
      {
        "name": "Trample",
        "type": "Action",
        "text": "Mark a Stress to make an attack against all targets in the Construct's path when they move. Targets the Construct succeeds against take 1d8 physical damage."
      },
      {
        "name": "Overload",
        "type": "Reaction",
        "text": "Before rolling damage for the Construct's attack, you can mark a Stress to gain a +10 bonus to the damage roll. The Construct can then take the spotlight again."
      },
      {
        "name": "Death Quake",
        "type": "Reaction",
        "text": "When the Construct marks their last HP, the magic powering them ruptures in an explosion of force. Make an attack with advantage against all targets within Very Close range. Targets the Construct succeeds against take 1d12+2 magic damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Courtier",
    "tier": 1,
    "type": "Social",
    "description": "An ambitious and ostentatiously dressed socialite.",
    "motives": "Discredit, gain favor, maneuver, scheme",
    "difficulty": 12,
    "thresholds": {
      "major": 4,
      "severe": 8
    },
    "hpMax": 3,
    "stressMax": 4,
    "atk": "-4",
    "attack": {
      "name": "Daggers",
      "range": "Melee",
      "damage": "1d4+2 phy"
    },
    "experience": "Socialite +3",
    "features": [
      {
        "name": "Mockery",
        "type": "Action",
        "text": "Mark a Stress to say something mocking and force a target within Close range to make a Presence Reaction Roll (14) to see if they can save face. On a failure, the target must mark 2 Stress and is Vulnerable until the scene ends."
      },
      {
        "name": "Scapegoat",
        "type": "Action",
        "text": "Spend a Fear and target a PC. The Courtier convinces a crowd or prominent individual that the target is the cause of their current conflict or misfortune."
      }
    ],
    "notes": ""
  },
  {
    "name": "Darkweave Crawler",
    "tier": 1,
    "type": "Minion",
    "description": "A spider the size of a human head, woven out of shadow-silk.",
    "motives": "Hide in shadow, strike the unwary, wait for an opening",
    "difficulty": 10,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "-2",
    "attack": {
      "name": "Bite",
      "range": "Melee",
      "damage": "2 phy"
    },
    "experience": "Darkness +3",
    "features": [
      {
        "name": "Minion (3)",
        "type": "Passive",
        "text": "The Crawler is defeated when it takes any damage. For every 3 damage a PC deals to the Crawler, the PC defeats an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Skin-Crawling",
        "type": "Action",
        "text": "Spend a Fear to force all PCs within Melee range of the Crawler to mark a Stress."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Darkweave Crawlers within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage."
      },
      {
        "name": "Darkweave Venom",
        "type": "Reaction",
        "text": "When the Crawler makes a successful attack, you can mark a Stress to Exhaust the target until they succeed on a Strength Roll (9). While Exhausted, the target must mark a Stress each time they make an action roll."
      }
    ],
    "notes": ""
  },
  {
    "name": "Darkweave Queen",
    "tier": 1,
    "type": "Solo",
    "description": "A wagon-sized spider woven from shadow-silk by a long-forgotten god. Each of her many eyes bears the face of a different victim.",
    "motives": "Ambush prey, climb the walls and ceiling, misdirect, paralyze, stash bodies away for later, steal faces",
    "difficulty": 14,
    "thresholds": {
      "major": 8,
      "severe": 15
    },
    "hpMax": 9,
    "stressMax": 4,
    "atk": "+3",
    "attack": {
      "name": "Spider Bite",
      "range": "Very Close",
      "damage": "1d12+4 phy"
    },
    "experience": "Giant-Sized +3, Hunter +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Queen can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight her."
      },
      {
        "name": "Terrifying",
        "type": "Passive",
        "text": "When a PC fails an attack roll against the Queen, you gain a Fear."
      },
      {
        "name": "Den Mother",
        "type": "Action",
        "text": "Once per scene, spend 2 Fear to summon up to two Darkweave adversaries (other than Darkweave Queens), who appear within Close range and immediately take the spotlight."
      },
      {
        "name": "Quicker Than She Looks",
        "type": "Action",
        "text": "Spend a Fear to move up to Far range and make a standard attack with advantage."
      },
      {
        "name": "Darkfang Envenomation",
        "type": "Reaction",
        "text": "When the Queen succeeds on a standard attack, you can spend a Fear to make the target Vulnerable and Restrained until they succeed on a Strength Roll (12) or take a rest."
      }
    ],
    "notes": ""
  },
  {
    "name": "Darkweave Spinner",
    "tier": 1,
    "type": "Standard",
    "description": "A boar-sized arachnid woven from primordial shadow-silk.",
    "motives": "Bite, stick to the darkness",
    "difficulty": 12,
    "thresholds": {
      "major": 6,
      "severe": 9
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Fangs",
      "range": "Melee",
      "damage": "1d8+1 phy"
    },
    "experience": "Holes +2, Webs +2",
    "features": [
      {
        "name": "Wrap in Shadow-Silk",
        "type": "Action",
        "text": "Mark a Stress to make an attack against a target within Melee range. On a success, the target is Vulnerable and Restrained until they succeed on a Strength Roll (10)."
      },
      {
        "name": "Shadow Fang",
        "type": "Reaction",
        "text": "When the Spinner makes a successful attack against a target within Melee range, you can spend a Fear to make the target Shaky until they succeed on an Instinct Roll (10). While Shaky, the target has disadvantage on attack rolls."
      }
    ],
    "notes": ""
  },
  {
    "name": "Darkweave Swarmlings",
    "tier": 1,
    "type": "Horde",
    "description": "A teeming swarm of tiny spiders woven out of shadow-silk.",
    "motives": "Burst out of holes, climb up legs, crawl into ears, scuttle under clothes",
    "difficulty": 9,
    "thresholds": {
      "major": 4,
      "severe": 8
    },
    "hpMax": 8,
    "stressMax": 4,
    "atk": "+0",
    "attack": {
      "name": "Nibble",
      "range": "Melee",
      "damage": "1d8 phy"
    },
    "experience": "Climb +2",
    "features": [
      {
        "name": "Horde (1d4)",
        "type": "Passive",
        "text": "When the Swarmlings have marked half or more of their HP, their standard attack deals 1d4 physical damage instead."
      },
      {
        "name": "\"Get 'em Off, Get 'em Off!\"",
        "type": "Reaction",
        "text": "When an attack from the Swarmlings causes a target to mark HP, you can mark a Stress to make the target temporarily Covered in Spiders. While Covered in Spiders, the target must roll a d6 when they make an action roll. On a result of 4 or higher, they must mark a Stress or you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Deeproot Defender",
    "tier": 1,
    "type": "Bruiser",
    "description": "A burly vegetable-person with grasping vines.",
    "motives": "Ambush, grab, protect, pummel",
    "difficulty": 10,
    "thresholds": {
      "major": 8,
      "severe": 14
    },
    "hpMax": 7,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Vines",
      "range": "Close",
      "damage": "1d8+3 phy"
    },
    "experience": "Huge +3",
    "features": [
      {
        "name": "Ground Slam",
        "type": "Action",
        "text": "Slam the ground, knocking all targets within Very Close range back to Far range. Each target knocked back this way must mark a Stress."
      },
      {
        "name": "Grab and Drag",
        "type": "Action",
        "text": "Make an attack against a target within Close range. On a success, spend a Fear to pull them into Melee range, deal 1d6+2 physical damage, and Restrain them until the Defender takes Severe damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Dire Wolf",
    "tier": 1,
    "type": "Skulk",
    "description": "A large wolf with menacing teeth, seldom encountered alone.",
    "motives": "Defend territory, harry, protect pack, surround, trail",
    "difficulty": 12,
    "thresholds": {
      "major": 5,
      "severe": 9
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Claws",
      "range": "Melee",
      "damage": "1d6+2 phy"
    },
    "experience": "Keen Senses +3",
    "features": [
      {
        "name": "Pack Tactics",
        "type": "Passive",
        "text": "If the Wolf makes a successful standard attack and another Dire Wolf is within Melee range of the target, deal 1d6+5 physical damage instead of their standard damage and you gain a Fear."
      },
      {
        "name": "Hobbling Strike",
        "type": "Action",
        "text": "Mark a Stress to make an attack against a target within Melee range. On a success, deal 3d4+10 direct physical damage and make them Vulnerable until they clear at least 1 HP."
      }
    ],
    "notes": ""
  },
  {
    "name": "Elk",
    "tier": 1,
    "type": "Skulk",
    "description": "A large deer.",
    "motives": "Bound away, graze, rut, sense danger",
    "difficulty": 13,
    "thresholds": {
      "major": 4,
      "severe": 8
    },
    "hpMax": 3,
    "stressMax": 2,
    "atk": "+0",
    "attack": {
      "name": "Antlers",
      "range": "Melee",
      "damage": "1d8+1 phy"
    },
    "experience": "Keen Senses +3, Run +3",
    "features": [
      {
        "name": "Headbutt",
        "type": "Passive",
        "text": "When the Elk moves from Close range or farther before making a standard attack, it deals 1d12+2 physical damage instead of its standard damage."
      },
      {
        "name": "Bolt",
        "type": "Reaction",
        "text": "When the Elk marks a HP or Stress, it must succeed on a Reaction Roll (10) or flee the scene."
      }
    ],
    "notes": ""
  },
  {
    "name": "Falcon",
    "tier": 1,
    "type": "Skulk",
    "description": "A bird of prey that has long, pointed wings and a notched beak.",
    "motives": "Circle, clutch, dive, spy",
    "difficulty": 12,
    "thresholds": {
      "major": 5,
      "severe": 8
    },
    "hpMax": 3,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Talons",
      "range": "Melee",
      "damage": "1d6+1 phy"
    },
    "experience": "Keen Senses +4, Fly +3",
    "features": [
      {
        "name": "Nimble Flyer",
        "type": "Passive",
        "text": "While flying, the Falcon gains a +3 bonus to its Difficulty."
      },
      {
        "name": "Dive Bomb",
        "type": "Action",
        "text": "Mark a Stress to make a standard attack against a target from above. The Falcon gains a +2 bonus to the attack and damage rolls."
      }
    ],
    "notes": ""
  },
  {
    "name": "Giant Mosquitoes",
    "tier": 1,
    "type": "Horde",
    "description": "Dozens of fist-sized mosquitoes, flying together for protection.",
    "motives": "Fly away, harass, steal blood",
    "difficulty": 10,
    "thresholds": {
      "major": 5,
      "severe": 9
    },
    "hpMax": 6,
    "stressMax": 3,
    "atk": "-2",
    "attack": {
      "name": "Proboscis",
      "range": "Melee",
      "damage": "1d8+3 phy"
    },
    "experience": "Camouflage +2",
    "features": [
      {
        "name": "Horde (1d4+1)",
        "type": "Passive",
        "text": "When the Mosquitoes have marked half or more of their HP, their standard attack deals 1d4+1 physical damage instead."
      },
      {
        "name": "Flying",
        "type": "Passive",
        "text": "While flying, the Mosquitoes have a +2 bonus to their Difficulty."
      },
      {
        "name": "Bloodsucker",
        "type": "Reaction",
        "text": "When the Mosquitoes' attack causes a target to mark HP, you can mark a Stress to force the target to mark an additional HP."
      }
    ],
    "notes": ""
  },
  {
    "name": "Giant Rat",
    "tier": 1,
    "type": "Minion",
    "description": "A cat-sized rodent skilled at scavenging and survival.",
    "motives": "Burrow, hunger, scavenge, wear down",
    "difficulty": 10,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "-4",
    "attack": {
      "name": "Claws",
      "range": "Melee",
      "damage": "1 phy"
    },
    "experience": "Keen Senses +3",
    "features": [
      {
        "name": "Minion (3)",
        "type": "Passive",
        "text": "The Rat is defeated when they take any damage. For every 3 damage a PC deals to the Rat, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Giant Rats within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 1 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Giant Scorpion",
    "tier": 1,
    "type": "Bruiser",
    "description": "A human-sized arachnid with tearing claws and a stinging tail.",
    "motives": "Ambush, feed, grapple, poison",
    "difficulty": 13,
    "thresholds": {
      "major": 7,
      "severe": 13
    },
    "hpMax": 6,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Pincers",
      "range": "Melee",
      "damage": "1d12+2 phy"
    },
    "experience": "Camouflage +2",
    "features": [
      {
        "name": "Double Strike",
        "type": "Action",
        "text": "Mark a Stress to make a standard attack against two targets within Melee range."
      },
      {
        "name": "Venomous Stinger",
        "type": "Action",
        "text": "Make an attack against a target within Very Close range. On a success, spend a Fear to deal 1d4+4 physical damage and Poison them until their next rest or they succeed on a Knowledge Roll (16). While Poisoned, the target must roll a d6 before they make an action roll. On a result of 4 or lower, they must mark a Stress."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Scorpion makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Glass Snake",
    "tier": 1,
    "type": "Standard",
    "description": "A clear serpent with a massive head that leaves behind a glass shard trail wherever they go.",
    "motives": "Climb, feed, keep distance, scare",
    "difficulty": 14,
    "thresholds": {
      "major": 6,
      "severe": 10
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Glass Fangs",
      "range": "Very Close",
      "damage": "1d8+2 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Armor-Shredding Shards",
        "type": "Passive",
        "text": "After a successful attack against the Snake within Melee range, the attacker must mark an Armor Slot. If they can't mark an Armor Slot, they must mark an HP."
      },
      {
        "name": "Spinning Serpent",
        "type": "Action",
        "text": "Mark a Stress to make an attack against all targets within Very Close range. Targets the Snake succeeds against take 1d6+1 physical damage."
      },
      {
        "name": "Spitter",
        "type": "Action",
        "text": "Spend a Fear to introduce a d6 Spitter Die. When the Snake is in the spotlight, roll this die. On a result of 5 or higher, all targets in front of the Snake within Far range must succeed on an Agility Reaction Roll or take 1d4 physical damage. The Snake can take the spotlight a second time this GM turn."
      }
    ],
    "notes": ""
  },
  {
    "name": "Bladed Guard",
    "tier": 1,
    "type": "Standard",
    "description": "An armored guard bearing a sword and shield painted in the settlement's colors.",
    "motives": "Arrest, close gates, make it through the day, pin down",
    "difficulty": 12,
    "thresholds": {
      "major": 5,
      "severe": 9
    },
    "hpMax": 5,
    "stressMax": 2,
    "atk": "+1",
    "attack": {
      "name": "Longsword",
      "range": "Melee",
      "damage": "1d6+1 phy"
    },
    "experience": "Local Knowledge +3",
    "features": [
      {
        "name": "Shield Wall",
        "type": "Passive",
        "text": "A creature who tries to move within Very Close range of the Guard must succeed on an Agility Roll. If additional Bladed Guards are standing in a line alongside the first, and each is within Melee range of another guard in the line, the Difficulty increases by the total number of guards in that line."
      },
      {
        "name": "Detain",
        "type": "Action",
        "text": "Make an attack against a target within Very Close range. On a success, mark a Stress to Restrain the target until they break free with a successful attack, Finesse Roll, or Strength Roll."
      }
    ],
    "notes": ""
  },
  {
    "name": "Grimmling Warband",
    "tier": 1,
    "type": "Horde",
    "description": "A cluster of small, strange creatures wearing armor fashioned from trash and stolen housewares.",
    "motives": "Ambush, celebrate a little too early, hit and run, infight, sabotage, sow chaos",
    "difficulty": 12,
    "thresholds": {
      "major": 5,
      "severe": 11
    },
    "hpMax": 3,
    "stressMax": 2,
    "atk": "+1",
    "attack": {
      "name": "Tailor's Shears",
      "range": "Melee",
      "damage": "1d8+2 phy"
    },
    "experience": "Traps +3",
    "features": [
      {
        "name": "Horde (1d4+1)",
        "type": "Passive",
        "text": "When the Warband has marked half or more of its HP, its standard attack deals 1d4+1 physical damage instead."
      },
      {
        "name": "Cowardly",
        "type": "Reaction",
        "text": "When the Warband marks its last Stress or an allied Leader is defeated, roll a d6. On a result of 2 or lower, the Warband flees the scene."
      }
    ],
    "notes": ""
  },
  {
    "name": "Archer Guard",
    "tier": 1,
    "type": "Ranged",
    "description": "A tall guard bearing a longbow and quiver with arrows fletched in the settlement's colors.",
    "motives": "Arrest, close gates, make it through the day, pin down",
    "difficulty": 10,
    "thresholds": {
      "major": 4,
      "severe": 8
    },
    "hpMax": 3,
    "stressMax": 2,
    "atk": "+1",
    "attack": {
      "name": "Longbow",
      "range": "Far",
      "damage": "1d8+3 phy"
    },
    "experience": "Local Knowledge +3",
    "features": [
      {
        "name": "Hobbling Shot",
        "type": "Action",
        "text": "Make an attack against a target within Far range. On a success, mark a Stress to deal 1d12+3 physical damage. If the target marks HP from this attack, they have disadvantage on Agility Rolls until they clear at least 1 HP."
      }
    ],
    "notes": ""
  },
  {
    "name": "Head Guard",
    "tier": 1,
    "type": "Leader",
    "description": "A seasoned guard with a mace, a whistle, and a bellowing voice.",
    "motives": "Arrest, close gates, pin down, seek glory",
    "difficulty": 15,
    "thresholds": {
      "major": 7,
      "severe": 13
    },
    "hpMax": 7,
    "stressMax": 3,
    "atk": "+4",
    "attack": {
      "name": "Mace",
      "range": "Melee",
      "damage": "1d10+4 phy"
    },
    "experience": "Commander +2, Local Knowledge +2",
    "features": [
      {
        "name": "Rally Guards",
        "type": "Action",
        "text": "Spend 2 Fear to spotlight the Head Guard and up to 2d4 allies within Far range."
      },
      {
        "name": "On My Signal",
        "type": "Reaction",
        "text": "Countdown (5). When the Head Guard is in the spotlight for the first time, activate the countdown. It ticks down when a PC makes an attack roll. When it triggers, all Archer Guards within Far range make a standard attack with advantage against the nearest target within their range. If any attacks succeed on the same target, combine their damage."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Head Guard makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Harpy",
    "tier": 1,
    "type": "Skulk",
    "description": "A fierce and foul-smelling bird with an eight-foot wingspan and the upper body and face of a human.",
    "motives": "Defend nest, drop enemies from a great height, maraud from the air, screech incessantly",
    "difficulty": 12,
    "thresholds": {
      "major": 3,
      "severe": 7
    },
    "hpMax": 3,
    "stressMax": 3,
    "atk": "+0",
    "attack": {
      "name": "Talons",
      "range": "Melee",
      "damage": "1d8+1 phy"
    },
    "experience": "Islands +3",
    "features": [
      {
        "name": "Toxic Aura",
        "type": "Passive",
        "text": "The Harpy emits a foul stench that renders all non-Harpies Vulnerable while within Very Close range."
      },
      {
        "name": "Swooping Attack",
        "type": "Action",
        "text": "Mark a Stress to have the Harpy move in a straight line to a point within Far range and make an attack against a target in the Harpy's path. On a success, the Harpy deals 3d6 physical damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Jagged Knife Hexer",
    "tier": 1,
    "type": "Support",
    "description": "A staff-wielding bandit in a cloak adorned with magical paraphernalia, using curses to vex their foes.",
    "motives": "Command, hex, profit",
    "difficulty": 13,
    "thresholds": {
      "major": 5,
      "severe": 9
    },
    "hpMax": 4,
    "stressMax": 4,
    "atk": "+2",
    "attack": {
      "name": "Staff",
      "range": "Far",
      "damage": "1d6+2 mag"
    },
    "experience": "Magical Knowledge +2",
    "features": [
      {
        "name": "Curse",
        "type": "Action",
        "text": "Choose a target within Far range and temporarily Curse them. While the target is Cursed, you can mark a Stress when that target rolls with Hope to make the roll be with Fear instead."
      },
      {
        "name": "Chaotic Flux",
        "type": "Action",
        "text": "Make an attack against up to three targets within Very Close range. Mark a Stress to deal 2d6+3 magic damage to targets the Hexer succeeded against."
      }
    ],
    "notes": ""
  },
  {
    "name": "Harrier",
    "tier": 1,
    "type": "Standard",
    "description": "A nimble fighter armed with javelins.",
    "motives": "Flank, harry, kite, profit",
    "difficulty": 12,
    "thresholds": {
      "major": 5,
      "severe": 9
    },
    "hpMax": 3,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Javelin",
      "range": "Close",
      "damage": "1d6+2 phy"
    },
    "experience": "Camouflage +2",
    "features": [
      {
        "name": "Maintain Distance",
        "type": "Passive",
        "text": "After making a standard attack, the Harrier can move anywhere within Far range."
      },
      {
        "name": "Fall Back",
        "type": "Reaction",
        "text": "When a creature moves into Melee range to make an attack, you can mark a Stress before the attack roll to move anywhere within Close range and make an attack against that creature. On a success, deal 1d10+2 physical damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Jagged Knife Bandit",
    "tier": 1,
    "type": "Standard",
    "description": "A cunning criminal in a cloak bearing one of the gang's iconic knives.",
    "motives": "Escape, profit, steal, throw smoke",
    "difficulty": 12,
    "thresholds": {
      "major": 8,
      "severe": 14
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Daggers",
      "range": "Melee",
      "damage": "1d8+1 phy"
    },
    "experience": "Thief +2",
    "features": [
      {
        "name": "Climber",
        "type": "Passive",
        "text": "The Bandit climbs just as easily as they run."
      },
      {
        "name": "From Above",
        "type": "Passive",
        "text": "When the Bandit succeeds on a standard attack from above a target, they deal 1d10+1 physical damage instead of their standard damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Jagged Knife Kneebreaker",
    "tier": 1,
    "type": "Bruiser",
    "description": "An imposing brawler carrying a large club.",
    "motives": "Grapple, intimidate, profit, steal",
    "difficulty": 12,
    "thresholds": {
      "major": 7,
      "severe": 14
    },
    "hpMax": 7,
    "stressMax": 4,
    "atk": "-3",
    "attack": {
      "name": "Club",
      "range": "Melee",
      "damage": "1d4+6 phy"
    },
    "experience": "Thief +2, Unveiled Threats +3",
    "features": [
      {
        "name": "I've Got 'Em",
        "type": "Passive",
        "text": "Creatures Restrained by the Kneebreaker take double damage from attacks by other adversaries."
      },
      {
        "name": "Hold Them Down",
        "type": "Action",
        "text": "Make an attack against a target within Melee range. On a success, the target takes no damage but is Restrained and Vulnerable. The target can break free, clearing both conditions, with a successful Strength Roll or is freed automatically if the Kneebreaker takes Major or greater damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Jagged Knife Lackey",
    "tier": 1,
    "type": "Minion",
    "description": "A thief with simple clothes and small daggers, eager to prove themselves.",
    "motives": "Escape, profit, throw smoke",
    "difficulty": 9,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "-2",
    "attack": {
      "name": "Daggers",
      "range": "Melee",
      "damage": "2 phy"
    },
    "experience": "Thief +2",
    "features": [
      {
        "name": "Minion (3)",
        "type": "Passive",
        "text": "The Lackey is defeated when they take any damage. For every 3 damage a PC deals to the Lackey, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Jagged Knife Lackeys within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Jagged Knife Lieutenant",
    "tier": 1,
    "type": "Leader",
    "description": "A seasoned bandit in quality leathers with a strong voice and cunning eyes.",
    "motives": "Bully, command, profit, reinforce",
    "difficulty": 13,
    "thresholds": {
      "major": 7,
      "severe": 14
    },
    "hpMax": 6,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Javelin",
      "range": "Close",
      "damage": "1d8+3 phy"
    },
    "experience": "Local Knowledge +2",
    "features": [
      {
        "name": "Tactician",
        "type": "Action",
        "text": "When you spotlight the Lieutenant, mark a Stress to also spotlight two allies within Close range."
      },
      {
        "name": "More Where That Came From",
        "type": "Action",
        "text": "Summon three Jagged Knife Lackeys, who appear at Far range."
      },
      {
        "name": "Coup de Grace",
        "type": "Action",
        "text": "Spend a Fear to make an attack against a Vulnerable target within Close range. On a success, deal 2d6+12 physical damage and the target must mark a Stress."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Lieutenant makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Jagged Knife Shadow",
    "tier": 1,
    "type": "Skulk",
    "description": "A nimble scoundrel bearing a wicked knife and utilizing shadow magic to isolate targets.",
    "motives": "Ambush, conceal, divide, profit",
    "difficulty": 12,
    "thresholds": {
      "major": 4,
      "severe": 8
    },
    "hpMax": 3,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Daggers",
      "range": "Melee",
      "damage": "1d4+4 phy"
    },
    "experience": "Intrusion +3",
    "features": [
      {
        "name": "Backstab",
        "type": "Passive",
        "text": "When the Shadow succeeds on a standard attack that has advantage, they deal 1d6+6 physical damage instead of their standard damage."
      },
      {
        "name": "Cloaked",
        "type": "Action",
        "text": "Become Hidden until after the Shadow's next attack. Attacks made while Hidden from this feature have advantage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Jagged Knife Sniper",
    "tier": 1,
    "type": "Ranged",
    "description": "A lanky bandit striking from cover with a shortbow.",
    "motives": "Ambush, hide, profit, reposition",
    "difficulty": 13,
    "thresholds": {
      "major": 4,
      "severe": 7
    },
    "hpMax": 3,
    "stressMax": 2,
    "atk": "-1",
    "attack": {
      "name": "Shortbow",
      "range": "Far",
      "damage": "1d10+2 phy"
    },
    "experience": "Stealth +2",
    "features": [
      {
        "name": "Unseen Strike",
        "type": "Passive",
        "text": "If the Sniper is Hidden when they make a successful standard attack against a target, they deal 1d10+4 physical damage instead of their standard damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Kelpie",
    "tier": 1,
    "type": "Skulk",
    "description": "A river-dwelling shapeshifter who prefers an enchanting equine form in and out of the water.",
    "motives": "Adopt an attractive or useful shape, drown and devour, entice unwary travelers",
    "difficulty": 12,
    "thresholds": {
      "major": 4,
      "severe": 8
    },
    "hpMax": 3,
    "stressMax": 5,
    "atk": "-2",
    "attack": {
      "name": "Hooves",
      "range": "Very Close",
      "damage": "1d8+2 phy"
    },
    "experience": "Entanglement +3, Mind Reader +3",
    "features": [
      {
        "name": "Captivating",
        "type": "Passive",
        "text": "A PC must mark a Stress to move out of the Kelpie's Melee range."
      },
      {
        "name": "Heart's Desire",
        "type": "Passive",
        "text": "After the Kelpie interacts with or watches a creature for at least a hundred heartbeats, the Kelpie knows the physical form that creature would find most pleasing or alluring."
      },
      {
        "name": "Shapeshifter",
        "type": "Action",
        "text": "Mark a Stress to change the Kelpie's physical form into any creature or object smaller than a wagon. A creature has disadvantage on rolls against the Kelpie while the Kelpie is in a form the creature finds pleasing or alluring."
      },
      {
        "name": "Enchant",
        "type": "Action",
        "text": "Spend a Fear to have the Kelpie beguile a PC within Close range. The PC must succeed on an Instinct Reaction Roll or become Enchanted until they take damage. While Enchanted, the PC perceives the Kelpie as a trusted friend or ally and will do what the Kelpie says unless it contradicts the PC's most deeply held morals."
      }
    ],
    "notes": ""
  },
  {
    "name": "Masque Muerte",
    "tier": 1,
    "type": "Solo",
    "description": "The raging soul of a villainous masked wrestler.",
    "motives": "Call out, embarrass, energize the audience, pin opponents to the ground",
    "difficulty": 13,
    "thresholds": {
      "major": 7,
      "severe": 14
    },
    "hpMax": 8,
    "stressMax": 4,
    "atk": "+4",
    "attack": {
      "name": "Open-Handed Strike",
      "range": "Melee",
      "damage": "1d12+2 mag"
    },
    "experience": "Grappler +3, Showboat +3",
    "features": [
      {
        "name": "Libre",
        "type": "Passive",
        "text": "The Masque Muerte can't be Restrained."
      },
      {
        "name": "Heel Turn",
        "type": "Action",
        "text": "Mark a Stress to make an attack against a PC within Close range. On a success, the target must mark a Stress and is temporarily Vulnerable as the Masque Muerte assaults them with a string of insulting taunts."
      },
      {
        "name": "Spectral Suplex",
        "type": "Action",
        "text": "Spend a Fear to have the Masque Muerte suplex a Restrained PC, dealing 1d10+6 magic damage to them."
      },
      {
        "name": "Unmasking Death",
        "type": "Action",
        "text": "Spend a Fear to have the Masque Muerte momentarily remove their mask, revealing their horrifying face underneath. Each PC within Close range must succeed on a Presence Reaction Roll or mark a Stress."
      },
      {
        "name": "Tag Team",
        "type": "Reaction",
        "text": "When the Masque Muerte deals damage to a PC, you can spend a Fear to have a spectral wrestler appear and Pin the target until they escape with a successful Strength Roll. While Pinned, the target is Restrained and takes an extra 1d12 magic damage from the Masque Muerte's attacks."
      }
    ],
    "notes": ""
  },
  {
    "name": "Mechanorb",
    "tier": 1,
    "type": "Standard",
    "description": "A floating clockwork sphere that has telescoping limbs and comes from a realm of machines and metal.",
    "motives": "Coordinate, (dis)assemble, move orthogonally, speak in binary",
    "difficulty": 12,
    "thresholds": {
      "major": 5,
      "severe": 10
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Needle",
      "range": "Melee",
      "damage": "1d10+1 phy"
    },
    "experience": "Machines +2",
    "features": [
      {
        "name": "Hive Mind",
        "type": "Passive",
        "text": "The Mechanorb gains a +1 bonus to their Difficulty for each other Mechanorb within Close range."
      },
      {
        "name": "Adaptive Tactics",
        "type": "Passive",
        "text": "Pool. When the Mechanorb fails an attack roll, add a token to the Mechanorb Pool. All Mechanorbs in the scene gain a bonus to attack rolls equal to the number of tokens in the Mechanorb Pool. Clear all tokens when any Mechanorb takes Severe damage or is defeated."
      }
    ],
    "notes": ""
  },
  {
    "name": "Merchant",
    "tier": 1,
    "type": "Social",
    "description": "A finely dressed trader with a keen eye for financial gain.",
    "motives": "Buy low and sell high, create demand, inflate prices, seek profit",
    "difficulty": 12,
    "thresholds": {
      "major": 4,
      "severe": 8
    },
    "hpMax": 3,
    "stressMax": 3,
    "atk": "-4",
    "attack": {
      "name": "Club",
      "range": "Melee",
      "damage": "1d4+1 phy"
    },
    "experience": "Shrewd Negotiator +3",
    "features": [
      {
        "name": "Preferential Treatment",
        "type": "Passive",
        "text": "A PC who succeeds on a Presence Roll against the Merchant gains a discount on purchases. A PC who fails on a Presence Roll against the Merchant must pay more and has disadvantage on future Presence Rolls against the Merchant."
      },
      {
        "name": "The Runaround",
        "type": "Passive",
        "text": "When a PC rolls a 14 or lower on a Presence Roll made against the Merchant, they must mark a Stress."
      }
    ],
    "notes": ""
  },
  {
    "name": "Minor Chaos Elemental",
    "tier": 1,
    "type": "Solo",
    "description": "A coruscating mass of uncontrollable magic.",
    "motives": "Confound, destabilize, transmogrify",
    "difficulty": 14,
    "thresholds": {
      "major": 7,
      "severe": 14
    },
    "hpMax": 7,
    "stressMax": 3,
    "atk": "+3",
    "attack": {
      "name": "Warp Blast",
      "range": "Close",
      "damage": "1d12+6 mag"
    },
    "experience": "",
    "features": [
      {
        "name": "Arcane Form",
        "type": "Passive",
        "text": "The Elemental is resistant to magic damage."
      },
      {
        "name": "Sickening Flux",
        "type": "Action",
        "text": "Mark a HP to force all targets within Close range to mark a Stress and become Vulnerable until their next rest or they clear a HP."
      },
      {
        "name": "Remake Reality",
        "type": "Action",
        "text": "Spend a Fear to transform the area within Very Close range into a different biome. All targets within this area take 2d6+3 direct magic damage."
      },
      {
        "name": "Magical Reflection",
        "type": "Reaction",
        "text": "When the Elemental takes damage from an attack within Close range, deal an amount of damage to the attacker equal to half the damage they dealt."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Elemental makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Minor Fire Elemental",
    "tier": 1,
    "type": "Solo",
    "description": "A living flame the size of a large bonfire.",
    "motives": "Encircle enemies, grow in size, intimidate, start fires",
    "difficulty": 13,
    "thresholds": {
      "major": 7,
      "severe": 15
    },
    "hpMax": 9,
    "stressMax": 3,
    "atk": "+3",
    "attack": {
      "name": "Elemental Blast",
      "range": "Far",
      "damage": "1d10+4 mag"
    },
    "experience": "",
    "features": [
      {
        "name": "Relentless (2)",
        "type": "Passive",
        "text": "The Elemental can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Scorched Earth",
        "type": "Action",
        "text": "Mark a Stress to choose a point within Far range. The ground within Very Close range of that point immediately bursts into flames. All creatures within this area must make an Agility Reaction Roll. Targets who fail take 2d8 magic damage from the flames. Targets who succeed take half damage."
      },
      {
        "name": "Explosion",
        "type": "Action",
        "text": "Spend a Fear to erupt in a fiery explosion. Make an attack against all targets within Close range. Targets the Elemental succeeds against take 1d8 magic damage and are knocked back to Far range."
      },
      {
        "name": "Consume Kindling",
        "type": "Reaction",
        "text": "Three times per scene, when the Elemental moves onto objects that are highly flammable, consume them to clear a HP or a Stress."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Elemental makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Minor Demon",
    "tier": 1,
    "type": "Solo",
    "description": "A crimson-hued creature from the Circles Below, consumed by rage against all mortals.",
    "motives": "Act erratically, corral targets, relish pain, torment",
    "difficulty": 14,
    "thresholds": {
      "major": 8,
      "severe": 15
    },
    "hpMax": 8,
    "stressMax": 4,
    "atk": "+3",
    "attack": {
      "name": "Claws",
      "range": "Melee",
      "damage": "1d8+6 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Relentless (2)",
        "type": "Passive",
        "text": "The Demon can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "All Must Fall",
        "type": "Passive",
        "text": "When a PC rolls a failure with Fear while within Close range of the Demon, they lose a Hope."
      },
      {
        "name": "Hellfire",
        "type": "Action",
        "text": "Spend a Fear to rain down hellfire within Far range. All targets within the area must make an Agility Reaction Roll. Targets who fail take 1d20+3 magic damage. Targets who succeed take half damage."
      },
      {
        "name": "Reaper",
        "type": "Reaction",
        "text": "Before rolling damage for the Demon's attack, you can mark a Stress to gain a bonus to the damage roll equal to the Demon's current number of marked HP."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Demon makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Minor Treant",
    "tier": 1,
    "type": "Minion",
    "description": "An ambulatory sapling rising up to defend their forest.",
    "motives": "Crush, overwhelm, protect",
    "difficulty": 10,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "-2",
    "attack": {
      "name": "Clawed Branch",
      "range": "Melee",
      "damage": "4 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Minion (5)",
        "type": "Passive",
        "text": "The Treant is defeated when they take any damage. For every 5 damage a PC deals to the Treant, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Minor Treants within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 4 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Mountain Troll",
    "tier": 1,
    "type": "Solo",
    "description": "A hideous giant born out of a massive rock. They wear purloined armor and a belt of severed heads or skulls.",
    "motives": "Ambush, bellow, hurl large boulders, smash, stomp",
    "difficulty": 14,
    "thresholds": {
      "major": 8,
      "severe": 15
    },
    "hpMax": 8,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Skull Flail",
      "range": "Very Close",
      "damage": "1d8+1 phy"
    },
    "experience": "Mountains +4",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Troll can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Stolen Armor",
        "type": "Passive",
        "text": "Countdown. When combat begins, activate a countdown with a value equal to the number of PCs. When the Troll takes damage, reduce the severity by one threshold, then tick down the countdown. When it triggers, the Troll evolves (see \"Enraged Mountain Troll\")."
      },
      {
        "name": "Flail Swipe",
        "type": "Action",
        "text": "Mark a Stress to make an attack against all targets in front of the Troll within Very Close range. Targets the Troll succeeds against take 2d8+2 physical damage."
      },
      {
        "name": "Enraged Mountain Troll",
        "type": "Evolution",
        "text": "The Troll loses their \"Stolen Armor\" and \"Flail Swipe\" features, then gains a +1 bonus to their Difficulty. Additionally, they gain the \"Double Swipe\" feature and replace \"Skull Flail\" with the following standard attack: Claw Swipe: Very Close | 1d10+3 phy Double Swipe - Action: Spend a Fear to move up to Close range and make two standard attacks against a target within Melee range. If both attacks succeed, combine the damage, and the target loses a Hope."
      }
    ],
    "notes": ""
  },
  {
    "name": "Octopus",
    "tier": 1,
    "type": "Skulk",
    "description": "An aquatic, soft-bodied mollusk that has eight sucker-bearing arms and a hard, beaklike jaw.",
    "motives": "Crawl along the ocean floor, eat fish, squirt ink to escape",
    "difficulty": 12,
    "thresholds": {
      "major": 3,
      "severe": 0
    },
    "hpMax": 2,
    "stressMax": 3,
    "atk": "-1",
    "attack": {
      "name": "Beak",
      "range": "Melee",
      "damage": "1d6 phy"
    },
    "experience": "Dexterity +3, Water +3",
    "features": [
      {
        "name": "Grapple",
        "type": "Action",
        "text": "Make an attack roll against a target within Close range. On a success, the target becomes Restrained and Vulnerable until they escape with a successful Strength Roll."
      },
      {
        "name": "Squirt Ink",
        "type": "Action",
        "text": "Mark a Stress to have the Octopus squirt ink. On land, the ink covers the ground within Very Close range. Each creature who moves through that area must succeed on an Agility Reaction Roll or slip and fall, becoming Vulnerable until they exit the area. If this feature is used while the Octopus is underwater, it instead creates a cloud of darkness that fills an area within Very Close range and blocks line of sight."
      }
    ],
    "notes": ""
  },
  {
    "name": "Green Ooze",
    "tier": 1,
    "type": "Skulk",
    "description": "A moving mound of translucent green slime.",
    "motives": "Camouflage, consume and multiply, creep up, envelop",
    "difficulty": 8,
    "thresholds": {
      "major": 5,
      "severe": 10
    },
    "hpMax": 5,
    "stressMax": 2,
    "atk": "+1",
    "attack": {
      "name": "Ooze Appendage",
      "range": "Melee",
      "damage": "1d6+1 mag"
    },
    "experience": "Camouflage +3",
    "features": [
      {
        "name": "Slow",
        "type": "Passive",
        "text": "When you spotlight the Ooze and they don't have a token on their stat block, they can't act yet. Place a token on their stat block and describe what they're preparing to do. When you spotlight the Ooze and they have a token on their stat block, clear the token and they can act."
      },
      {
        "name": "Acidic Form",
        "type": "Passive",
        "text": "When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can't mark an Armor Slot, they must mark an additional HP."
      },
      {
        "name": "Envelop",
        "type": "Action",
        "text": "Make a standard attack against a target within Melee range. On a success, the Ooze envelops them and the target must mark 2 Stress. The target must mark an additional Stress when they make an action roll. If the Ooze takes Severe damage, the target is freed."
      },
      {
        "name": "Split",
        "type": "Reaction",
        "text": "When the Ooze has 3 or more HP marked, you can spend a Fear to split them into two Tiny Green Oozes (with no marked HP or Stress). Immediately spotlight both of them."
      }
    ],
    "notes": ""
  },
  {
    "name": "Tiny Green Ooze",
    "tier": 1,
    "type": "Skulk",
    "description": "A small moving mound of translucent green slime.",
    "motives": "Camouflage, creep up",
    "difficulty": 14,
    "thresholds": {
      "major": 4,
      "severe": 0
    },
    "hpMax": 2,
    "stressMax": 1,
    "atk": "-1",
    "attack": {
      "name": "Ooze Appendage",
      "range": "Melee",
      "damage": "1d4+1 mag"
    },
    "experience": "",
    "features": [
      {
        "name": "Acidic Form",
        "type": "Passive",
        "text": "When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can't mark an Armor Slot, they must mark an additional HP."
      }
    ],
    "notes": ""
  },
  {
    "name": "Red Ooze",
    "tier": 1,
    "type": "Skulk",
    "description": "A moving mound of translucent flaming red slime.",
    "motives": "Camouflage, consume and multiply, ignite, start fires",
    "difficulty": 10,
    "thresholds": {
      "major": 6,
      "severe": 11
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Ooze Appendage",
      "range": "Melee",
      "damage": "1d8+3 mag"
    },
    "experience": "Camouflage +3",
    "features": [
      {
        "name": "Creeping Fire",
        "type": "Passive",
        "text": "The Ooze can only move within Very Close range as their normal movement. They light any flammable object they touch on fire."
      },
      {
        "name": "Ignite",
        "type": "Action",
        "text": "Make an attack against a target within Very Close range. On a success, the target takes 1d8 magic damage and is Ignited until they're extinguished with a successful Finesse Roll (14). While Ignited, the target takes 1d4 magic damage when they make an action roll."
      },
      {
        "name": "Split",
        "type": "Reaction",
        "text": "When the Ooze has 3 or more HP marked, you can spend a Fear to split them into two Tiny Red Oozes (with no marked HP or Stress). Immediately spotlight both of them."
      }
    ],
    "notes": ""
  },
  {
    "name": "Tiny Red Ooze",
    "tier": 1,
    "type": "Skulk",
    "description": "A small moving mound of translucent flaming red slime",
    "motives": "Blaze, camouflage",
    "difficulty": 11,
    "thresholds": {
      "major": 5,
      "severe": 0
    },
    "hpMax": 2,
    "stressMax": 1,
    "atk": "-1",
    "attack": {
      "name": "Ooze Appendage",
      "range": "Melee",
      "damage": "1d4+2 mag"
    },
    "experience": "",
    "features": [
      {
        "name": "Burning",
        "type": "Reaction",
        "text": "When a creature within Melee range deals damage to the Ooze, they take 1d6 direct magic damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Panther",
    "tier": 1,
    "type": "Skulk",
    "description": "A large feline predator that stalks its prey from the shadows.",
    "motives": "Climb trees, pounce, stalk",
    "difficulty": 14,
    "thresholds": {
      "major": 5,
      "severe": 10
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Teeth and Claws",
      "range": "Melee",
      "damage": "1d8+1 phy"
    },
    "experience": "Keen Senses +3, Slink +3",
    "features": [
      {
        "name": "Shadow Stalker",
        "type": "Passive",
        "text": "While Hidden, the Panther gains a +2 bonus to its attack rolls."
      },
      {
        "name": "Pouncing Strike",
        "type": "Action",
        "text": "Mark a Stress to have the Panther leap into Melee range of a target within Far range and make an attack against them. On a success, deal 1d12+2 physical damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Petty Noble",
    "tier": 1,
    "type": "Social",
    "description": "A richly dressed and adorned aristocrat brimming with hubris.",
    "motives": "Abuse power, gather resources, mobilize minions",
    "difficulty": 14,
    "thresholds": {
      "major": 6,
      "severe": 10
    },
    "hpMax": 3,
    "stressMax": 5,
    "atk": "-3",
    "attack": {
      "name": "Rapier",
      "range": "Melee",
      "damage": "1d6+1 phy"
    },
    "experience": "Aristocrat +3",
    "features": [
      {
        "name": "My Land, My Rules",
        "type": "Passive",
        "text": "All social actions made against the Noble on their land have disadvantage."
      },
      {
        "name": "Guards, Seize Them!",
        "type": "Action",
        "text": "Once per scene, mark a Stress to summon 1d4 Bladed Guards, who appear at Far range to enforce the Noble's will."
      },
      {
        "name": "Exile",
        "type": "Action",
        "text": "Spend a Fear and target a PC. The Noble proclaims that the target and their allies are exiled from the noble's territory. While exiled, the target and their allies have disadvantage during social situations within the Noble's domain."
      }
    ],
    "notes": ""
  },
  {
    "name": "Phantom",
    "tier": 1,
    "type": "Standard",
    "description": "The echo of a lost soul in the form of an ectoplasmic shadow.",
    "motives": "Create cold spots, swoop through the air, whisper dark tidings",
    "difficulty": 11,
    "thresholds": {
      "major": 5,
      "severe": 0
    },
    "hpMax": 2,
    "stressMax": 1,
    "atk": "-1",
    "attack": {
      "name": "Chill Touch",
      "range": "Melee",
      "damage": "1d6+2 mag"
    },
    "experience": "Spooky +3",
    "features": [
      {
        "name": "Incorporeal",
        "type": "Passive",
        "text": "The Phantom has resistance to physical damage and can move through solid objects."
      },
      {
        "name": "Fear Aura",
        "type": "Passive",
        "text": "A PC who takes the spotlight within Very Close range of the Phantom must succeed on a Presence Reaction Roll (10) or mark a Stress."
      },
      {
        "name": "Lingering Haunt",
        "type": "Reaction",
        "text": "Countdown (1d6). When the Phantom is defeated, you can spend a Fear to activate the countdown. It ticks down when a PC rolls with Fear. When it triggers, clear the Phantom's HP and immediately spotlight them."
      }
    ],
    "notes": ""
  },
  {
    "name": "Pirate Captain",
    "tier": 1,
    "type": "Leader",
    "description": "A charismatic sea dog with an impressive hat, eager to raid and plunder.",
    "motives": "Command, make 'em walk the plank, plunder, raid",
    "difficulty": 14,
    "thresholds": {
      "major": 7,
      "severe": 14
    },
    "hpMax": 7,
    "stressMax": 5,
    "atk": "+4",
    "attack": {
      "name": "Cutlass",
      "range": "Melee",
      "damage": "1d12+2 phy"
    },
    "experience": "Commander +2, Sailor +3",
    "features": [
      {
        "name": "Swashbuckler",
        "type": "Passive",
        "text": "When the Captain marks 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress."
      },
      {
        "name": "Reinforcements",
        "type": "Action",
        "text": "Once per scene, mark a Stress to summon a Pirate Raiders Horde, which appears at Far range."
      },
      {
        "name": "No Quarter",
        "type": "Action",
        "text": "Spend a Fear to choose a target who has three or more Pirates within Melee range of them. The Captain leads the Pirates in hurling threats and promises of a watery grave. The target must make a Presence Reaction Roll. On a failure, the target marks 1d4+1 Stress. On a success, they must mark a Stress."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Captain makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Pirate Raiders",
    "tier": 1,
    "type": "Horde",
    "description": "Seafaring scoundrels moving in a ravaging pack.",
    "motives": "Gang up, plunder, raid",
    "difficulty": 12,
    "thresholds": {
      "major": 5,
      "severe": 11
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Cutlass",
      "range": "Melee",
      "damage": "1d8+2 phy"
    },
    "experience": "Sailor +3",
    "features": [
      {
        "name": "Horde (1d4+1)",
        "type": "Passive",
        "text": "When the Raiders have marked half or more of their HP, their standard attack deals 1d4+1 physical damage instead."
      },
      {
        "name": "Swashbuckler",
        "type": "Passive",
        "text": "When the Raiders mark 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress."
      }
    ],
    "notes": ""
  },
  {
    "name": "Pirate Tough",
    "tier": 1,
    "type": "Bruiser",
    "description": "A thickly muscled and tattooed pirate with melon-sized fists.",
    "motives": "Plunder, raid, smash, terrorize",
    "difficulty": 13,
    "thresholds": {
      "major": 8,
      "severe": 15
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Massive Fists",
      "range": "Melee",
      "damage": "2d6 phy"
    },
    "experience": "Sailor +2",
    "features": [
      {
        "name": "Swashbuckler",
        "type": "Passive",
        "text": "When the Tough marks 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress."
      },
      {
        "name": "Clear the Decks",
        "type": "Action",
        "text": "Make an attack against a target within Very Close range. On a success, mark a Stress to move into Melee range of the target, dealing 3d4 physical damage and knocking the target back to Close range."
      }
    ],
    "notes": ""
  },
  {
    "name": "Poltergeist",
    "tier": 1,
    "type": "Ranged",
    "description": "A baleful, translucent spirit that possesses inanimate objects.",
    "motives": "Flicker candles, rattle chains, shake windows, throw people around the room",
    "difficulty": 9,
    "thresholds": {
      "major": 4,
      "severe": 0
    },
    "hpMax": 2,
    "stressMax": 2,
    "atk": "-1",
    "attack": {
      "name": "Thrown Object",
      "range": "Far",
      "damage": "1d6+3 phy"
    },
    "experience": "Spooky +3",
    "features": [
      {
        "name": "Specter",
        "type": "Passive",
        "text": "The Poltergeist has resistance to physical damage. Mark a Stress to move up to Close range through solid objects."
      },
      {
        "name": "Possessor",
        "type": "Action",
        "text": "Mark a Stress to have the Poltergeist inhabit a nonmagical object that is entirely within Close range, infusing the object with a ghostly glow. The next time the Poltergeist would take damage, the object is destroyed instead, and the Poltergeist is expelled from it."
      },
      {
        "name": "Ghost Storm",
        "type": "Action",
        "text": "Spend a Fear to have the Poltergeist pull all unequipped nonmagical objects within Very Close range into a violent vortex. Each target in that area must make an Agility Reaction Roll. Targets who fail take 1d12+2 physical damage. Targets who succeed take half damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Rabble Mawb",
    "tier": 1,
    "type": "Horde",
    "description": "These cat-sized balls of hair, limbs, and teeth travel in a \"mawb\" of a dozen.",
    "motives": "Chitter and chew, clump together, roll around",
    "difficulty": 8,
    "thresholds": {
      "major": 4,
      "severe": 8
    },
    "hpMax": 4,
    "stressMax": 2,
    "atk": "-2",
    "attack": {
      "name": "Chomp",
      "range": "Melee",
      "damage": "1d6+3 phy"
    },
    "experience": "Underground +2",
    "features": [
      {
        "name": "Horde (1d4+1)",
        "type": "Passive",
        "text": "When the Rabble Mawb has marked half or more of its HP, its standard attack deals 1d4+1 physical damage instead."
      },
      {
        "name": "Come Back Worse",
        "type": "Reaction",
        "text": "When the Rabble Mawb is defeated, you can spend a Fear to bring it back to life, clearing all HP and Stress. The Rabble Mawb gains a bonus to all rolls equal to the number of times this feature has been used by this Rabble Mawb."
      }
    ],
    "notes": ""
  },
  {
    "name": "Redcap Biters",
    "tier": 1,
    "type": "Horde",
    "description": "A troop of fist-sized fey creatures who have needle-sharp teeth and conical red caps sealed on their heads with candle wax.",
    "motives": "Bring 'em down, celebrate tiny victories, giggle and chitter, scamper between the walls",
    "difficulty": 10,
    "thresholds": {
      "major": 6,
      "severe": 11
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "-1",
    "attack": {
      "name": "Gnash",
      "range": "Melee",
      "damage": "1d8+4 phy"
    },
    "experience": "Nooks and Crannies +3",
    "features": [
      {
        "name": "Horde (1d4+2)",
        "type": "Passive",
        "text": "When the Biters have marked half or more of their HP, their standard attack deals 1d4+2 physical damage instead."
      },
      {
        "name": "Ankle Weights",
        "type": "Passive",
        "text": "A PC must mark a Stress to move out of the Biters' Melee range."
      }
    ],
    "notes": ""
  },
  {
    "name": "Redcap Breaker",
    "tier": 1,
    "type": "Bruiser",
    "description": "A large, brutish fey creature who has a conical red cap sealed on their head with candle wax.",
    "motives": "Beat chest and bellow, ragdoll puny enemies, rush forward recklessly",
    "difficulty": 13,
    "thresholds": {
      "major": 8,
      "severe": 15
    },
    "hpMax": 6,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Wooden Mallet",
      "range": "Melee",
      "damage": "1d12+2 phy"
    },
    "experience": "Bones +2",
    "features": [
      {
        "name": "Backbreaker",
        "type": "Action",
        "text": "Mark a Stress to make an attack against a target within Melee range. On a success, deal 3d4+10 physical damage. A target who marks HP from this attack is Restrained until they clear a HP."
      },
      {
        "name": "Kneecapper",
        "type": "Reaction",
        "text": "When the Breaker makes a successful standard attack, you can spend a Fear to make the target temporarily Vulnerable."
      }
    ],
    "notes": ""
  },
  {
    "name": "Redcap Butcher",
    "tier": 1,
    "type": "Standard",
    "description": "A halfling-sized fey creature who hacks their victims apart with a variety of cutting implements. They wear a conical red hat sealed on their head with candle wax.",
    "motives": "Grin disconcertingly, hack and slash, scramble",
    "difficulty": 12,
    "thresholds": {
      "major": 5,
      "severe": 10
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Meat Cleaver",
      "range": "Melee",
      "damage": "1d8+1 phy"
    },
    "experience": "Scurry +2",
    "features": [
      {
        "name": "Chop Happy",
        "type": "Action",
        "text": "Mark a Stress to make a standard attack against up to three targets. For each target who marks HP, you gain a Fear."
      },
      {
        "name": "Knife Thrower",
        "type": "Action",
        "text": "Mark a Stress to make a standard attack against a target within Far range. If the Butcher is Hidden, they make the attack with advantage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Redcap Candlemaker",
    "tier": 1,
    "type": "Leader",
    "description": "A pale, gaunt cult leader wearing a conical red cap sealed on their head with candle wax. They wield a long rod with a candle atop it made from a hanged criminal's hand.",
    "motives": "Cast long shadows, keep out of the fray, show them the light",
    "difficulty": 13,
    "thresholds": {
      "major": 7,
      "severe": 13
    },
    "hpMax": 6,
    "stressMax": 3,
    "atk": "+3",
    "attack": {
      "name": "Burning Candlestick",
      "range": "Very Close",
      "damage": "1d10+2 mag"
    },
    "experience": "Vigilance +3",
    "features": [
      {
        "name": "Hand of Glory",
        "type": "Passive",
        "text": "When the Candlemaker appears, place 5 tokens on this stat block. Remove a token whenever the Candlemaker marks a HP. While this stat block has 1 or more tokens on it, the Candlemaker is Hidden."
      },
      {
        "name": "Torchbearer",
        "type": "Passive",
        "text": "The light of the Candlemaker's Hand of Glory inspires bloodlust in their allies. While this stat block has 1 or more tokens on it, each Redcap adversary within Close range gains a +1 bonus to their damage rolls."
      },
      {
        "name": "Dance in the Flames",
        "type": "Action",
        "text": "Spend a token from this stat block. The Candlemaker conjures a ball of fire on a group of PCs within Far range. Each target must make an Agility Reaction Roll. Targets who fail take 2d10 magic damage. Targets who succeed take half damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Redcap Skinner",
    "tier": 1,
    "type": "Minion",
    "description": "A cat-sized fey creature wielding a straight razor and wearing a conical red cap sealed on their head with candle wax.",
    "motives": "Flense, giggle, scrape, slice",
    "difficulty": 9,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "-1",
    "attack": {
      "name": "Razor",
      "range": "Melee",
      "damage": "2 phy"
    },
    "experience": "Leatherwork +3",
    "features": [
      {
        "name": "Minion (4)",
        "type": "Passive",
        "text": "The Skinner is defeated when they take any damage. For every 4 damage a PC deals to the Skinner, the PC defeats an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Shallow Cuts",
        "type": "Passive",
        "text": "When a PC fails a roll, they take 1 physical damage for each Skinner within Melee range of them. Combine this damage."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Redcap Skinners within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Rugaru",
    "tier": 1,
    "type": "Solo",
    "description": "A wolf-headed humanoid cursed by the gods to prowl the swamps in search of blood.",
    "motives": "Blaspheme, go for the throat, stalk, terrorize",
    "difficulty": 14,
    "thresholds": {
      "major": 7,
      "severe": 14
    },
    "hpMax": 8,
    "stressMax": 4,
    "atk": "+4",
    "attack": {
      "name": "Snapping Jaws",
      "range": "Melee",
      "damage": "2d8+4 phy"
    },
    "experience": "Swamps +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Rugaru can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Child of Night",
        "type": "Passive",
        "text": "While in moonlight, the Rugaru gains a +2 bonus to their Difficulty."
      },
      {
        "name": "Bloodthirsty",
        "type": "Passive",
        "text": "When a PC marks HP from the Rugaru's standard attack, add a token to this stat block. The Rugaru gains a bonus to attack rolls equal to the number of tokens on this stat block. Clear all tokens when the Rugaru takes Severe damage."
      },
      {
        "name": "Howl at the Moon",
        "type": "Action",
        "text": "Mark a Stress to force each PC within Far range to make a Presence Reaction Roll (15). Targets who fail lose a Hope. Gain a Fear for each Hope lost. If a PC has no Hope, they must mark a Stress and become Vulnerable until they roll with Hope."
      },
      {
        "name": "Flesh Ripper",
        "type": "Action",
        "text": "Mark a Stress to make an attack against a target within Melee range. On a success, deal 1d12+2 direct physical damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Sawtoothed Gillbeast",
    "tier": 1,
    "type": "Standard",
    "description": "A stocky fish creature that has rows of razor-sharp teeth.",
    "motives": "Clamber ashore, hit and run, peek above the waterline",
    "difficulty": 12,
    "thresholds": {
      "major": 5,
      "severe": 10
    },
    "hpMax": 4,
    "stressMax": 2,
    "atk": "+1",
    "attack": {
      "name": "Waterlogged Weaponry",
      "range": "Close",
      "damage": "1d8+1 phy"
    },
    "experience": "Aquatic +2",
    "features": [
      {
        "name": "Ka-Chomp",
        "type": "Action",
        "text": "Mark a Stress to attack a target within Melee range. On a success, the target takes 1d12 physical damage and must mark an Armor Slot without gaining its benefit (they can still use armor to reduce the damage)."
      },
      {
        "name": "Feeding Frenzy",
        "type": "Reaction",
        "text": "When a creature marks HP, you can spend a Fear to spotlight all Sawtoothed Gillbeasts within Very Close range of them. Those Gillbeasts move into Melee range of the creature and each make a standard attack against them. If any attacks succeed, combine their damage."
      },
      {
        "name": "Scaly",
        "type": "Reaction",
        "text": "When the Gillbeast would mark any number of HP, roll a d6. On a result of 6, you can mark a Stress instead."
      }
    ],
    "notes": ""
  },
  {
    "name": "Sellsword",
    "tier": 1,
    "type": "Minion",
    "description": "An armed mercenary testing their luck.",
    "motives": "Charge, lacerate, overwhelm, profit",
    "difficulty": 10,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "+3",
    "attack": {
      "name": "Longsword",
      "range": "Melee",
      "damage": "3 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Minion (4)",
        "type": "Passive",
        "text": "The Sellsword is defeated when they take any damage. For every 4 damage a PC deals to the Sellsword, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Sellswords within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 3 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Skeleton Archer",
    "tier": 1,
    "type": "Ranged",
    "description": "A fragile skeleton with a shortbow and arrows.",
    "motives": "Perforate distracted targets, play dead, steal skin",
    "difficulty": 9,
    "thresholds": {
      "major": 4,
      "severe": 7
    },
    "hpMax": 3,
    "stressMax": 2,
    "atk": "+2",
    "attack": {
      "name": "Shortbow",
      "range": "Far",
      "damage": "1d8+1 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Opportunist",
        "type": "Passive",
        "text": "When two or more adversaries are within Very Close range of a creature, all damage the Archer deals to that creature is doubled."
      },
      {
        "name": "Deadly Shot",
        "type": "Action",
        "text": "Make an attack against a Vulnerable target within Far range. On a success, mark a Stress to deal 3d4+8 physical damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Skeleton Dredge",
    "tier": 1,
    "type": "Minion",
    "description": "A clattering pile of bones.",
    "motives": "Fall apart, overwhelm, play dead, steal skin",
    "difficulty": 8,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "-1",
    "attack": {
      "name": "Bone Claws",
      "range": "Melee",
      "damage": "1 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Minion (4)",
        "type": "Passive",
        "text": "The Dredge is defeated when they take any damage. For every 4 damage a PC deals to the Dredge, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Dredges within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 1 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Skeleton Knight",
    "tier": 1,
    "type": "Bruiser",
    "description": "A large armored skeleton with a huge blade.",
    "motives": "Cut down the living, steal skin, wreak havoc",
    "difficulty": 13,
    "thresholds": {
      "major": 7,
      "severe": 13
    },
    "hpMax": 5,
    "stressMax": 2,
    "atk": "+2",
    "attack": {
      "name": "Rusty Greatsword",
      "range": "Melee",
      "damage": "1d10+2 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Terrifying",
        "type": "Passive",
        "text": "When the Knight makes a successful attack, all PCs within Close range lose a Hope and you gain a Fear."
      },
      {
        "name": "Cut to the Bone",
        "type": "Action",
        "text": "Mark a Stress to make an attack against all targets within Very Close range. Targets the Knight succeeds against take 1d8+2 physical damage and must mark a Stress."
      },
      {
        "name": "Dig Two Graves",
        "type": "Reaction",
        "text": "When the Knight is defeated, they make an attack against a target within Very Close range (prioritizing the creature who killed them). On a success, the target takes 1d4+8 physical damage and loses 1d4 Hope."
      }
    ],
    "notes": ""
  },
  {
    "name": "Skeleton Warrior",
    "tier": 1,
    "type": "Standard",
    "description": "A dirt-covered skeleton armed with a rusted blade.",
    "motives": "Feign death, gang up, steal skin",
    "difficulty": 10,
    "thresholds": {
      "major": 4,
      "severe": 8
    },
    "hpMax": 3,
    "stressMax": 2,
    "atk": "+0",
    "attack": {
      "name": "Sword",
      "range": "Melee",
      "damage": "1d6+2 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Only Bones",
        "type": "Passive",
        "text": "The Warrior is resistant to physical damage."
      },
      {
        "name": "Won't Stay Dead",
        "type": "Reaction",
        "text": "When the Warrior is defeated, you can spotlight them and roll a d6. On a result of 6, if there are other adversaries on the battlefield, the Warrior re-forms with no marked HP."
      }
    ],
    "notes": ""
  },
  {
    "name": "Soul-Shattered Mage",
    "tier": 1,
    "type": "Solo",
    "description": "A spellcaster with a psyche broken by knowledge best left hidden.",
    "motives": "Babble in an unknown language, laugh unsettlingly, wield power beyond control",
    "difficulty": 12,
    "thresholds": {
      "major": 8,
      "severe": 15
    },
    "hpMax": 6,
    "stressMax": 5,
    "atk": "+2",
    "attack": {
      "name": "Wormwood Staff",
      "range": "Far",
      "damage": "1d12 mag"
    },
    "experience": "Forbidden Knowledge +2",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Mage can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Broken Magic",
        "type": "Action",
        "text": "Mark a Stress to roll a d6. The Mage uses the corresponding move: 1–2: Dimension Rift. Choose a target within Far range. The target teleports to a point you choose within Close range of their original position and takes 2d6 direct magic damage as their body and mind reassemble. 3–4: Time Dilation. Choose a group of PCs within Far range. Each target is Slowed until they roll with Hope. While Slowed, a target is Vulnerable and must mark a Stress when they move. 5–6: Discordant Visions. Make an attack against up to three targets within Close range. Targets the Mage succeeds against take 2d8 direct magic damage."
      },
      {
        "name": "Feel My Pain",
        "type": "Reaction",
        "text": "When the Mage marks HP, roll a number of d6s equal to the number of Stress the Mage has marked. The Mage deals direct magic damage equal to the total result to all PCs within Very Close range."
      }
    ],
    "notes": ""
  },
  {
    "name": "Spellblade",
    "tier": 1,
    "type": "Leader",
    "description": "A mercenary combining swordplay and magic to deadly effect.",
    "motives": "Blast, command, endure",
    "difficulty": 14,
    "thresholds": {
      "major": 8,
      "severe": 14
    },
    "hpMax": 6,
    "stressMax": 3,
    "atk": "+3",
    "attack": {
      "name": "Empowered Longsword",
      "range": "Melee",
      "damage": "1d8+4 phy/mag"
    },
    "experience": "Magical Knowledge +2",
    "features": [
      {
        "name": "Arcane Steel",
        "type": "Passive",
        "text": "Damage dealt by the Spellblade's standard attack is considered both physical and magic."
      },
      {
        "name": "Suppressing Blast",
        "type": "Action",
        "text": "Mark a Stress and target a group within Far range. All targets must succeed on an Agility Reaction Roll or take 1d8+2 magic damage. You gain a Fear for each target who marked HP from this attack."
      },
      {
        "name": "Move as a Unit",
        "type": "Action",
        "text": "Spend 2 Fear to spotlight up to five allies within Far range."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Spellblade makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Spellbound Armor",
    "tier": 1,
    "type": "Bruiser",
    "description": "An empty suit of full plate armor that glows with a faint corona of ghostly light.",
    "motives": "Clank noisily, move like clockwork, watch silently",
    "difficulty": 10,
    "thresholds": {
      "major": 9,
      "severe": 17
    },
    "hpMax": 6,
    "stressMax": 0,
    "atk": "+0",
    "attack": {
      "name": "Zweihänder",
      "range": "Very Close",
      "damage": "1d10+1 phy"
    },
    "experience": "Guardian +2",
    "features": [
      {
        "name": "Tireless",
        "type": "Passive",
        "text": "The Armor can't be forced to mark Stress. When an effect would cause it to mark Stress, the Armor ignores that part of the effect."
      },
      {
        "name": "Clatter & Recombobulate",
        "type": "Reaction",
        "text": "Once per scene when the Armor is defeated, you can spend a Fear to reactivate it. Clear 2 HP and immediately spotlight it."
      }
    ],
    "notes": ""
  },
  {
    "name": "Swarm of Rats",
    "tier": 1,
    "type": "Horde",
    "description": "A skittering mass of ordinary rodents moving as one like a ravenous wave.",
    "motives": "Consume, obscure, swarm",
    "difficulty": 10,
    "thresholds": {
      "major": 6,
      "severe": 10
    },
    "hpMax": 6,
    "stressMax": 2,
    "atk": "-3",
    "attack": {
      "name": "Claws",
      "range": "Melee",
      "damage": "1d8+2 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Horde (1d4+1)",
        "type": "Passive",
        "text": "When the Swarm has marked half or more of their HP, their standard attack deals 1d4+1 physical damage instead."
      },
      {
        "name": "In Your Face",
        "type": "Passive",
        "text": "All targets within Melee range have disadvantage on attacks against targets other than the Swarm."
      }
    ],
    "notes": ""
  },
  {
    "name": "Sylvan Soldier",
    "tier": 1,
    "type": "Standard",
    "description": "A faerie warrior adorned in armor made of leaves and bark.",
    "motives": "Ambush, hide, overwhelm, protect, trail",
    "difficulty": 11,
    "thresholds": {
      "major": 6,
      "severe": 11
    },
    "hpMax": 4,
    "stressMax": 2,
    "atk": "+0",
    "attack": {
      "name": "Scythe",
      "range": "Melee",
      "damage": "1d8+1 phy"
    },
    "experience": "Tracker +2",
    "features": [
      {
        "name": "Pack Tactics",
        "type": "Passive",
        "text": "If the Soldier makes a standard attack and another Sylvan Soldier is within Melee range of the target, deal 1d8+5 physical damage instead of their standard damage."
      },
      {
        "name": "Forest Control",
        "type": "Action",
        "text": "Spend a Fear to pull down a tree within Close range. A creature hit by the tree must succeed on an Agility Reaction Roll (15) or take 1d10 physical damage."
      },
      {
        "name": "Blend In",
        "type": "Reaction",
        "text": "When the Soldier makes a successful attack, you can mark a Stress to become Hidden until the Soldier's next attack or a PC succeeds on an Instinct Roll (14) to find them."
      }
    ],
    "notes": ""
  },
  {
    "name": "Tangle Bramble Swarm",
    "tier": 1,
    "type": "Horde",
    "description": "A cluster of animate, blood-drinking tumbleweeds, each the size of a large gourd.",
    "motives": "Digest, entangle, immobilize",
    "difficulty": 12,
    "thresholds": {
      "major": 6,
      "severe": 11
    },
    "hpMax": 6,
    "stressMax": 3,
    "atk": "+0",
    "attack": {
      "name": "Thorns",
      "range": "Melee",
      "damage": "1d6+3 phy"
    },
    "experience": "Camouflage +2",
    "features": [
      {
        "name": "Horde (1d4+2)",
        "type": "Passive",
        "text": "When the Swarm has marked half or more of their HP, their standard attack deals 1d4+2 physical damage instead."
      },
      {
        "name": "Crush",
        "type": "Action",
        "text": "Mark a Stress to deal 2d6+8 direct physical damage to a target with 3 or more bramble tokens."
      },
      {
        "name": "Encumber",
        "type": "Reaction",
        "text": "When the Swarm succeeds on an attack, give the target a bramble token. If a target has any bramble tokens, they are Restrained. If a target has 3 or more bramble tokens, they are also Vulnerable. All bramble tokens can be removed by succeeding on a Finesse Roll (12 + the number of bramble tokens) or dealing Major or greater damage to the Swarm. If bramble tokens are removed from a target using a Finesse Roll, a number of Tangle Bramble Minions spawn within Melee range equal to the number of tokens removed."
      }
    ],
    "notes": ""
  },
  {
    "name": "Tangle Bramble",
    "tier": 1,
    "type": "Minion",
    "description": "An animate, blood-drinking tumbleweed.",
    "motives": "Combine, drain, entangle",
    "difficulty": 11,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "-1",
    "attack": {
      "name": "Thorns",
      "range": "Melee",
      "damage": "2 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Minion (4)",
        "type": "Passive",
        "text": "The Bramble is defeated when they take any damage. For every 4 damage a PC deals to the Tangle Bramble, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Tangle Brambles within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage."
      },
      {
        "name": "Drain and Multiply",
        "type": "Reaction",
        "text": "When an attack from the Bramble causes a target to mark HP and there are three or more Tangle Bramble Minions within Close range, you can combine the Minions into a Tangle Bramble Swarm Horde. The Horde's HP is equal to the number of Minions combined."
      }
    ],
    "notes": ""
  },
  {
    "name": "Viper",
    "tier": 1,
    "type": "Minion",
    "description": "A small serpent that envenomates its prey with hinged fangs.",
    "motives": "Lie in wait, slither, strike",
    "difficulty": 11,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "+3",
    "attack": {
      "name": "Bite",
      "range": "Melee",
      "damage": "1 phy"
    },
    "experience": "Grounded +4",
    "features": [
      {
        "name": "Minion (4)",
        "type": "Passive",
        "text": "The Viper is defeated when it takes any damage. For every 4 damage a PC deals to the Viper, the PC defeats an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Venomous",
        "type": "Passive",
        "text": "When the Viper makes a successful standard attack, the target becomes temporarily Envenomated. While Envenomated, the target must mark a Stress whenever they make an action roll."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Vipers within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 1 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Waxwork Creation",
    "tier": 1,
    "type": "Solo",
    "description": "A ten-foot-tall, semisolid (and semisentient) candle wax construct.",
    "motives": "Lumber menacingly, moan with the pain of unlife, smother",
    "difficulty": 13,
    "thresholds": {
      "major": 8,
      "severe": 15
    },
    "hpMax": 10,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Fists",
      "range": "Very Close",
      "damage": "1d20 phy"
    },
    "experience": "Giant-Sized +2",
    "features": [
      {
        "name": "Relentless (2)",
        "type": "Passive",
        "text": "The Creation can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight it."
      },
      {
        "name": "No Vital Organs",
        "type": "Passive",
        "text": "The Creation doesn't take extra damage from attacks that critically succeed against it."
      },
      {
        "name": "Wax Ball",
        "type": "Action",
        "text": "Mark a Stress to have the Creation throw a ball of wax at a target within Far range. Make an attack against the target. On a success, the target takes 1d12+2 physical damage and becomes Restrained until they succeed on a Strength Roll (15)."
      },
      {
        "name": "Splutch!",
        "type": "Reaction",
        "text": "When a PC within Melee range of the Creation makes a weapon attack against it, roll a d6. On a 5 or higher, the attacker's weapon gets stuck in the Creation and can be removed only with a successful Strength Roll (15)."
      },
      {
        "name": "Smothering Grapple",
        "type": "Reaction",
        "text": "When the Creation makes a successful standard attack against a target within Melee range, you can spend a Fear to Trap the target inside the Creation's wax body. While Trapped, the target is Restrained and must mark a Stress and move with the Creation each time it's spotlighted. A Trapped creature is freed when the Creation takes Major or greater damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Weaponmaster",
    "tier": 1,
    "type": "Bruiser",
    "description": "A master-at-arms wielding a sword twice their size.",
    "motives": "Act first, aim for the weakest, intimidate",
    "difficulty": 14,
    "thresholds": {
      "major": 8,
      "severe": 15
    },
    "hpMax": 6,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Claymore",
      "range": "Very Close",
      "damage": "1d12+2 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Goading Strike",
        "type": "Action",
        "text": "Make a standard attack against a target. On a success, mark a Stress to Taunt the target until their next successful attack. The next time the Taunted target attacks, they have disadvantage against targets other than the Weaponmaster."
      },
      {
        "name": "Adrenaline Burst",
        "type": "Action",
        "text": "Once per scene, spend a Fear to clear 2 HP and 2 Stress."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Weaponmaster makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Will-o'-the-Wisps",
    "tier": 1,
    "type": "Horde",
    "description": "Lazily floating orbs of color-shifting werelight.",
    "motives": "Dazzle and distract, disorient, lead astray",
    "difficulty": 9,
    "thresholds": {
      "major": 5,
      "severe": 9
    },
    "hpMax": 4,
    "stressMax": 2,
    "atk": "-3",
    "attack": {
      "name": "Flash",
      "range": "Close",
      "damage": "1d4+2 mag"
    },
    "experience": "Darkness +3",
    "features": [
      {
        "name": "Horde (1d4−1)",
        "type": "Passive",
        "text": "When the Will-o'-the-Wisps have marked half or more of their HP, their standard attack deals 1d4−1 magic damage instead."
      },
      {
        "name": "Kaleidoscopic",
        "type": "Passive",
        "text": "The Will-o'-the-Wisps pulse and dance in hypnotic, color-changing patterns that entrance any creature who looks upon them. All targets within Very Close range of the Will-o'-the-Wisps are Vulnerable."
      },
      {
        "name": "Fascinating",
        "type": "Action",
        "text": "Spend a Fear to have the Will-o'-the-Wisps trace looping light trails through the air, leaving afterimages that beg to be deciphered. Each PC within Far range must succeed on an Instinct Reaction Roll (13) or mark a Stress and move up to Close range toward the Will-o'-the-Wisps."
      }
    ],
    "notes": ""
  },
  {
    "name": "Young Dryad",
    "tier": 1,
    "type": "Leader",
    "description": "An imperious tree-person leading their forest's defenses.",
    "motives": "Command, nurture, prune the unwelcome",
    "difficulty": 11,
    "thresholds": {
      "major": 6,
      "severe": 11
    },
    "hpMax": 6,
    "stressMax": 2,
    "atk": "+0",
    "attack": {
      "name": "Scythe",
      "range": "Melee",
      "damage": "1d8+5 phy"
    },
    "experience": "Leadership +3",
    "features": [
      {
        "name": "Voice of the Forest",
        "type": "Action",
        "text": "Mark a Stress to spotlight 1d4 allies within range of a target they can attack without moving. On a success, their attacks deal half damage."
      },
      {
        "name": "Thorny Cage",
        "type": "Action",
        "text": "Spend a Fear to form a cage around a target within Very Close range and Restrain them until they're freed with a successful Strength Roll. When a creature makes an action roll against the cage, they must mark a Stress."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Dryad makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Yufo",
    "tier": 1,
    "type": "Social",
    "description": "A large, interdimensional jellyfishlike creature that floats in and out of the timestream.",
    "motives": "Exchange information about possible timelines, feed on heightened emotions, watch from the shadows",
    "difficulty": 14,
    "thresholds": {
      "major": 6,
      "severe": 10
    },
    "hpMax": 3,
    "stressMax": 5,
    "atk": "-3",
    "attack": {
      "name": "Tentacle Lash",
      "range": "Very Close",
      "damage": "1d6+3 phy"
    },
    "experience": "Secrets +3, Floating Oddity +3",
    "features": [
      {
        "name": "Telepathic",
        "type": "Passive",
        "text": "The Yufo can mentally communicate with creatures within Very Far range."
      },
      {
        "name": "Psychic Strongbox",
        "type": "Passive",
        "text": "The Yufo is immune to abilities and features that would affect or alter its thoughts or emotions."
      },
      {
        "name": "Glitch Wave",
        "type": "Action",
        "text": "Spend a Fear and choose up to three targets within Close range. Each target must succeed on a Instinct Reaction Roll or become desynced from reality and have disadvantage on Instinct Rolls until they use a downtime move to ground their psyches in the now."
      },
      {
        "name": "Temporal Corrosion",
        "type": "Reaction",
        "text": "When the Yufo succeeds on a standard attack, you can mark a Stress to have the Yufo excrete an entropic acid through its skin, giving the target a −2 penalty to their damage thresholds until they use a downtime move to repair their armor."
      }
    ],
    "notes": ""
  },
  {
    "name": "Brawny Zombie",
    "tier": 1,
    "type": "Bruiser",
    "description": "A large corpse, decay-bloated and angry.",
    "motives": "Crush, destroy, hail debris, slam",
    "difficulty": 10,
    "thresholds": {
      "major": 8,
      "severe": 15
    },
    "hpMax": 7,
    "stressMax": 4,
    "atk": "+2",
    "attack": {
      "name": "Slam",
      "range": "Very Close",
      "damage": "1d12+3 phy"
    },
    "experience": "Collateral Damage +2, Throw +4",
    "features": [
      {
        "name": "Slow",
        "type": "Passive",
        "text": "When you spotlight the Zombie and they don't have a token on their stat block, they can't act yet. Place a token on their stat block and describe what they're preparing to do. When you spotlight the Zombie and they have a token on their stat block, clear the token and they can act."
      },
      {
        "name": "Rend Asunder",
        "type": "Action",
        "text": "Make a standard attack with advantage against a target the Zombie has Restrained. On a success, the attack deals direct damage."
      },
      {
        "name": "Rip and Tear",
        "type": "Reaction",
        "text": "When the Zombies makes a successful standard attack, you can mark a Stress to temporarily Restrain the target and force them to mark 2 Stress."
      }
    ],
    "notes": ""
  },
  {
    "name": "Patchwork Zombie Hulk",
    "tier": 1,
    "type": "Solo",
    "description": "A towering gestalt of corpses moving as one, with torso-sized limbs and fists as large as a grown halfling.",
    "motives": "Absorb corpses, flail, hunger, terrify",
    "difficulty": 13,
    "thresholds": {
      "major": 8,
      "severe": 15
    },
    "hpMax": 10,
    "stressMax": 3,
    "atk": "+4",
    "attack": {
      "name": "Too Many Arms",
      "range": "Very Close",
      "damage": "1d20 phy"
    },
    "experience": "Intimidation +2, Tear Things Apart +2",
    "features": [
      {
        "name": "Destructible",
        "type": "Passive",
        "text": "When the Zombie takes Major or greater damage, they mark an additional HP."
      },
      {
        "name": "Flailing Limbs",
        "type": "Passive",
        "text": "When the Zombie makes a standard attack, they can attack all targets within Very Close range."
      },
      {
        "name": "Another for the Pile",
        "type": "Action",
        "text": "When the Zombie is within Very Close range of a corpse, they can incorporate it into themselves, clearing a HP and a Stress."
      },
      {
        "name": "Tormented Screams",
        "type": "Action",
        "text": "Mark a Stress to cause all PCs within Far range to make a Presence Reaction Roll (13). Targets who fail lose a Hope and you gain a Fear for each. Targets who succeed must mark a Stress."
      }
    ],
    "notes": ""
  },
  {
    "name": "Rotted Zombie",
    "tier": 1,
    "type": "Minion",
    "description": "A decaying corpse ambling toward their prey.",
    "motives": "Eat flesh, hunger, maul, surround",
    "difficulty": 8,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "-3",
    "attack": {
      "name": "Bite",
      "range": "Melee",
      "damage": "2 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Minion (3)",
        "type": "Passive",
        "text": "The Zombie is defeated when they take any damage. For every 3 damage a PC deals to the Zombie, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Rotted Zombies within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Shambling Zombie",
    "tier": 1,
    "type": "Standard",
    "description": "An animated corpse that moves shakily, driven only by hunger.",
    "motives": "Devour, hungry, mob enemy, shred flesh",
    "difficulty": 10,
    "thresholds": {
      "major": 4,
      "severe": 6
    },
    "hpMax": 4,
    "stressMax": 1,
    "atk": "+0",
    "attack": {
      "name": "Bite",
      "range": "Melee",
      "damage": "1d6+1 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Too Many to Handle",
        "type": "Passive",
        "text": "When the Zombie is within Melee range of a creature and at least one other Zombie is within Close range, all attacks against that creature have advantage."
      },
      {
        "name": "Horrifying",
        "type": "Passive",
        "text": "Targets who mark HP from the Zombie's attacks must also mark a Stress."
      }
    ],
    "notes": ""
  },
  {
    "name": "Zombie Pack",
    "tier": 1,
    "type": "Horde",
    "description": "A group of shambling corpses instinctively moving together.",
    "motives": "Consume flesh, hunger, maul",
    "difficulty": 8,
    "thresholds": {
      "major": 6,
      "severe": 12
    },
    "hpMax": 6,
    "stressMax": 3,
    "atk": "-1",
    "attack": {
      "name": "Bite",
      "range": "Melee",
      "damage": "1d10+2 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Horde (1d4+2)",
        "type": "Passive",
        "text": "When the Zombies have marked half or more of their HP, their standard attack deals 1d4+2 physical damage instead."
      },
      {
        "name": "Overwhelm",
        "type": "Reaction",
        "text": "When the Zombies mark HP from an attack within Melee range, you can mark a Stress to make a standard attack against the attacker."
      }
    ],
    "notes": ""
  },
  {
    "name": "Archer Squadron",
    "tier": 2,
    "type": "Horde",
    "description": "A group of trained archers bearing massive bows.",
    "motives": "Stick together, survive, volley fire",
    "difficulty": 13,
    "thresholds": {
      "major": 8,
      "severe": 16
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+0",
    "attack": {
      "name": "Longbow",
      "range": "Far",
      "damage": "2d6+3 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Horde (1d6+3)",
        "type": "Passive",
        "text": "When the Squadron has marked half or more of their HP, their standard attack deals 1d6+3 physical damage instead."
      },
      {
        "name": "Focused Volley",
        "type": "Action",
        "text": "Spend a Fear to target a point within Far range. Make an attack with advantage against all targets within Close range of that point. Targets the Squadron succeeds against take 1d10+4 physical damage."
      },
      {
        "name": "Suppressing Fire",
        "type": "Action",
        "text": "Mark a Stress to target a point within Far range. Until the next roll with Fear, a creature who moves within Close range of that point must make an Agility Reaction Roll. On a failure, they take 2d6+3 physical damage. On a success, they take half damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Apprentice Assassin",
    "tier": 2,
    "type": "Minion",
    "description": "A young trainee eager to prove themselves.",
    "motives": "Act reckless, kill, prove their worth, show off",
    "difficulty": 13,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "-1",
    "attack": {
      "name": "Thrown Dagger",
      "range": "Very Close",
      "damage": "4 phy"
    },
    "experience": "Intrusion +2",
    "features": [
      {
        "name": "Minion (6)",
        "type": "Passive",
        "text": "The Assassin is defeated when they take any damage. For every 6 damage a PC deals to the Assassin, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Apprentice Assassins within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 4 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Assassin Poisoner",
    "tier": 2,
    "type": "Skulk",
    "description": "A cunning scoundrel skilled in both poisons and ambushing.",
    "motives": "Anticipate, get paid, kill, taint food and water",
    "difficulty": 14,
    "thresholds": {
      "major": 8,
      "severe": 16
    },
    "hpMax": 4,
    "stressMax": 4,
    "atk": "+3",
    "attack": {
      "name": "Poisoned Throwing Dagger",
      "range": "Close",
      "damage": "2d8+1 phy"
    },
    "experience": "Intrusion +2",
    "features": [
      {
        "name": "Grindletooth Venom",
        "type": "Passive",
        "text": "Targets who mark HP from the Assassin's attacks are Vulnerable until they clear a HP."
      },
      {
        "name": "Out of Nowhere",
        "type": "Passive",
        "text": "The Assassin has advantage on attacks if they are Hidden."
      },
      {
        "name": "Fumigation",
        "type": "Action",
        "text": "Drop a smoke bomb that fills the air within Close range with smoke, Dizzying all targets in this area. Dizzied targets have disadvantage on their next action roll, then clear the condition."
      }
    ],
    "notes": ""
  },
  {
    "name": "Master Assassin",
    "tier": 2,
    "type": "Leader",
    "description": "A seasoned killer with a threatening voice and a deadly blade.",
    "motives": "Ambush, get out alive, kill, prepare for all scenarios",
    "difficulty": 15,
    "thresholds": {
      "major": 12,
      "severe": 25
    },
    "hpMax": 7,
    "stressMax": 5,
    "atk": "+5",
    "attack": {
      "name": "Serrated Dagger",
      "range": "Close",
      "damage": "2d10+2 phy"
    },
    "experience": "Command +3, Intrusion +3",
    "features": [
      {
        "name": "Won't See It Coming",
        "type": "Passive",
        "text": "The Assassin deals direct damage while they're Hidden."
      },
      {
        "name": "Strike as One",
        "type": "Action",
        "text": "Mark a Stress to spotlight a number of other Assassins equal to the Assassin's unmarked Stress."
      },
      {
        "name": "The Subtle Blade",
        "type": "Reaction",
        "text": "When the Assassin successfully makes a standard attack against a Vulnerable target, you can spend a Fear to deal Severe damage instead of their standard damage."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Assassin makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Banshee",
    "tier": 2,
    "type": "Skulk",
    "description": "A corrupted fey spirit that haunts the night in the form of a willowy specter wearing a luminous gossamer gown.",
    "motives": "Ambush from inside solid objects, frighten to death, mourn life and beauty lost, scream balefully",
    "difficulty": 14,
    "thresholds": {
      "major": 9,
      "severe": 18
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Fingernails",
      "range": "Melee",
      "damage": "2d6+1 mag"
    },
    "experience": "Vain +3, Wrathful +3",
    "features": [
      {
        "name": "Specter",
        "type": "Passive",
        "text": "The Banshee has resistance to physical damage. Mark a Stress to move up to Close range through solid objects."
      },
      {
        "name": "Terrifying",
        "type": "Passive",
        "text": "When the Banshee makes a successful attack, all PCs within Close range lose a Hope, and you gain a Fear."
      },
      {
        "name": "Scare Tactic",
        "type": "Action",
        "text": "Up to three times per scene, spend a Fear to have the Banshee teleport up to Very Far range and scare a PC within Melee range. The PC marks 1d4 Stress. If this causes them to mark HP, they also lose a Hope."
      },
      {
        "name": "Wail of Despair",
        "type": "Action",
        "text": "Mark a Stress to have the Banshee unleash a mournful scream of pain and anguish. Each PC within Close range must make a Presence Reaction Roll. Targets who succeed take 1d12+1 magic damage. Targets who fail take double damage and are knocked back to Close range."
      }
    ],
    "notes": ""
  },
  {
    "name": "Basilisk",
    "tier": 2,
    "type": "Standard",
    "description": "A six-legged monitor lizard that has the head of a vulture, a spiked backbone, and a petrifying gaze.",
    "motives": "Move slow and steady, savor petrified prey, turn everyone to stone, watch and wait",
    "difficulty": 14,
    "thresholds": {
      "major": 8,
      "severe": 19
    },
    "hpMax": 4,
    "stressMax": 4,
    "atk": "+1",
    "attack": {
      "name": "Jaws & Claws",
      "range": "Melee",
      "damage": "2d6+4 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Petrify",
        "type": "Action",
        "text": "Spend a Fear to force a PC within Far range to make an Instinct Reaction Roll. On a success, the target marks a Stress. On a failure, the target becomes Stiff. If the target is already Stiff, they become Petrified. While Stiff, the PC must mark a Stress each time they act until they take a rest or the Basilisk is defeated. While Petrified, the PC can't act. The Petrified condition can be cleared only by applying Basilisk saliva to the target."
      },
      {
        "name": "CRONCH!",
        "type": "Action",
        "text": "Mark a Stress to have the Basilisk chomp down on a Petrified PC within Melee range. The target must make a death move."
      }
    ],
    "notes": ""
  },
  {
    "name": "Battle Box",
    "tier": 2,
    "type": "Solo",
    "description": "A cube-shaped construct with a different rune on each of their six sides.",
    "motives": "Change tactics, trample foes, wait in disguise",
    "difficulty": 15,
    "thresholds": {
      "major": 10,
      "severe": 20
    },
    "hpMax": 8,
    "stressMax": 6,
    "atk": "+2",
    "attack": {
      "name": "Slam",
      "range": "Melee",
      "damage": "2d6+3 phy"
    },
    "experience": "Camouflage +2",
    "features": [
      {
        "name": "Relentless (2)",
        "type": "Passive",
        "text": "The Box can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Randomized Tactics",
        "type": "Action",
        "text": "Mark a Stress and roll a d6. The Box uses the corresponding move: 1. Mana Beam. The Box fires a searing beam. Make an attack against a target within Far range. On a success, deal 2d10+2 magic damage. 2. Fire Jets. The Box shoots into the air, spinning and releasing jets of flame. Make an attack against all targets within Close range. Targets the Box succeeds against take 2d8 physical damage. 3. Trample. The Box rockets around erratically. Make an attack against all PCs within Close range. Targets the Box succeeds against take 1d6+5 physical damage and are Vulnerable until their next roll with Hope. 4. Shocking Gas. The Box sprays out a silver gas sparking with lightning. All targets within Close range must succeed on a Finesse Reaction Roll or mark 3 Stress. 5. Stunning Clap. The Box leaps and their sides clap, creating a small sonic boom. All targets within Very Close range must succeed on a Strength Reaction Roll or become Vulnerable until the cube is defeated. 6. Psionic Whine. The Box releases a cluster of mechanical bees whose buzz rattles mortal minds. All targets within Close range must succeed on a Presence Reaction Roll or take 2d4+9 direct magic damage."
      },
      {
        "name": "Overcharge",
        "type": "Reaction",
        "text": "Before rolling damage for the Box's attack, you can mark a Stress to add a d6 to the damage roll. Additionally, you gain a Fear."
      },
      {
        "name": "Death Quake",
        "type": "Reaction",
        "text": "When the Box marks their last HP, the magic powering them ruptures in an explosion of force. All targets within Close range must succeed on an Instinct Reaction Roll or take 2d8+1 magic damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Berserker Alpha",
    "tier": 2,
    "type": "Leader",
    "description": "A veteran commander who quaffs magic elixirs to change into a beast and lead their packmates on a hunt.",
    "motives": "Embrace the change, howl at the moon, lead the pack, run down enemies",
    "difficulty": 14,
    "thresholds": {
      "major": 13,
      "severe": 26
    },
    "hpMax": 6,
    "stressMax": 4,
    "atk": "+3",
    "attack": {
      "name": "Tooth & Claw",
      "range": "Melee",
      "damage": "2d10+2 phy"
    },
    "experience": "Hunt +3, Keen Senses +2",
    "features": [
      {
        "name": "Pack Fury",
        "type": "Passive",
        "text": "The Alpha gains a +1 bonus to their attack rolls for each ally within Very Close range of their attack's target."
      },
      {
        "name": "Bark at the Moon",
        "type": "Action",
        "text": "Once per scene, spend a Fear to have each ally within Close range of the Alpha clear a HP and a Stress."
      },
      {
        "name": "Berserker Rage",
        "type": "Reaction",
        "text": "The first time in a scene the Alpha marks their last Stress, they gain a +6 bonus to damage rolls."
      }
    ],
    "notes": ""
  },
  {
    "name": "Berserker Initiate",
    "tier": 2,
    "type": "Standard",
    "description": "A raging warrior who imbibes ritualistic concoctions to enhance their form with aspects of a predatory beast.",
    "motives": "Coordinate with packmates, dance around the fire, howl at the moon",
    "difficulty": 13,
    "thresholds": {
      "major": 9,
      "severe": 18
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Tooth & Claw",
      "range": "Melee",
      "damage": "2d10 phy"
    },
    "experience": "Hunt +3",
    "features": [
      {
        "name": "Pack Fury",
        "type": "Passive",
        "text": "The Initiate gains a +1 bonus to their attack rolls for each ally within Very Close range of their attack's target."
      },
      {
        "name": "Berserker Rage",
        "type": "Reaction",
        "text": "The first time in a scene the Initiate marks their last Stress, they gain a +4 bonus to damage rolls."
      }
    ],
    "notes": ""
  },
  {
    "name": "Centaur Warden",
    "tier": 2,
    "type": "Ranged",
    "description": "A half-human, half-horse guardian who patrols the borders of idyllic lands uncorrupted by the touch of civilization.",
    "motives": "Live in harmony with nature, protect the wilderness, use mobility and distance to drive off intruders",
    "difficulty": 14,
    "thresholds": {
      "major": 10,
      "severe": 19
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Recurved Bow",
      "range": "Far",
      "damage": "2d8+4 phy"
    },
    "experience": "Nature +2, Philosophy +2",
    "features": [
      {
        "name": "Flanking Maneuver",
        "type": "Passive",
        "text": "When the Warden makes a standard attack against a target within Melee range of one or more of the Warden's allies, the Warden gains a +2 bonus to the attack roll."
      },
      {
        "name": "Eye of the Sage",
        "type": "Action",
        "text": "Mark a Stress to make a standard attack. The Warden has advantage on the attack roll and critically succeeds on a roll of 19–20."
      },
      {
        "name": "Trample",
        "type": "Action",
        "text": "Spend a Fear to have the Warden gallop up to Far range in a straight line. Each target in their path must make an Agility Reaction Roll. Targets who succeed take 1d6+2 physical damage. Targets who fail take double damage and must mark a Stress."
      },
      {
        "name": "Quick Volley",
        "type": "Reaction",
        "text": "When the Warden makes a standard attack, you can mark any number of Stress to target an equal number of additional creatures within range."
      }
    ],
    "notes": ""
  },
  {
    "name": "Chaos Skull",
    "tier": 2,
    "type": "Ranged",
    "description": "A floating humanoid skull animated by scintillating magic.",
    "motives": "Cackle, consume magic, serve creator",
    "difficulty": 15,
    "thresholds": {
      "major": 8,
      "severe": 16
    },
    "hpMax": 5,
    "stressMax": 4,
    "atk": "+2",
    "attack": {
      "name": "Energy Blast",
      "range": "Close",
      "damage": "2d8+3 mag"
    },
    "experience": "",
    "features": [
      {
        "name": "Levitation",
        "type": "Passive",
        "text": "The Skull levitates several feet off the ground and can't be Restrained."
      },
      {
        "name": "Wards",
        "type": "Passive",
        "text": "The Skull is resistant to magic damage."
      },
      {
        "name": "Magic Burst",
        "type": "Action",
        "text": "Mark a Stress to make an attack against all targets within Close range. Targets the Skull succeeds against take 2d6+4 magic damage."
      },
      {
        "name": "Siphon Magic",
        "type": "Action",
        "text": "Spend a Fear to make an attack against a PC with a Spellcast trait within Very Close range. On a success, the target marks 1d4 Stress and the Skull clears that many Stress. Additionally, on a success, the Skull can immediately be spotlighted again."
      }
    ],
    "notes": ""
  },
  {
    "name": "Chicken-Foot Hut",
    "tier": 2,
    "type": "Bruiser",
    "description": "A tall wooden shack that moves around on giant chicken legs.",
    "motives": "Claw, protect master, run and jump, trample",
    "difficulty": 16,
    "thresholds": {
      "major": 14,
      "severe": 27
    },
    "hpMax": 8,
    "stressMax": 2,
    "atk": "+2",
    "attack": {
      "name": "Clawed Feet",
      "range": "Very Close",
      "damage": "2d10+3 phy"
    },
    "experience": "Forests +2",
    "features": [
      {
        "name": "Fast",
        "type": "Passive",
        "text": "The Hut can move up to Far range when spotlighted."
      },
      {
        "name": "Double Strike",
        "type": "Action",
        "text": "Mark a Stress to make two standard attacks. If both attacks succeed against the same target, combine the damage."
      },
      {
        "name": "Pin",
        "type": "Reaction",
        "text": "When the Hut makes a successful standard attack, you can mark a Stress to temporarily Restrain the target. The Hut drags the Restrained target when it moves."
      }
    ],
    "notes": ""
  },
  {
    "name": "Conscript",
    "tier": 2,
    "type": "Minion",
    "description": "A poorly trained civilian pressed into war.",
    "motives": "Follow orders, gang up, survive",
    "difficulty": 12,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "+0",
    "attack": {
      "name": "Spears",
      "range": "Very Close",
      "damage": "6 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Minion (6)",
        "type": "Passive",
        "text": "The Conscript is defeated when they take any damage. For every 6 damage a PC deals to the Conscript, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Conscripts within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 6 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Courtesan",
    "tier": 2,
    "type": "Social",
    "description": "An accomplished manipulator and master of the social arts.",
    "motives": "Entice, maneuver, secure patrons",
    "difficulty": 13,
    "thresholds": {
      "major": 7,
      "severe": 13
    },
    "hpMax": 3,
    "stressMax": 4,
    "atk": "-3",
    "attack": {
      "name": "Dagger",
      "range": "Melee",
      "damage": "1d4+3 phy"
    },
    "experience": "Manipulation +3, Socialite +3",
    "features": [
      {
        "name": "Searing Glance",
        "type": "Reaction",
        "text": "When a PC within Close range makes a Presence Roll, you can mark a Stress to cast a gaze toward the aftermath. On the target's failure, they must mark 2 Stress and are Vulnerable until the scene ends or they succeed on a social action against the Courtesan. On the target's success, they must mark a Stress."
      }
    ],
    "notes": ""
  },
  {
    "name": "Cult Adept",
    "tier": 2,
    "type": "Support",
    "description": "An experienced mage wielding shadow and fear.",
    "motives": "Curry favor, hinder foes, uncover knowledge",
    "difficulty": 14,
    "thresholds": {
      "major": 9,
      "severe": 18
    },
    "hpMax": 4,
    "stressMax": 6,
    "atk": "+2",
    "attack": {
      "name": "Rune-Covered Rod",
      "range": "Far",
      "damage": "2d4+3 mag"
    },
    "experience": "Fallen Lore +2, Rituals +2",
    "features": [
      {
        "name": "Enervating Blast",
        "type": "Action",
        "text": "Spend a Fear to make a standard attack against a target within range. On a success, the target must mark a Stress."
      },
      {
        "name": "Shroud of the Fallen",
        "type": "Action",
        "text": "Mark a Stress to wrap an ally within Close range in a shroud of Protection until the Adept marks their last HP. While Protected, the target has resistance to all damage."
      },
      {
        "name": "Shadow Shackles",
        "type": "Action",
        "text": "Spend a Fear and choose a point within Far range. All targets within Close range of that point are Restrained in smoky chains until they break free with a successful Strength or Instinct Roll. A target Restrained by this feature must spend a Hope to make an action roll."
      },
      {
        "name": "Fear Is Fuel",
        "type": "Reaction",
        "text": "Twice per scene, when a PC rolls a failure with Fear, clear a Stress."
      }
    ],
    "notes": ""
  },
  {
    "name": "Cult Fang",
    "tier": 2,
    "type": "Skulk",
    "description": "A professional killer-turned-cultist.",
    "motives": "Capture sacrifices, isolate prey, rise in the ranks",
    "difficulty": 15,
    "thresholds": {
      "major": 9,
      "severe": 17
    },
    "hpMax": 4,
    "stressMax": 4,
    "atk": "+2",
    "attack": {
      "name": "Long Knife",
      "range": "Melee",
      "damage": "2d8+4 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Shadow's Embrace",
        "type": "Passive",
        "text": "The Fang can climb and walk on vertical surfaces. Mark a Stress to move from one shadow to another within Far range."
      },
      {
        "name": "Pick Off the Straggler",
        "type": "Action",
        "text": "Mark a Stress to cause a target within Melee range to make an Instinct Reaction Roll. On a failure, the target must mark 2 Stress and is teleported with the Fang to a shadow within Far range, making them temporarily Vulnerable. On a success, the target must mark a Stress."
      }
    ],
    "notes": ""
  },
  {
    "name": "Cult Initiate",
    "tier": 2,
    "type": "Minion",
    "description": "A low-ranking cultist in simple robes, eager to gain power.",
    "motives": "Follow orders, gain power, seek forbidden knowledge",
    "difficulty": 13,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "+0",
    "attack": {
      "name": "Ritual Dagger",
      "range": "Melee",
      "damage": "5 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Minion (6)",
        "type": "Passive",
        "text": "The Initiate is defeated when they take any damage. For every 6 damage a PC deals to the Initiate, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Cult Initiates within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Demonic Hound Pack",
    "tier": 2,
    "type": "Horde",
    "description": "Unnatural hounds lit from within by hellfire.",
    "motives": "Cause fear, consume flesh, please masters",
    "difficulty": 15,
    "thresholds": {
      "major": 11,
      "severe": 23
    },
    "hpMax": 6,
    "stressMax": 3,
    "atk": "+0",
    "attack": {
      "name": "Claws and Fangs",
      "range": "Melee",
      "damage": "2d8+2 phy"
    },
    "experience": "Scent Tracking +3",
    "features": [
      {
        "name": "Horde (2d4+1)",
        "type": "Passive",
        "text": "When the Pack has marked half or more of their HP, their standard attack deals 2d4+1 physical damage instead."
      },
      {
        "name": "Dreadhowl",
        "type": "Action",
        "text": "Mark a Stress to make all targets within Very Close range lose a Hope. If a target is not able to lose a Hope, they must instead mark 2 Stress."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Pack makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Dire Pangolati",
    "tier": 2,
    "type": "Bruiser",
    "description": "A carriage-sized pangolin-coati hybrid covered in armor plating. It has a bladed tail it uses to fling razor-sharp scales.",
    "motives": "Escape with a meal, slice and dice, wade into danger",
    "difficulty": 14,
    "thresholds": {
      "major": 14,
      "severe": 28
    },
    "hpMax": 7,
    "stressMax": 4,
    "atk": "+2",
    "attack": {
      "name": "Tail Slash",
      "range": "Very Close",
      "damage": "2d12+3 phy"
    },
    "experience": "Climbing +3, Scent Tracking +3",
    "features": [
      {
        "name": "Armor Eater",
        "type": "Passive",
        "text": "When the Pangolati makes a successful attack against a PC, that PC must mark an additional Armor Slot to reduce the severity of the damage."
      },
      {
        "name": "Blade Spin",
        "type": "Action",
        "text": "Spend a Fear to have the Pangolati quickly spin in a circle. Each target within Very Close range must succeed on an Agility Reaction Roll or take 2d8 physical damage."
      },
      {
        "name": "Blade Fling",
        "type": "Action",
        "text": "Mark a Stress to have the Pangolati flick its tail and fling a razor-edged armor plate. Make an attack against a target within Far range. On a success, the attack deals 2d6+10 physical damage."
      },
      {
        "name": "Keratin Scales",
        "type": "Reaction",
        "text": "When the Pangolati would mark HP from an attack, you can mark a Stress to reduce the number of HP it marks by 1."
      }
    ],
    "notes": ""
  },
  {
    "name": "Doppelhound",
    "tier": 2,
    "type": "Skulk",
    "description": "A vicious magical canid that has glowing eyes and two barbed, whiplike tails. It confuses enemies by conjuring an illusory duplicate of itself.",
    "motives": "Ambush prey, kill for sport, play with food, trick and deceive",
    "difficulty": 14,
    "thresholds": {
      "major": 9,
      "severe": 17
    },
    "hpMax": 4,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Barbed Tail Whip",
      "range": "Very Close",
      "damage": "2d8+2 phy"
    },
    "experience": "Shadows +3",
    "features": [
      {
        "name": "Blink Beast",
        "type": "Passive",
        "text": "When combat begins, place a duplicate within Close range of the Doppelhound. The Doppelhound occupies both its place and its duplicate's. The duplicate can move when the Doppelhound is spotlighted, and the Doppelhound can target enemies with attacks as if it were in its duplicate's place. When the Doppelhound or duplicate is attacked, the attacker rolls a d6. On an even result, they target the Doppelhound. On an odd result, they target the duplicate, and the attack fails. If an attack succeeds against the Doppelhound, the duplicate is dispelled until you spend a Fear to conjure it again."
      },
      {
        "name": "Double Strike",
        "type": "Action",
        "text": "Mark a Stress to make two standard attacks. If both attacks succeed against the same target, combine the damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Dragon Knight",
    "tier": 2,
    "type": "Bruiser",
    "description": "A knight clad in dragonplate armor and a helmet in the shape of a dragon's head.",
    "motives": "Exploit an opening, get some distance, knock enemies off-balance, strike from above",
    "difficulty": 15,
    "thresholds": {
      "major": 15,
      "severe": 30
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Lance",
      "range": "Very Close",
      "damage": "2d12+3 phy"
    },
    "experience": "Jousts +2",
    "features": [
      {
        "name": "High Ground",
        "type": "Passive",
        "text": "The Knight gains advantage on attacks made against targets below them."
      },
      {
        "name": "Leaping Strike",
        "type": "Action",
        "text": "Mark a Stress to have the Knight leap into Melee range of a target within Far range and make a standard attack against them. On a success, the attack deals an extra 1d12 damage, and the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage)."
      },
      {
        "name": "Comeback",
        "type": "Reaction",
        "text": "When the Knight fails a standard attack, you can spend a Fear to reroll the attack with advantage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Electric Eels",
    "tier": 2,
    "type": "Horde",
    "description": "A swarm of eels that encircle and electrocute.",
    "motives": "Avoid larger predators, shock prey, tear apart",
    "difficulty": 14,
    "thresholds": {
      "major": 10,
      "severe": 20
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+0",
    "attack": {
      "name": "Shocking Bite",
      "range": "Melee",
      "damage": "2d6+4 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Horde (2d4+1)",
        "type": "Passive",
        "text": "When the Eels have marked half or more of their HP, their standard attack deals 2d4+1 physical damage instead."
      },
      {
        "name": "Paralyzing Shock",
        "type": "Action",
        "text": "Mark a Stress to make a standard attack against all targets within Very Close range. You gain a Fear for each target that marks HP."
      }
    ],
    "notes": ""
  },
  {
    "name": "Elephant",
    "tier": 2,
    "type": "Bruiser",
    "description": "A huge pachyderm that has large ears and a prehensile trunk.",
    "motives": "Eat vegetation, protect the herd, socialize",
    "difficulty": 15,
    "thresholds": {
      "major": 14,
      "severe": 28
    },
    "hpMax": 6,
    "stressMax": 3,
    "atk": "+3",
    "attack": {
      "name": "Feet & Tusks",
      "range": "Very Close",
      "damage": "2d12 phy"
    },
    "experience": "Huge +2, Never Forgets +2",
    "features": [
      {
        "name": "Trample",
        "type": "Action",
        "text": "Mark a Stress to have the Elephant charge up to Far range in a straight line. Each target in its path must succeed on an Agility Reaction Roll or take 2d10+3 physical damage."
      },
      {
        "name": "Toss",
        "type": "Reaction",
        "text": "When the Elephant makes a successful standard attack, you can spend a Fear to have it toss the target to another location within Close range and deal an extra 1d12 damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Elite Soldier",
    "tier": 2,
    "type": "Standard",
    "description": "An armored squire or experienced commoner looking to advance.",
    "motives": "Gain glory, keep order, make alliances",
    "difficulty": 15,
    "thresholds": {
      "major": 9,
      "severe": 18
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Spear",
      "range": "Very Close",
      "damage": "2d8+4 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Reinforce",
        "type": "Action",
        "text": "Mark a Stress to move into Melee range of an ally and make a standard attack against a target within Very Close range. On a success, deal 2d10+2 physical damage and the ally can clear a Stress."
      },
      {
        "name": "Vassal's Loyalty",
        "type": "Reaction",
        "text": "When the Soldier is within Very Close range of a knight or other noble who would take damage, you can mark a Stress to move into Melee range of them and take the damage instead."
      }
    ],
    "notes": ""
  },
  {
    "name": "Entombed Cat Beast",
    "tier": 2,
    "type": "Solo",
    "description": "A large undead humanoid skeleton with a panther's skull for a head.",
    "motives": "Rush attack, shred, terrify",
    "difficulty": 15,
    "thresholds": {
      "major": 12,
      "severe": 23
    },
    "hpMax": 7,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Razor Claws",
      "range": "Very Close",
      "damage": "2d12+2 phy"
    },
    "experience": "Feral +2",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Cat Beast can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Bloody Strike",
        "type": "Passive",
        "text": "A PC who marks 3 or more HP from an attack made by the Cat Beast must mark an additional HP."
      },
      {
        "name": "Screeching Caterwaul",
        "type": "Action",
        "text": "Mark a Stress to force each PC within Far range of the Cat Beast to make a Presence Reaction Roll. Targets who fail become Rattled until they roll with Hope. When the Cat Beast makes a successful attack against a Rattled PC, roll damage twice and take the better result, then clear the Rattled condition from the target."
      },
      {
        "name": "I Alone",
        "type": "Reaction",
        "text": "When the Cat Beast first appears, you can choose to have them absorb the essence of their allies. Immediately defeat any number of allies on the battlefield, and gain a Fear for each ally defeated this way."
      },
      {
        "name": "Vicious Reprisal",
        "type": "Reaction",
        "text": "When the Cat Beast takes damage from an attack made by a PC within Very Close range, you can mark a Stress to make a standard attack against that PC."
      }
    ],
    "notes": ""
  },
  {
    "name": "Entombed Elite Guard",
    "tier": 2,
    "type": "Standard",
    "description": "An elite undead soldier buried with their empress to defend the tomb from theft and desecration.",
    "motives": "Form up, protect the empress, strike as one",
    "difficulty": 15,
    "thresholds": {
      "major": 9,
      "severe": 18
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Curved Blade",
      "range": "Melee",
      "damage": "2d10+2 phy"
    },
    "experience": "Soldier +3",
    "features": [
      {
        "name": "Battle Formation",
        "type": "Passive",
        "text": "The Guard gains a +1 bonus to their Difficulty for each ally within Very Close range."
      },
      {
        "name": "Javelin",
        "type": "Action",
        "text": "Make an attack against a target within Very Far range. On a success, deal 2d6+2 physical damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Entombed Empress",
    "tier": 2,
    "type": "Leader",
    "description": "The undead ruler of a forgotten realm. She's been given blasphemous funeral rites to prevent her soul from moving on.",
    "motives": "Command inferiors, curse the invaders",
    "difficulty": 16,
    "thresholds": {
      "major": 12,
      "severe": 24
    },
    "hpMax": 6,
    "stressMax": 5,
    "atk": "+2",
    "attack": {
      "name": "Swipe",
      "range": "Melee",
      "damage": "2d8+2 phy"
    },
    "experience": "Ruler +4, Undead +2",
    "features": [
      {
        "name": "Empty Husk",
        "type": "Passive",
        "text": "The Empress has resistance to physical damage."
      },
      {
        "name": "Missing Organs",
        "type": "Passive",
        "text": "The Empress's internal organs have been removed and placed into six crystal containers hidden throughout her tomb. Each time the PCs find and destroy one, the Empress marks a HP."
      },
      {
        "name": "Grasping Chains",
        "type": "Action",
        "text": "Mark a Stress to have the Empress target a creature within Close range and try to telekinetically bind them with her funeral chains. Make an attack against a target within Close range. On a success, the Empress pulls the target into Melee range, deals 2d8 physical damage, and temporarily Restrains them."
      },
      {
        "name": "Deathless Obedience",
        "type": "Action",
        "text": "Up to three times per scene, you can spend a Fear to spotlight any number of allies within Close range. If any attacks succeed against the same target, combine the damage."
      },
      {
        "name": "Accursed Caress",
        "type": "Reaction",
        "text": "When the Empress makes a successful standard attack against a PC, you can spend a Fear to activate a Doom Countdown (1d6+1) for that PC. It ticks down when a PC rolls with Fear. When it triggers, the PC marks all HP and makes a death move. If the Empress is defeated or the PCs take a rest, all Doom Countdowns end."
      },
      {
        "name": "Final Transformation (Phase Change)",
        "type": "Reaction",
        "text": "When the Empress marks her last HP, replace her with the Entombed Cat Beast and immediately spotlight them."
      }
    ],
    "notes": ""
  },
  {
    "name": "Entombed Necropriest",
    "tier": 2,
    "type": "Support",
    "description": "A necromancer charged with preserving the empress's life beyond death.",
    "motives": "Boost allies, conquer time, hold down enemies, serve the empress, wield death as a weapon",
    "difficulty": 13,
    "thresholds": {
      "major": 8,
      "severe": 16
    },
    "hpMax": 3,
    "stressMax": 7,
    "atk": "+2",
    "attack": {
      "name": "Death Bolt",
      "range": "Far",
      "damage": "2d6+2 mag"
    },
    "experience": "Dark Magic +4, Protect +2",
    "features": [
      {
        "name": "Invigorate",
        "type": "Action",
        "text": "Mark a Stress to choose up to three allies within Far range. Each one gains advantage on their next attack roll."
      },
      {
        "name": "Last Grasp",
        "type": "Action",
        "text": "Spend a Fear to choose a PC within Far range. Skeletal hands burst out of the ground at the PC's feet and Restrain them until the PC breaks free with a successful Strength Roll. When a target Restrained in this way spends Hope, you gain a Fear."
      },
      {
        "name": "Chill Touch",
        "type": "Action",
        "text": "Mark a Stress to make a standard attack against a target within Melee range. On a success, the target takes standard damage and must mark 1d4 Stress. If the target marks their last Stress from this attack, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Entombed Skin Beetles",
    "tier": 2,
    "type": "Horde",
    "description": "Flesh-eating beetles that burrow beneath the skin.",
    "motives": "Carpet the ground, consume the living, crawl under clothing",
    "difficulty": 14,
    "thresholds": {
      "major": 10,
      "severe": 20
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+0",
    "attack": {
      "name": "Pincers",
      "range": "Melee",
      "damage": "2d8+2 phy"
    },
    "experience": "Tombs +3",
    "features": [
      {
        "name": "Horde (2d4+1)",
        "type": "Passive",
        "text": "When the Beetles have marked half or more of their HP, their standard attack deals 2d4+1 physical damage instead."
      },
      {
        "name": "Momentum",
        "type": "Passive",
        "text": "When the Beetles make a successful attack against a PC, you gain a Fear."
      },
      {
        "name": "Omophagous",
        "type": "Action",
        "text": "Mark a HP to have 5 Beetles burrow under the skin of a PC within Melee range, forcing them to mark a Stress and Infecting them. While Infected, the target takes 6 direct physical damage every time they roll with Fear. This condition is cleared when the PC clears a HP or a Stress."
      }
    ],
    "notes": ""
  },
  {
    "name": "Entombed Stonemason",
    "tier": 2,
    "type": "Minion",
    "description": "An unfortunate undead laborer chosen by lottery to wall up their empress's tomb from the inside.",
    "motives": "Never stop working, sacrifice yourself for the empress",
    "difficulty": 12,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "-1",
    "attack": {
      "name": "Hammer and Chisel",
      "range": "Melee",
      "damage": "5 phy"
    },
    "experience": "Builder +2",
    "features": [
      {
        "name": "Minion (5)",
        "type": "Passive",
        "text": "The Stonemason is defeated when they take any damage. For every 5 damage a PC deals to the Stonemason, the PC defeats an additional Minion within range their attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Entombed Stonemasons within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 physical damage each. Combine this damage."
      },
      {
        "name": "The Work Never Ends",
        "type": "Reaction",
        "text": "When the Stonemason is defeated by an attack that deals physical damage, you can spend a Fear to clear the Stonemason's HP and Stress."
      }
    ],
    "notes": ""
  },
  {
    "name": "Failed Experiment",
    "tier": 2,
    "type": "Standard",
    "description": "A magical necromantic experiment gone wrong, leaving them warped and ungainly.",
    "motives": "Devour, hunt, track",
    "difficulty": 13,
    "thresholds": {
      "major": 12,
      "severe": 23
    },
    "hpMax": 3,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Bite and Claw",
      "range": "Melee",
      "damage": "2d6+5 phy"
    },
    "experience": "Copycat +3",
    "features": [
      {
        "name": "Warped Fortitude",
        "type": "Passive",
        "text": "The Experiment is resistant to physical damage."
      },
      {
        "name": "Overwhelm",
        "type": "Passive",
        "text": "When a target the Experiment attacks has other adversaries within Very Close range, the Experiment deals double damage."
      },
      {
        "name": "Lurching Lunge",
        "type": "Action",
        "text": "Mark a Stress to spotlight the Experiment as an additional GM move instead of spending Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Flock of Feather Fiends",
    "tier": 2,
    "type": "Horde",
    "description": "A flock of undead crow corpses, eyes aglow with necroplasmic light.",
    "motives": "Caw incessantly, claw faces, flutter through the air, peck eyes",
    "difficulty": 14,
    "thresholds": {
      "major": 10,
      "severe": 20
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+0",
    "attack": {
      "name": "Peck and Claw",
      "range": "Melee",
      "damage": "2d6+2 mag"
    },
    "experience": "Fly +2, Swarm +2",
    "features": [
      {
        "name": "Horde (1d6+1)",
        "type": "Passive",
        "text": "When the Flock has marked half or more of its HP, its standard attack deals 1d6+1 magic damage instead."
      },
      {
        "name": "Maddening Cacophony",
        "type": "Action",
        "text": "Mark a Stress to force each PC within Very Close range to make an Instinct Reaction Roll. Targets who fail must spend a Hope or become Vulnerable until they deal damage to the Flock or the Flock is defeated."
      }
    ],
    "notes": ""
  },
  {
    "name": "Fowlbear",
    "tier": 2,
    "type": "Bruiser",
    "description": "A grizzly bear with a feathery hide and the head of a giant goose.",
    "motives": "Drive prey into an ambush, fight to the death, hunt in pairs",
    "difficulty": 15,
    "thresholds": {
      "major": 14,
      "severe": 28
    },
    "hpMax": 7,
    "stressMax": 4,
    "atk": "+3",
    "attack": {
      "name": "Goose Teeth & Bear Claws",
      "range": "Very Close",
      "damage": "2d12+2 phy"
    },
    "experience": "Keen Senses +3, Ponds +3",
    "features": [
      {
        "name": "Relentless (2)",
        "type": "Passive",
        "text": "The Fowlbear can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight it."
      },
      {
        "name": "Double Strike",
        "type": "Action",
        "text": "Mark a Stress to make two standard attacks. If both attacks succeed against the same target, combine the damage."
      },
      {
        "name": "Dread Honk",
        "type": "Action",
        "text": "Spend a Fear to have the Fowlbear unleash a terrifying, ear-splitting goose honk. Each PC within Close range must make a Presence Reaction Roll. Targets who fail must mark a Stress, move away from the Fowlbear to Far range, and become Vulnerable until the Fowlbear deals damage to them. Targets who succeed must mark a Stress or move away from the Fowlbear to Far range."
      }
    ],
    "notes": ""
  },
  {
    "name": "Fungispunj Sporeling",
    "tier": 2,
    "type": "Minion",
    "description": "A halfling-sized mushroom creature that defends itself from attackers with tiny puffs of neurotoxic spores.",
    "motives": "Avoid violence, spray attackers",
    "difficulty": 13,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "-1",
    "attack": {
      "name": "Neuro Spore",
      "range": "Very Close",
      "damage": "4 mag"
    },
    "experience": "Darkness +3",
    "features": [
      {
        "name": "Minion (6)",
        "type": "Passive",
        "text": "The Sporeling is defeated when it takes any damage. For every 6 damage a PC deals to the Sporeling, the PC defeats an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Fungispunj Sporelings within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 4 magic damage each. Combine this damage."
      },
      {
        "name": "Form Up",
        "type": "Action",
        "text": "Spend a Fear to combine three Sporelings within a Close area and replace them with a Fungispunj Sporophore."
      }
    ],
    "notes": ""
  },
  {
    "name": "Fungispunj Sporophore",
    "tier": 2,
    "type": "Leader",
    "description": "A giant mushroom creature that can command the dead.",
    "motives": "Awaken the fallen, defend the colony, spread spores",
    "difficulty": 16,
    "thresholds": {
      "major": 12,
      "severe": 24
    },
    "hpMax": 6,
    "stressMax": 5,
    "atk": "+2",
    "attack": {
      "name": "Spongy Fist",
      "range": "Very Close",
      "damage": "2d8+4 phy"
    },
    "experience": "Commander +5, Guardian +4",
    "features": [
      {
        "name": "Neurotoxic Spore Cloud",
        "type": "Action",
        "text": "Mark a Stress to have the Sporophore spray a cloud of spores on all targets within Close range. Each PC must succeed on a Agility Reaction Roll or become Poisoned until they spend a Hope to clear the condition. While Poisoned, a target must roll a d6 before they make an action roll. On a result of 4 or lower, they must mark a Stress."
      },
      {
        "name": "Reanimator",
        "type": "Action",
        "text": "Spend a Fear to have the Sporophore spray a corpse within Very Close range with a cloud of psychic spores. The corpse clears all HP and Stress, then reanimates under the psychic control of the Sporophore. When the Sporophore is spotlighted, you can also spotlight all corpses it controls."
      },
      {
        "name": "Colony",
        "type": "Action",
        "text": "Mark any number of Stress to have the Sporophore summon an equal number of Fungispunj Sporelings within Close range."
      },
      {
        "name": "Mind Meld",
        "type": "Reaction",
        "text": "All Fungispunj can telepathically communicate with one another. When the Sporophore would be forced to mark Stress from an attack, it can cause Fungispunj allies in the scene to mark that Stress in its place, distributed among allies as it chooses."
      }
    ],
    "notes": ""
  },
  {
    "name": "Gargoyle",
    "tier": 2,
    "type": "Bruiser",
    "description": "A magically animated statue resembling a terrifying beast or demon.",
    "motives": "Hide in plain sight, overwatch, swoop down",
    "difficulty": 13,
    "thresholds": {
      "major": 14,
      "severe": 28
    },
    "hpMax": 8,
    "stressMax": 2,
    "atk": "+2",
    "attack": {
      "name": "Stone Claws",
      "range": "Melee",
      "damage": "2d10+3 phy"
    },
    "experience": "Camouflage +4, Ruins +3",
    "features": [
      {
        "name": "Unliving",
        "type": "Passive",
        "text": "The Gargoyle has resistance to magic damage."
      },
      {
        "name": "Swooping Strike",
        "type": "Action",
        "text": "Choose a point within Far range. The Gargoyle moves to that point and makes a standard attack against one target along its path."
      },
      {
        "name": "Petrifying Slash",
        "type": "Reaction",
        "text": "When the Gargoyle deals damage, the target must succeed on a Strength Reaction Roll or become Vulnerable. If the target is already Vulnerable, they become Restrained. If the target is already Vulnerable and Restrained, they must make a death move. The PC can spend a Hope per condition to clear it."
      }
    ],
    "notes": ""
  },
  {
    "name": "Giant Beastmaster",
    "tier": 2,
    "type": "Leader",
    "description": "A leather-clad warrior bearing a whip and massive bow.",
    "motives": "Command, make a living, maneuver, pin down, protect companion animals",
    "difficulty": 16,
    "thresholds": {
      "major": 12,
      "severe": 24
    },
    "hpMax": 6,
    "stressMax": 5,
    "atk": "+2",
    "attack": {
      "name": "Longbow",
      "range": "Far",
      "damage": "2d8+4 phy"
    },
    "experience": "Animal Handling +3",
    "features": [
      {
        "name": "Two as One",
        "type": "Passive",
        "text": "When the Beastmaster is spotlighted, you can also spotlight a Tier 1 animal adversary currently under their control."
      },
      {
        "name": "Pinning Strike",
        "type": "Action",
        "text": "Make a standard attack against a target. On a success, you can mark a Stress to pin them to a nearby surface. The pinned target is Restrained until they break free with a successful Finesse or Strength Roll."
      },
      {
        "name": "Deadly Companion",
        "type": "Action",
        "text": "Twice per scene, summon a Bear, Dire Wolf, or similar Tier 1 animal adversary under the Beastmaster's control. The adversary appears at Close range and is immediately spotlighted."
      }
    ],
    "notes": ""
  },
  {
    "name": "Giant Brawler",
    "tier": 2,
    "type": "Bruiser",
    "description": "An especially muscular giant wielding a warhammer larger than a human.",
    "motives": "Make a living, overwhelm, slam, topple",
    "difficulty": 15,
    "thresholds": {
      "major": 14,
      "severe": 28
    },
    "hpMax": 7,
    "stressMax": 4,
    "atk": "+2",
    "attack": {
      "name": "Warhammer",
      "range": "Very Close",
      "damage": "2d12+3 phy"
    },
    "experience": "Intrusion +2",
    "features": [
      {
        "name": "Battering Ram",
        "type": "Action",
        "text": "Mark a Stress to have the Brawler charge at an inanimate object within Close range they could feasibly smash (such as a wall, cart, or market stand) and destroy it. All targets within Very Close range of the object must succeed on an Agility Reaction Roll or take 2d4+3 physical damage from the shrapnel."
      },
      {
        "name": "Bloody Reprisal",
        "type": "Reaction",
        "text": "When the Brawler marks 2 or more HP from an attack within Very Close range, you can make a standard attack against the attacker. On a success, the Brawler deals 2d6+15 physical damage instead of their standard damage."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Brawler makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Giant Eagle",
    "tier": 2,
    "type": "Skulk",
    "description": "A giant bird of prey with blood-stained talons.",
    "motives": "Hunt prey, stay mobile, strike decisively",
    "difficulty": 14,
    "thresholds": {
      "major": 8,
      "severe": 19
    },
    "hpMax": 4,
    "stressMax": 4,
    "atk": "+1",
    "attack": {
      "name": "Claws and Beak",
      "range": "Very Close",
      "damage": "2d6+3 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Flight",
        "type": "Passive",
        "text": "While flying, the Eagle gains a +3 bonus to their Difficulty."
      },
      {
        "name": "Deadly Dive",
        "type": "Action",
        "text": "Mark a Stress to attack a target within Far range. On a success, deal 2d10+2 physical damage and knock the target over, making them Vulnerable until they next act."
      },
      {
        "name": "Take Off",
        "type": "Action",
        "text": "Make an attack against a target within Very Close range. On a success, deal 2d4+3 physical damage and the target must succeed on an Agility Reaction Roll or become temporarily Restrained within the Eagle's massive talons. If the target is Restrained, the Eagle immediately lifts into the air to Very Far range above the battlefield while holding them."
      },
      {
        "name": "Deadly Drop",
        "type": "Action",
        "text": "While flying, the Eagle can drop a Restrained target they are holding. When dropped, the target is no longer Restrained but starts falling. If their fall isn't prevented during the PCs' next action, the target takes 2d20 physical damage when they land."
      }
    ],
    "notes": ""
  },
  {
    "name": "Giant Octopus",
    "tier": 2,
    "type": "Solo",
    "description": "A monstrous, aquatic mollusk that has eight sucker-bearing arms and a hard, beaklike jaw.",
    "motives": "Crush and bite, grapple, harry sailing vessels, hunt prey",
    "difficulty": 14,
    "thresholds": {
      "major": 13,
      "severe": 26
    },
    "hpMax": 10,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Arm Whip",
      "range": "Close",
      "damage": "2d10 phy"
    },
    "experience": "Intelligent +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Octopus can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight it."
      },
      {
        "name": "Armed and Dangerous",
        "type": "Passive",
        "text": "When the Octopus first appears, place a d8 on this stat block with the 8 value facing up. When the Octopus makes a successful standard attack against a PC, you can add the die's value to the damage dealt. After you add its value to a roll, decrease the die's value by 1."
      },
      {
        "name": "Grapple",
        "type": "Action",
        "text": "When the Octopus succeeds on a standard attack, you can spend a Fear to have the Octopus Grapple the target. While Grappled, the target is Restrained and Vulnerable until they break free with a successful Strength or Finesse Roll."
      },
      {
        "name": "Crush",
        "type": "Action",
        "text": "Mark a Stress to deal 3d8 direct physical damage to a target Grappled by the Octopus."
      }
    ],
    "notes": ""
  },
  {
    "name": "Giant Recruit",
    "tier": 2,
    "type": "Minion",
    "description": "A giant fighter wearing borrowed armor.",
    "motives": "Batter, make a living, overwhelm, terrify",
    "difficulty": 13,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 2,
    "atk": "+1",
    "attack": {
      "name": "Warhammer",
      "range": "Very Close",
      "damage": "5 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Minion (7)",
        "type": "Passive",
        "text": "The Recruit is defeated when they take any damage. For every 7 damage a PC deals to the Recruit, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Giant Recruits within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Gobstalker",
    "tier": 2,
    "type": "Solo",
    "description": "A fleshy, floating ball of teeth that has numerous eyes and a bundle of questing mouth tentacles that shoot magic beams.",
    "motives": "Ambush rivals, seek riches, shoot beams",
    "difficulty": 15,
    "thresholds": {
      "major": 10,
      "severe": 20
    },
    "hpMax": 8,
    "stressMax": 6,
    "atk": "+2",
    "attack": {
      "name": "Mouth Tentacles",
      "range": "Very Close",
      "damage": "2d6+3 phy"
    },
    "experience": "Magic +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Gobstalker can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Anti-Mystica-Halitosis",
        "type": "Passive",
        "text": "The Gobstalker's rancid breath creates an invisible, magic-negating miasma. An attack, an ability, or a spell that deals magic damage or creates a magic effect fails automatically if used within Close range of the Gobstalker."
      },
      {
        "name": "Tentacle Rays",
        "type": "Action",
        "text": "Mark a Stress to attack a target within Far range. On a success, roll a d8 for a random beam attack or spend a Fear to choose instead: 1. Beguile. The Gobstalker Beguiles the target. While Beguiled, the target sees the Gobstalker as a friend and can't attack it. Additionally, when a PC rolls with Fear, a Beguiled PC must mark a Stress or attack a target chosen by the Gobstalker. A Beguiled PC must succeed on an Instinct Roll (16) to clear the condition. 2. Corrode. The target takes 2d8 magic damage and must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can't, double the damage. 3. Doom. The target must mark all HP, but they can spend any number of Hope to reduce the number of HP marked this way by an equal amount. 4. Hypnosis. The target falls into a Deep Trance and can't act except to try to wake up. This condition lasts until the target takes damage or wakes up with a successful Presence Roll (16). 5. Paralyze. The target freezes in place, becoming Vulnerable and Restrained until they mark 2 Stress. 6. Sear. The target takes 2d8 direct magic damage. 7. Scare. The target is Scared. While Scared, the target can't take actions other than fleeing the battle or trying to shake off their terror. Additionally, the target must mark a Stress whenever you spend a Fear. The target can clear the condition with a successful Presence Roll (16). 8. Slow. The target becomes Vulnerable and must mark a Stress to move until they spend 2 Hope."
      },
      {
        "name": "Leech Lick",
        "type": "Reaction",
        "text": "On a successful standard attack, you can spend a Fear to clear a number of Stress equal to the number of HP the target marked."
      }
    ],
    "notes": ""
  },
  {
    "name": "Gorgon",
    "tier": 2,
    "type": "Solo",
    "description": "A snake-headed, scaled humanoid with a gilded bow, enraged that their peace has been disturbed.",
    "motives": "Corner, hit-and-run, petrify, seek vengeance",
    "difficulty": 15,
    "thresholds": {
      "major": 13,
      "severe": 25
    },
    "hpMax": 9,
    "stressMax": 3,
    "atk": "+4",
    "attack": {
      "name": "Sunsear Shortbow",
      "range": "Far",
      "damage": "2d20+3 mag"
    },
    "experience": "Stealth +3",
    "features": [
      {
        "name": "Relentless (2)",
        "type": "Passive",
        "text": "The Gorgon can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Sunsear Arrows",
        "type": "Passive",
        "text": "When the Gorgon makes a successful standard attack, the target Glows until the end of the scene and can't become Hidden. Attack rolls made against a Glowing target have advantage."
      },
      {
        "name": "Crown of Serpents",
        "type": "Action",
        "text": "Make an attack roll against a target within Melee range using the Gorgon's protective snakes. On a success, mark a Stress to deal 2d10+4 physical damage and the target must mark a Stress."
      },
      {
        "name": "Petrifying Gaze",
        "type": "Reaction",
        "text": "When the Gorgon takes damage from an attack within Close range, you can spend a Fear to force the attacker to make an Instinct Reaction Roll. On a failure, they begin to turn to stone, marking a HP and starting a Petrification Countdown (4). This countdown ticks down when the Gorgon is attacked. When it triggers, the target must make a death move. If the Gorgon is defeated, all petrification countdowns end."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Gorgon makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Guahalan Alebrujo",
    "tier": 2,
    "type": "Solo",
    "description": "A huge, colorful, chimeric beast formed from many animals.",
    "motives": "Destroy, give no quarter, ravage",
    "difficulty": 14,
    "thresholds": {
      "major": 13,
      "severe": 26
    },
    "hpMax": 6,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Tooth & Claw",
      "range": "Very Close",
      "damage": "2d10+4 mag"
    },
    "experience": "Brutal +2, Quick +2",
    "features": [
      {
        "name": "The Beast Unleashed",
        "type": "Passive",
        "text": "The Alebrujo gains a bonus to damage rolls equal to the number of Fear you have."
      },
      {
        "name": "Guahalan Sacrifice",
        "type": "Action",
        "text": "Spend a Fear to have the Alebrujo devour a Minion within Very Close range, then clear a HP or a Stress."
      },
      {
        "name": "Howl of the Guahala",
        "type": "Action",
        "text": "Mark a Stress to have the Alebrujo emit a howl. Each PC within Far range must succeed on a Presence Reaction Roll or become temporarily Panicked. While Panicked, a PC must mark a Stress when they take the spotlight."
      },
      {
        "name": "Rip & Tear",
        "type": "Action",
        "text": "Spend a Fear to make a standard attack with advantage. On a success, you can mark a Stress to make another standard attack against an additional target within range. You can continue marking Stress to make additional attacks until the Alebrujo fails an attack roll."
      },
      {
        "name": "Brutal Spectacle",
        "type": "Reaction",
        "text": "When the Alebrujo deals Severe damage, you can spend a Fear to force all targets within Close range to mark a Stress."
      }
    ],
    "notes": ""
  },
  {
    "name": "Guahalan Fang Lord",
    "tier": 2,
    "type": "Leader",
    "description": "A shapeshifting warlord who leads a group of warriors into battle.",
    "motives": "Bolster allies, lead the pack, rally the troops",
    "difficulty": 16,
    "thresholds": {
      "major": 12,
      "severe": 24
    },
    "hpMax": 6,
    "stressMax": 5,
    "atk": "+2",
    "attack": {
      "name": "Spear",
      "range": "Very Close",
      "damage": "2d8+4 phy"
    },
    "experience": "Ancient Knowledge +2, Hunter +2",
    "features": [
      {
        "name": "Pack Alpha",
        "type": "Passive",
        "text": "Pool. When the Fang Lord makes a successful attack, add a token to the Guahalan Pool. When a Guahalan ally within Close range makes an attack, you can spend a token from the Guahalan Pool to give them advantage on the roll."
      },
      {
        "name": "Unleash the Beast",
        "type": "Action",
        "text": "Spend a Fear to have the Fang Lord adopt a bestial form. While in this form, they gain a bonus to attack and damage rolls equal to the number of Stress they have marked. Additionally, they can move up to Far range instead of Close range before taking an action."
      },
      {
        "name": "Call of the Guahala",
        "type": "Action",
        "text": "Spend 2 Fear to spotlight all Guahalan Shifters within Close range. Each one makes a standard attack against a target within range. If any attacks succeed against the same target, combine their damage."
      },
      {
        "name": "Feral Form (Phase Change)",
        "type": "Reaction",
        "text": "When the Fang Lord marks their last HP, replace them with the Guahalan Alebrujo and immediately spotlight them."
      }
    ],
    "notes": ""
  },
  {
    "name": "Guahalan Shifter",
    "tier": 2,
    "type": "Standard",
    "description": "A shapeshifting masked warrior who has animalistic features.",
    "motives": "Escape, profit, throw smoke",
    "difficulty": 15,
    "thresholds": {
      "major": 9,
      "severe": 18
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Warclub",
      "range": "Melee",
      "damage": "2d8+4 phy"
    },
    "experience": "Hunter +2, Trapper +2",
    "features": [
      {
        "name": "Unleash the Beast",
        "type": "Action",
        "text": "Spend a Fear to have the Shifter adopt a more bestial form. While in this form, they gain a bonus to attack and damage rolls equal to the number of Stress they have marked. Additionally, they can move up to Far range instead of Close range before taking an action."
      },
      {
        "name": "Pack Attack",
        "type": "Action",
        "text": "Mark a Stress to make a standard attack. On a success, the attack gains a bonus to damage equal to the number of other Shifters within Very Close range of the target."
      }
    ],
    "notes": ""
  },
  {
    "name": "Guahalan Spirit Beast",
    "tier": 2,
    "type": "Minion",
    "description": "A brightly colored spirit in the shape of an animal.",
    "motives": "Protect, sacrifice, surround",
    "difficulty": 13,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 2,
    "atk": "+1",
    "attack": {
      "name": "Bite & Claw",
      "range": "Melee",
      "damage": "5 mag"
    },
    "experience": "",
    "features": [
      {
        "name": "Minion (5)",
        "type": "Passive",
        "text": "The Spirit Beast is defeated when it takes any damage. For every 5 damage a PC deals to the Spirit Beast, the PC defeats an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Ethereal Form",
        "type": "Passive",
        "text": "The Spirit Beast has resistance to physical damage."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Guahalan Spirit Beasts within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 magic damage each. Combine this damage."
      },
      {
        "name": "Beast Bomb",
        "type": "Reaction",
        "text": "When the Spirit Beast is defeated, it explodes in white flame and deals 5 magic damage to creatures within Melee range."
      }
    ],
    "notes": ""
  },
  {
    "name": "Guahalan Spirit Singer",
    "tier": 2,
    "type": "Support",
    "description": "A shapeshifting summoner who has animalistic features.",
    "motives": "Abjure, bolster, summon",
    "difficulty": 14,
    "thresholds": {
      "major": 9,
      "severe": 18
    },
    "hpMax": 4,
    "stressMax": 6,
    "atk": "+2",
    "attack": {
      "name": "Spirit Flame",
      "range": "Close",
      "damage": "2d6+4 mag"
    },
    "experience": "Ritual +3, Ancient History +2",
    "features": [
      {
        "name": "Unleash the Beast",
        "type": "Action",
        "text": "Spend a Fear to have the Spirit Singer adopt a more bestial form. While in this form, they gain a bonus to attack and damage rolls equal to the number of Stress they have marked. Additionally, they can move up to Far range instead of Close range before taking an action."
      },
      {
        "name": "Beast-Caller",
        "type": "Action",
        "text": "Spend a Fear to have the Spirit Singer summon 2d4 Guahalan Spirit Beasts within Very Close range and immediately spotlight one."
      },
      {
        "name": "Rage of Spirits",
        "type": "Action",
        "text": "Mark a Stress to spotlight any number of Guahalan Spirit Beasts within Very Close range and have each one move into Melee range with the nearest PC and make a standard attack. If any attacks succeed against the same target, combine their damage."
      },
      {
        "name": "Spiritual Sacrifice",
        "type": "Reaction",
        "text": "When the Spirit Singer would take damage while within Very Close range of a Guahalan Spirit Beast, you can spend a Fear to sacrifice the Spirit Beast and negate the damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Hill Titan",
    "tier": 2,
    "type": "Solo",
    "description": "A goliath clad in animal skins and surrounded by a swarm of insects.",
    "motives": "Eat, make a mess, patrol stomping grounds",
    "difficulty": 14,
    "thresholds": {
      "major": 13,
      "severe": 26
    },
    "hpMax": 10,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Tree Stump",
      "range": "Very Close",
      "damage": "2d10+4 phy"
    },
    "experience": "Survival +3, Vengeful +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Titan can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Momentum",
        "type": "Passive",
        "text": "When the Titan makes a successful attack against a PC, you gain a Fear."
      },
      {
        "name": "Gullible",
        "type": "Passive",
        "text": "PCs have advantage on action rolls to trick or emotionally manipulate the Titan."
      },
      {
        "name": "Bug Swarm",
        "type": "Passive",
        "text": "PCs are Vulnerable while within Very Close range."
      },
      {
        "name": "Mighty Swing",
        "type": "Action",
        "text": "Spend a Fear to make a standard attack against all targets within Very Close range."
      }
    ],
    "notes": ""
  },
  {
    "name": "Hive Walker",
    "tier": 2,
    "type": "Standard",
    "description": "A corpse filled with and puppeted by a colony of carrion-eating bees.",
    "motives": "Encase prey in honey, protect the hive",
    "difficulty": 12,
    "thresholds": {
      "major": 11,
      "severe": 24
    },
    "hpMax": 3,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Rotting Fist",
      "range": "Melee",
      "damage": "2d6+3 phy"
    },
    "experience": "Meat Eater +2",
    "features": [
      {
        "name": "Blood Honey",
        "type": "Action",
        "text": "The Walker disgorges thick crimson honey at all targets between it and a point within Close range. Each target in that line must succeed on an Agility Reaction Roll or take 2d8 magic damage and become temporarily Restrained as the honey hardens on them."
      },
      {
        "name": "Bee-Ruption",
        "type": "Reaction",
        "text": "When the Walker marks HP, vengeful bees erupt from its body to protect it. Each target within Very Close range must succeed on an Instinct Reaction Roll or take 1d8 direct physical damage for each HP the Hive Walker has marked. Restrained targets automatically fail the reaction roll."
      }
    ],
    "notes": ""
  },
  {
    "name": "Jack-o'-Lantern",
    "tier": 2,
    "type": "Minion",
    "description": "A floating pumpkin or other gourd that has a face carved into it. The soul trapped within it emits an eerie glow.",
    "motives": "Bite, float, laugh, tell spooky stories",
    "difficulty": 14,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "+2",
    "attack": {
      "name": "Chomp",
      "range": "Melee",
      "damage": "6 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Minion (4)",
        "type": "Passive",
        "text": "The Jack-o'-Lantern is defeated when it takes any damage. For every 4 damage a PC deals to the Jack-o'-Lantern, the PC defeats an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Jack-o'-Lanterns within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 6 physical damage each. Combine this damage."
      },
      {
        "name": "Spine-Chilling Cackle",
        "type": "Reaction",
        "text": "When a PC within Very Close range rolls with Fear, you can mark a Stress to gain an additional Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Juvenile Flickerfly",
    "tier": 2,
    "type": "Solo",
    "description": "A horse-sized insect with iridescent scales and crystalline wings moving faster than the eye can see.",
    "motives": "Collect shiny things, hunt, swoop",
    "difficulty": 14,
    "thresholds": {
      "major": 13,
      "severe": 26
    },
    "hpMax": 10,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Wing Slash",
      "range": "Very Close",
      "damage": "2d10+4 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Flickerfly can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Peerless Accuracy",
        "type": "Passive",
        "text": "Before the Flickerfly makes an attack, roll a d6. On a result of 4 or higher, the target's Evasion is halved against this attack."
      },
      {
        "name": "Mind Dance",
        "type": "Action",
        "text": "Mark a Stress to create a magically dazzling display that grapples the minds of nearby foes. All targets within Close range must make an Instinct Reaction Roll. For each target who failed, you gain a Fear and the Flickerfly learns one of the target's fears."
      },
      {
        "name": "Hallucinatory Breath",
        "type": "Reaction",
        "text": "Countdown (Loop 1d6). When the Flickerfly takes damage for the first time, activate the countdown. When it triggers, the Flickerfly breathes hallucinatory gas on all targets in front of them up to Far range. Targets must succeed on an Instinct Reaction Roll or be tormented by fearful hallucinations. Targets whose fears are known to the Flickerfly have disadvantage on this roll. Targets who fail must mark a Stress and lose a Hope."
      }
    ],
    "notes": ""
  },
  {
    "name": "Knight of the Realm",
    "tier": 2,
    "type": "Leader",
    "description": "A decorated soldier with heavy armor and a powerful steed.",
    "motives": "Run down, seek glory, show dominance",
    "difficulty": 15,
    "thresholds": {
      "major": 13,
      "severe": 26
    },
    "hpMax": 6,
    "stressMax": 4,
    "atk": "+4",
    "attack": {
      "name": "Longsword",
      "range": "Melee",
      "damage": "2d10+4 phy"
    },
    "experience": "Ancient Knowledge +3, High Society +2, Tactics +2",
    "features": [
      {
        "name": "Chevalier",
        "type": "Passive",
        "text": "While the Knight is on a mount, they gain a +2 bonus to their Difficulty. When they take Severe damage, they're knocked from their mount and lose this benefit until they're next spotlighted."
      },
      {
        "name": "Heavily Armored",
        "type": "Passive",
        "text": "When the Knight takes physical damage, reduce it by 3."
      },
      {
        "name": "Cavalry Charge",
        "type": "Action",
        "text": "If the Knight is mounted, move up to Far range and make a standard attack against a target. On a success, deal 2d8+4 physical damage and the target must mark a Stress."
      },
      {
        "name": "For the Realm!",
        "type": "Action",
        "text": "Mark a Stress to spotlight 1d4+1 allies. Attacks they make while spotlighted in this way deal half damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Landshark",
    "tier": 2,
    "type": "Bruiser",
    "description": "A quadrupedal shark that swims through the ground.",
    "motives": "Burrow, burst out of the ground, circle prey",
    "difficulty": 14,
    "thresholds": {
      "major": 14,
      "severe": 25
    },
    "hpMax": 7,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Toothy Maw",
      "range": "Very Close",
      "damage": "2d10+2 phy"
    },
    "experience": "Subterranean +3, Bloodthirsty +2",
    "features": [
      {
        "name": "Burrowing",
        "type": "Passive",
        "text": "The Landshark can move through the ground as easily as over it. When the Landshark moves, it can choose to burrow or surface. While underground, the Landshark has resistance to all damage but can't attack."
      },
      {
        "name": "Thick-Skinned",
        "type": "Passive",
        "text": "When the Landshark would be forced to mark any number of HP, you can mark an equal number of Stress instead."
      },
      {
        "name": "Rending Chomp",
        "type": "Reaction",
        "text": "When the Landshark makes a successful attack against a PC within Melee range, you can spend a Fear to force the target to mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage)."
      }
    ],
    "notes": ""
  },
  {
    "name": "Landshark Behemoth",
    "tier": 2,
    "type": "Solo",
    "description": "A landshark that's lived long enough to become a large burrowing monstrosity with steely hide and razor-sharp teeth.",
    "motives": "Bite, burrow, burst out of the ground",
    "difficulty": 15,
    "thresholds": {
      "major": 15,
      "severe": 28
    },
    "hpMax": 10,
    "stressMax": 4,
    "atk": "+2",
    "attack": {
      "name": "Toothy Maw",
      "range": "Very Close",
      "damage": "2d12+6 phy"
    },
    "experience": "Subterranean +4, Bloodthirsty +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Behemoth can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight it."
      },
      {
        "name": "Deep Diver",
        "type": "Passive",
        "text": "The Behemoth can move through the ground as easily as over it. When the Behemoth moves, it can choose to burrow or surface. While underground, the Behemoth is immune to damage but can't attack."
      },
      {
        "name": "Steel-Skinned",
        "type": "Passive",
        "text": "All damage dealt to the Behemoth is reduced by one threshold."
      },
      {
        "name": "Forceful Eruption",
        "type": "Action",
        "text": "The Behemoth erupts from the ground, forcing each PC within Very Close range to succeed on an Agility Reaction Roll or be knocked over, becoming Vulnerable until they make an action roll. For each PC made Vulnerable in this way, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Masked Thief",
    "tier": 2,
    "type": "Skulk",
    "description": "A cunning thief with acrobatic skill and a flair for the dramatic.",
    "motives": "Evade, hide, pilfer, profit",
    "difficulty": 14,
    "thresholds": {
      "major": 8,
      "severe": 17
    },
    "hpMax": 4,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Backsword",
      "range": "Melee",
      "damage": "2d8+3 phy"
    },
    "experience": "Acrobatics +3",
    "features": [
      {
        "name": "Quick Hands",
        "type": "Action",
        "text": "Make an attack against a target within Melee range. On a success, deal 1d8+2 physical damage and the Thief steals one item or consumable from the target's inventory."
      },
      {
        "name": "Escape Plan",
        "type": "Action",
        "text": "Mark a Stress to reveal a snare trap set anywhere on the battlefield by the Thief. All targets within Very Close range of the trap must succeed on an Agility Reaction Roll (13) or be pulled off their feet and suspended upside down. A target is Restrained and Vulnerable until they break free, ending both conditions, with a successful Finesse or Strength Roll (13)."
      }
    ],
    "notes": ""
  },
  {
    "name": "Merchant Baron",
    "tier": 2,
    "type": "Social",
    "description": "An accomplished merchant with a large operation under their command.",
    "motives": "Abuse power, gather resources, mobilize minions",
    "difficulty": 15,
    "thresholds": {
      "major": 9,
      "severe": 19
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "-2",
    "attack": {
      "name": "Rapier",
      "range": "Melee",
      "damage": "1d6+2 phy"
    },
    "experience": "Nobility +2, Trade +2",
    "features": [
      {
        "name": "Everyone Has a Price",
        "type": "Action",
        "text": "Spend a Fear to offer a target a dangerous bargain for something they want or need. If used on a PC, they must make a Presence Reaction Roll (17). On a failure, they must mark 2 Stress or take the deal."
      },
      {
        "name": "The Best Muscle Money Can Buy",
        "type": "Action",
        "text": "Once per scene, mark a Stress to summon 1d4+1 Tier 1 adversaries, who appear at Far range, to enforce the Baron's will."
      }
    ],
    "notes": ""
  },
  {
    "name": "Minotaur Wrecker",
    "tier": 2,
    "type": "Bruiser",
    "description": "A massive bull-headed firbolg with a quick temper.",
    "motives": "Consume, gore, navigate, overpower, pursue",
    "difficulty": 16,
    "thresholds": {
      "major": 14,
      "severe": 27
    },
    "hpMax": 7,
    "stressMax": 5,
    "atk": "+2",
    "attack": {
      "name": "Battleaxe",
      "range": "Very Close",
      "damage": "2d8+5 phy"
    },
    "experience": "Navigation +2",
    "features": [
      {
        "name": "Ramp Up",
        "type": "Passive",
        "text": "You must spend a Fear to spotlight the Minotaur. While spotlighted, they can make their standard attack against all targets within range."
      },
      {
        "name": "Charging Bull",
        "type": "Action",
        "text": "Mark a Stress to charge through a group within Close range and make an attack against all targets in the Minotaur's path. Targets the Minotaur succeeds against take 2d6+8 physical damage and are knocked back to Very Far range. If a target is knocked into a solid object or another creature, they take an extra 1d6 damage (combine the damage)."
      },
      {
        "name": "Gore",
        "type": "Action",
        "text": "Make an attack against a target within Very Close range, moving the Minotaur into Melee range of them. On a success, deal 2d8 direct physical damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Mortal Hunter",
    "tier": 2,
    "type": "Leader",
    "description": "An undead figure wearing a heavy leather coat, with searching eyes and a casually cruel demeanor.",
    "motives": "Devour, hunt, track",
    "difficulty": 16,
    "thresholds": {
      "major": 15,
      "severe": 27
    },
    "hpMax": 6,
    "stressMax": 4,
    "atk": "+5",
    "attack": {
      "name": "Tear at Flesh",
      "range": "Very Close",
      "damage": "2d12+1 phy"
    },
    "experience": "Bloodhound +3",
    "features": [
      {
        "name": "Terrifying",
        "type": "Passive",
        "text": "When the Hunter makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear."
      },
      {
        "name": "Deathlock",
        "type": "Action",
        "text": "Spend a Fear to curse a target within Very Close range with a necrotic Deathlock until the end of the scene. Attacks made by the Hunter against a Deathlocked target deal direct damage. The Hunter can only maintain one Deathlock at a time."
      },
      {
        "name": "Inevitable Death",
        "type": "Action",
        "text": "Mark a Stress to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage."
      },
      {
        "name": "Rampage",
        "type": "Reaction",
        "text": "Countdown (Loop 1d6). When the Hunter is in the spotlight for the first time, activate the countdown. When it triggers, move the Hunter in a straight line to a point within Far range and make an attack against all targets in their path. Targets the Hunter succeeds against take 2d8+2 physical damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Ravenous Mockery",
    "tier": 2,
    "type": "Standard",
    "description": "A shapeshifting predator that assumes the appearance of inanimate objects to lure unwary prey into its threat range.",
    "motives": "Ambush, lie in wait, swallow without chewing, take on an unassuming shape",
    "difficulty": 14,
    "thresholds": {
      "major": 8,
      "severe": 19
    },
    "hpMax": 4,
    "stressMax": 4,
    "atk": "+1",
    "attack": {
      "name": "Gnashing Teeth",
      "range": "Melee",
      "damage": "2d6+4 phy"
    },
    "experience": "Mimicry +5, Hungry +3",
    "features": [
      {
        "name": "Tongue Attack",
        "type": "Action",
        "text": "Mark a Stress to attack a creature within Close range. On a success, the target is pulled into Melee range with the Mockery and Restrained until they escape with a successful Strength Roll, and you can spend a Fear to activate the Mockery's Devour feature against the target."
      },
      {
        "name": "Devour",
        "type": "Action",
        "text": "Attack a target within Melee range. On a success, the Mockery Swallows the target. While Swallowed, the target is Restrained and marks a HP when the Mockery is spotlighted. The Mockery disgorges all Swallowed creatures when it takes Major or Severe damage."
      },
      {
        "name": "Never Just One",
        "type": "Action",
        "text": "Spend a Fear to reveal that another object on the battlefield has been a Ravenous Mockery the whole time, then immediately spotlight it."
      }
    ],
    "notes": ""
  },
  {
    "name": "Royal Advisor",
    "tier": 2,
    "type": "Social",
    "description": "A high-ranking courtier with the ear of the local nobility.",
    "motives": "Curry favor, manufacture evidence, scheme",
    "difficulty": 14,
    "thresholds": {
      "major": 8,
      "severe": 15
    },
    "hpMax": 3,
    "stressMax": 3,
    "atk": "-3",
    "attack": {
      "name": "Wand",
      "range": "Far",
      "damage": "1d4+3 phy"
    },
    "experience": "Administration +3, Courtier +3",
    "features": [
      {
        "name": "Devastating Retort",
        "type": "Passive",
        "text": "A PC who rolls less than 17 on an action roll targeting the Advisor must mark a Stress."
      },
      {
        "name": "Bend Ears",
        "type": "Action",
        "text": "Mark a Stress to influence an NPC within Melee range with whispered words. That target's opinion on one matter shifts toward the Advisor's preference unless it is in direct opposition to the target's motives."
      },
      {
        "name": "Scapegoat",
        "type": "Action",
        "text": "Spend a Fear to convince a crowd or notable individual that one person or group is responsible for some problem facing the target. The target becomes hostile to the scapegoat until convinced of their innocence with a successful Presence Roll (17)."
      }
    ],
    "notes": ""
  },
  {
    "name": "Rust Eater",
    "tier": 2,
    "type": "Standard",
    "description": "A pony-sized cockroach coated in a corrosive chitin that turns metal into rust.",
    "motives": "Avoid detection, eat rust, sniff out metal",
    "difficulty": 12,
    "thresholds": {
      "major": 10,
      "severe": 18
    },
    "hpMax": 5,
    "stressMax": 2,
    "atk": "+1",
    "attack": {
      "name": "Bite",
      "range": "Melee",
      "damage": "2d6+4 phy"
    },
    "experience": "Snuffle +3",
    "features": [
      {
        "name": "Stifling Pheromones",
        "type": "Passive",
        "text": "A PC who makes an action roll within Very Close range of the Rust Eater must succeed on an Instinct Reaction Roll or mark a Stress."
      },
      {
        "name": "Rust Touch",
        "type": "Passive",
        "text": "The Rust Eater's carapace is coated in a corrosive acid that pits and rusts metal. When a PC within Melee range of the Rust Easter succeeds on an attack against it with a metal weapon, reduce the weapon's damage die by one step (for example, d8 to d6 or d6 to d4). If a weapon's damage die is reduced below a d4, the weapon crumbles into rust. The Rust Eater then devours the rust pile and clears a HP."
      }
    ],
    "notes": ""
  },
  {
    "name": "Scarecrow",
    "tier": 2,
    "type": "Standard",
    "description": "A bundle of straw bound into a humanoid shape, clothed in rags, and animated by a trapped soul.",
    "motives": "Pull yourself together, scratch and claw",
    "difficulty": 15,
    "thresholds": {
      "major": 7,
      "severe": 15
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Sickle",
      "range": "Melee",
      "damage": "2d6+1 phy"
    },
    "experience": "Birds +2, Fields +2",
    "features": [
      {
        "name": "Made of Straw",
        "type": "Passive",
        "text": "The Scarecrow has resistance to physical damage but takes double damage from fire."
      },
      {
        "name": "Terror Vision",
        "type": "Action",
        "text": "Spend a Fear to have the Scarecrow lock eyes with a PC within Very Close range, dealing 2d8 magic damage and making them Vulnerable until they roll with Hope."
      }
    ],
    "notes": ""
  },
  {
    "name": "Secret-Keeper",
    "tier": 2,
    "type": "Leader",
    "description": "A clandestine leader with a direct channel to the Fallen Gods.",
    "motives": "Amass great power, plot, take command",
    "difficulty": 16,
    "thresholds": {
      "major": 13,
      "severe": 26
    },
    "hpMax": 7,
    "stressMax": 4,
    "atk": "+3",
    "attack": {
      "name": "Sigil-laden Staff",
      "range": "Far",
      "damage": "2d12 mag"
    },
    "experience": "Coercion +2, Fallen Lore +2",
    "features": [
      {
        "name": "Seize Your Moment",
        "type": "Action",
        "text": "Spend 2 Fear to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage."
      },
      {
        "name": "Our Master's Will",
        "type": "Reaction",
        "text": "When you spotlight an ally within Far range, mark a Stress to gain a Fear."
      },
      {
        "name": "Summoning Ritual",
        "type": "Reaction",
        "text": "Countdown (6). When the Secret-Keeper is in the spotlight for the first time, activate the countdown. When they mark HP, tick down this countdown by the number of HP marked. When it triggers, summon a Minor Demon who appears at Close range."
      },
      {
        "name": "Fallen Hounds",
        "type": "Reaction",
        "text": "Once per scene, when the Secret-Keeper marks 2 or more HP, you can mark a Stress to summon a Demonic Hound Pack, which appears at Close range and is immediately spotlighted."
      }
    ],
    "notes": ""
  },
  {
    "name": "Shark",
    "tier": 2,
    "type": "Bruiser",
    "description": "A large aquatic predator, always on the move.",
    "motives": "Find the blood, isolate prey, target the weak",
    "difficulty": 14,
    "thresholds": {
      "major": 14,
      "severe": 28
    },
    "hpMax": 7,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Toothy Maw",
      "range": "Very Close",
      "damage": "2d12+1 phy"
    },
    "experience": "Sense of Smell +3",
    "features": [
      {
        "name": "Terrifying",
        "type": "Passive",
        "text": "When the Shark makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear."
      },
      {
        "name": "Rending Bite",
        "type": "Passive",
        "text": "When the Shark makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can't mark an Armor Slot, they must mark an additional HP."
      },
      {
        "name": "Blood in the Water",
        "type": "Reaction",
        "text": "When a creature within Close range of the Shark marks HP from another creature's attack, you can mark a Stress to immediately spotlight the Shark, moving them into Melee range of the target and making a standard attack."
      }
    ],
    "notes": ""
  },
  {
    "name": "Siren",
    "tier": 2,
    "type": "Skulk",
    "description": "A half-fish person with shimmering scales and an irresistible voice.",
    "motives": "Consume, lure prey, subdue with song",
    "difficulty": 14,
    "thresholds": {
      "major": 9,
      "severe": 18
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Distended Jaw Bite",
      "range": "Melee",
      "damage": "2d6+3 phy"
    },
    "experience": "Song Repertoire +3",
    "features": [
      {
        "name": "Captive Audience",
        "type": "Passive",
        "text": "If the Siren makes a standard attack against a target Entranced by their song, the attack deals 2d10+1 damage instead of their standard damage."
      },
      {
        "name": "Enchanting Song",
        "type": "Action",
        "text": "Spend a Fear to sing a song that affects all targets within Close range. Targets must succeed on an Instinct Reaction Roll or become Entranced until they mark 2 Stress. Other Sirens within Close range of the target can mark a Stress to each add a +1 bonus to the Difficulty of the reaction roll. While Entranced, a target can't act and is Vulnerable."
      }
    ],
    "notes": ""
  },
  {
    "name": "Spectral Archer",
    "tier": 2,
    "type": "Ranged",
    "description": "A ghostly fighter with an ethereal bow, unable to move on while their charge is vulnerable.",
    "motives": "Move through solid objects, stay out of the fray, rehash old battles",
    "difficulty": 13,
    "thresholds": {
      "major": 6,
      "severe": 14
    },
    "hpMax": 3,
    "stressMax": 3,
    "atk": "+3",
    "attack": {
      "name": "Longbow",
      "range": "Far",
      "damage": "2d10+2 phy"
    },
    "experience": "Ancient Knowledge +2",
    "features": [
      {
        "name": "Ghost",
        "type": "Passive",
        "text": "The Archer has resistance to physical damage. Mark a Stress to move up to Close range through solid objects."
      },
      {
        "name": "Pick Your Target",
        "type": "Action",
        "text": "Spend a Fear to make an attack within Far range against a PC who is within Very Close range of at least two other PCs. On a success, the target takes 2d8+12 physical damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Spectral Captain",
    "tier": 2,
    "type": "Leader",
    "description": "A ghostly commander leading their troops beyond death.",
    "motives": "Move through solid objects, rally troops, rehash old battles",
    "difficulty": 16,
    "thresholds": {
      "major": 13,
      "severe": 26
    },
    "hpMax": 6,
    "stressMax": 4,
    "atk": "+3",
    "attack": {
      "name": "Longbow",
      "range": "Far",
      "damage": "2d10+3 phy"
    },
    "experience": "Ancient Knowledge +3",
    "features": [
      {
        "name": "Ghost",
        "type": "Passive",
        "text": "The Captain has resistance to physical damage. Mark a Stress to move up to Close range through solid objects."
      },
      {
        "name": "Unending Battle",
        "type": "Action",
        "text": "Spend 2 Fear to return up to 1d4+1 defeated Spectral allies to the battle at the points where they first appeared (with no marked HP or Stress)."
      },
      {
        "name": "Hold Fast",
        "type": "Reaction",
        "text": "When the Captain's Spectral allies are forced to make a reaction roll, you can mark a Stress to give those allies a +2 bonus to the roll."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Captain makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Spectral Guardian",
    "tier": 2,
    "type": "Standard",
    "description": "A ghostly fighter with spears and swords, anchored by duty.",
    "motives": "Move through solid objects, protect treasure, rehash old battles",
    "difficulty": 15,
    "thresholds": {
      "major": 7,
      "severe": 15
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Spear",
      "range": "Very Close",
      "damage": "2d8+1 phy"
    },
    "experience": "Ancient Knowledge +2",
    "features": [
      {
        "name": "Ghost",
        "type": "Passive",
        "text": "The Guardian has resistance to physical damage. Mark a Stress to move up to Close range through solid objects."
      },
      {
        "name": "Grave Blade",
        "type": "Action",
        "text": "Spend a Fear to make an attack against a target within Very Close range. On a success, deal 2d10+6 physical damage and the target must mark a Stress."
      }
    ],
    "notes": ""
  },
  {
    "name": "Sprite",
    "tier": 2,
    "type": "Minion",
    "description": "A tiny winged warrior that attacks trespassers with poison-tipped arrows.",
    "motives": "Avoid detection, let the poison do its work, protect the wilderness",
    "difficulty": 13,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "+0",
    "attack": {
      "name": "Needle-Sharp Arrows",
      "range": "Close",
      "damage": "5 phy"
    },
    "experience": "Stealth +2, Vengeance +2",
    "features": [
      {
        "name": "Minion (5)",
        "type": "Passive",
        "text": "The Sprite is defeated when they take any damage. For every 5 damage a PC deals to the Sprite, the PC defeats an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Art of Invisibility",
        "type": "Action",
        "text": "Spend a Fear to make the Sprite Hidden until they attack."
      },
      {
        "name": "Dream Petal Poison",
        "type": "Action",
        "text": "When the Sprite succeeds on a standard attack, you can spend a Fear to make the target Sleepy until the target takes damage. While Sleepy, the target must make a Presence Reaction Roll before they make an action roll. On a failure, they must mark 2 Stress or fall asleep until they take damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Spy",
    "tier": 2,
    "type": "Social",
    "description": "A skilled espionage agent with a knack for being in the right place to overhear secrets.",
    "motives": "Cut and run, disguise appearance, eavesdrop",
    "difficulty": 15,
    "thresholds": {
      "major": 8,
      "severe": 17
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "-2",
    "attack": {
      "name": "Dagger",
      "range": "Melee",
      "damage": "2d6+3 phy"
    },
    "experience": "Espionage +3",
    "features": [
      {
        "name": "Gathering Secrets",
        "type": "Action",
        "text": "Spend a Fear to describe how the Spy knows a secret about a PC in the scene."
      },
      {
        "name": "Fly on the Wall",
        "type": "Reaction",
        "text": "When a PC or group is discussing something sensitive, you can mark a Stress to reveal that the Spy is present in the scene, observing them. If the Spy escapes the scene to report their findings, you gain 1d4 Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Stone Titan",
    "tier": 2,
    "type": "Solo",
    "description": "A gray-skinned goliath who lives underground and specializes in crafting powerful items inlaid with magical runes.",
    "motives": "Blend into the rocks, craft and contemplate, pursue prophecy and solitude",
    "difficulty": 17,
    "thresholds": {
      "major": 17,
      "severe": 32
    },
    "hpMax": 5,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Stone Hammer",
      "range": "Very Close",
      "damage": "3d6+8 phy"
    },
    "experience": "Crafting +3, Runes +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Titan can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Skillful Strike",
        "type": "Passive",
        "text": "Before the Titan makes an attack, you can mark a Stress and roll a d6. On a result of 3 or higher, the target's Evasion is halved against this attack."
      },
      {
        "name": "Sunlight Sickness",
        "type": "Passive",
        "text": "When the Titan first appears above ground, roll a d4. Mark a number of Stress equal to the result. The Titan gains a bonus to their attack and damage rolls equal to the number of Stress marked."
      },
      {
        "name": "Hammer Smash",
        "type": "Action",
        "text": "When a PC marks HP from the Titan's standard attack, you can spend a Fear to force the target to mark an Armor Slot without gaining its benefits (they can still use armor to reduce the damage)."
      }
    ],
    "notes": ""
  },
  {
    "name": "Stonewraith",
    "tier": 2,
    "type": "Skulk",
    "description": "A prowling hunter, like a slinking mountain lion, with a slate-gray stone body.",
    "motives": "Defend territory, isolate prey, stalk",
    "difficulty": 13,
    "thresholds": {
      "major": 11,
      "severe": 22
    },
    "hpMax": 6,
    "stressMax": 3,
    "atk": "+3",
    "attack": {
      "name": "Bite and Claws",
      "range": "Melee",
      "damage": "2d8+6 phy"
    },
    "experience": "Stonesense +3",
    "features": [
      {
        "name": "Stonestrider",
        "type": "Passive",
        "text": "The Stonewraith can move through stone and earth as easily as air. While within stone or earth, they are Hidden and immune to all damage."
      },
      {
        "name": "Rocky Ambush",
        "type": "Action",
        "text": "While Hidden, mark a Stress to leap into Melee range with a target within Very Close range. The target must succeed on an Agility or Instinct Reaction Roll (15) or take 2d8 physical damage and become temporarily Restrained."
      },
      {
        "name": "Avalanche Roar",
        "type": "Action",
        "text": "Spend a Fear to roar while within a cave and cause a cave-in. All targets within Close range must succeed on an Agility Reaction Roll (14) or take 2d10 physical damage. The rubble can be cleared with a Progress Countdown (8)."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Stonewraith makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Triceratops",
    "tier": 2,
    "type": "Bruiser",
    "description": "A large dinosaur that has an armored frill and three horns.",
    "motives": "Eat ferns, move in herds for protection, patrol the watering hole",
    "difficulty": 15,
    "thresholds": {
      "major": 14,
      "severe": 28
    },
    "hpMax": 7,
    "stressMax": 5,
    "atk": "+2",
    "attack": {
      "name": "Horns",
      "range": "Very Close",
      "damage": "2d10+4 phy"
    },
    "experience": "Defender +3",
    "features": [
      {
        "name": "Leathery Hide",
        "type": "Passive",
        "text": "When the Triceratops would be forced to mark HP, you can mark any number of Stress instead of an equal number of HP."
      },
      {
        "name": "Tail Swipe",
        "type": "Action",
        "text": "Mark a Stress to choose up to three targets within Very Close range. Each target must make an Agility Reaction Roll. Targets who fail take 5d6 physical damage. Targets who succeed take half damage."
      },
      {
        "name": "Bull Rush",
        "type": "Action",
        "text": "Mark a Stress to choose a target within Close range. The Triceratops moves into Melee range with the target and makes an attack. On a success, deal 3d10 direct physical damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Tyrannosaurus",
    "tier": 2,
    "type": "Bruiser",
    "description": "A huge carnivorous dinosaur that walks on two legs.",
    "motives": "Break through the treeline, eat, stomp around",
    "difficulty": 15,
    "thresholds": {
      "major": 14,
      "severe": 28
    },
    "hpMax": 7,
    "stressMax": 5,
    "atk": "+2",
    "attack": {
      "name": "Mighty Jaws",
      "range": "Very Close",
      "damage": "2d10+4 phy"
    },
    "experience": "Predator +3",
    "features": [
      {
        "name": "Earth-Shaking Roar",
        "type": "Action",
        "text": "Spend a Fear to force each PC within Close range to make a Presence Reaction Roll. On a failure, they must choose to lose a Hope or mark 1d4 Stress."
      },
      {
        "name": "Stomp",
        "type": "Action",
        "text": "Mark a Stress to attack a target within Melee range. On a success, the target takes 3d12 direct physical damage."
      },
      {
        "name": "Crushing Bite",
        "type": "Reaction",
        "text": "When the Tyrannosaurus makes a successful standard attack, you can spend a Fear to force the target to mark an additional HP."
      }
    ],
    "notes": ""
  },
  {
    "name": "Urco",
    "tier": 2,
    "type": "Standard",
    "description": "A black-furred hound from beyond the veil of death that portends death and feeds on fear.",
    "motives": "Feed, frighten, hunt",
    "difficulty": 15,
    "thresholds": {
      "major": 9,
      "severe": 18
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Black Fang",
      "range": "Melee",
      "damage": "2d8+4 mag"
    },
    "experience": "Omens +3, Stealth +3",
    "features": [
      {
        "name": "Fearmonger",
        "type": "Passive",
        "text": "When a PC within Very Close range fails with Hope, you gain a Fear."
      },
      {
        "name": "Terror-Fueled",
        "type": "Passive",
        "text": "The Urco gains a bonus to attack and damage rolls equal to the number of Fear you have."
      },
      {
        "name": "Fear Eater",
        "type": "Action",
        "text": "Spend any number of Fear to clear the same number of Stress. If the Urco has no marked Stress, you can spend any number of Fear to clear the same number of HP."
      },
      {
        "name": "Baleful Gaze",
        "type": "Reaction",
        "text": "When the Urco takes damage from an attack, you can spend a Fear to cause the attacker's damage thresholds to gain a −1 penalty until the end of the scene. This effect can stack."
      }
    ],
    "notes": ""
  },
  {
    "name": "Valdenhax",
    "tier": 2,
    "type": "Leader",
    "description": "A malevolent forest hag who has long, mossy hair and flies through the air with an oversized mortar and pestle.",
    "motives": "Collect souls, fly, vex trespassers",
    "difficulty": 16,
    "thresholds": {
      "major": 12,
      "severe": 24
    },
    "hpMax": 6,
    "stressMax": 4,
    "atk": "+2",
    "attack": {
      "name": "Giant Stone Pestle",
      "range": "Melee",
      "damage": "2d8+2 phy"
    },
    "experience": "Witchcraft +3",
    "features": [
      {
        "name": "To Me, My Pretties",
        "type": "Action",
        "text": "Once per scene, summon 2d4 Tier 2 Hordes, which appear at Far range. You gain a Fear for each Horde summoned in this way."
      },
      {
        "name": "Shadow Strangler",
        "type": "Action",
        "text": "Mark a Stress to attack a target within Far range. On a success, the shadow of the Valdenhax's hand stretches across the ground until it grasps the target's shadow and drains their essence. The target marks 1d4 Stress, and you gain an equal number of Fear."
      },
      {
        "name": "Corpse Whisperer",
        "type": "Action",
        "text": "Spend a Fear to have the Valdenhax call out to the lingering spirit of a fallen ally within Close range. Roll a d6. On an even result, the Valdenhax resurrects the ally with half its HP cleared. On an odd result, the Valdenhax absorbs the dregs of its life force and clears a Stress."
      },
      {
        "name": "Vexing Word",
        "type": "Reaction",
        "text": "After a PC makes a roll, you can mark a Stress to force them to reroll it. This feature can't be used if the PC critically succeeds."
      }
    ],
    "notes": ""
  },
  {
    "name": "War Wizard",
    "tier": 2,
    "type": "Ranged",
    "description": "A battle-hardened mage trained in destructive magic.",
    "motives": "Develop new spells, seek power, shatter formations",
    "difficulty": 16,
    "thresholds": {
      "major": 11,
      "severe": 23
    },
    "hpMax": 5,
    "stressMax": 6,
    "atk": "+4",
    "attack": {
      "name": "Staff",
      "range": "Far",
      "damage": "2d10+4 mag"
    },
    "experience": "Magical Knowledge +2, Strategize +2",
    "features": [
      {
        "name": "Battle Teleport",
        "type": "Passive",
        "text": "Before or after making a standard attack, you can mark a Stress to teleport to a location within Far range."
      },
      {
        "name": "Refresh Warding Sphere",
        "type": "Action",
        "text": "Mark a Stress to refresh the Wizard's \"Warding Sphere\" reaction."
      },
      {
        "name": "Eruption",
        "type": "Action",
        "text": "Spend a Fear and choose a point within Far range. A Very Close area around that point erupts into impassable terrain. All targets within that area must make an Agility Reaction Roll (14). Targets who fail take 2d10 physical damage and are thrown out of the area. Targets who succeed take half damage and aren't moved."
      },
      {
        "name": "Arcane Artillery",
        "type": "Action",
        "text": "Spend a Fear to unleash a precise hail of magical blasts. All targets in the scene must make an Agility Reaction Roll. Targets who fail take 2d12 magic damage. Targets who succeed take half damage."
      },
      {
        "name": "Warding Sphere",
        "type": "Reaction",
        "text": "When the Wizard takes damage from an attack within Close range, deal 2d6 magic damage to the attacker. This reaction can't be used again until the Wizard refreshes it with their \"Refresh Warding Sphere\" action."
      }
    ],
    "notes": ""
  },
  {
    "name": "Adult Flickerfly",
    "tier": 3,
    "type": "Solo",
    "description": "A winged insect the size of a large house with iridescent scales and wings that move too fast to track.",
    "motives": "Collect shiny things, hunt, nest, swoop",
    "difficulty": 17,
    "thresholds": {
      "major": 20,
      "severe": 35
    },
    "hpMax": 12,
    "stressMax": 6,
    "atk": "+3",
    "attack": {
      "name": "Wing Slash",
      "range": "Very Close",
      "damage": "3d20 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Relentless (4)",
        "type": "Passive",
        "text": "The Flickerfly can be spotlighted up to four times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Never Misses",
        "type": "Passive",
        "text": "When the Flickerfly makes an attack, the target's Evasion is halved against the attack."
      },
      {
        "name": "Deadly Flight",
        "type": "Passive",
        "text": "While flying, the Flickerfly can move up to Far range instead of Close range before taking an action."
      },
      {
        "name": "Whirlwind",
        "type": "Action",
        "text": "Spend a Fear to whirl, making an attack against all targets within Very Close range. Targets the Flickerfly succeeds against take 3d8 direct physical damage."
      },
      {
        "name": "Mind Dance",
        "type": "Action",
        "text": "Mark a Stress to create a magically dazzling display that grapples the minds of nearby foes. All targets within Close range must make an Instinct Reaction Roll. For each target who failed, you gain a Fear and the Flickerfly learns one of the target's fears."
      },
      {
        "name": "Hallucinatory Breath",
        "type": "Reaction",
        "text": "Countdown (Loop 1d6). When the Flickerfly takes damage for the first time, activate the countdown. When it triggers, the Flickerfly breathes hallucinatory gas on all targets in front of them up to Far range. Targets must make an Instinct Reaction Roll or be tormented by fearful hallucinations. Targets whose fears are known to the Flickerfly have disadvantage on this roll. Targets who fail lose 2 Hope and take 3d8+3 direct magic damage."
      },
      {
        "name": "Uncanny Reflexes",
        "type": "Reaction",
        "text": "When the Flickerfly takes damage from an attack within Close range, you can mark a Stress to take half damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Archmage",
    "tier": 3,
    "type": "Solo",
    "description": "A seeker of secret knowledge hidden away in a tome-filled tower.",
    "motives": "Corrupt, destroy, overwhelm with evil power",
    "difficulty": 18,
    "thresholds": {
      "major": 24,
      "severe": 45
    },
    "hpMax": 5,
    "stressMax": 8,
    "atk": "+5",
    "attack": {
      "name": "Archmage's Greatstaff",
      "range": "Far",
      "damage": "3d10 mag"
    },
    "experience": "Esoterica +4",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Archmage can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Orbiting Aegis",
        "type": "Passive",
        "text": "When the Archmage appears, they conjure six discs of magical energy that orbit around them. Place a d6 Aegis Die on this stat block with the 6 value facing up. When a PC makes a successful attack against the Archmage, roll a d6. If the result is equal to or less than the value of the Aegis Die, tick the Aegis Die down and ignore the damage. A PC can make a Knowledge Roll to tick down the Aegis Die by 1 on a success or by 2 on a success with Hope."
      },
      {
        "name": "Force Salvo",
        "type": "Action",
        "text": "Spend any number of Fear and roll that many d4s. The Archmage unleashes a number of magical homing force bolts equal to the total result. For each bolt, a creature within Far range marks a HP. The same creature can be targeted by up to three force bolts."
      },
      {
        "name": "Fireball",
        "type": "Action",
        "text": "Mark any number of Stress to target the same number of PCs within Far range. Each target must succeed on an Agility Reaction Roll or take 4d10 magic damage."
      },
      {
        "name": "Counterspell",
        "type": "Reaction",
        "text": "When a PC succeeds on a Spellcast Roll, you can spend a Fear to have the Archmage make a reaction roll with a Difficulty equal to the Spellcast Roll's result. On a success, the PC's Spellcast Roll fails instead, and you place a token on this stat block. Using this feature again costs additional Fear equal to the number of tokens on this stat block. You can't Counterspell a critical success."
      }
    ],
    "notes": ""
  },
  {
    "name": "Catrin",
    "tier": 3,
    "type": "Social",
    "description": "A lavishly adorned skeleton that has an endless appetite for gold.",
    "motives": "Dominate the conversation, seek attention, steal everything",
    "difficulty": 17,
    "thresholds": {
      "major": 20,
      "severe": 32
    },
    "hpMax": 5,
    "stressMax": 6,
    "atk": "+3",
    "attack": {
      "name": "Spirit Flame",
      "range": "Far",
      "damage": "3d8+5 mag"
    },
    "experience": "Opulence +2, Storyteller +2",
    "features": [
      {
        "name": "Attracted to Wealth",
        "type": "Passive",
        "text": "PCs carrying at least a bag of gold gain advantage on Presence Rolls made to influence the Catrin."
      },
      {
        "name": "The Weight of Opulence",
        "type": "Action",
        "text": "Spend a Fear to turn the Catrin's gaze toward the PC carrying the most gold. The target must succeed on an Instinct Reaction Roll or lose a Hope for each bag of gold they're carrying. If the PC loses their last Hope or has no Hope to lose, they mark Stress instead."
      },
      {
        "name": "Expensive Failure",
        "type": "Reaction",
        "text": "When a PC within Melee range fails an action roll, you can mark a Stress to have the Catrin brazenly steal a handful of gold from them."
      }
    ],
    "notes": ""
  },
  {
    "name": "Chimera",
    "tier": 3,
    "type": "Bruiser",
    "description": "A giant fire-breathing monster that has a lion's head, a goat's body, and a serpent's tail.",
    "motives": "Play with food, prowl territory, slay cattle",
    "difficulty": 17,
    "thresholds": {
      "major": 22,
      "severe": 40
    },
    "hpMax": 9,
    "stressMax": 5,
    "atk": "+5",
    "attack": {
      "name": "Claws",
      "range": "Melee",
      "damage": "3d12 phy"
    },
    "experience": "Predator +3",
    "features": [
      {
        "name": "Rending Jaws",
        "type": "Passive",
        "text": "When the Chimera makes a successful attack against a PC, the target must mark 2 Armor Slots to reduce the severity by one threshold."
      },
      {
        "name": "Double Claw",
        "type": "Action",
        "text": "Mark a Stress to make two standard attacks. If both attacks succeed against the same target, combine the damage."
      },
      {
        "name": "Breath of Fire",
        "type": "Action",
        "text": "Spend a Fear to target up to three PCs in front of the Chimera within Close range. Each target must make an Agility Reaction Roll (20). Targets who fail take 3d12 magic damage. Targets who succeed must choose to mark either an Armor Slot or a Stress."
      },
      {
        "name": "Serpent Strike",
        "type": "Reaction",
        "text": "When a PC within Close range targets the Chimera with an attack, you can mark a Stress to attack the PC first. On a success, deal 4d4+10 physical damage and Poison them until their next rest or they succeed on a Knowledge Roll (20). While Poisoned, the target must roll a d6 before they make an action roll. On a result of 3 or lower, they must mark a Stress."
      }
    ],
    "notes": ""
  },
  {
    "name": "Crimson Lepus",
    "tier": 3,
    "type": "Solo",
    "description": "A red-eyed rabbit that thinks only of murder.",
    "motives": "Be cute, go for the throat, hop around",
    "difficulty": 18,
    "thresholds": {
      "major": 20,
      "severe": 35
    },
    "hpMax": 10,
    "stressMax": 6,
    "atk": "+3",
    "attack": {
      "name": "Leaping Bite",
      "range": "Very Close",
      "damage": "3d20 phy"
    },
    "experience": "Vicious +4",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Lepus can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight it."
      },
      {
        "name": "\"Awww...\"",
        "type": "Passive",
        "text": "When the Lepus first appears, it is Too Cute. To attack a Too Cute creature, a PC must succeed on an Instinct Reaction Roll (20). Clear the Too Cute condition if a PC deals damage to the Lepus or if the Lepus attacks a PC."
      },
      {
        "name": "Terrifying",
        "type": "Passive",
        "text": "When the Lepus makes a successful attack, all PCs within Close range lose a Hope, and you gain a Fear."
      },
      {
        "name": "Leaping Jugular Strike",
        "type": "Action",
        "text": "Spend a Fear to have the Lepus leap into Melee range of a target within Far range and make an attack against them. On a success, deal 3d20 direct physical damage. If the target marks HP from this attack, they become Vulnerable until they clear a HP."
      },
      {
        "name": "Evasive",
        "type": "Reaction",
        "text": "When the Lepus would take damage, roll a d6. On a 4 or higher, halve the damage. If the damage was already halved, the Lepus takes no damage."
      },
      {
        "name": "\"Run Away!\"",
        "type": "Reaction",
        "text": "When a PC with no Hope takes the spotlight within Very Far range of the Lepus, the PC must succeed on a Presence Reaction Roll or use their action to flee the battlefield until they spend a Hope to return."
      }
    ],
    "notes": ""
  },
  {
    "name": "Cryptimoth",
    "tier": 3,
    "type": "Skulk",
    "description": "A large red-eyed moth creature that walks upright and portends mysterious or evil events.",
    "motives": "Echolocate, fly silently, melt into the shadows",
    "difficulty": 14,
    "thresholds": {
      "major": 16,
      "severe": 30
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Claws",
      "range": "Melee",
      "damage": "3d8+5 phy"
    },
    "experience": "Dark Omens +3",
    "features": [
      {
        "name": "Terrifying",
        "type": "Passive",
        "text": "When the Cryptimoth makes a successful attack, all PCs within Close range lose a Hope, and you gain a Fear."
      },
      {
        "name": "Psychic Screech",
        "type": "Action",
        "text": "Spend 2 Fear to have the Cryptimoth unleash a burst of psychic energy that causes each PC within Far range to suffer visions of their horrifying fate. Each target must make an Instinct Reaction Roll (16). Targets who fail take 3d8 direct magic damage and become Vulnerable until their next rest. Targets who succeed must mark a Stress or take half damage."
      },
      {
        "name": "Shadow Swarm",
        "type": "Action",
        "text": "Spend a Fear to have the Cryptimoth conjure a swarm of mothlike shadow creatures within Far range. The swarm fills a Close range area and blocks line of sight. Creatures that aren't Cryptimoths are Vulnerable while inside that area and must mark a Stress to move through it. A PC can dispel the swarm with a successful Spellcast Roll (12)."
      },
      {
        "name": "Paranoia Glare",
        "type": "Action",
        "text": "Spend a Fear to have the Cryptimoth gaze into the eyes of a PC within Close range and make them Paranoid. While Paranoid, the PC is suspicious of other PCs and can't Help an Ally or take part in Tag Team Rolls. To clear this condition, the PC must succeed on an Instinct Roll (16) or participate in the Prepare downtime move with one or more members of their party during a rest."
      }
    ],
    "notes": ""
  },
  {
    "name": "Cursed Merfolk",
    "tier": 3,
    "type": "Standard",
    "description": "A half-fish, half-human creature psychically bound to serve the Deep Dwellers.",
    "motives": "Separate enemies, strike from the shadows, use aquatic environment to advantage",
    "difficulty": 16,
    "thresholds": {
      "major": 18,
      "severe": 35
    },
    "hpMax": 5,
    "stressMax": 4,
    "atk": "+3",
    "attack": {
      "name": "Chained Trident",
      "range": "Far",
      "damage": "3d6 phy"
    },
    "experience": "Aquatic +3",
    "features": [
      {
        "name": "Fish-Tailed",
        "type": "Passive",
        "text": "The Merfolk is Vulnerable out of the water."
      },
      {
        "name": "Gang Up",
        "type": "Passive",
        "text": "The Merfolk gains a +2 bonus to attack rolls against targets within Melee range of one or more allies."
      },
      {
        "name": "\"Get Over Here!\"",
        "type": "Reaction",
        "text": "When the Merfolk makes a successful standard attack against a target beyond Melee range, you can mark a Stress to pull them into Melee range. If you do, you can spend a Fear to make a standard attack with advantage against the target."
      }
    ],
    "notes": ""
  },
  {
    "name": "Deep Dweller",
    "tier": 3,
    "type": "Leader",
    "description": "A huge psychic lamprey that has pitch-black eyes and toxic tentacles.",
    "motives": "Abuse power, seek worship, stalk sunken ruins",
    "difficulty": 17,
    "thresholds": {
      "major": 22,
      "severe": 42
    },
    "hpMax": 6,
    "stressMax": 6,
    "atk": "+5",
    "attack": {
      "name": "Teeth & Tentacles",
      "range": "Close",
      "damage": "3d10+4 phy"
    },
    "experience": "Ancient Mysteries +2, Dark Water +2",
    "features": [
      {
        "name": "Psychic Blast",
        "type": "Action",
        "text": "Spend a Fear to choose up to three targets within Close range and force them to make an Instinct or Knowledge Reaction Roll. Targets who succeed mark a Stress. Targets who fail take 3d10+4 direct magic damage and are Vulnerable until spotlighted."
      },
      {
        "name": "Brain Drain",
        "type": "Action",
        "text": "Mark a Stress to choose a Vulnerable PC within Very Close range. The target marks 1d4 Stress, and the Deep Dweller clears an equal number of HP."
      },
      {
        "name": "Call of the Deep",
        "type": "Action",
        "text": "Spend 2 Fear to summon 1d4 Cursed Merfolk, who appear at Far range and immediately take the spotlight."
      },
      {
        "name": "Mucosal Contamination",
        "type": "Action",
        "text": "Make an attack roll against a PC within Very Close range. On a success, the Deep Dweller uses its tentacles to immobilize the target, sliming them with toxic sludge. The target is Restrained until they break free or slip out with a successful Strength or Finesse Roll. Each time the Deep Dweller is spotlighted, all PCs Restrained in this way take 3d8 direct physical damage. The Deep Dweller releases all creatures Restrained by it when it's defeated or takes Severe damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Demon of Avarice",
    "tier": 3,
    "type": "Support",
    "description": "A regal cloaked monstrosity with circular horns adorned with treasure.",
    "motives": "Consume, fuel greed, sow dissent",
    "difficulty": 17,
    "thresholds": {
      "major": 15,
      "severe": 29
    },
    "hpMax": 6,
    "stressMax": 5,
    "atk": "+2",
    "attack": {
      "name": "Hungry Maw",
      "range": "Melee",
      "damage": "3d6+5 mag"
    },
    "experience": "Manipulation +3",
    "features": [
      {
        "name": "Money Talks",
        "type": "Passive",
        "text": "Attacks against the Demon are made with disadvantage unless the attacker spends a handful of gold. This Demon starts with a number of handfuls equal to the number of PCs. When a target marks HP from the Demon's standard attack, they can spend a handful of gold instead of marking HP (1 handful per HP). Add a handful of gold to the Demon for each handful of gold spent by PCs on this feature."
      },
      {
        "name": "Numbers Must Go Up",
        "type": "Passive",
        "text": "Add a bonus to the Demon's attack rolls equal to the number of handfuls of gold they have."
      },
      {
        "name": "Money Is Time",
        "type": "Action",
        "text": "Spend 3 handfuls of gold (or a Fear) to spotlight 1d4+1 allies."
      }
    ],
    "notes": ""
  },
  {
    "name": "Demon of Despair",
    "tier": 3,
    "type": "Skulk",
    "description": "A cloaked demon-creature with long limbs, seeping shadows.",
    "motives": "Make fear contagious, stick to the shadows, undermine resolve",
    "difficulty": 17,
    "thresholds": {
      "major": 18,
      "severe": 35
    },
    "hpMax": 6,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Miasma Bolt",
      "range": "Far",
      "damage": "3d6+1 mag"
    },
    "experience": "Manipulation +3",
    "features": [
      {
        "name": "Depths of Despair",
        "type": "Passive",
        "text": "The Demon deals double damage to PCs with 0 Hope."
      },
      {
        "name": "Your Struggle Is Pointless",
        "type": "Action",
        "text": "Spend a Fear to weigh down the spirits of all PCs within Far range. All targets affected replace their Hope Die with a d8 until they roll a success with Hope or their next rest."
      },
      {
        "name": "Your Friends Will Fail You",
        "type": "Reaction",
        "text": "When a PC fails with Fear, you can mark a Stress to cause all other PCs within Close range to lose a Hope."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Demon makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Demon of Hubris",
    "tier": 3,
    "type": "Leader",
    "description": "A perfectly beautiful and infinitely cruel demon with a gleaming spear and elegant robes.",
    "motives": "Condescend, declare premature victory, prove superiority",
    "difficulty": 18,
    "thresholds": {
      "major": 18,
      "severe": 36
    },
    "hpMax": 7,
    "stressMax": 5,
    "atk": "+4",
    "attack": {
      "name": "Perfect Spear",
      "range": "Very Close",
      "damage": "3d10 phy"
    },
    "experience": "Manipulation +2",
    "features": [
      {
        "name": "Terrifying",
        "type": "Passive",
        "text": "When the Demon makes a successful attack, all PCs within Far range must lose a Hope and you gain a Fear."
      },
      {
        "name": "Double or Nothing",
        "type": "Passive",
        "text": "When a PC within Far range fails a roll, they can choose to reroll their Fear Die and take the new result. If they still fail, they mark 2 Stress and the Demon clears a Stress."
      },
      {
        "name": "Unparalleled Skill",
        "type": "Action",
        "text": "Mark a Stress to deal the Demon's standard attack damage to a target within Close range."
      },
      {
        "name": "The Root of Villainy",
        "type": "Action",
        "text": "Spend a Fear to spotlight two other Demons within Far range."
      },
      {
        "name": "You Pale in Comparison",
        "type": "Reaction",
        "text": "When a PC fails a roll within Close range of the Demon, they must mark a Stress."
      }
    ],
    "notes": ""
  },
  {
    "name": "Demon of Jealousy",
    "tier": 3,
    "type": "Ranged",
    "description": "A fickle creature of spindly limbs and insatiable desires.",
    "motives": "Join in on others' success, take what belongs to others, hold grudges",
    "difficulty": 17,
    "thresholds": {
      "major": 17,
      "severe": 30
    },
    "hpMax": 6,
    "stressMax": 6,
    "atk": "+4",
    "attack": {
      "name": "Psychic Assault",
      "range": "Far",
      "damage": "3d8+3 mag"
    },
    "experience": "Manipulation +3",
    "features": [
      {
        "name": "Unprotected Mind",
        "type": "Passive",
        "text": "The Demon's standard attack deals direct damage."
      },
      {
        "name": "My Turn",
        "type": "Reaction",
        "text": "When the Demon marks HP from an attack, spend a number of Fear equal to the HP marked by the Demon to cause the attacker to mark the same number of HP."
      },
      {
        "name": "Rivalry",
        "type": "Reaction",
        "text": "When a creature within Close range takes damage from a different adversary, you can mark a Stress to add a d4 to the damage roll."
      },
      {
        "name": "What's Yours Is Mine",
        "type": "Reaction",
        "text": "When a PC takes Severe damage within Very Close range of the Demon, you can spend a Fear to cause the target to make a Finesse Reaction Roll. On a failure, the Demon seizes one item or consumable of their choice from the target's inventory."
      }
    ],
    "notes": ""
  },
  {
    "name": "Demon of Wrath",
    "tier": 3,
    "type": "Bruiser",
    "description": "A hulking demon with boulder-sized fists, driven by endless rage.",
    "motives": "Fuel anger, impress rivals, wreak havoc",
    "difficulty": 17,
    "thresholds": {
      "major": 22,
      "severe": 40
    },
    "hpMax": 7,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Fists",
      "range": "Very Close",
      "damage": "3d8+1 mag"
    },
    "experience": "Intimidation +2",
    "features": [
      {
        "name": "Anger Unrelenting",
        "type": "Passive",
        "text": "The Demon's attacks deal direct damage."
      },
      {
        "name": "Battle Lust",
        "type": "Action",
        "text": "Spend a Fear to boil the blood of all PCs within Far range. They use a d20 as their Fear Die until the end of the scene."
      },
      {
        "name": "Retaliation",
        "type": "Reaction",
        "text": "When the Demon takes damage from an attack within Close range, you can mark a Stress to make a standard attack against the attacker."
      },
      {
        "name": "Blood and Souls",
        "type": "Reaction",
        "text": "Countdown (Loop 6). Activate the first time an attack is made within sight of the Demon. It ticks down when a PC takes a violent action. When it triggers, summon 1d4 Minor Demons, who appear at Close range."
      }
    ],
    "notes": ""
  },
  {
    "name": "Dire Bat",
    "tier": 3,
    "type": "Skulk",
    "description": "A wide-winged pet endlessly loyal to their vampire owner.",
    "motives": "Dive-bomb, hide, protect leader",
    "difficulty": 14,
    "thresholds": {
      "major": 16,
      "severe": 30
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Claws and Teeth",
      "range": "Melee",
      "damage": "2d6+7 phy"
    },
    "experience": "Bloodthirsty +3",
    "features": [
      {
        "name": "Flying",
        "type": "Passive",
        "text": "While flying, the Bat gains a +3 bonus to their Difficulty."
      },
      {
        "name": "Screech",
        "type": "Action",
        "text": "Mark a Stress to send a high-pitch screech out toward all targets in front of the Bat within Far range. Those targets must mark 1d4 Stress."
      },
      {
        "name": "Guardian",
        "type": "Reaction",
        "text": "When an allied Vampire marks HP, you can mark a Stress to fly into Melee range of the attacker and make an attack with advantage against them. On a success, deal 2d6+2 physical damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Drake",
    "tier": 3,
    "type": "Skulk",
    "description": "A clawed quadruped that has a scaled, serpentine body and a willingness to serve its cousins, the dragons.",
    "motives": "Coil and crush, protect master, slither around lairs and ruins, strike first",
    "difficulty": 14,
    "thresholds": {
      "major": 16,
      "severe": 30
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+4",
    "attack": {
      "name": "Claws & Teeth",
      "range": "Melee",
      "damage": "3d8+5 phy"
    },
    "experience": "Vicious +3",
    "features": [
      {
        "name": "Relentless (2)",
        "type": "Passive",
        "text": "The Drake can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight it."
      },
      {
        "name": "Guard Dog",
        "type": "Reaction",
        "text": "When a PC would deal damage to a creature within Close range, you can mark a Stress to have the Drake move to intercept the attack and take the damage instead. If the attacker is within Melee range of the Drake's new position, you can immediately spotlight the Drake without spending Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Dryad",
    "tier": 3,
    "type": "Leader",
    "description": "A nature spirit in the form of a humanoid tree.",
    "motives": "Command, cultivate, drive out, preserve the forest",
    "difficulty": 16,
    "thresholds": {
      "major": 24,
      "severe": 38
    },
    "hpMax": 8,
    "stressMax": 5,
    "atk": "+4",
    "attack": {
      "name": "Deadfall Shortbow",
      "range": "Far",
      "damage": "3d10+1 phy"
    },
    "experience": "Forest Knowledge +4",
    "features": [
      {
        "name": "Bramble Patch",
        "type": "Action",
        "text": "Mark a Stress to target a point within Far range. Create a patch of thorns that covers an area within Close range of that point. All targets within that area take 2d6+2 physical damage when they act. A target must succeed on a Finesse Roll or deal more than 20 damage to the Dryad with an attack to leave the area."
      },
      {
        "name": "Grow Saplings",
        "type": "Action",
        "text": "Spend a Fear to grow three Treant Sapling Minions, who appear at Close range and immediately take the spotlight."
      },
      {
        "name": "We Are All One",
        "type": "Reaction",
        "text": "When an ally dies within Close range, you can spend a Fear to clear 2 HP and 2 Stress as the fallen ally's life force is returned to the forest."
      }
    ],
    "notes": ""
  },
  {
    "name": "Dullahan",
    "tier": 3,
    "type": "Bruiser",
    "description": "A horse-mounted specter holding their own severed head in one hand and wielding a whip fashioned from a human spine in the other.",
    "motives": "Doom with a glance, gallop across water, kick with heavy hooves",
    "difficulty": 17,
    "thresholds": {
      "major": 22,
      "severe": 40
    },
    "hpMax": 7,
    "stressMax": 4,
    "atk": "+3",
    "attack": {
      "name": "Spine Whip",
      "range": "Very Close",
      "damage": "3d10+1 mag"
    },
    "experience": "Nocturnal +3",
    "features": [
      {
        "name": "Specter",
        "type": "Passive",
        "text": "The Dullahan has resistance to physical damage. Mark a Stress to move up to Close range through solid objects."
      },
      {
        "name": "Spectral Mount",
        "type": "Passive",
        "text": "While atop their steed, the Dullahan can move up to Far range instead of Close range before taking an action. If the Dullahan is unhorsed, their mount disappears until you mark a Stress to summon it again. The Dullahan is Vulnerable while not on their horse."
      },
      {
        "name": "Bone Whip Strike",
        "type": "Action",
        "text": "Mark a Stress to make an attack against a target within Melee range. On a success, the target takes 4d4+10 direct physical damage and is Vulnerable until they clear a HP."
      },
      {
        "name": "Death Glare",
        "type": "Action",
        "text": "Spend a Fear to choose a PC within Far range. The target must make an Presence Reaction Roll (19). On a success, they mark a Stress. On a failure, they mark a HP and activate a Doom Countdown (4). It ticks down when the Dullahan is spotlighted. When it triggers, the target makes a death move. If the Dullahan is defeated or the PCs take a rest, all Doom Countdowns end."
      }
    ],
    "notes": ""
  },
  {
    "name": "Fellmounted Shadow King",
    "tier": 3,
    "type": "Support",
    "description": "The shade of a forgotten ruler, cursed to patrol the skies atop a winged eel in the service of an even greater evil.",
    "motives": "Find magic items, inspire fear, patrol skies",
    "difficulty": 15,
    "thresholds": {
      "major": 24,
      "severe": 38
    },
    "hpMax": 8,
    "stressMax": 5,
    "atk": "+4",
    "attack": {
      "name": "Cursed Lance",
      "range": "Close",
      "damage": "3d10+6 mag"
    },
    "experience": "Seeker +3",
    "features": [
      {
        "name": "Fellmount",
        "type": "Passive",
        "text": "While the Shadow King is on his mount, he gains a +2 bonus to his Difficulty. When the Shadow King takes Severe damage, he's knocked from his mount. If the Shadow King is unmounted, his mount disappears until you mark a Stress to summon it again."
      },
      {
        "name": "Light and Shadow",
        "type": "Passive",
        "text": "The Shadow King has advantage on attack rolls while in shadow or darkness and disadvantage on attack rolls while in bright light."
      },
      {
        "name": "Relic Hunter",
        "type": "Passive",
        "text": "The Shadow King has advantage on attack rolls against PCs who have magic weapons or armor equipped."
      },
      {
        "name": "Hellsong",
        "type": "Action",
        "text": "Spend 2 Fear to have the Shadow King's mount unleash a spine-chilling screech that echoes over the battlefield. Each PC within Far range must make a Presence Reaction Roll (18). Targets who succeed must mark a Stress. Targets who fail must mark a Stress and lose a Hope. If a PC can't lose a Hope, you gain 2 Fear."
      },
      {
        "name": "Air Support",
        "type": "Reaction",
        "text": "Three times per scene, you can spend a Fear to have an ally within Far range reroll a failed attack with advantage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Elemental Spark",
    "tier": 3,
    "type": "Minion",
    "description": "A blazing mote of elemental fire.",
    "motives": "Blast, consume, gain mass",
    "difficulty": 15,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "+0",
    "attack": {
      "name": "Bursts of Fire",
      "range": "Close",
      "damage": "5 mag"
    },
    "experience": "",
    "features": [
      {
        "name": "Minion (9)",
        "type": "Passive",
        "text": "The Elemental is defeated when they take any damage. For every 9 damage a PC deals to the Elemental, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Elemental Sparks within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Fire Titan",
    "tier": 3,
    "type": "Solo",
    "description": "An armor-clad goliath who has ash-gray skin and fiery hair and wields a masterwork greatsword crafted in their own smithy.",
    "motives": "Act valorously, make war, think tactically",
    "difficulty": 18,
    "thresholds": {
      "major": 19,
      "severe": 35
    },
    "hpMax": 10,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Greatsword",
      "range": "Close",
      "damage": "3d12+4 phy"
    },
    "experience": "Smithing +5, Tactics +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Titan can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Masterwork Armor",
        "type": "Passive",
        "text": "Countdown (3). When the Titan first appears, activate the countdown. It ticks down when the Titan takes Major or Severe damage. Until the countdown triggers, reduce incoming damage by 1d12. When it triggers, the Titan gains a +1 bonus to their Difficulty and attack rolls."
      },
      {
        "name": "Momentum",
        "type": "Passive",
        "text": "When the Titan makes a successful attack against a PC, you gain a Fear."
      },
      {
        "name": "Hurl Rock",
        "type": "Action",
        "text": "Mark a Stress to choose a point within Far range, then make an attack against all targets between the Titan and that point. Targets the Titan succeeds against take 3d12 physical damage."
      },
      {
        "name": "Skull Splitter",
        "type": "Action",
        "text": "Mark a Stress to place a token on this stat block. The next time the Titan is spotlighted, you must spend the token from this stat block and make an attack against a PC within Close range. On a success, deal 3d20+5 direct physical damage. On a failure, the target marks a Stress."
      },
      {
        "name": "Blazing Heart",
        "type": "Reaction",
        "text": "When the Titan marks half or more of their HP, you can spend a Fear and mark any number of Stress to clear a number of HP equal to the number of Stress marked."
      }
    ],
    "notes": ""
  },
  {
    "name": "Frost Titan",
    "tier": 3,
    "type": "Bruiser",
    "description": "A blue-skinned goliath who has rimed hair and wears trophies of past battles.",
    "motives": "Claim trophies, raid and pillage, test mettle",
    "difficulty": 17,
    "thresholds": {
      "major": 22,
      "severe": 40
    },
    "hpMax": 10,
    "stressMax": 4,
    "atk": "+7",
    "attack": {
      "name": "Dual Axes",
      "range": "Very Close",
      "damage": "3d10+2 phy"
    },
    "experience": "Cold +3, War +3",
    "features": [
      {
        "name": "Relentless (2)",
        "type": "Passive",
        "text": "The Titan can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "War Horn",
        "type": "Action",
        "text": "Mark a Stress to force each PC within Far range to succeed on a Presence Reaction Roll or mark a Stress and become Vulnerable until after the next attack against them."
      },
      {
        "name": "Bull Rush",
        "type": "Action",
        "text": "Mark a Stress to move up to Close range and make an attack roll against a target within Melee range. On a success, deal 4d10+2 physical damage and knock the target back to Close range."
      },
      {
        "name": "Cleaving Strike",
        "type": "Reaction",
        "text": "When a PC marks HP from the Titan's standard attack, you can mark a Stress to force another PC within Very Close range who the attack would have succeeded against to mark the same number of HP."
      },
      {
        "name": "Trophy Hunter",
        "type": "Reaction",
        "text": "When the Titan defeats a PC, the Titan takes the PC's most valuable possession as a trophy."
      }
    ],
    "notes": ""
  },
  {
    "name": "Gargantuan Sea Turtle",
    "tier": 3,
    "type": "Solo",
    "description": "A monstrous sea turtle that has an adamantine shell and beak.",
    "motives": "Acquire riches, capsize trading vessels, lie in wait, use the waves as cover",
    "difficulty": 18,
    "thresholds": {
      "major": 21,
      "severe": 41
    },
    "hpMax": 10,
    "stressMax": 6,
    "atk": "+7",
    "attack": {
      "name": "Crushing Jaws",
      "range": "Very Close",
      "damage": "3d12+7 phy"
    },
    "experience": "Open Sea +5",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Turtle can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight it."
      },
      {
        "name": "Piercing Bite",
        "type": "Passive",
        "text": "When the Turtle makes a successful standard attack against a PC, the PC must either mark an Armor Slot without receiving its benefit or take double damage."
      },
      {
        "name": "Tail Bash",
        "type": "Action",
        "text": "Mark a Stress to make a standard attack against all PCs behind the Turtle within Very Close range. On a success, a target takes an extra 1d12 physical damage and is pushed away from the Turtle to Close range."
      },
      {
        "name": "Gigaton Splash",
        "type": "Action",
        "text": "Spend a Fear to have the Turtle use its weight to unleash an unstoppable wall of water that targets all creatures within Far range. Each PC must make a Strength Reaction Roll to navigate the tide. Targets who fail are pushed away from the Turtle to Close range, take 4d8 physical damage, and become temporarily Vulnerable. Targets who succeed must mark a Stress. For each target who failed, you gain a Fear."
      },
      {
        "name": "Steam Breath",
        "type": "Action",
        "text": "Spend 2 Fear to have the Turtle release a blast of superheated steam targeting all PCs in front of it within Close range. Each target must make an Agility Reaction Roll. Targets who fail take 4d8 magic damage and become temporarily Vulnerable. Targets who succeed must choose to either mark a Stress or take half damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Greater Earth Elemental",
    "tier": 3,
    "type": "Bruiser",
    "description": "A living landslide of boulders and dust, as large as a house.",
    "motives": "Avalanche, knock over, pummel",
    "difficulty": 17,
    "thresholds": {
      "major": 22,
      "severe": 40
    },
    "hpMax": 10,
    "stressMax": 4,
    "atk": "+7",
    "attack": {
      "name": "Boulder Fist",
      "range": "Very Close",
      "damage": "3d10+1 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Slow",
        "type": "Passive",
        "text": "When you spotlight the Elemental and they don't have a token on their stat block, they can't act yet. Place a token on their stat block and describe what they're preparing to do. When you spotlight the Elemental and they have a token on their stat block, clear the token and they can act."
      },
      {
        "name": "Crushing Blows",
        "type": "Passive",
        "text": "When the Elemental makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can't mark an Armor Slot, they must mark an additional HP."
      },
      {
        "name": "Immovable Object",
        "type": "Passive",
        "text": "An attack that would move the Elemental moves them two fewer ranges (for example, Far becomes Very Close). When the Elemental takes physical damage, reduce it by 7."
      },
      {
        "name": "Rockslide",
        "type": "Action",
        "text": "Mark a Stress to create a rockslide that buries the land in front of Elemental within Close range with rockfall. All targets in this area must make an Agility Reaction Roll (19). Targets who fail take 2d12+5 physical damage and become Vulnerable until their next roll with Hope. Targets who succeed take half damage."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Elemental makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Greater Water Elemental",
    "tier": 3,
    "type": "Support",
    "description": "A huge living wave that crashes down upon enemies.",
    "motives": "Deluge, disperse, drown",
    "difficulty": 17,
    "thresholds": {
      "major": 17,
      "severe": 34
    },
    "hpMax": 5,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Crashing Wave",
      "range": "Very Close",
      "damage": "3d4+1 mag"
    },
    "experience": "",
    "features": [
      {
        "name": "Water Jet",
        "type": "Action",
        "text": "Mark a Stress to attack a target within Very Close range. On a success, deal 2d4+7 physical damage and the target's next action has disadvantage. On a failure, the target must mark a Stress."
      },
      {
        "name": "Drowning Embrace",
        "type": "Action",
        "text": "Spend a Fear to make an attack against all targets within Very Close range. Targets the Elemental succeeds against become Restrained and Vulnerable as they begin drowning. A target can break free, ending both conditions, with a successful Strength or Instinct Roll."
      },
      {
        "name": "High Tide",
        "type": "Reaction",
        "text": "When the Elemental makes a successful standard attack, you can mark a Stress to knock the target back to Close range."
      }
    ],
    "notes": ""
  },
  {
    "name": "Huge Green Ooze",
    "tier": 3,
    "type": "Skulk",
    "description": "A translucent green mound of acid taller than most humans.",
    "motives": "Camouflage, creep up, envelop, multiply",
    "difficulty": 15,
    "thresholds": {
      "major": 15,
      "severe": 30
    },
    "hpMax": 7,
    "stressMax": 4,
    "atk": "+3",
    "attack": {
      "name": "Ooze Appendage",
      "range": "Melee",
      "damage": "3d8+1 mag"
    },
    "experience": "Blend In +3",
    "features": [
      {
        "name": "Slow",
        "type": "Passive",
        "text": "When you spotlight the Ooze and they don't have a token on their stat block, they can't act yet. Place a token on their stat block and describe what they're preparing to do. When you spotlight the Ooze and they have a token on their stat block, clear the token and they can act."
      },
      {
        "name": "Acidic Form",
        "type": "Passive",
        "text": "When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can't mark an Armor Slot, they must mark an additional HP."
      },
      {
        "name": "Envelop",
        "type": "Action",
        "text": "Make an attack against a target within Melee range. On a success, the Ooze Envelops them and the target must mark 2 Stress. While Enveloped, the target must mark an additional Stress every time they make an action roll. When the Ooze takes Severe damage, all Enveloped targets are freed and the condition is cleared."
      },
      {
        "name": "Split",
        "type": "Reaction",
        "text": "When the Ooze has 4 or more HP marked, you can spend a Fear to split them into two Green Oozes (with no marked HP or Stress). Immediately spotlight both of them."
      }
    ],
    "notes": ""
  },
  {
    "name": "Hydra",
    "tier": 3,
    "type": "Solo",
    "description": "A quadrupedal scaled beast with multiple long-necked heads, each filled with menacing fangs.",
    "motives": "Devour, regenerate, terrify",
    "difficulty": 18,
    "thresholds": {
      "major": 19,
      "severe": 35
    },
    "hpMax": 10,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Bite",
      "range": "Close",
      "damage": "2d12+2 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Many-Headed Menace",
        "type": "Passive",
        "text": "The Hydra begins with three heads and can have up to five. When the Hydra takes Major or greater damage, they lose a head."
      },
      {
        "name": "Relentless (X)",
        "type": "Passive",
        "text": "The Hydra can be spotlighted X times per GM turn, where X is the Hydra's number of heads. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Regeneration",
        "type": "Action",
        "text": "If the Hydra has any marked HP, spend a Fear to clear a HP and grow two heads."
      },
      {
        "name": "Terrifying Chorus",
        "type": "Action",
        "text": "All PCs within Far range lose 2 Hope."
      },
      {
        "name": "Magical Weakness",
        "type": "Reaction",
        "text": "When the Hydra takes magic damage, they become Dazed until the next roll with Fear. While Dazed, they can't use their Regeneration action but are immune to magic damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Lamia",
    "tier": 3,
    "type": "Skulk",
    "description": "A snake-tailed humanoid monster who stalks the night to absorb the life energy of sleeping people.",
    "motives": "Attack the unaware, avoid sunlight, leech life force, put to sleep, slither through tall grass",
    "difficulty": 17,
    "thresholds": {
      "major": 18,
      "severe": 35
    },
    "hpMax": 6,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Curved Dagger",
      "range": "Melee",
      "damage": "3d8+4 phy"
    },
    "experience": "Snaky +3",
    "features": [
      {
        "name": "Constriction",
        "type": "Action",
        "text": "Mark a Stress to have the Lamia wrap their tail around a PC within Melee range and squeeze. The target must succeed on a Finesse Reaction Roll or become Constricted until the Lamia moves or takes Major or greater damage. While Constricted, the target is Restrained and must mark a Stress when the Lamia takes the spotlight."
      },
      {
        "name": "Life Leech",
        "type": "Action",
        "text": "Mark a Stress to force a Vulnerable or Restrained target within Melee range to mark 1d4−1 HP. The Lamia then clears an equal number of HP."
      },
      {
        "name": "Sleep Toxin",
        "type": "Reaction",
        "text": "When the Lamia makes a successful standard attack against a PC, you can spend a Fear to make them Vulnerable until they succeed on a Instinct Roll (19)."
      }
    ],
    "notes": ""
  },
  {
    "name": "Lamplight Beguiler",
    "tier": 3,
    "type": "Skulk",
    "description": "A huge aquatic creature that lures unwary prey into eating range with its dangling, shapeshifting head stalk.",
    "motives": "Entice with secret knowledge, snap the trap shut, speak through a shapeshifted head stalk",
    "difficulty": 16,
    "thresholds": {
      "major": 16,
      "severe": 32
    },
    "hpMax": 6,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Jaws",
      "range": "Melee",
      "damage": "3d8+2 phy"
    },
    "experience": "Charm +3, Secrets +3",
    "features": [
      {
        "name": "Doppel-Dangler",
        "type": "Action",
        "text": "The membranous cluster at the end of the Beguiler's head stalk can shapeshift into any humanoid form. Mark a Stress to choose a PC within Close range. Their player must tell you who their PC would find most trustworthy. The Beguiler's head stalk transforms into that person and gains the ability to speak in their voice."
      },
      {
        "name": "Entice",
        "type": "Action",
        "text": "Spend a Fear to have the Beguiler make an alluring overture to a PC within Close range. The PC must succeed on a Presence Reaction Roll (18) or move into Melee range with the Beguiler. If the Beguiler's head stalk is transformed into a person the PC would find trustworthy, they have disadvantage on the reaction roll."
      },
      {
        "name": "Gulp",
        "type": "Reaction",
        "text": "When a PC moves within Melee range, you can spend a Fear to make an attack roll against them. On a successful attack, the target takes 3d6 physical damage and is Swallowed. While Swallowed, the target is Restrained and takes 3d6 physical damage when the Beguiler takes the spotlight. The Beguiler disgorges all Swallowed creatures when it takes Major or Severe damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Manticore",
    "tier": 3,
    "type": "Solo",
    "description": "A legendary beast that has a human's face, lion's body, scorpion's tail, and dragon's wings.",
    "motives": "Bite, claw, pounce, riddle, swipe, swoop, trick",
    "difficulty": 17,
    "thresholds": {
      "major": 20,
      "severe": 35
    },
    "hpMax": 12,
    "stressMax": 6,
    "atk": "+6",
    "attack": {
      "name": "Teeth & Claws",
      "range": "Very Close",
      "damage": "3d12+6 phy"
    },
    "experience": "Overgrowth +3, Riddles +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Manticore can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Riddle Me This",
        "type": "Passive",
        "text": "The Manticore is obsessed with puzzles and can be distracted by brain teasers, word games, or other semi-intellectual diversions."
      },
      {
        "name": "Winged",
        "type": "Passive",
        "text": "While airborne, the Manticore gains a +2 bonus to their Difficulty and attack rolls."
      },
      {
        "name": "Pouncing Attack",
        "type": "Action",
        "text": "Spend a Fear to have the Manticore pounce into Melee range of a target within Far range and make an attack against them. On a success, deal 3d20+6 physical damage, and the target becomes Shaky until they spend a Hope. While Shaky, the target makes attack rolls with disadvantage."
      },
      {
        "name": "Paralyzing Tail Spike",
        "type": "Action",
        "text": "Mark a Stress to make an attack roll against a target within Close range. On a success, the target takes 3d8 physical damage and becomes Restrained until they overcome the toxin with a successful Strength Roll."
      },
      {
        "name": "Locking Jaws",
        "type": "Reaction",
        "text": "When the Manticore succeeds on a standard attack against a target within Melee range, you can mark a Stress to lock their jaws onto the target, making the target Restrained and Vulnerable until they escape with a successful Strength Roll (19)."
      }
    ],
    "notes": ""
  },
  {
    "name": "Monarch",
    "tier": 3,
    "type": "Social",
    "description": "The sovereign ruler of a nation, wreathed in the privilege of tradition and wielding unmatched power in their domain.",
    "motives": "Control vassals, destroy rivals, forge a legacy",
    "difficulty": 16,
    "thresholds": {
      "major": 16,
      "severe": 32
    },
    "hpMax": 6,
    "stressMax": 5,
    "atk": "+0",
    "attack": {
      "name": "Warhammer",
      "range": "Melee",
      "damage": "3d6+3 phy"
    },
    "experience": "History +3, Nobility +3",
    "features": [
      {
        "name": "Execute Them!",
        "type": "Action",
        "text": "Spend a Fear per PC in the party to have the group condemned for crimes real or imagined. A PC who succeeds on a Presence Roll can demand trial by combat or another special form of trial."
      },
      {
        "name": "Crownsguard",
        "type": "Action",
        "text": "Once per scene, mark a Stress to summon six Tier 3 Minions, who appear at Close range to enforce the Monarch's will."
      },
      {
        "name": "Casus Belli",
        "type": "Reaction",
        "text": "Long-Term Countdown (8). Spend a Fear to activate after the Monarch's desire for war is first revealed. When it triggers, the Monarch has a reason to rally the nation to war and the support to act on that reason. You gain 1d4 Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Night Children",
    "tier": 3,
    "type": "Horde",
    "description": "A teeming assortment of nocturnal fiends under the thrall of an ancient evil.",
    "motives": "Carry victims back to master, overrun settlements, slither through shadow",
    "difficulty": 16,
    "thresholds": {
      "major": 17,
      "severe": 32
    },
    "hpMax": 7,
    "stressMax": 4,
    "atk": "+1",
    "attack": {
      "name": "Fangs & Claws",
      "range": "Melee",
      "damage": "3d6+8 phy"
    },
    "experience": "Terrorize +3",
    "features": [
      {
        "name": "Horde (2d6+2)",
        "type": "Passive",
        "text": "When the Night Children have marked half or more of their HP, their standard attack deals 2d6+2 physical damage instead."
      },
      {
        "name": "Swell Ranks",
        "type": "Action",
        "text": "Once per scene, mark any number of Stress to have the Night Children open a portal that spews forth reinforcements, refilling the Horde's ranks. Clear a number of HP equal to the number of Stress marked."
      },
      {
        "name": "Overwhelm",
        "type": "Reaction",
        "text": "When the Night Children mark HP from an attack within Melee range, you can mark a Stress to make a standard attack against the attacker."
      }
    ],
    "notes": ""
  },
  {
    "name": "Pain Priest",
    "tier": 3,
    "type": "Social",
    "description": "A member of an other-dimensional religious order devoted to exploring the boundaries of mortal suffering and ecstasy.",
    "motives": "Feed on emotions, locate the innocent or curious, tempt them with their deepest desires",
    "difficulty": 16,
    "thresholds": {
      "major": 16,
      "severe": 32
    },
    "hpMax": 6,
    "stressMax": 5,
    "atk": "+0",
    "attack": {
      "name": "Torture Implements",
      "range": "Melee",
      "damage": "3d6+4 phy"
    },
    "experience": "Experimentation +4",
    "features": [
      {
        "name": "Walk Between Worlds",
        "type": "Action",
        "text": "Mark a Stress to place the Priest anywhere within Very Far range and immediately spotlight them again."
      },
      {
        "name": "Pleasure and Pain",
        "type": "Reaction",
        "text": "When a PC within Close range of the Priest gains a Hope or marks HP, roll a d8. On a result of 8, the Priest opens a portal to their original dimension and flees there with the closest party member. You gain 1d6 Fear. The portal remains open until the Priest is defeated or spotlighted again."
      }
    ],
    "notes": ""
  },
  {
    "name": "Phoenix",
    "tier": 3,
    "type": "Ranged",
    "description": "A huge eagle that's made of magical flame, impossible to kill, and hunted for its healing plumage.",
    "motives": "Flee pursuers, live brilliantly, soar through the heavens, wield light and flame",
    "difficulty": 18,
    "thresholds": {
      "major": 19,
      "severe": 30
    },
    "hpMax": 6,
    "stressMax": 6,
    "atk": "+4",
    "attack": {
      "name": "Fire Bolt",
      "range": "Very Far",
      "damage": "3d10+3 mag"
    },
    "experience": "Bright +4, Legendary +3",
    "features": [
      {
        "name": "Purifying Aura",
        "type": "Passive",
        "text": "Any PC who takes an action within the Phoenix's Melee range can spend a Hope to purify themself in its healing warmth, clearing a HP or a Stress and all conditions."
      },
      {
        "name": "Fireseed",
        "type": "Reaction",
        "text": "The Phoenix bleeds magic fire. When the Phoenix marks a HP, summon one Minor Fire Elemental within Very Close range."
      },
      {
        "name": "Resurrection",
        "type": "Evolution",
        "text": "When the Phoenix is defeated, it becomes a cloud of ash that blows away to reveal a Smoldering Egg. The Egg is immune to all damage and has a heat aura that deals 3d4 direct magic damage to anyone who touches it. The Egg hatches into a new Phoenix, with all HP and Stress cleared, in 7 days."
      }
    ],
    "notes": ""
  },
  {
    "name": "Plesiosaurus",
    "tier": 3,
    "type": "Standard",
    "description": "A canoe-length marine lizard that has a long neck and four flippers.",
    "motives": "Dive deeper, eat fish, swim peacefully",
    "difficulty": 16,
    "thresholds": {
      "major": 18,
      "severe": 35
    },
    "hpMax": 7,
    "stressMax": 5,
    "atk": "+2",
    "attack": {
      "name": "Bite",
      "range": "Very Close",
      "damage": "3d8+5 phy"
    },
    "experience": "Lochs +3",
    "features": [
      {
        "name": "Only a Rumor",
        "type": "Passive",
        "text": "While deep underwater, the Plesiosaurus can't be located or targeted."
      },
      {
        "name": "Wall of Water",
        "type": "Action",
        "text": "Mark a Stress to have the Plesiosaurus breach and crash, sending a wall of water from one side of its body. Each PC within Far range on that side of the Plesiosaurus must succeed on an Agility Reaction Roll (18) or take 3d10 physical damage and be pushed back to Far range."
      }
    ],
    "notes": ""
  },
  {
    "name": "Roc",
    "tier": 3,
    "type": "Solo",
    "description": "A giant falcon that nests in the mountains and unleashes storms.",
    "motives": "Breathe lightning and speak thunder, protect eggs, rake with talons, spy from afar",
    "difficulty": 18,
    "thresholds": {
      "major": 20,
      "severe": 35
    },
    "hpMax": 12,
    "stressMax": 6,
    "atk": "+3",
    "attack": {
      "name": "Beak & Talons",
      "range": "Very Close",
      "damage": "3d12+8 phy"
    },
    "experience": "Craggy Peaks +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Roc can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight it."
      },
      {
        "name": "Bird of Prey",
        "type": "Passive",
        "text": "Once per GM turn, the Roc can move up to Very Far range before or after it takes an action."
      },
      {
        "name": "Here Comes the Boom",
        "type": "Action",
        "text": "Spend a Fear to have the Roc unleash a storm of lightning and thunder. Make an attack roll against 1d4+1 targets within Far range. Targets the Roc succeeds against take 3d12 magic damage. Then each target within Far range of the Roc must make an Agility Reaction Roll (20). Targets who fail take 3d8 physical damage and are pushed back to Close range. Targets who succeed must mark a Stress."
      },
      {
        "name": "Crushing Grasp",
        "type": "Reaction",
        "text": "When the Roc makes a successful standard attack, you can mark a Stress to have the Roc crush the target with its talons, forcing them to mark 1d4 Stress and Restraining them until they succeed on a Strength Roll (20)."
      },
      {
        "name": "Nest Warden",
        "type": "Evolution",
        "text": "When the Roc's eggs are threatened, it gains the following features: Wrathful - Passive: The Roc gains a +2 bonus to its Difficulty and a bonus to damage rolls equal to the number of Stress it has marked. Electrifying Aura - Passive: The Roc has resistance to magic damage. PCs who fail a roll within Very Close range must spend a Hope or mark 1d4 Stress."
      }
    ],
    "notes": ""
  },
  {
    "name": "Sandwyrm",
    "tier": 3,
    "type": "Bruiser",
    "description": "A gargantuan burrowing worm that has armor plating and gnashing jaws. This intelligent and opportunistic hunter can swim through sand as quickly as a cheetah runs on land.",
    "motives": "Ambush from below, eat and leave, tunnel and erupt, use both ends",
    "difficulty": 17,
    "thresholds": {
      "major": 21,
      "severe": 40
    },
    "hpMax": 6,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Bite",
      "range": "Very Close",
      "damage": "3d8+4 phy"
    },
    "experience": "Tremor Sense +4",
    "features": [
      {
        "name": "Venomous Tail Stinger",
        "type": "Action",
        "text": "Mark a Stress to attack a target within Close range. On a success, the target takes 3d10+2 physical damage and must succeed on a Strength Reaction Roll or become Restrained and Vulnerable until they roll with Hope."
      },
      {
        "name": "Devour",
        "type": "Action",
        "text": "Make an attack against a target within Melee range. On a success, the Sandwyrm Swallows the target. While Swallowed, the target is Restrained and marks a HP when the Sandwyrm is spotlighted. The Sandwyrm disgorges all Swallowed creatures when it takes Major or greater damage."
      },
      {
        "name": "Hungry, Not Stupid",
        "type": "Reaction",
        "text": "When the Sandwyrm marks half its HP or Swallows a creature, roll a d6. On a result of 3 or lower, the Sandwyrm retreats to safety."
      }
    ],
    "notes": ""
  },
  {
    "name": "Shapeshifting Fiend",
    "tier": 3,
    "type": "Social",
    "description": "An evil entity who impersonates a trusted figure.",
    "motives": "Impersonate, sow discord, tempt betrayal",
    "difficulty": 17,
    "thresholds": {
      "major": 20,
      "severe": 32
    },
    "hpMax": 4,
    "stressMax": 8,
    "atk": "+3",
    "attack": {
      "name": "Hidden Blade",
      "range": "Melee",
      "damage": "3d8+3 phy"
    },
    "experience": "Manipulate +3, Mimic +2",
    "features": [
      {
        "name": "Fiendish Nature",
        "type": "Passive",
        "text": "The Fiend has resistance to magic damage and can't be fooled by magic illusions."
      },
      {
        "name": "Impersonate",
        "type": "Action",
        "text": "Spend a Fear to have the Fiend magically transform into a humanoid they have previously interacted with. A PC who targets the Fiend while they're in the form of a person the PC cares for must succeed on an Instinct Reaction Roll or the attack fails and the PC must mark a Stress."
      },
      {
        "name": "Turn Invisible",
        "type": "Action",
        "text": "Mark a Stress to make the Fiend Hidden until they make an action roll or take damage."
      },
      {
        "name": "Backhanded Guidance",
        "type": "Reaction",
        "text": "When a PC makes an action roll while the Fiend is in the scene, you can mark a Stress to add 1d6 to the result of their Fear Die. Exposed!"
      },
      {
        "name": "(Phase Change)",
        "type": "Reaction",
        "text": "When the Fiend is defeated or the PCs discover its true identity, replace the Fiend with Shapeshifting Fiend Revealed and immediately spotlight them."
      }
    ],
    "notes": ""
  },
  {
    "name": "Shapeshifting Fiend Revealed",
    "tier": 3,
    "type": "Solo",
    "description": "A towering humanoid who has an insectile head and multiple sets of glowing red eyes.",
    "motives": "Claim souls, confuse and misdirect, escape to the Circles Below, teleport",
    "difficulty": 17,
    "thresholds": {
      "major": 20,
      "severe": 32
    },
    "hpMax": 10,
    "stressMax": 8,
    "atk": "+3",
    "attack": {
      "name": "Mantis Claws",
      "range": "Very Close",
      "damage": "3d12+5 phy"
    },
    "experience": "Hellbound +3, Immortal +2",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Fiend can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Fiendish Resistance",
        "type": "Passive",
        "text": "The Fiend has resistance to magic damage and can't be fooled by magic illusions."
      },
      {
        "name": "Demonic Rage",
        "type": "Action",
        "text": "Spend a Fear to make a standard attack with a bonus to the attack roll equal the amount of Stress the Fiend has marked. On a success, the attack deals direct damage."
      },
      {
        "name": "Hall of Mirrors",
        "type": "Action",
        "text": "Mark 2 Stress to have the Fiend summon four illusory duplicates and activate a Duplicate Countdown (4). When the Fiend is targeted by an attack, they gain a bonus to their Difficulty equal to the countdown die's current value. The countdown ticks down when a PC fails an attack against the Fiend. When it triggers, the duplicates vanish."
      },
      {
        "name": "Flash Claw",
        "type": "Action",
        "text": "Spend a Fear to have the Fiend unleash an arc of magical energy. Make an attack roll against all targets within Close range. Targets the attack succeeds against take 3d20 magic damage."
      },
      {
        "name": "Mind Games",
        "type": "Reaction",
        "text": "When an attack targeting the Fiend from beyond Very Close range succeeds with Fear, you can mark a Stress to have the Fiend instantly switch places with a PC within Very Close range. The PC takes the damage instead."
      }
    ],
    "notes": ""
  },
  {
    "name": "Stag Knight",
    "tier": 3,
    "type": "Standard",
    "description": "A knight with huge, majestic antlers wearing armor made of dangerous thorns.",
    "motives": "Isolate, maneuver, protect the forest, weed the unwelcome",
    "difficulty": 17,
    "thresholds": {
      "major": 19,
      "severe": 36
    },
    "hpMax": 7,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Bramble Sword",
      "range": "Melee",
      "damage": "3d8+3 phy"
    },
    "experience": "Forest Knowledge +3",
    "features": [
      {
        "name": "From Above",
        "type": "Passive",
        "text": "When the Knight succeeds on a standard attack from above a target, they deal 3d12+3 physical damage instead of their standard damage."
      },
      {
        "name": "Blade of the Forest",
        "type": "Action",
        "text": "Spend a Fear to make an attack against all targets within Very Close range. Targets the Knight succeeds against take physical damage equal to 3d4 + the target's Major threshold."
      },
      {
        "name": "Thorny Armor",
        "type": "Reaction",
        "text": "When the Knight takes damage from an attack within Melee range, you can mark a Stress to deal 1d10+5 physical damage to the attacker."
      }
    ],
    "notes": ""
  },
  {
    "name": "Storm Titan",
    "tier": 3,
    "type": "Solo",
    "description": "An ancient, wise, and temperamental goliath who has hair made of mist and electricity crackling across their skin.",
    "motives": "Erupt violently, wait, watch",
    "difficulty": 20,
    "thresholds": {
      "major": 35,
      "severe": 70
    },
    "hpMax": 11,
    "stressMax": 8,
    "atk": "+7",
    "attack": {
      "name": "Lightning Bolt",
      "range": "Far",
      "damage": "3d20+10 mag"
    },
    "experience": "Power of the Storm +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Titan can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Momentum",
        "type": "Passive",
        "text": "When the Titan makes a successful attack against a PC, you gain a Fear."
      },
      {
        "name": "Ball Lightning",
        "type": "Action",
        "text": "Spend a Fear to have the Titan conjure 1d4 spheres of electrical energy within Close range. When the Titan is spotlighted, they can move each sphere up to Close range. When a sphere moves within Very Close range of a PC, the PC takes 4d6 magic damage, and the sphere disappears. Each sphere has the same Difficulty as the Titan and disappears if a creature deals magic damage to it."
      },
      {
        "name": "Storm Bringer",
        "type": "Action",
        "text": "Mark a Stress to have the Titan conjure a raging storm. Each PC within Close range of the Titan must make a Strength Reaction Roll. Targets who fail take 3d12 magic damage and are Vulnerable until they are spotlighted. Targets who succeed take half damage."
      },
      {
        "name": "Thunderclap",
        "type": "Action",
        "text": "Spend a Fear to target up to three PCs in front of the Titan within Close range. Each target marks a Stress and becomes Vulnerable until they roll with Hope."
      }
    ],
    "notes": ""
  },
  {
    "name": "Oak Treant",
    "tier": 3,
    "type": "Bruiser",
    "description": "A sturdy animate old-growth tree.",
    "motives": "Hide in plain sight, preserve the forest, root down, swing branches",
    "difficulty": 17,
    "thresholds": {
      "major": 22,
      "severe": 40
    },
    "hpMax": 7,
    "stressMax": 4,
    "atk": "+2",
    "attack": {
      "name": "Branch",
      "range": "Very Close",
      "damage": "3d8+2 phy"
    },
    "experience": "Forest Knowledge +3",
    "features": [
      {
        "name": "Just a Tree",
        "type": "Passive",
        "text": "Before they make their first attack in a fight or after they become Hidden, the Treant is indistinguishable from other trees until they next act or a PC succeeds on an Instinct Roll to identify them."
      },
      {
        "name": "Seed Barrage",
        "type": "Action",
        "text": "Mark a Stress and make an attack against up to three targets within Close range, pummeling them with giant acorns. Targets the Treant succeeds against take 2d10+5 physical damage."
      },
      {
        "name": "Take Root",
        "type": "Action",
        "text": "Mark a Stress to Root the Treant in place. The Treant is Restrained while Rooted, and can end this effect instead of moving while they are spotlighted. While Rooted, the Treant has resistance to physical damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Treant Sapling",
    "tier": 3,
    "type": "Minion",
    "description": "A small, sentient tree sapling.",
    "motives": "Blend in, preserve the forest, pummel, surround",
    "difficulty": 14,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "+0",
    "attack": {
      "name": "Branches",
      "range": "Melee",
      "damage": "8 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Minion (6)",
        "type": "Passive",
        "text": "The Sapling is defeated when they take any damage. For every 6 damage a PC deals to the Sapling, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Treant Saplings within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 8 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Unicorn",
    "tier": 3,
    "type": "Standard",
    "description": "A celestial avatar of goodness in the form of a preternaturally beautiful horse with a long, spiraled horn emerging from its head.",
    "motives": "Keep evil at bay, protect the sacred, sense emotions and intent",
    "difficulty": 17,
    "thresholds": {
      "major": 19,
      "severe": 36
    },
    "hpMax": 7,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Hoof & Horn",
      "range": "Melee",
      "damage": "3d10+3 mag"
    },
    "experience": "Magic +3, Nature +3",
    "features": [
      {
        "name": "Celestial Lance",
        "type": "Passive",
        "text": "The Unicorn's standard attack deals double damage to a creature that has dealt damage to it."
      },
      {
        "name": "Healing Touch",
        "type": "Action",
        "text": "The Unicorn touches its horn to an ally within Melee range and channels healing energy into them. Mark any number of Stress to clear an equal number of the ally's HP."
      },
      {
        "name": "Protective Aura",
        "type": "Action",
        "text": "Mark a Stress to have the Unicorn conjure a sparkling magical aura. While the aura is in effect, attack rolls made against the Unicorn or an ally within Very Close range are made with disadvantage. This effect lasts until the Unicorn takes damage."
      },
      {
        "name": "Teleport",
        "type": "Action",
        "text": "Mark a Stress to have the Unicorn teleport up to Very Far range. The Unicorn can bring up to three allies within Very Close range with it."
      }
    ],
    "notes": ""
  },
  {
    "name": "Head Vampire",
    "tier": 3,
    "type": "Leader",
    "description": "A captivating undead dressed in aristocratic finery.",
    "motives": "Create thralls, charm, command, fly, intimidate",
    "difficulty": 17,
    "thresholds": {
      "major": 22,
      "severe": 42
    },
    "hpMax": 6,
    "stressMax": 6,
    "atk": "+5",
    "attack": {
      "name": "Rapier",
      "range": "Melee",
      "damage": "2d20+4 phy"
    },
    "experience": "Aristocrat +3",
    "features": [
      {
        "name": "Terrifying",
        "type": "Passive",
        "text": "When the Vampire makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear."
      },
      {
        "name": "Look into My Eyes",
        "type": "Passive",
        "text": "A creature who moves into Melee range of the Vampire must make an Instinct Reaction Roll. On a failure, you gain 1d4 Fear."
      },
      {
        "name": "Feed on Followers",
        "type": "Action",
        "text": "When the Vampire is within Melee range of an ally, they can cause the ally to mark a HP. The Vampire then clears a HP."
      },
      {
        "name": "The Hunt Is On",
        "type": "Action",
        "text": "Spend 2 Fear to summon 1d4 Vampires, who appear at Far range and immediately take the spotlight."
      },
      {
        "name": "Lifesuck",
        "type": "Reaction",
        "text": "When the Vampire is spotlighted, roll a d8. On a result of 6 or higher, all targets within Very Close range must mark a HP."
      }
    ],
    "notes": ""
  },
  {
    "name": "Vampire",
    "tier": 3,
    "type": "Standard",
    "description": "An intelligent undead with blood-stained lips and a predator's smile.",
    "motives": "Bite, charm, deceive, feed, intimidate",
    "difficulty": 16,
    "thresholds": {
      "major": 18,
      "severe": 35
    },
    "hpMax": 5,
    "stressMax": 4,
    "atk": "+3",
    "attack": {
      "name": "Rapier",
      "range": "Melee",
      "damage": "3d8 phy"
    },
    "experience": "Nocturnal Hunter +3",
    "features": [
      {
        "name": "Draining Bite",
        "type": "Action",
        "text": "Make an attack against a target within Melee range. On a success, deal 5d4 physical damage. A target who marks HP from this attack loses a Hope and must mark a Stress. The Vampire then clears a HP."
      },
      {
        "name": "Mistform",
        "type": "Reaction",
        "text": "When the Vampire takes physical damage, you can spend a Fear to take half damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Vampire Bat Swarm",
    "tier": 3,
    "type": "Horde",
    "description": "A cloud of blood-sucking bats.",
    "motives": "Blot out the moon, murmur, spread disease",
    "difficulty": 15,
    "thresholds": {
      "major": 16,
      "severe": 30
    },
    "hpMax": 8,
    "stressMax": 3,
    "atk": "+1",
    "attack": {
      "name": "Fangs",
      "range": "Melee",
      "damage": "3d6+6 phy"
    },
    "experience": "Blood +3",
    "features": [
      {
        "name": "Horde (2d6)",
        "type": "Passive",
        "text": "When the Swarm has marked half or more of its HP, its standard attack deals 2d6 physical damage instead."
      },
      {
        "name": "Blinding Multitude",
        "type": "Passive",
        "text": "The Swarm is so thick it blocks the vision of anyone it interacts with. Creatures within Melee range have disadvantage on attacks made against adversaries other than the Swarm."
      },
      {
        "name": "Bloodsuckers",
        "type": "Reaction",
        "text": "When the Swarm deals damage to a target, you can mark a Stress to have the Swarm feed. The target marks an additional HP, and the Swarm clears a HP."
      }
    ],
    "notes": ""
  },
  {
    "name": "Vampire Lord",
    "tier": 3,
    "type": "Solo",
    "description": "A cruel vampire lord from a long-lost age, cursed with immortality.",
    "motives": "Corrupt, destroy, overwhelm with evil power",
    "difficulty": 18,
    "thresholds": {
      "major": 24,
      "severe": 45
    },
    "hpMax": 7,
    "stressMax": 7,
    "atk": "+5",
    "attack": {
      "name": "Claws",
      "range": "Melee",
      "damage": "3d10+2 phy"
    },
    "experience": "Evil +3, Noble +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Vampire Lord can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Midnight Heart",
        "type": "Passive",
        "text": "Long-Term Countdown (6). The Vampire Lord keeps their heart hidden in a safe place. If it's destroyed, the Vampire Lord dies. Otherwise, when the Vampire Lord is defeated, activate the countdown. It ticks down each time the PCs finish a long rest. When it triggers, the Vampire Lord revives within Close range of the heart with all HP and Stress cleared."
      },
      {
        "name": "Terrifying",
        "type": "Passive",
        "text": "When the Vampire Lord makes a successful attack roll, all PCs within Close range lose a Hope, and you gain a Fear."
      },
      {
        "name": "Unleash Hellfire",
        "type": "Action",
        "text": "Mark a Stress to have the Vampire Lord momentarily conjure 1d4 bursts of hellfire within Far range. Each burst deals 3d6 magic damage to each target within Very Close range. If a target takes damage from multiple bursts, combine the damage."
      },
      {
        "name": "Resurgence",
        "type": "Reaction",
        "text": "When a PC within Very Close range rolls with Hope, you can spend a Fear to clear a HP or a Stress."
      },
      {
        "name": "Melt into Shadow",
        "type": "Reaction",
        "text": "When a PC would deal damage to the Vampire Lord, you can spend a Fear to roll a d6. On a result of 5 or higher, negate the damage, then teleport the Vampire Lord to a point within Far range."
      },
      {
        "name": "Hellwing",
        "type": "Evolution",
        "text": "When the Vampire Lord marks half their HP, they transform into the Hellwing: a towering, demonic bat creature. They gain the \"On Crimson Wings\" and \"Bloodbath\" features and replace their standard attack with the following standard attack: Claws: Close | 3d12+6 phy On Crimson Wings - Passive: While flying, the Hellwing gains a +1 bonus to their Difficulty. Bloodbath - Reaction: When the Hellwing takes Major or greater damage, the ground within Very Close range is covered with blood, dealing 3d10 magic damage to all other creatures in the area. When the Hellwing takes the spotlight on subsequent GM turns, all other creatures in that area take 3d6 magic damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Vault Guardian Gaoler",
    "tier": 3,
    "type": "Support",
    "description": "A boxy, dust-covered construct with thick metallic swinging doors on their torso.",
    "motives": "Carry away, entrap, protect, pummel",
    "difficulty": 16,
    "thresholds": {
      "major": 19,
      "severe": 33
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Body Bash",
      "range": "Very Close",
      "damage": "3d6+2 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Blocking Shield",
        "type": "Passive",
        "text": "Creatures within Melee range of the Gaoler have disadvantage on attack rolls against them. Creatures trapped inside the Gaoler are immune to this feature."
      },
      {
        "name": "Lock Up",
        "type": "Action",
        "text": "Mark a Stress to make an attack against a target within Very Close range. On a success, the target is Restrained within the Gaoler until freed with a successful Strength Roll (18). While Restrained, the target can only attack the Gaoler."
      }
    ],
    "notes": ""
  },
  {
    "name": "Vault Guardian Sentinel",
    "tier": 3,
    "type": "Bruiser",
    "description": "A dust-covered golden construct with boxy limbs and a huge mace for a hand.",
    "motives": "Destroy at any cost, expunge, protect",
    "difficulty": 17,
    "thresholds": {
      "major": 21,
      "severe": 40
    },
    "hpMax": 6,
    "stressMax": 3,
    "atk": "+3",
    "attack": {
      "name": "Charged Mace",
      "range": "Very Close",
      "damage": "2d12+1 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Kinetic Slam",
        "type": "Passive",
        "text": "Targets who take damage from the Sentinel's standard attack are knocked back to Very Close range."
      },
      {
        "name": "Box In",
        "type": "Action",
        "text": "Mark a Stress to choose a target within Very Close range to focus on. That target has disadvantage on attack rolls when they're within Very Close range of the Sentinel. The Sentinel can only focus on one target at a time."
      },
      {
        "name": "Mana Bolt",
        "type": "Action",
        "text": "Spend a Fear to lob explosive magic at a point within Far range. All targets within Very Close range of that point must make an Agility Reaction Roll. Targets who fail take 2d8+20 magic damage and are knocked back to Close range. Targets who succeed take half damage and aren't knocked back."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Sentinel makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Vault Guardian Turret",
    "tier": 3,
    "type": "Ranged",
    "description": "A massive living turret with reinforced armor and twelve piston-driven mechanical legs.",
    "motives": "Concentrate fire, lock down, mark, protect",
    "difficulty": 16,
    "thresholds": {
      "major": 20,
      "severe": 32
    },
    "hpMax": 5,
    "stressMax": 4,
    "atk": "+3",
    "attack": {
      "name": "Magitech Cannon",
      "range": "Far",
      "damage": "3d10+3 mag"
    },
    "experience": "",
    "features": [
      {
        "name": "Slow Firing",
        "type": "Passive",
        "text": "When you spotlight the Turret and they don't have a token on their stat block, they can't make a standard attack. Place a token on their stat block and describe what they're preparing to do. When you spotlight the Turret and they have a token on their stat block, clear the token and they can attack."
      },
      {
        "name": "Mark Target",
        "type": "Action",
        "text": "Spend a Fear to Mark a target within Far range until the Turret is destroyed or the Marked target becomes Hidden. While the target is Marked, their Evasion is halved."
      },
      {
        "name": "Concentrate Fire",
        "type": "Reaction",
        "text": "When another adversary deals damage to a target within Far range of the Turret, you can mark a Stress to add the Turret's standard attack damage to the damage roll."
      },
      {
        "name": "Detonation",
        "type": "Reaction",
        "text": "When the Turret is destroyed, they explode. All targets within Close range must make an Agility Reaction Roll. Targets who fail take 3d20 physical damage. Targets who succeed take half damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Viscera Sucker",
    "tier": 3,
    "type": "Skulk",
    "description": "A vampiric demon whose upper body detaches at sundown to fly through nearby villages in search of victims. It has a winged upper body with hanging entrails.",
    "motives": "Clamp onto prey, suck blood, tear in half",
    "difficulty": 14,
    "thresholds": {
      "major": 16,
      "severe": 30
    },
    "hpMax": 5,
    "stressMax": 3,
    "atk": "+2",
    "attack": {
      "name": "Long Nails",
      "range": "Melee",
      "damage": "2d6+7 phy"
    },
    "experience": "Flying +3",
    "features": [
      {
        "name": "Join or Die",
        "type": "Passive",
        "text": "The Viscera Sucker dies if it hasn't reconnected its upper and lower halves by dawn."
      },
      {
        "name": "Entangling Entrails",
        "type": "Action",
        "text": "Spend a Fear to have the Viscera Sucker latch onto a target within Very Close range, Restraining them until they escape with a successful Strength Roll (16)."
      },
      {
        "name": "Lifesuck",
        "type": "Action",
        "text": "Mark a Stress to have the Viscera Sucker drink blood from a Restrained target within Melee range. The target marks a HP, and the Viscera Sucker clears a HP."
      }
    ],
    "notes": ""
  },
  {
    "name": "Whisper Wraith",
    "tier": 3,
    "type": "Skulk",
    "description": "The echoes of broken promises and dreams unfulfilled, manifesting as a floating, translucent shroud of tattered black velvet in a vaguely humanoid shape.",
    "motives": "Bind limbs, drop from a great height, lift off the ground, swirl through the air, wrap around heads",
    "difficulty": 16,
    "thresholds": {
      "major": 20,
      "severe": 32
    },
    "hpMax": 6,
    "stressMax": 6,
    "atk": "+4",
    "attack": {
      "name": "Shadow Touch",
      "range": "Melee",
      "damage": "3d8+4 mag"
    },
    "experience": "Dreams +4",
    "features": [
      {
        "name": "Greater Specter",
        "type": "Passive",
        "text": "The Wraith has resistance to physical damage and can move through solid objects."
      },
      {
        "name": "Spooky",
        "type": "Passive",
        "text": "When the Wraith makes a successful attack, all PCs within Close range must mark a Stress, and you gain a Fear."
      },
      {
        "name": "Nightmare Shroud",
        "type": "Action",
        "text": "Spend a Fear to have the Wraith wrap itself around a PC within Melee range, Shrouding the target until they succeed on a Strength Roll to dislodge the Wraith or the Wraith takes Major or greater damage. While Shrouded, the target has disadvantage on attack rolls and marks a Stress when they roll with Fear. Additionally, damage that would be dealt to the Wraith is split evenly between the Wraith and the Shrouded target."
      }
    ],
    "notes": ""
  },
  {
    "name": "Wyvern",
    "tier": 3,
    "type": "Standard",
    "description": "A two-legged dragon that flies from its mountaintop aerie to devour livestock.",
    "motives": "Cast a long shadow, snatch and grab, wheel through the air",
    "difficulty": 16,
    "thresholds": {
      "major": 18,
      "severe": 35
    },
    "hpMax": 7,
    "stressMax": 5,
    "atk": "+2",
    "attack": {
      "name": "Teeth & Claws",
      "range": "Very Close",
      "damage": "3d8+5 phy"
    },
    "experience": "Death from Above +4",
    "features": [
      {
        "name": "Double Strike",
        "type": "Action",
        "text": "Mark a Stress to have the Wyvern make two standard attacks. If both attacks succeed against the same target, combine the damage."
      },
      {
        "name": "Terrifying Shriek",
        "type": "Action",
        "text": "Spend a Fear to have the Wyvern let out a spine-chilling screech. All PCs within Far range are Terrified until they succeed on a Presence Roll (18) to clear the condition or the Wyvern is defeated. While Terrified, a PC doesn't gain a Hope when they roll with Hope."
      },
      {
        "name": "Clutch",
        "type": "Reaction",
        "text": "When the Wyvern makes a successful attack against a PC, you can spend a Fear to have the Wyvern Restrain the target in its claws until the PC succeeds on a Strength Roll (18) or the Wyvern takes Major or greater damage. While Restrained in this way, the PC has disadvantage on attack rolls."
      }
    ],
    "notes": ""
  },
  {
    "name": "Young Fire Dragon",
    "tier": 3,
    "type": "Solo",
    "description": "A crimson dragon with four powerful limbs and smoldering wings.",
    "motives": "Burn, defend lair, erupt, fly, shred, take",
    "difficulty": 18,
    "thresholds": {
      "major": 21,
      "severe": 34
    },
    "hpMax": 10,
    "stressMax": 6,
    "atk": "+7",
    "attack": {
      "name": "Bite & Claws",
      "range": "Close",
      "damage": "4d10 phy"
    },
    "experience": "Burning Rage +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Dragon can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight it."
      },
      {
        "name": "Intimidating",
        "type": "Passive",
        "text": "When you spend a Fear to spotlight the Dragon, all PCs within Close range must mark a Stress or lose a Hope."
      },
      {
        "name": "Flame Breath",
        "type": "Action",
        "text": "Spend a Fear to have the Dragon unleash a blast of flame against all targets in front of it within Close range. Each target must make an Agility Reaction Roll. Targets who fail take 4d8+3 magic damage. Targets who succeed must mark a Stress or take half damage. A target who marks HP from this attack also becomes Vulnerable until they clear a HP."
      },
      {
        "name": "Eruption",
        "type": "Action",
        "text": "Spend a Fear to have the Dragon crack the earth open with its tail, unleashing an explosion of lava. Choose a point within Far range. Each PC on the line between the Dragon and the chosen point must succeed on an Agility Reaction Roll or get burned, becoming Vulnerable until their next rest. You gain a Fear for each PC who fails."
      },
      {
        "name": "Blazing Scales",
        "type": "Reaction",
        "text": "When a creature within Very Close range attacks the Dragon, the attacker must mark a Stress."
      },
      {
        "name": "Slash and Burn",
        "type": "Reaction",
        "text": "When the Dragon makes a successful standard attack, you gain a Fear and can mark a Stress to have the attack deal an extra 10 magic damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Young Ice Dragon",
    "tier": 3,
    "type": "Solo",
    "description": "A glacier-blue dragon with four powerful limbs and frost-tinged wings.",
    "motives": "Avalanche, defend lair, fly, freeze, defend what is mine, maul",
    "difficulty": 18,
    "thresholds": {
      "major": 21,
      "severe": 41
    },
    "hpMax": 10,
    "stressMax": 6,
    "atk": "+7",
    "attack": {
      "name": "Bite and Claws",
      "range": "Close",
      "damage": "4d10 phy"
    },
    "experience": "Protect What Is Mine +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Dragon can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Rend and Crush",
        "type": "Passive",
        "text": "If a target damaged by the Dragon doesn't mark an Armor Slot to reduce the damage, they must mark a Stress."
      },
      {
        "name": "No Hope",
        "type": "Passive",
        "text": "When a PC rolls with Fear while within Far range of the Dragon, they lose a Hope."
      },
      {
        "name": "Blizzard Breath",
        "type": "Action",
        "text": "Spend 2 Fear to release an icy whorl in front of the Dragon within Close range. All targets in this area must make an Agility Reaction Roll. Targets who fail take 4d6+5 magic damage and are Restrained by ice until they break free with a successful Strength Roll. Targets who succeed must mark 2 Stress or take half damage."
      },
      {
        "name": "Avalanche",
        "type": "Action",
        "text": "Spend a Fear to have the Dragon unleash a huge downfall of snow and ice, covering all other creatures within Far range. All targets within this area must succeed on an Instinct Reaction Roll or be buried in snow and rocks, becoming Vulnerable until they dig themselves out from the debris. For each PC that fails the reaction roll, you gain a Fear."
      },
      {
        "name": "Frozen Scales",
        "type": "Reaction",
        "text": "When a creature makes a successful attack against the Dragon from within Very Close range, they must mark a Stress and become Chilled until their next rest or they clear a Stress. While they are Chilled, they have disadvantage on attack rolls."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Dragon makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Arch-Necromancer",
    "tier": 4,
    "type": "Leader",
    "description": "A decaying mage adorned in dark, tattered robes.",
    "motives": "Corrupt, decay, flee to fight another day, resurrect",
    "difficulty": 21,
    "thresholds": {
      "major": 33,
      "severe": 66
    },
    "hpMax": 9,
    "stressMax": 8,
    "atk": "+6",
    "attack": {
      "name": "Necrotic Blast",
      "range": "Far",
      "damage": "4d12+8 mag"
    },
    "experience": "Forbidden Knowledge +3, Wisdom of Centuries +3",
    "features": [
      {
        "name": "Dance of Death",
        "type": "Action",
        "text": "Mark a Stress to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage, or full damage if you spend a Fear."
      },
      {
        "name": "Beam of Decay",
        "type": "Action",
        "text": "Mark 2 Stress to cause all targets within Far range to make a Strength Reaction Roll. Targets who fail take 2d20+12 magic damage and you gain a Fear. Targets who succeed take half damage. A target who marks 2 or more HP must also mark 2 Stress and becomes Vulnerable until they roll with Hope."
      },
      {
        "name": "Open the Gates of Death",
        "type": "Action",
        "text": "Spend a Fear to summon a Zombie Legion, which appears at Close range and immediately takes the spotlight."
      },
      {
        "name": "Not Today, My Dears",
        "type": "Reaction",
        "text": "When the Necromancer has marked 7 or more of their HP, you can spend a Fear to have them teleport away to a safe location to recover. A PC who succeeds on an Instinct Roll can trace the teleportation magic to their destination."
      },
      {
        "name": "Your Life Is Mine",
        "type": "Reaction",
        "text": "Countdown (Loop 2d6). When the Necromancer has marked 6 or more of their HP, activate the countdown. When it triggers, deal 2d10+6 direct magic damage to a target within Close range. The Necromancer then clears a number of Stress or HP equal to the number of HP marked by the target from this attack."
      }
    ],
    "notes": ""
  },
  {
    "name": "Cephilith Abomination",
    "tier": 4,
    "type": "Bruiser",
    "description": "A lumbering, bog-grown frog beast that has tadpolelike leeches visibly wriggling underneath their translucent skin.",
    "motives": "Do the heavy lifting, leap menacingly, move surprisingly fast, smash and grab",
    "difficulty": 19,
    "thresholds": {
      "major": 35,
      "severe": 70
    },
    "hpMax": 7,
    "stressMax": 5,
    "atk": "+4",
    "attack": {
      "name": "Meaty Fists",
      "range": "Melee",
      "damage": "4d10+10 phy"
    },
    "experience": "Brute +3",
    "features": [
      {
        "name": "Toxic Skin",
        "type": "Passive",
        "text": "A PC who comes into physical contact with the Abomination must roll a d6. On a result of 3 or lower, the PC must mark an Armor Slot or 2 HP."
      },
      {
        "name": "Bear Hug",
        "type": "Action",
        "text": "Mark a Stress to make a standard attack against a target within Melee range. On a success, the target takes standard damage and is Grappled until they escape with a successful Strength Roll. While Grappled, the target is Vulnerable and Restrained."
      },
      {
        "name": "Crunch!",
        "type": "Action",
        "text": "Spend a Fear to deal 4d12 direct physical damage to a creature Grappled by the Abomination."
      },
      {
        "name": "Tongue Attack",
        "type": "Action",
        "text": "Spend a Fear to have the Abomination pull a target within Far range into Melee range, then immediately spotlight the Abomination again."
      },
      {
        "name": "Burrowing Leechpoles",
        "type": "Reaction",
        "text": "When the Abomination takes Major or greater damage, their skin erupts in an explosion of subcutaneous wrigglers. Each PC within Close range must make an Agility Reaction Roll. Targets who fail are covered in 2d4 leechpoles, which burrow under their skin. Until the leechpoles are dug out with a successful Finesse Roll (21), any damage the target takes gains a +1 bonus for each leechpole under their skin."
      }
    ],
    "notes": ""
  },
  {
    "name": "Cephilith Hatchling",
    "tier": 4,
    "type": "Minion",
    "description": "A squidlike parasite that latches onto their prey's skull, bathing the victim's brain in extradimensional neurotoxins.",
    "motives": "Climb, feed, hatch, numb, scuttle",
    "difficulty": 18,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "+3",
    "attack": {
      "name": "Barbed Suckers",
      "range": "Melee",
      "damage": "9 phy"
    },
    "experience": "Psychic +2",
    "features": [
      {
        "name": "Minion (12)",
        "type": "Passive",
        "text": "The Hatchling is defeated when they take any damage. For every 12 damage a PC deals to the Hatchling, the PC defeats an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Comatize",
        "type": "Action",
        "text": "Spend a Fear to have the Hatchling latch onto the head of a PC within Melee range. The PC must mark a Stress as the Hatchling injects the PC's brain with psycho-chemicals, and they must mark an additional Stress each time any PC fails a roll with Fear. The PC can remove the Hatchling by spending a number of Hope equal to the number of Stress they have marked. If a PC marks their last Stress while the Hatchling is latched on, the PC must make a death move. If the PC dies, you can spend a Fear to resurrect them as a Cephilith Novitiate."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Cephilith Hatchlings within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 9 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Cephilith Novitiate",
    "tier": 4,
    "type": "Minion",
    "description": "A luminary of the Mortal Realm who has given their mind to extradimensional entities in exchange for eldritch abilities.",
    "motives": "Help others see the Truth, make way for It, seek forbidden knowledge",
    "difficulty": 16,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "+2",
    "attack": {
      "name": "Eldritch Might",
      "range": "Melee",
      "damage": "12 phy"
    },
    "experience": "Visions +2",
    "features": [
      {
        "name": "Minion (12)",
        "type": "Passive",
        "text": "The Novitiate is defeated when they take any damage. For every 12 damage a PC deals to the Novitiate, the PC defeats an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Cephilith Novitiates within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 12 physical damage each. Combine this damage."
      },
      {
        "name": "Sacrifice Self",
        "type": "Action",
        "text": "Spend a Fear to have the Novitiate charge at a target within Far range and melt into them. Deal 12 direct magic damage to the target and defeat the Novitiate."
      }
    ],
    "notes": ""
  },
  {
    "name": "Cephilith Priest",
    "tier": 4,
    "type": "Leader",
    "description": "A perpetually moist, faceless humanoid from the Outer Realms who has elongated fingers and translucent skin, under which one can see wriggling worms.",
    "motives": "Break the unbelievers' minds, prepare this world for the Cephilith Titan's arrival, sing its praises",
    "difficulty": 20,
    "thresholds": {
      "major": 37,
      "severe": 70
    },
    "hpMax": 7,
    "stressMax": 5,
    "atk": "+8",
    "attack": {
      "name": "Psychic Strike",
      "range": "Far",
      "damage": "4d10+10 mag"
    },
    "experience": "Outer Realms +4",
    "features": [
      {
        "name": "Psychic Blast",
        "type": "Action",
        "text": "Spend a Fear to choose up to three PCs within Close range and force them to make a Knowledge Reaction Roll. Targets who succeed take 2d10+5 direct magic damage. Targets who fail take 4d10+10 direct magic damage and are Vulnerable until spotlighted."
      },
      {
        "name": "Cerebral Incursion",
        "type": "Action",
        "text": "Spend a Fear to choose a Vulnerable target within Melee range. The Priest grabs the target and inserts their elongated fingers into the target's ears, nose, and mouth. The target must succeed on a Strength Reaction Roll or mark 1d6 Stress, and the Priest clears an equal number of Stress."
      },
      {
        "name": "Telekinetic Grasp",
        "type": "Reaction",
        "text": "When the Priest makes a successful standard attack against a PC, you can mark a Stress to Restrain the target until they spend a Hope."
      }
    ],
    "notes": ""
  },
  {
    "name": "Cephilith Titan",
    "tier": 4,
    "type": "Solo",
    "description": "A transdimensional entity in the form of an impossibly large, winged humanoid with an octopus-shaped head and rows of glowing eyes.",
    "motives": "Call and consume followers, corrupt reality, invade the Mortal Realm, spew forth chaos",
    "difficulty": 20,
    "thresholds": {
      "major": 38,
      "severe": 68
    },
    "hpMax": 10,
    "stressMax": 10,
    "atk": "+8",
    "attack": {
      "name": "Pseudoclaw",
      "range": "Close",
      "damage": "4d8+10 mag"
    },
    "experience": "Chaos +5, Psychic +5",
    "features": [
      {
        "name": "Relentless (X)",
        "type": "Passive",
        "text": "The Titan can be spotlighted up to X times per GM turn, where X equals the number of PCs in the scene. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Terrifying",
        "type": "Passive",
        "text": "When the Titan makes a successful attack, all PCs within Close range lose a Hope, and you gain a Fear."
      },
      {
        "name": "Merely a Projection",
        "type": "Passive",
        "text": "The Titan appears in the Mortal Realm as a psychic projection approximating their true form. They have immunity to physical damage and resistance to magic damage."
      },
      {
        "name": "Psychic Scream",
        "type": "Action",
        "text": "Spend a Fear to have the Titan unleash a mind-shattering onslaught of nightmarish visions from the Outer Realms. Each PC within Far range must make an Instinct Reaction Roll (22). Targets who fail take 4d12 direct magic damage. Targets who succeed must mark a Stress."
      },
      {
        "name": "Summon Worshippers",
        "type": "Action",
        "text": "Spend a Fear to summon 1d4 Cephilith Abominations, which appear within Far range, then choose one to immediately spotlight."
      },
      {
        "name": "\"It's Here…\"",
        "type": "Evolution",
        "text": "When the Titan has marked half their HP, they manifest in their full form, clearing all HP and losing the \"Merely a Projection\" feature. While the Titan is in this form, a creature who marks HP from the Titan's standard attack must mark an additional HP."
      }
    ],
    "notes": ""
  },
  {
    "name": "Cipactli",
    "tier": 4,
    "type": "Solo",
    "description": "A gargantuan crocodile that has a body covered in a patchwork of fish scales, toad skin, and dozens of hungry mouths.",
    "motives": "Consume, reshape the land, trample",
    "difficulty": 20,
    "thresholds": {
      "major": 35,
      "severe": 60
    },
    "hpMax": 8,
    "stressMax": 5,
    "atk": "+8",
    "attack": {
      "name": "Bite",
      "range": "Close",
      "damage": "4d8+12 phy"
    },
    "experience": "Hungry +3, Primordial +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Cipactli can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight it."
      },
      {
        "name": "Many Mouths",
        "type": "Action",
        "text": "Mark a Stress to make a standard attack against all targets within Very Close range. Targets the Cipactli succeeds against must also mark a Stress."
      },
      {
        "name": "Frenzied Feeding",
        "type": "Action",
        "text": "Spend a Fear to force all PCs within Close range to succeed on an Instinct Reaction Roll or take 4d6 direct physical damage. The Cipactli clears a HP for each creature who took Severe damage from this attack."
      },
      {
        "name": "Quaking Footfalls",
        "type": "Action",
        "text": "Mark a Stress to force each PC within Far range to make an Agility Reaction Roll. Targets who fail must mark 2 Stress and are Vulnerable until they take damage. Targets who succeed must mark a Stress."
      },
      {
        "name": "Lifeblooded",
        "type": "Reaction",
        "text": "When the Cipactli takes Severe damage, its blood splashes to the ground and instantly erupts into a jungle. All creatures within Close range are temporarily Restrained."
      },
      {
        "name": "Verdant Explosion",
        "type": "Reaction",
        "text": "When the Cipactli marks its last HP, its body erupts into dense vegetation that overtakes the landscape."
      }
    ],
    "notes": ""
  },
  {
    "name": "Cloud Titan",
    "tier": 4,
    "type": "Social",
    "description": "A devastatingly attractive, blue-skinned goliath dressed in the finest silks and dripping with jewelry. They luxuriate in the finer things and dwell in a sky palace filled with treasure.",
    "motives": "Acquire rare and valuable things, celebrate beauty, never pass up an interesting wager",
    "difficulty": 18,
    "thresholds": {
      "major": 26,
      "severe": 42
    },
    "hpMax": 6,
    "stressMax": 5,
    "atk": "+3",
    "attack": {
      "name": "Bejeweled Blade",
      "range": "Very Close",
      "damage": "4d6+8 phy"
    },
    "experience": "Luxury +3, Nobility +3",
    "features": [
      {
        "name": "Lightning Strike",
        "type": "Action",
        "text": "Mark a Stress to make an attack against a target within Far range. On a success, deal 4d10+14 magic damage and roll a d6. On a result of 4 or higher, the lightning bounces, and the Titan makes this attack against a different target within Very Close range of the previous target. Each time the lightning bounces, decrease the damage it deals by 1d10."
      },
      {
        "name": "Mist Weaver",
        "type": "Action",
        "text": "Spend a Fear and choose a point within Far range. The Titan conjures a thick fog over the area within Close range of that point. The Titan is Hidden to enemies within and on the other side of the fog and has advantage on attacks against creatures inside it. The fog lasts until the Titan marks HP."
      },
      {
        "name": "Nebulous Transformation",
        "type": "Action",
        "text": "Mark a Stress to have the Titan transform into a misty cloud that fills a Very Close area. While in this form, the Titan takes double magic damage and has immunity to physical damage. This form lasts until the Titan chooses to drop out of it or takes Severe damage."
      },
      {
        "name": "Unleash the Menagerie",
        "type": "Action",
        "text": "Once per scene, mark any number of Stress to summon an equal number of Griffins, which appear at Close range."
      },
      {
        "name": "Wind Worker",
        "type": "Action",
        "text": "Spend a Fear to have the Titan blast wind at a target within Close range. The target takes 4d6+8 physical damage and is pushed back to Far range from their current position."
      },
      {
        "name": "Double or Nothing",
        "type": "Reaction",
        "text": "When you would gain a Fear from an attack against the Titan, you can roll a d6. On an odd result, you don't gain the Fear. On an even result, you gain 2 Fear instead of 1."
      }
    ],
    "notes": ""
  },
  {
    "name": "Demon Lord Berzug",
    "tier": 4,
    "type": "Solo",
    "description": "The ruler of a deep circle in the Circles Below and a huge hybrid beast with a serpent's tail, a lizard's hind legs, a crab's claw arms, and a two-faced wolf's head.",
    "motives": "Destroy goodness, sow chaos, unseat rivals",
    "difficulty": 20,
    "thresholds": {
      "major": 35,
      "severe": 70
    },
    "hpMax": 12,
    "stressMax": 8,
    "atk": "+8",
    "attack": {
      "name": "Abyssal Claws",
      "range": "Close",
      "damage": "4d12+10 phy"
    },
    "experience": "Infernal Knowledge +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "Berzug can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Chaos Lash",
        "type": "Action",
        "text": "Mark a Stress to have Berzug lash at up to three PCs within Close range and force each target to make an Agility Reaction Roll. Targets who fail take 4d20 physical damage. Targets who succeed take half damage."
      },
      {
        "name": "Gaze into the Abyss",
        "type": "Action",
        "text": "Spend a Fear to have Berzug lock eyes with a PC within Far range. The target must succeed on a Presence Reaction Roll or gain one of the following conditions (roll a d6 and use the corresponding result): 1–2: Mesmerized. The target immediately moves into Melee range of Berzug and is Vulnerable and Restrained until they clear the condition with a successful Instinct Roll. 3–4: Confused. The target must mark a Stress each time they make an action roll until they clear the condition with a successful Knowledge Roll. 5–6: Enthralled. Until the PC makes a successful Presence Roll to clear the condition, you can spotlight them during a GM turn as if they were an adversary. When you do so, choose a target within Close range of the Enthralled PC. The Enthralled PC moves into Melee range of the target and makes a weapon attack against them using a d20 instead of Duality Dice."
      },
      {
        "name": "Crushing Strike",
        "type": "Reaction",
        "text": "When a PC marks HP from Berzug's standard attack, you can mark a Stress to force them to mark a number of Stress equal to the number of HP they marked. You gain a Fear."
      },
      {
        "name": "Horrifying",
        "type": "Reaction",
        "text": "When a PC fails an attack against Berzug, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Dragon Mother Mitera",
    "tier": 4,
    "type": "Solo",
    "description": "A gargantuan seven-headed dragon with dazzling diamond scales that shine with every color of the rainbow.",
    "motives": "Birth destruction, control the battlefield, fly, repel invaders, use all available options",
    "difficulty": 16,
    "thresholds": {
      "major": 35,
      "severe": 65
    },
    "hpMax": 12,
    "stressMax": 10,
    "atk": "+8",
    "attack": {
      "name": "Bite & Slash",
      "range": "Close",
      "damage": "4d10+10 phy"
    },
    "experience": "Ancient +5",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "Mitera can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight her."
      },
      {
        "name": "Diamond Hide",
        "type": "Passive",
        "text": "Countdown (7). When Mitera first appears, activate the countdown. Mitera gains a bonus to her Difficulty equal to the countdown die's current value. It ticks down from Mitera's \"Seven-Headed\" feature. When the countdown triggers, Mitera becomes Vulnerable and gains a +2 bonus to attack rolls."
      },
      {
        "name": "Elemental Breath",
        "type": "Action",
        "text": "Mark a Stress to have Mitera unleash elemental energy from one head of your choice: 1. Fire. Deal 4d12 magic damage to 1d4+1 targets within Close range. Targets who take damage must mark an Armor Slot or 2 additional HP. 2. Lightning. Deal 4d12 magic damage to 1d6 targets within Far range, so long as each target beyond the first is within Close range of the previous target. 3. Acid. Each PC in front of Mitera within Close range must make an Agility Reaction Roll. Targets who fail must mark 2 Armor Slots and 2 HP. Targets who succeed must mark an Armor Slot and a HP. 4. Poison. A miasma of toxic swamp gas Sickens all targets within Close range of Mitera. While Sickened, a target has disadvantage on action rolls until they mark 1d4 Stress to clear the condition. 5. Ice. Each target in front of Mitera within Close range takes 4d8+8 magic damage and is Restrained by ice until they break free with a successful Strength Roll. Additionally, this area freezes over and a PC must succeed on an Agility Reaction Roll to move through it. 6. Darkness. A cloud of magical shadow fills an area within Close range. Creatures inside the cloud except for Mitera are Vulnerable and have disadvantage on action rolls that rely on sight. The cloud dissipates when this Elemental Breath option is removed by Mitera's \"Seven-Headed\" feature. 7. Light. A beam of pure light energy deals 28 direct magic damage to each creature in a line within Very Far range."
      },
      {
        "name": "Tail Swipe",
        "type": "Action",
        "text": "Spend a Fear to attack all targets within Close range. Targets this attack succeeds against take 2d20+10 physical damage and are knocked back to Far range. Targets who mark HP from this attack become Vulnerable until they clear a HP. Targets this attack failed against must mark a Stress."
      },
      {
        "name": "Fearsome",
        "type": "Reaction",
        "text": "When Mitera makes a successful attack roll against a PC or a PC fails a roll within Far range, you gain a Fear."
      },
      {
        "name": "Seven-Headed",
        "type": "Reaction",
        "text": "When Mitera takes damage, roll a d8. Permanently remove the \"Elemental Breath\" option that corresponds to the result. On a result of 8, or if the corresponding option has already been removed, tick down the Diamond Hide countdown (see \"Diamond Hide\")."
      }
    ],
    "notes": ""
  },
  {
    "name": "Fallen Shock Troop",
    "tier": 4,
    "type": "Minion",
    "description": "A cursed soul bound to the Fallen's will.",
    "motives": "Crush, dominate, earn relief, punish",
    "difficulty": 18,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "+2",
    "attack": {
      "name": "Cursed Axe",
      "range": "Very Close",
      "damage": "12 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Minion (12)",
        "type": "Passive",
        "text": "The Shock Troop is defeated when they take any damage. For every 12 damage a PC deals to the Shock Troop, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Aura of Doom",
        "type": "Passive",
        "text": "When a PC marks HP from an attack by the Shock Troop, they lose a Hope."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Fallen Shock Troops within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 12 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Fallen Sorcerer",
    "tier": 4,
    "type": "Support",
    "description": "A powerful mage bound by the bargains they made in life.",
    "motives": "Acquire, dishearten, dominate, torment",
    "difficulty": 19,
    "thresholds": {
      "major": 26,
      "severe": 42
    },
    "hpMax": 6,
    "stressMax": 5,
    "atk": "+4",
    "attack": {
      "name": "Corrupted Staff",
      "range": "Far",
      "damage": "4d6+10 mag"
    },
    "experience": "Ancient Knowledge +2",
    "features": [
      {
        "name": "Conflagration",
        "type": "Action",
        "text": "Spend a Fear to unleash an all-consuming firestorm and make an attack against all targets within Close range. Targets the Sorcerer succeeds against take 2d10+6 direct magic damage."
      },
      {
        "name": "Nightmare Tableau",
        "type": "Action",
        "text": "Mark a Stress to trap a target within Far range in a powerful illusion of their worst fears. While trapped, the target is Restrained and Vulnerable until they break free, ending both conditions, with a successful Instinct Roll."
      },
      {
        "name": "Slippery",
        "type": "Reaction",
        "text": "When the Sorcerer takes damage from an attack, they can teleport up to Far range."
      },
      {
        "name": "Shackles of Guilt",
        "type": "Reaction",
        "text": "Countdown (Loop 2d6). When the Sorcerer is in the spotlight for the first time, activate the countdown. When it triggers, all targets within Far range become Vulnerable and must mark a Stress as they relive their greatest regrets. A target can break free from their regret with a successful Presence or Strength Roll. When a PC fails to break free, they lose a Hope."
      }
    ],
    "notes": ""
  },
  {
    "name": "Fallen Warlord: Realm-Breaker",
    "tier": 4,
    "type": "Solo",
    "description": "A Fallen God, wreathed in rage and resentment, bearing millennia of experience in breaking heroes' spirits.",
    "motives": "Corrupt, dominate, punish, break the weak",
    "difficulty": 20,
    "thresholds": {
      "major": 36,
      "severe": 66
    },
    "hpMax": 8,
    "stressMax": 5,
    "atk": "+7",
    "attack": {
      "name": "Barbed Whip",
      "range": "Close",
      "damage": "4d8+7 phy"
    },
    "experience": "Conquest +3, History +2, Intimidation +3",
    "features": [
      {
        "name": "Relentless (2)",
        "type": "Passive",
        "text": "The Realm-Breaker can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Firespite Plate Armor",
        "type": "Passive",
        "text": "When the Realm-Breaker takes damage, reduce it by 2d10."
      },
      {
        "name": "Tormenting Lash",
        "type": "Action",
        "text": "Mark a Stress to make a standard attack against all targets within Very Close range. When a target uses armor to reduce damage from this attack, they must mark 2 Armor Slots."
      },
      {
        "name": "All-Consuming Rage",
        "type": "Reaction",
        "text": "Countdown (Decreasing 8). When the Realm-Breaker is in the spotlight for the first time, activate the countdown. When it triggers, create a torrent of incarnate rage that rends flesh from bone. All targets within Far range must make a Presence Reaction Roll. Targets who fail take 2d6+10 direct magic damage. Targets who succeed take half damage. For each HP marked from this damage, summon a Fallen Shock Troop within Very Close range of the target who marked that HP. If the countdown ever decreases its maximum value to 0, the Realm-Breaker marks their remaining HP and all targets within Far range must mark all remaining HP and make a death move."
      },
      {
        "name": "Doombringer",
        "type": "Reaction",
        "text": "When a target marks HP from an attack by the Realm-Breaker, all PCs within Far range of the target must lose a Hope."
      },
      {
        "name": "I Have Never Known Defeat (Phase Change)",
        "type": "Reaction",
        "text": "When the Realm-Breaker marks their last HP, replace them with the Undefeated Champion and immediately spotlight them."
      }
    ],
    "notes": ""
  },
  {
    "name": "Fallen Warlord: Undefeated Champion",
    "tier": 4,
    "type": "Solo",
    "description": "That which only the most feared have a chance to fear.",
    "motives": "Dispatch merciless death, punish the defiant, secure victory at any cost",
    "difficulty": 18,
    "thresholds": {
      "major": 35,
      "severe": 58
    },
    "hpMax": 11,
    "stressMax": 5,
    "atk": "+8",
    "attack": {
      "name": "Heart-Shattering Sword",
      "range": "Very Close",
      "damage": "4d12+13 phy"
    },
    "experience": "Conquest +3, History +2, Intimidation +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Undefeated Champion can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Faltering Armor",
        "type": "Passive",
        "text": "When the Undefeated Champion takes damage, reduce it by 1d10."
      },
      {
        "name": "Shattering Strike",
        "type": "Action",
        "text": "Mark a Stress to make a standard attack against all targets within Very Close range. PCs the Champion succeeds against lose a number of Hope equal to the HP they marked from this attack."
      },
      {
        "name": "Endless Legions",
        "type": "Action",
        "text": "Spend a Fear to summon a number of Fallen Shock Troops equal to twice the number of PCs. The Shock Troops appear at Far range."
      },
      {
        "name": "Circle of Defilement",
        "type": "Reaction",
        "text": "Countdown (1d8). When the Undefeated Champion is in the spotlight for the first time, activate the countdown. When it triggers, activate a magical circle covering an area within Far range of the Champion. A target within that area is Vulnerable until they leave the circle. The circle can be removed by dealing Severe damage to the Undefeated Champion."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Undefeated Champion makes a successful attack against a PC, you gain a Fear."
      },
      {
        "name": "Doombringer",
        "type": "Reaction",
        "text": "When a target marks HP from an attack by the Undefeated Champion, all PCs within Far range of the target lose a Hope."
      }
    ],
    "notes": ""
  },
  {
    "name": "Fire Titan Warlord",
    "tier": 4,
    "type": "Leader",
    "description": "A smoldering, battle-obsessed goliath wearing bespoke armor and wielding a massive maul.",
    "motives": "Compete against rivals, conquer the weak, craft colossal war machines",
    "difficulty": 21,
    "thresholds": {
      "major": 33,
      "severe": 66
    },
    "hpMax": 9,
    "stressMax": 8,
    "atk": "+6",
    "attack": {
      "name": "Maul",
      "range": "Very Close",
      "damage": "4d10+10 phy"
    },
    "experience": "Tactics +4",
    "features": [
      {
        "name": "Relentless (2)",
        "type": "Passive",
        "text": "The Warlord can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Colossus Crafter",
        "type": "Passive",
        "text": "Countdown (6). When the Warlord enters the scene, activate the countdown. It ticks down when the Warlord is spotlighted. When it triggers, summon the Gargantuan War Machine, which appears at the edge of the battlefield and immediately takes the spotlight."
      },
      {
        "name": "Release the Hounds",
        "type": "Action",
        "text": "Spend a Fear to have the Warlord summon two Demonic Hound Packs, which appear at Close range and immediately take the spotlight."
      },
      {
        "name": "Spinning Strike",
        "type": "Action",
        "text": "Mark a Stress to make a standard attack against all targets within Very Close range and gain a Fear."
      },
      {
        "name": "Ground-Breaking",
        "type": "Action",
        "text": "Spend a Fear to have the Warlord crack the earth with a downward swing of their maul and make an attack against a group within Close range. Targets the attack succeeds against take 4d10+10 direct damage. The area becomes rough terrain, and a PC must succeed on an Agility Reaction Roll (16) to move through it."
      }
    ],
    "notes": ""
  },
  {
    "name": "Gargantuan War Machine",
    "tier": 4,
    "type": "Solo",
    "description": "A 100-foot-tall adamantine construct that has gemstone eyes, powered by a chest crucible of elemental flame.",
    "motives": "Crush, destroy",
    "difficulty": 20,
    "thresholds": {
      "major": 48,
      "severe": 88
    },
    "hpMax": 10,
    "stressMax": 6,
    "atk": "+7",
    "attack": {
      "name": "Fists of Iron",
      "range": "Close",
      "damage": "4d12+10 phy"
    },
    "experience": "Unbreakable +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Machine can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight it."
      },
      {
        "name": "Awesome Size",
        "type": "Passive",
        "text": "When the Machine enters the battlefield, each PC must either lose a Hope or mark 1d4 Stress."
      },
      {
        "name": "Rocket Punch",
        "type": "Action",
        "text": "Mark a Stress to make an attack against a PC within Close range. On a success, the target takes 4d12+10 direct physical damage and marks 2 Armor Slots without gaining their benefits."
      },
      {
        "name": "Ground-Breaking Stomp",
        "type": "Action",
        "text": "Spend a Fear to choose a point within Close range and make an attack roll against all enemies within Close range of that point. Targets the attack succeeds against take 4d12 direct physical damage and are Vulnerable until they are spotlighted. Additionally, the entire area becomes rubble, and a PC must succeed on an Agility Reaction Roll (16) to move through it."
      },
      {
        "name": "Supercharged",
        "type": "Reaction",
        "text": "Countdown (Loop 2d6). When the Machine is spotlighted for the first time, activate the countdown. It ticks down each time the Machine is spotlighted. When it triggers, place a token on this stat block as the Machine's chest crucible flares with magical flame. For each token on this stat block, the Machine gains a +1 bonus to Difficulty and attack rolls, and its standard attack deals an extra 1d12 damage. Remove a token when the Machine takes Severe damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Ghastly Legion",
    "tier": 4,
    "type": "Horde",
    "description": "A teeming army of ghosts roused from dreamless slumber to fulfill their ancient oath.",
    "motives": "Overwhelm, serve, swarm",
    "difficulty": 17,
    "thresholds": {
      "major": 25,
      "severe": 45
    },
    "hpMax": 8,
    "stressMax": 5,
    "atk": "+2",
    "attack": {
      "name": "Spectral Armaments",
      "range": "Close",
      "damage": "4d6+10 mag"
    },
    "experience": "Tactics +2",
    "features": [
      {
        "name": "Horde (2d6+5)",
        "type": "Passive",
        "text": "When the Legion has marked half or more of its HP, its standard attack deals 2d6+5 magic damage instead."
      },
      {
        "name": "Necroplasmic",
        "type": "Passive",
        "text": "The Legion is immune to physical damage and takes double magic damage."
      },
      {
        "name": "Final Act",
        "type": "Reaction",
        "text": "When the Legion is defeated, it makes a standard attack against all targets within Close range before being dispelled."
      }
    ],
    "notes": ""
  },
  {
    "name": "Griffin",
    "tier": 4,
    "type": "Standard",
    "description": "A large leonine creature that has the head, talons, and wings of an eagle.",
    "motives": "Hunt, look for an opening, swoop",
    "difficulty": 18,
    "thresholds": {
      "major": 30,
      "severe": 45
    },
    "hpMax": 6,
    "stressMax": 4,
    "atk": "+4",
    "attack": {
      "name": "Beak & Talons",
      "range": "Very Close",
      "damage": "4d8+4 phy"
    },
    "experience": "Riches +5, Keen Senses +3",
    "features": [
      {
        "name": "Treasure Hoarder",
        "type": "Passive",
        "text": "When a PC would mark any number of HP from the Griffin's attack, the PC can choose instead to give the Griffin an equal number of bags of gold."
      },
      {
        "name": "Swooping Slash",
        "type": "Action",
        "text": "Move up to Far range and make a standard attack against a target along the way."
      }
    ],
    "notes": ""
  },
  {
    "name": "Hallowed Archer",
    "tier": 4,
    "type": "Ranged",
    "description": "Spirit soldiers with sanctified bows.",
    "motives": "Focus fire, obey, reposition, volley",
    "difficulty": 19,
    "thresholds": {
      "major": 25,
      "severe": 45
    },
    "hpMax": 3,
    "stressMax": 2,
    "atk": "+4",
    "attack": {
      "name": "Sanctified Longbow",
      "range": "Far",
      "damage": "4d8+8 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Punish the Guilty",
        "type": "Passive",
        "text": "The Archer deals double damage to targets marked Guilty by a High Seraph."
      },
      {
        "name": "Divine Volley",
        "type": "Action",
        "text": "Mark a Stress to make a standard attack against up to three targets."
      }
    ],
    "notes": ""
  },
  {
    "name": "Hallowed Choir",
    "tier": 4,
    "type": "Horde",
    "description": "A heavenly host of winged humanoids whose song calls forth tears of religious awe.",
    "motives": "Drown out disbelief, raise voices",
    "difficulty": 17,
    "thresholds": {
      "major": 24,
      "severe": 48
    },
    "hpMax": 7,
    "stressMax": 6,
    "atk": "+2",
    "attack": {
      "name": "Choral Blast",
      "range": "Far",
      "damage": "4d10 mag"
    },
    "experience": "Music +2",
    "features": [
      {
        "name": "Horde (2d10)",
        "type": "Passive",
        "text": "When the Choir has marked half or more of its HP, its standard attack deals 2d10 magic damage instead."
      },
      {
        "name": "Celestial Coda",
        "type": "Passive",
        "text": "Countdown (Loop 3). The Choir's divine song builds on itself with each refrain. When the Choir first appears, activate the countdown. It ticks down when a PC gains a Hope. When it triggers, place a token on this stat block. The Choir gains a bonus to its damage rolls equal to the number of tokens on this stat block."
      },
      {
        "name": "Aural Assault",
        "type": "Action",
        "text": "The Choir unleashes its built-up divine energy in a single burst, clearing all tokens from this stat block. Deal 1d12 direct magic damage to each enemy within Close range for each token cleared."
      }
    ],
    "notes": ""
  },
  {
    "name": "Hallowed Soldier",
    "tier": 4,
    "type": "Minion",
    "description": "Souls of the faithful, lifted up with divine weaponry.",
    "motives": "Obey, outmaneuver, punish, swarm",
    "difficulty": 18,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 2,
    "atk": "+2",
    "attack": {
      "name": "Sword and Shield",
      "range": "Melee",
      "damage": "10 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Minion (13)",
        "type": "Passive",
        "text": "The Soldier is defeated when they take any damage. For every 13 damage a PC deals to the Soldier, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Divine Flight",
        "type": "Passive",
        "text": "While the Soldier is flying, spend a Fear to move up to Far range instead of Close range before taking an action."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Hallowed Soldiers within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 10 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Harbinger of Death",
    "tier": 4,
    "type": "Skulk",
    "description": "A desiccated corpse riding atop a skeletal horse. Their eyes are sewn shut and their body is wrapped in a burial shroud of dust and ash.",
    "motives": "Bring judgment, cut them down, move swiftly, seek relentlessly, take souls",
    "difficulty": 18,
    "thresholds": {
      "major": 28,
      "severe": 52
    },
    "hpMax": 6,
    "stressMax": 6,
    "atk": "+8",
    "attack": {
      "name": "Great Scythe",
      "range": "Close",
      "damage": "4d10+10 phy"
    },
    "experience": "Judgment +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Harbinger can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Mount",
        "type": "Passive",
        "text": "While the Harbinger is on their mount, they gain a +2 bonus to their Difficulty. When the Harbinger takes Severe damage, they're knocked from their mount. If the Harbinger is unhorsed, their mount disappears until you mark a Stress to summon it again."
      },
      {
        "name": "Fear the Reaper",
        "type": "Passive",
        "text": "When a creature is defeated within Far range of the Harbinger, you gain a Fear."
      },
      {
        "name": "Decapitate",
        "type": "Action",
        "text": "Spend 2 Fear to have the Harbinger make an attack roll against a PC within Melee range. On a success, roll a d6. On a result of 6, the target marks all HP and must make a death move."
      },
      {
        "name": "Wake the Fallen",
        "type": "Action",
        "text": "Spend a Fear and mark any number of Stress to have the Harbinger resurrect a defeated ally within Far range. The resurrected ally clears a number of HP equal to the number of Stress marked. Immediately spotlight the ally."
      },
      {
        "name": "Ashes to Ashes, Dust to Dust",
        "type": "Reaction",
        "text": "When the Harbinger would mark HP, you can mark a Stress to have an ally within Far range mark the HP instead."
      }
    ],
    "notes": ""
  },
  {
    "name": "Harbinger of Famine",
    "tier": 4,
    "type": "Support",
    "description": "A dried-out husk of a body riding atop a withered white horse. They are covered in mouths and surrounded by swarming flies.",
    "motives": "Drain, impoverish, weaken, wither",
    "difficulty": 18,
    "thresholds": {
      "major": 26,
      "severe": 42
    },
    "hpMax": 6,
    "stressMax": 5,
    "atk": "+4",
    "attack": {
      "name": "Barbed Lash",
      "range": "Close",
      "damage": "4d8+10 phy"
    },
    "experience": "Hunger +2, Thirst +2",
    "features": [
      {
        "name": "Relentless (2)",
        "type": "Passive",
        "text": "The Harbinger can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Mount",
        "type": "Passive",
        "text": "While the Harbinger is on their mount, they gain a +2 bonus to their Difficulty. When the Harbinger takes Severe damage, they're knocked from their mount. If the Harbinger is unhorsed, their mount disappears until you mark a Stress to summon it again."
      },
      {
        "name": "Hunger Pangs",
        "type": "Passive",
        "text": "Countdown (Decreasing 6). When the Harbinger appears, activate the countdown. It ticks down when the Harbinger is spotlighted. When it triggers, all PCs within Far range mark a Stress and become Ravenous. While Ravenous, a PC can't spend Hope until they clear the condition with a successful Instinct Roll."
      },
      {
        "name": "Drain Essence",
        "type": "Action",
        "text": "Spend a Fear to choose up to three PCs. Each target takes 4d6 magic damage."
      },
      {
        "name": "Too Many Mouths",
        "type": "Action",
        "text": "Mark a Stress to attack a PC within Melee range. On a success, the Harbinger grabs the target and bites them, dealing 4d6 physical damage and Restraining the target until they break free with a successful Strength Roll."
      },
      {
        "name": "Withering Touch",
        "type": "Action",
        "text": "Spend a Fear to have the Harbinger caress the face of a Restrained PC within Melee range. The target marks 2 Stress and either loses a Hope or marks 1d4 HP."
      }
    ],
    "notes": ""
  },
  {
    "name": "Harbinger of Pestilence",
    "tier": 4,
    "type": "Leader",
    "description": "A bloated and rotting agglomeration of wriggling insects and slugs formed into a single humanoid mass riding a worm-eaten horse.",
    "motives": "Corrupt the pure, infect the weak, summon plague and disease",
    "difficulty": 18,
    "thresholds": {
      "major": 37,
      "severe": 70
    },
    "hpMax": 7,
    "stressMax": 8,
    "atk": "+8",
    "attack": {
      "name": "Touch of Corruption",
      "range": "Melee",
      "damage": "4d10+10 mag"
    },
    "experience": "Rot +3",
    "features": [
      {
        "name": "Halo of Contagion",
        "type": "Passive",
        "text": "The Harbinger is Contagious. When a PC within Very Close range of a Contagious creature takes an action, the PC rolls a d6. On a result of 1, the PC becomes Contagious. While Contagious, a PC has disadvantage on action rolls until they spend 3 Hope to clear the condition. Contagious adversaries are unaffected by the condition."
      },
      {
        "name": "Mount",
        "type": "Passive",
        "text": "While the Harbinger is on their mount, they gain a +2 bonus to their Difficulty. When the Harbinger takes Severe damage, they're knocked from their mount. If the Harbinger is unhorsed, their mount disappears until you mark a Stress to summon it again."
      },
      {
        "name": "Locust Swarm",
        "type": "Action",
        "text": "Spend 2 Fear to have the Harbinger conjure a swarm of locusts at a point within Very Far range. Each PC within Close range of that point must either mark an Armor Slot or take 4d10 direct physical damage and roll a d6. On a result of 1–2, the PC becomes Contagious."
      },
      {
        "name": "Frog Spawn",
        "type": "Action",
        "text": "Spend a Fear to have the Harbinger conjure a clutch of diseased frogs inside the mouths of up to three PCs within Close range. Each PC must succeed on a Presence Reaction Roll or take 4d12 magic damage and roll a d6. On a result of 1–3, the PC becomes Contagious."
      },
      {
        "name": "Plague Bringer",
        "type": "Action",
        "text": "Mark any number of Stress up to the number of PCs in the scene. For each Stress you mark, the Harbinger summons 1d4 Contagious Zombie Legions within Far range and immediately spotlights one of them."
      }
    ],
    "notes": ""
  },
  {
    "name": "Harbinger of War",
    "tier": 4,
    "type": "Bruiser",
    "description": "A warrior clad in black armor and a horned helmet and bearing a bloody banner.",
    "motives": "Destroy utterly, fight honorably, relish combat, shield-bash, strike powerfully",
    "difficulty": 21,
    "thresholds": {
      "major": 40,
      "severe": 70
    },
    "hpMax": 9,
    "stressMax": 4,
    "atk": "+5",
    "attack": {
      "name": "Battle Axe",
      "range": "Very Close",
      "damage": "4d20 phy"
    },
    "experience": "Heavy Armor +3",
    "features": [
      {
        "name": "Relentless (2)",
        "type": "Passive",
        "text": "The Harbinger can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Mount",
        "type": "Passive",
        "text": "While the Harbinger is on their mount, they gain a +2 bonus to their Difficulty. When the Harbinger takes Severe damage, they're knocked from their mount. If the Harbinger is unhorsed, their mount disappears until you mark a Stress to summon it again."
      },
      {
        "name": "Iron Dice",
        "type": "Action",
        "text": "Mark a Stress to have the Harbinger attempt a risky all-out attack. Make a standard attack with advantage. On a success, the target marks an additional HP. On a failure, the Harbinger becomes Vulnerable until they take or deal damage."
      },
      {
        "name": "Supreme Commander",
        "type": "Action",
        "text": "Once per scene, spend a Fear to summon 1d6 Hallowed Soldiers within Close range and immediately spotlight one of them."
      },
      {
        "name": "Battering Ram",
        "type": "Reaction",
        "text": "When a PC fails an action roll within Close range, you can spend a Fear to move into Melee range with the PC and make a standard attack with advantage against them. On a success, the PC takes standard damage and is Vulnerable until they are spotlighted."
      }
    ],
    "notes": ""
  },
  {
    "name": "High Seraph",
    "tier": 4,
    "type": "Leader",
    "description": "A divine champion, head of a hallowed host of warriors who enforce their god's will.",
    "motives": "Enforce dogma, fly, pronounce judgment, smite",
    "difficulty": 20,
    "thresholds": {
      "major": 37,
      "severe": 70
    },
    "hpMax": 7,
    "stressMax": 5,
    "atk": "+8",
    "attack": {
      "name": "Holy Sword",
      "range": "Very Close",
      "damage": "4d10+10 phy"
    },
    "experience": "Divine Knowledge +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Seraph can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Divine Flight",
        "type": "Passive",
        "text": "While the Seraph is flying, spend a Fear to move up to Far range instead of Close range before taking an action."
      },
      {
        "name": "Judgment",
        "type": "Action",
        "text": "Spend a Fear to make a target Guilty in the eyes of the Seraph's god until the Seraph is defeated. While Guilty, the target doesn't gain Hope on a result with Hope. When the Seraph succeeds on a standard attack against a Guilty target, they deal Severe damage instead of their standard damage. The Seraph can only mark one target at a time."
      },
      {
        "name": "God Rays",
        "type": "Action",
        "text": "Mark a Stress to reflect a sliver of divinity as a searing beam of light that hits up to twenty targets within Very Far range. Targets must make a Presence Reaction Roll, with disadvantage if they are marked Guilty. Targets who fail take 4d6+12 magic damage. Targets who succeed take half damage."
      },
      {
        "name": "We Are One",
        "type": "Action",
        "text": "Once per scene, spend a Fear to spotlight all other adversaries within Far range. Attacks they make while spotlighted in this way deal half damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Kraken",
    "tier": 4,
    "type": "Solo",
    "description": "A legendary beast of the sea, bigger than the largest galleon, with sucker-laden tentacles and a terrifying maw.",
    "motives": "Consume, crush, drown, grapple",
    "difficulty": 20,
    "thresholds": {
      "major": 35,
      "severe": 70
    },
    "hpMax": 11,
    "stressMax": 8,
    "atk": "+7",
    "attack": {
      "name": "Tentacles",
      "range": "Close",
      "damage": "4d12+10 phy"
    },
    "experience": "Swimming +3",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Kraken can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Many Tentacles",
        "type": "Passive",
        "text": "While the Kraken has 7 or fewer marked HP, they can make their standard attack against two targets within range."
      },
      {
        "name": "Grapple and Drown",
        "type": "Action",
        "text": "Make an attack roll against a target within Close range. On a success, mark a Stress to grab them with a tentacle and drag them beneath the water. The target is Restrained and Vulnerable until they break free with a successful Strength Roll or the Kraken takes Major or greater damage. While Restrained and Vulnerable in this way, a target must mark a Stress when they make an action roll."
      },
      {
        "name": "Boiling Blast",
        "type": "Action",
        "text": "Spend a Fear to spew a line of boiling water at any number of targets in a line up to Far range. All targets must succeed on an Agility Reaction Roll or take 4d6+9 physical damage. If a target marks an Armor Slot to reduce the damage, they must also mark a Stress."
      },
      {
        "name": "Momentum",
        "type": "Reaction",
        "text": "When the Kraken makes a successful attack against a PC, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Oracle of Doom",
    "tier": 4,
    "type": "Solo",
    "description": "A towering immortal and incarnation of fate, cursed to only see bad outcomes.",
    "motives": "Change environment, condemn, dishearten, toss aside",
    "difficulty": 20,
    "thresholds": {
      "major": 38,
      "severe": 68
    },
    "hpMax": 11,
    "stressMax": 10,
    "atk": "+8",
    "attack": {
      "name": "Psychic Attack",
      "range": "Far",
      "damage": "4d8+9 mag"
    },
    "experience": "Boundless Knowledge +4",
    "features": [
      {
        "name": "Terrifying",
        "type": "Passive",
        "text": "When the Oracle makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear."
      },
      {
        "name": "Walls Closing In",
        "type": "Passive",
        "text": "When a creature rolls a failure while within Very Far range of the Oracle, they must mark a Stress."
      },
      {
        "name": "Pronounce Fate",
        "type": "Action",
        "text": "Spend a Fear to present a target within Far range with a vision of their personal nightmare. The target must make a Knowledge Reaction Roll. On a failure, they lose all Hope and take 2d20+4 direct magic damage. On a success, they take half damage and lose a Hope."
      },
      {
        "name": "Summon Tormentors",
        "type": "Action",
        "text": "Once per day, spend 2 Fear to summon 2d4 Tier 2 or below Minions relevant to one of the PC's personal nightmares. They appear at Close range relative to that PC."
      },
      {
        "name": "Ominous Knowledge",
        "type": "Reaction",
        "text": "When the Oracle sees a mortal creature, they instantly know one of their personal nightmares."
      },
      {
        "name": "Vengeful Fate",
        "type": "Reaction",
        "text": "When the Oracle marks HP from an attack within Very Close range, you can mark a Stress to knock the attacker back to Far range and deal 2d10+4 physical damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Outer Realms Abomination",
    "tier": 4,
    "type": "Bruiser",
    "description": "A chaotic mockery of life, constantly in flux.",
    "motives": "Demolish, devour, undermine",
    "difficulty": 19,
    "thresholds": {
      "major": 35,
      "severe": 71
    },
    "hpMax": 7,
    "stressMax": 5,
    "atk": "+2d4",
    "attack": {
      "name": "Massive Pseudopod",
      "range": "Very Close",
      "damage": "4d6+13 mag"
    },
    "experience": "",
    "features": [
      {
        "name": "Chaotic Form",
        "type": "Passive",
        "text": "When the Abomination attacks, roll 2d4 and use the result as their attack modifier."
      },
      {
        "name": "Disorienting Presence",
        "type": "Passive",
        "text": "When a target takes damage from the Abomination, they must make an Instinct Reaction Roll. On a failure, they gain disadvantage on their next action roll and you gain a Fear."
      },
      {
        "name": "Reality Quake",
        "type": "Action",
        "text": "Spend a Fear to rattle the edges of reality within Far range of the Abomination. All targets within that area must succeed on a Knowledge Reaction Roll or become Unstuck from reality until the end of the scene. When an Unstuck target spends Hope or marks Armor Slots, HP, or Stress, they must double the amount spent or marked."
      },
      {
        "name": "Unreal Form",
        "type": "Reaction",
        "text": "When the Abomination takes damage, reduce it by 1d20. If the Abomination marks 1 or fewer Hit Points from a successful attack against them, you gain a Fear."
      }
    ],
    "notes": ""
  },
  {
    "name": "Outer Realms Corrupter",
    "tier": 4,
    "type": "Support",
    "description": "A shifting, formless mass seemingly made of chromatic light.",
    "motives": "Confuse, distract, overwhelm",
    "difficulty": 19,
    "thresholds": {
      "major": 27,
      "severe": 47
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+7",
    "attack": {
      "name": "Corroding Pseudopod",
      "range": "Very Close",
      "damage": "4d8+5 mag"
    },
    "experience": "",
    "features": [
      {
        "name": "Will-Shattering Touch",
        "type": "Passive",
        "text": "When a PC takes damage from the Corrupter, they lose a Hope."
      },
      {
        "name": "Disgorge Reality Flotsam",
        "type": "Action",
        "text": "Mark a Stress to spew partially digested portions of consumed realities at all targets within Close range. Targets must succeed on a Knowledge Reaction Roll or mark 2 Stress."
      }
    ],
    "notes": ""
  },
  {
    "name": "Outer Realms Thrall",
    "tier": 4,
    "type": "Minion",
    "description": "A vaguely humanoid form stripped of memory and identity.",
    "motives": "Destroy, disgust, disorient, intimidate",
    "difficulty": 17,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "+3",
    "attack": {
      "name": "Claws and Teeth",
      "range": "Very Close",
      "damage": "11 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Minion (13)",
        "type": "Passive",
        "text": "The Thrall is defeated when they take any damage. For every 13 damage a PC deals to the Thrall, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Outer Realm Thralls within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 11 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Owl Witch",
    "tier": 4,
    "type": "Support",
    "description": "A giant, vengeful barn owl that has a 15-foot wingspan and a human face.",
    "motives": "Consume essence, curse, predict death",
    "difficulty": 19,
    "thresholds": {
      "major": 27,
      "severe": 47
    },
    "hpMax": 4,
    "stressMax": 3,
    "atk": "+7",
    "attack": {
      "name": "Razor Talons",
      "range": "Very Close",
      "damage": "4d8+5 phy"
    },
    "experience": "Magic +2, Night Stalker +2",
    "features": [
      {
        "name": "Ill Omen",
        "type": "Passive",
        "text": "When a PC within Close range makes an action roll, their Fear Die gains a bonus equal to the amount of Fear you have."
      },
      {
        "name": "Witch Barrier",
        "type": "Passive",
        "text": "The Owl Witch has resistance to magic damage."
      },
      {
        "name": "Voice Mimicry",
        "type": "Action",
        "text": "Spend a Fear to have the Owl Witch beckon with the voice of a beloved figure to a creature within earshot. The target must succeed on an Instinct Reaction Roll or move up to Far range toward the Owl Witch."
      },
      {
        "name": "Nightmare Stare",
        "type": "Action",
        "text": "Spend a Fear to have the Owl Witch Aﬄict a PC within Far range with waking nightmares unless the target succeeds on a Knowledge Reaction Roll. While Aﬄicted, the target can't clear HP or Stress. The condition is cleared when another PC uses a downtime move to comfort the Aﬄicted creature."
      },
      {
        "name": "Visions of a Violent End",
        "type": "Reaction",
        "text": "When the Owl Witch is targeted by an attack, you can spend a Fear to force the attacker to make a Presence Reaction Roll. On a failure, they must mark 1d4 Stress as their mind is flooded with harrowing imagery."
      }
    ],
    "notes": ""
  },
  {
    "name": "Ruby Dragon",
    "tier": 4,
    "type": "Standard",
    "description": "A huge winged dragon that has visible flames beneath its glittering, gem-encrusted scales. Its body heat melts stone.",
    "motives": "Crack the earth, melt, protect treasure",
    "difficulty": 19,
    "thresholds": {
      "major": 30,
      "severe": 50
    },
    "hpMax": 6,
    "stressMax": 4,
    "atk": "+6",
    "attack": {
      "name": "Tooth & Claw",
      "range": "Close",
      "damage": "4d10+8 phy"
    },
    "experience": "Mountains +4",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Dragon can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight it."
      },
      {
        "name": "Fearsome",
        "type": "Passive",
        "text": "When the Dragon succeeds on an attack against a PC or a PC within Far range fails an action roll, you gain a Fear."
      },
      {
        "name": "Melting Breath",
        "type": "Action",
        "text": "Mark a Stress to have the Dragon unleash a blast of fire on all PCs in front of it within Close range. Each target must succeed on an Agility Reaction Roll or take 4d12+10 magic damage and mark an Armor Slot without gaining its benefits (they can still use armor to reduce the damage)."
      },
      {
        "name": "Volcanic Fissure",
        "type": "Action",
        "text": "Spend a Fear to have the Dragon snap its tail against the ground, opening a lava rift that flows over the area within Close range. Each PC within that area must make an Agility Reaction Roll. Targets who succeed immediately move out of the area. Targets who fail take 4d8+5 magic damage. Until the Dragon is defeated, a creature who enters the area takes 4d8+5 magic damage."
      },
      {
        "name": "Hot-Blooded",
        "type": "Reaction",
        "text": "When a creature makes a successful attack against the Dragon within Very Close range, the Dragon's blood erupts from the wound and burns the attacker, forcing them to mark an Armor Slot. If they can't mark an Armor Slot, they mark 1d4 HP."
      }
    ],
    "notes": ""
  },
  {
    "name": "Severed Shadow",
    "tier": 4,
    "type": "Minion",
    "description": "A two-dimensional living shadow bound to flat planes and surfaces.",
    "motives": "Curse the light, slip between the cracks, split and reform",
    "difficulty": 19,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 2,
    "atk": "+3",
    "attack": {
      "name": "Strangle",
      "range": "Close",
      "damage": "10 mag"
    },
    "experience": "",
    "features": [
      {
        "name": "Minion (12)",
        "type": "Passive",
        "text": "The Shadow is defeated when it takes any damage. For every 12 damage a PC deals to the Shadow, the PC defeats an additional Minion within range that the attack would succeed against."
      },
      {
        "name": "Shadow Grapple",
        "type": "Action",
        "text": "Mark a Stress to make an attack against a target within Close range. On a success, the target becomes Vulnerable and must mark a Stress when they take an action until the Shadow is defeated."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Severed Shadows within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 10 magic damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Supreme Demiurge Adonix",
    "tier": 4,
    "type": "Solo",
    "description": "The four-faced angel from the Hallows Above who manifests in the Mortal Realm as a floating tetrahedron with numerous eyes and multiple sets of metallic feathered wings.",
    "motives": "Establish dominion, exile from reality, float above it all, speak into being",
    "difficulty": 20,
    "thresholds": {
      "major": 35,
      "severe": 70
    },
    "hpMax": 12,
    "stressMax": 10,
    "atk": "+8",
    "attack": {
      "name": "Wing Strike",
      "range": "Close",
      "damage": "4d12+10 phy"
    },
    "experience": "Omnipotence +10, Be Not Afraid +5",
    "features": [
      {
        "name": "Relentless (4)",
        "type": "Passive",
        "text": "Adonix can be spotlighted up to four times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Elemental Archon",
        "type": "Action",
        "text": "Mark a Stress to roll a d4. Adonix activates the corresponding effect: 1. Fire Beam. Adonix manifests a beam of elemental fire with a Very Close width from themself to the edge of the battlefield. Each target in the beam's path must make an Agility Reaction Roll. Targets who fail take Severe damage. Targets who succeed take Minor damage. 2. Thunderclap. All creatures within Far range must mark a Stress and become Vulnerable until they succeed on an attack roll or the Demiurge is defeated. 3. Lightning Bolt. Make an attack against a target within Very Far range, dealing 4d8 magic damage on a success. If all results are even, make the same attack against a different target, repeating the cycle until you roll an odd result or run out of targets. 4. Ice Storm. Each PC within Close range must succeed on a Strength Reaction Roll or mark 1d4 Stress and become Restrained until they spend a Hope to escape."
      },
      {
        "name": "Alpha to Omega",
        "type": "Evolution",
        "text": "When Adonix is defeated, they resurrect in Omega form with all HP and Stress cleared. Each PC within Very Far range must succeed on a Presence Reaction Roll or lose a Hope. You gain a Fear for each Hope lost in this way. Adonix gains the following features in this form: Forsaken - Action: Spend a Fear to choose a PC and activate a Forsaken Countdown (1d8) for them. It ticks down when Adonix is spotlighted. When it triggers, the PC must mark all their HP. The countdown ends if Adonix takes Severe damage. You can have only one Forsaken Countdown active at a time. Armageddon - Reaction: When Adonix is defeated again, they unleash a reality storm that shakes the realms to their foundations. Roll a d6. On a result of 5–6, each PC must make a death move."
      }
    ],
    "notes": ""
  },
  {
    "name": "Temporal Enforcer",
    "tier": 4,
    "type": "Bruiser",
    "description": "A giant mechanical being from a dimension outside time, built by the Time Keepers to preserve the Holy Continuum.",
    "motives": "Repair the timeline, seek out temporal heretics, serve the Lords of Continuity",
    "difficulty": 20,
    "thresholds": {
      "major": 42,
      "severe": 68
    },
    "hpMax": 8,
    "stressMax": 5,
    "atk": "+4",
    "attack": {
      "name": "Adamantine Hammer",
      "range": "Very Close",
      "damage": "40 direct phy"
    },
    "experience": "Temporal Anomalies +3",
    "features": [
      {
        "name": "Relentless (2)",
        "type": "Passive",
        "text": "The Enforcer can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Time Looper",
        "type": "Passive",
        "text": "Countdown (Loop 2d6). When the Enforcer first appears, activate the countdown. It ticks down when the Enforcer is spotlighted. When it triggers, the Enforcer clears all HP, Stress, and conditions. Reroll the countdown when the Enforcer takes Severe damage."
      },
      {
        "name": "Move Between Moments",
        "type": "Action",
        "text": "Mark a Stress to have the Enforcer teleport to a point within Very Far range, then spotlight them again."
      },
      {
        "name": "Instant Rewind",
        "type": "Reaction",
        "text": "When the Enforcer fails an attack, you can spend a Fear to reroll the die."
      },
      {
        "name": "Invert Polarity",
        "type": "Reaction",
        "text": "Up to three times per scene, you can spend a Fear to flip any die rolled onto its obverse result. This effect can't be used to alter a critical success."
      }
    ],
    "notes": ""
  },
  {
    "name": "Volcanic Dragon: Obsidian Predator",
    "tier": 4,
    "type": "Solo",
    "description": "A massive winged creature with obsidian scales and impossibly sharp claws.",
    "motives": "Defend lair, dive-bomb, fly, hunt, intimidate",
    "difficulty": 19,
    "thresholds": {
      "major": 33,
      "severe": 65
    },
    "hpMax": 6,
    "stressMax": 5,
    "atk": "+8",
    "attack": {
      "name": "Obsidian Claws",
      "range": "Close",
      "damage": "4d10+4 phy"
    },
    "experience": "Hunt from Above +5",
    "features": [
      {
        "name": "Relentless (2)",
        "type": "Passive",
        "text": "The Obsidian Predator can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Flying",
        "type": "Passive",
        "text": "While flying, the Obsidian Predator gains a +3 bonus to their Difficulty."
      },
      {
        "name": "Obsidian Scales",
        "type": "Passive",
        "text": "The Obsidian Predator is resistant to physical damage."
      },
      {
        "name": "Avalanche Tail",
        "type": "Action",
        "text": "Mark a Stress to make an attack against all targets within Close range. Targets the Obsidian Predator succeeds against take 4d6+4 physical damage and are knocked back to Far range and Vulnerable until their next roll with Hope."
      },
      {
        "name": "Dive-Bomb",
        "type": "Action",
        "text": "If the Obsidian Predator is flying, mark a Stress to choose a point within Far range. Move to that point and make an attack against all targets within Very Close range. Targets the Obsidian Predator succeeds against take 2d10+6 physical damage and must mark a Stress and lose a Hope."
      },
      {
        "name": "Erupting Rage (Phase Change)",
        "type": "Reaction",
        "text": "When the Obsidian Predator marks their last HP, replace them with the Molten Scourge and immediately spotlight them."
      }
    ],
    "notes": ""
  },
  {
    "name": "Volcanic Dragon: Molten Scourge",
    "tier": 4,
    "type": "Solo",
    "description": "Enraged by their wounds, the dragon bursts into molten lava.",
    "motives": "Douse with lava, incinerate, repel Invaders, reposition",
    "difficulty": 20,
    "thresholds": {
      "major": 30,
      "severe": 58
    },
    "hpMax": 7,
    "stressMax": 5,
    "atk": "+9",
    "attack": {
      "name": "Lava-Coated Claws",
      "range": "Close",
      "damage": "4d12+4 phy"
    },
    "experience": "Hunt from Above +5",
    "features": [
      {
        "name": "Relentless (3)",
        "type": "Passive",
        "text": "The Molten Scourge can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Cracked Scales",
        "type": "Passive",
        "text": "When the Molten Scourge takes damage, roll a number of d6s equal to HP marked. For each result of 4 or higher, you gain a Fear."
      },
      {
        "name": "Shattering Might",
        "type": "Action",
        "text": "Mark a Stress to make an attack against a target within Very Close range. On a success, the target takes 4d8+1 physical damage, loses a Hope, and is knocked back to Close range. The Molten Scourge clears a Stress."
      },
      {
        "name": "Eruption",
        "type": "Action",
        "text": "Spend a Fear to erupt lava from beneath the Molten Scourge's scales, filling the area within Very Close range with molten lava. All targets in that area must succeed on an Agility Reaction Roll or take 4d6+6 physical damage and be knocked back to Close range. This area remains lava. When a creature other than the Molten Scourge enters that area or acts while inside of it, they must mark 6 HP."
      },
      {
        "name": "Volcanic Breath",
        "type": "Reaction",
        "text": "When the Molten Scourge takes Major damage, roll a d10. On a result of 8 or higher, the Molten Scourge breathes a flow of lava in front of them within Far range. All targets in that area must make an Agility Reaction Roll. Targets who fail take 2d10+4 physical damage, mark 1d4 Stress, and are Vulnerable until they clear a Stress. Targets who succeed take half damage and must mark a Stress."
      },
      {
        "name": "Lava Splash",
        "type": "Reaction",
        "text": "When the Molten Scourge takes Severe damage from an attack within Very Close range, molten blood gushes from the wound and deals 2d10+4 direct physical damage to the attacker."
      },
      {
        "name": "Ashen Vengeance (Phase Change)",
        "type": "Reaction",
        "text": "When the Molten Scourge marks their last HP, replace them with the Ashen Tyrant and immediately spotlight them."
      }
    ],
    "notes": ""
  },
  {
    "name": "Volcanic Dragon: Ashen Tyrant",
    "tier": 4,
    "type": "Solo",
    "description": "No enemy has ever had the insolence to wound the dragon so. As the lava settles, it's ground to ash like the dragon's past foes.",
    "motives": "Choke, fly, intimidate, kill or be killed",
    "difficulty": 18,
    "thresholds": {
      "major": 29,
      "severe": 55
    },
    "hpMax": 8,
    "stressMax": 5,
    "atk": "+10",
    "attack": {
      "name": "Claws and Teeth",
      "range": "Close",
      "damage": "4d12+15 phy"
    },
    "experience": "Hunt from Above +5",
    "features": [
      {
        "name": "Relentless (4)",
        "type": "Passive",
        "text": "The Ashen Tyrant can be spotlighted up to four times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Cornered",
        "type": "Passive",
        "text": "Mark a Stress instead of spending a Fear to spotlight the Ashen Tyrant."
      },
      {
        "name": "Injured Wings",
        "type": "Passive",
        "text": "While flying, the Ashen Tyrant gains a +1 bonus to their Difficulty."
      },
      {
        "name": "Ashes to Ashes",
        "type": "Passive",
        "text": "When a PC rolls a failure while within Close range of the Ashen Tyrant, they lose a Hope and you gain a Fear. If the PC can't lose a Hope, they must mark a HP."
      },
      {
        "name": "Desperate Rampage",
        "type": "Action",
        "text": "Mark a Stress to make an attack against all targets within Close range. Targets the Ashen Tyrant succeeds against take 2d20+2 physical damage, are knocked back to Close range of where they were, and must mark a Stress."
      },
      {
        "name": "Ashen Cloud",
        "type": "Action",
        "text": "Spend a Fear to smash the ground and kick up ash within Far range. While within the ash cloud, a target has disadvantage on action rolls. The ash cloud clears the next time an adversary is spotlighted."
      },
      {
        "name": "Apocalyptic Thrashing",
        "type": "Action",
        "text": "Countdown (1d12). Spend a Fear to activate. It ticks down when a PC rolls with Fear. When it triggers, the Ashen Tyrant thrashes about, causing environmental damage (such as an earthquake, avalanche, or collapsing walls). All targets within Far range must make a Strength Reaction Roll. Targets who fail take 2d10+10 physical damage and are Restrained by the rubble until they break free with a successful Strength Roll. Targets who succeed take half damage. If the Ashen Tyrant is defeated while this countdown is active, trigger the countdown immediately as the destruction caused by their death throes."
      }
    ],
    "notes": ""
  },
  {
    "name": "Water Mother",
    "tier": 4,
    "type": "Solo",
    "description": "A colossal fur-covered snake that hunts in large bodies of water.",
    "motives": "Constrict the world, control the battlefield, draw enemies into the water",
    "difficulty": 20,
    "thresholds": {
      "major": 40,
      "severe": 70
    },
    "hpMax": 12,
    "stressMax": 8,
    "atk": "+8",
    "attack": {
      "name": "Bite",
      "range": "Very Close",
      "damage": "4d10+5 phy"
    },
    "experience": "Rivers +4",
    "features": [
      {
        "name": "Segmented",
        "type": "Passive",
        "text": "The Water Mother's body is divided into three segments: Head, Center, and Tail. The Water Mother always moves from the Head first, pulling the Center and then Tail behind it. A creature can target the Water Mother with an attack as long as at least one of her segments is within range, but the Water Mother can make a standard attack only against a target within range of her Head. If an attack deals damage to the Water Mother and her Head is within range, the attack deals an extra 1d10 damage."
      },
      {
        "name": "Eat the World",
        "type": "Action",
        "text": "Spend a Fear to have the Water Mother inhale sharply. Each PC within Close range of her Head must succeed on a Strength Reaction Roll or mark a Stress and be pulled within Melee range of the Head. The Water Mother then makes a standard attack against all targets within Melee range of her Head."
      },
      {
        "name": "Constrict",
        "type": "Action",
        "text": "Mark a Stress to make an attack against all targets within Melee range of the Center segment. Targets the attack succeeds against take 4d8+8 physical damage and are temporarily Restrained. At the beginning of each GM turn, you can mark a Stress to force all targets Restrained by the Water Mother to mark a HP."
      },
      {
        "name": "Venom Surge",
        "type": "Reaction",
        "text": "When the Water Mother makes a successful standard attack, you can spend a Fear to make the target Vulnerable until the end of the scene."
      }
    ],
    "notes": ""
  },
  {
    "name": "Wyrmfiend",
    "tier": 4,
    "type": "Minion",
    "description": "A reptilian biped created by mysterious and ancient dragon magic. Wyrmfiends exist more as extensions of their draconic master's will than as individual beings.",
    "motives": "Hold the line, sacrifice, serve, swarm",
    "difficulty": 17,
    "thresholds": {
      "major": 0,
      "severe": 0
    },
    "hpMax": 1,
    "stressMax": 1,
    "atk": "+3",
    "attack": {
      "name": "Weapons from the Hoard",
      "range": "Melee",
      "damage": "11 phy"
    },
    "experience": "Dragon Bond +2",
    "features": [
      {
        "name": "Minion (13)",
        "type": "Passive",
        "text": "The Wyrmfiend is defeated when it takes any damage. For every 13 damage a PC deals to the Wyrmfiend, the PC defeats an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Venomous Bite",
        "type": "Action",
        "text": "Spend a Fear to make an attack against a PC within Melee range. On a success, deal 4d4+4 physical damage and Poison the target until they succeed on a Strength Roll (20). While Poisoned, the target must roll a d6 before they make an action roll. On a result of 4 or lower, the target must mark a Stress."
      },
      {
        "name": "Group Attack",
        "type": "Action",
        "text": "Spend a Fear to choose a target and spotlight all Wyrmfiends within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 11 physical damage each. Combine this damage."
      }
    ],
    "notes": ""
  },
  {
    "name": "Wyrmlings",
    "tier": 4,
    "type": "Horde",
    "description": "A clutch of newly hatched dragons. As newborns, they're furious, hungry, and stupid.",
    "motives": "Consume, shred, swarm",
    "difficulty": 17,
    "thresholds": {
      "major": 25,
      "severe": 45
    },
    "hpMax": 8,
    "stressMax": 5,
    "atk": "+2",
    "attack": {
      "name": "Tiny Jaws & Claws",
      "range": "Melee",
      "damage": "4d6+10 phy"
    },
    "experience": "Dragon Bond +2",
    "features": [
      {
        "name": "Horde (2d6+5)",
        "type": "Passive",
        "text": "When the Wyrmlings have marked half or more of their HP, their standard attack deals 2d6+5 physical damage instead."
      },
      {
        "name": "Ravenous",
        "type": "Reaction",
        "text": "Once per GM turn when a PC marks a HP from an attack made by the Wyrmlings, you can spend a Fear to spotlight the Wyrmlings again."
      },
      {
        "name": "Overwhelm",
        "type": "Reaction",
        "text": "When the Wyrmlings take Minor damage from an attack within Melee range, you can mark a Stress to make a standard attack with advantage against the attacker."
      }
    ],
    "notes": ""
  },
  {
    "name": "Xero the Castle Killer",
    "tier": 4,
    "type": "Solo",
    "description": "A castle-sized, bipedal reptile.",
    "motives": "Leave a wake of destruction, level buildings, stomp through settlements",
    "difficulty": 20,
    "thresholds": {
      "major": 35,
      "severe": 70
    },
    "hpMax": 12,
    "stressMax": 10,
    "atk": "+8",
    "attack": {
      "name": "Tail Swipe",
      "range": "Close",
      "damage": "4d12+6 phy"
    },
    "experience": "Destruction +5",
    "features": [
      {
        "name": "Relentless (X)",
        "type": "Passive",
        "text": "Xero can be spotlighted up to X times per GM turn, where X is the number of PCs in the scene. Spend Fear as usual to spotlight it."
      },
      {
        "name": "Collateral Damage",
        "type": "Passive",
        "text": "Xero's movement can't be hindered, impeded, or affected by anything other than natural terrain. All destructible terrain or obstacles in Xero's path are destroyed when Xero moves through them."
      },
      {
        "name": "Gigaton Stomp",
        "type": "Action",
        "text": "Spend a Fear to have Xero bring its foot down hard, creating a localized earthquake. Each PC within Melee range takes 4d12 physical damage and is Restrained until they wriggle out with a successful Finesse Roll. Each creature beyond Melee range but within Close range must succeed on an Instinct Reaction Roll or be knocked back to Far range. If a target is knocked back, they must either mark an Armor Slot or take 4d12 physical damage as they land."
      },
      {
        "name": "Power Slide",
        "type": "Action",
        "text": "Mark a Stress to move up to Close range. Each PC Xero moves through must succeed on a Strength Reaction Roll or choose to either mark 2 Armor Slots or take Severe damage."
      },
      {
        "name": "Radioactive Breath",
        "type": "Action",
        "text": "Spend a Fear to have Xero charge up a nuclear beam. Place a token on this stat block. The next time Xero is spotlighted, you can spend this token and unleash a beam to Very Far range. The beam has a width of Close range. Each PC in this area must make an Agility Reaction Roll. Targets who fail take 4d12+12 direct magic damage. Targets who succeed take half damage. Xero can't use this feature again until it takes Severe damage."
      },
      {
        "name": "Regeneration",
        "type": "Action",
        "text": "Up to three times per scene, spend any number of Fear to clear an equal number of HP."
      }
    ],
    "notes": ""
  },
  {
    "name": "Perfected Zombie",
    "tier": 4,
    "type": "Bruiser",
    "description": "A towering, muscular zombie with magically infused strength and skill.",
    "motives": "Consume, hound, maim, terrify",
    "difficulty": 20,
    "thresholds": {
      "major": 40,
      "severe": 70
    },
    "hpMax": 9,
    "stressMax": 4,
    "atk": "+4",
    "attack": {
      "name": "Greataxe",
      "range": "Very Close",
      "damage": "4d12+15 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Terrifying",
        "type": "Passive",
        "text": "When the Zombie makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear."
      },
      {
        "name": "Fearsome Presence",
        "type": "Passive",
        "text": "PCs can't spend Hope to use features against the Zombie."
      },
      {
        "name": "Perfect Strike",
        "type": "Action",
        "text": "Mark a Stress to make a standard attack against all targets within Very Close range. Targets the Zombie succeeds against are Vulnerable until their next rest."
      },
      {
        "name": "Skilled Opportunist",
        "type": "Reaction",
        "text": "When another adversary deals damage to a target within Very Close range of the Zombie, you can spend a Fear to add the Zombie's standard attack damage to the damage roll."
      }
    ],
    "notes": ""
  },
  {
    "name": "Zombie Legion",
    "tier": 4,
    "type": "Horde",
    "description": "A large pack of undead, still powerful despite their rotting flesh.",
    "motives": "Consume brain, shred flesh, surround",
    "difficulty": 17,
    "thresholds": {
      "major": 25,
      "severe": 45
    },
    "hpMax": 8,
    "stressMax": 5,
    "atk": "+2",
    "attack": {
      "name": "Undead Hands",
      "range": "Close",
      "damage": "4d6+10 phy"
    },
    "experience": "",
    "features": [
      {
        "name": "Horde (2d6+5)",
        "type": "Passive",
        "text": "When the Legion has marked half or more of their HP, their standard attack deals 2d6+5 physical damage instead."
      },
      {
        "name": "Unyielding",
        "type": "Passive",
        "text": "The Legion has resistance to physical damage."
      },
      {
        "name": "Relentless (2)",
        "type": "Passive",
        "text": "The Legion can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Overwhelm",
        "type": "Reaction",
        "text": "When the Legion takes Minor damage from an attack within Melee range, you can mark a Stress to make a standard attack with advantage against the attacker."
      }
    ],
    "notes": ""
  }
];
