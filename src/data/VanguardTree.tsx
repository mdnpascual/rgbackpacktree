export const VanguardTree = (xOffset: number, yOffset: number) => [
	{
		id: 'root',
		name: 'Root',
		currentLevel: 0,
		levelTiers: [],
		position: { x: 600 + xOffset, y: 725 + yOffset },
		radius: 60,
	},
	{
		id: 'attack',
		name: 'Attack',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  []
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'final_1',
					level: 1,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'final_1',
					level: 2,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'final_1',
					level: 3,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'final_1',
					level: 4,
				}]
			}
		],
		position: { x: 600 + xOffset, y: 870 + yOffset },
		radius: 60,
	},
	{
		id: 'defense',
		name: 'Defense',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  []
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'final_2',
					level: 1,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'final_2',
					level: 2,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'final_2',
					level: 3,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'final_2',
					level: 4,
				}]
			}
		],
		position: { x: 455 + xOffset, y: 635 + yOffset },
		radius: 60,
	},
	{
		id: 'hp',
		name: 'HP',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  []
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'final_3',
					level: 1,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'final_3',
					level: 2,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'final_3',
					level: 3,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'final_3',
					level: 4,
				}]
			}
		],
		position: { x: 735 + xOffset, y: 635 + yOffset },
		radius: 60,
	},
	{
		id: 'attack_3_1',
		name: 'Attack_3_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 10,
				requiredPrerequisiteLevel:  [{
					id: 'hp',
					level: 20,
				}]
			},
			{ minLevel: 11, maxLevel: 20,
				requiredPrerequisiteLevel: [{
					id: 'hp',
					level: 40,
				}]
			},
			{ minLevel: 21, maxLevel: 30,
				requiredPrerequisiteLevel: [{
					id: 'hp',
					level: 60,
				}]
			},
			{ minLevel: 31, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'hp',
					level: 80,
				}]
			},
			{ minLevel: 41, maxLevel: 50,
				requiredPrerequisiteLevel: [{
					id: 'hp',
					level: 100,
				}]
			}
		],
		position: { x: 865 + xOffset, y: 570 + yOffset },
		radius: 35,
	},
	{
		id: 'dodge_3_1',
		name: 'Dodge_3_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'attack_3_1',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'attack_3_1',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'attack_3_1',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'attack_3_1',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'attack_3_1',
					level: 100,
				}]
			}
		],
		position: { x: 945 + xOffset, y: 395 + yOffset },
		radius: 50,
	},
	{
		id: 'pierce_3_1',
		name: 'Pierce_3_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'attack_3_1',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'attack_3_1',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'attack_3_1',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'attack_3_1',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'attack_3_1',
					level: 100,
				}]
			}
		],
		position: { x: 1050 + xOffset, y: 580 + yOffset },
		radius: 50,
	},
	{
		id: 'global_attack_3_1',
		name: 'Global_Attack_3_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 10,
				requiredPrerequisiteLevel:  [
				{
					id: 'pierce_3_1',
					level: 20,
				},
				{
					id: 'dodge_3_1',
					level: 20,
				},
			]
			},
			{ minLevel: 11, maxLevel: 20,
				requiredPrerequisiteLevel:  [
				{
					id: 'pierce_3_1',
					level: 40,
				},
				{
					id: 'dodge_3_1',
					level: 40,
				},
			]
			},
			{ minLevel: 21, maxLevel: 30,
				requiredPrerequisiteLevel:  [
				{
					id: 'pierce_3_1',
					level: 60,
				},
				{
					id: 'dodge_3_1',
					level: 60,
				},
			]
			},
			{ minLevel: 31, maxLevel: 40,
				requiredPrerequisiteLevel:  [
				{
					id: 'pierce_3_1',
					level: 80,
				},
				{
					id: 'dodge_3_1',
					level: 80,
				},
			]
			},
			{ minLevel: 41, maxLevel: 50,
				requiredPrerequisiteLevel:  [
				{
					id: 'pierce_3_1',
					level: 100,
				},
				{
					id: 'dodge_3_1',
					level: 100,
				},
			]
			},
		],
		position: { x: 1135 + xOffset, y: 410 + yOffset },
		radius: 35,
	},
	{
		id: 'hp_1_1',
		name: 'HP_1_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 10,
				requiredPrerequisiteLevel:  [{
					id: 'attack',
					level: 20,
				}]
			},
			{ minLevel: 11, maxLevel: 20,
				requiredPrerequisiteLevel: [{
					id: 'attack',
					level: 40,
				}]
			},
			{ minLevel: 21, maxLevel: 30,
				requiredPrerequisiteLevel: [{
					id: 'attack',
					level: 60,
				}]
			},
			{ minLevel: 31, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'attack',
					level: 80,
				}]
			},
			{ minLevel: 41, maxLevel: 50,
				requiredPrerequisiteLevel: [{
					id: 'attack',
					level: 100,
				}]
			}
		],
		position: { x: 600 + xOffset, y: 1030 + yOffset },
		radius: 35,
	},
	{
		id: 'ignore_dodge_1_1',
		name: 'Ignore_Dodge_1_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'hp_1_1',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'hp_1_1',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'hp_1_1',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'hp_1_1',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'hp_1_1',
					level: 100,
				}]
			}
		],
		position: { x: 495 + xOffset, y: 1180 + yOffset },
		radius: 50,
	},
	{
		id: 'pierce_1_1',
		name: 'Pierce_1_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'hp_1_1',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'hp_1_1',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'hp_1_1',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'hp_1_1',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'hp_1_1',
					level: 100,
				}]
			}
		],
		position: { x: 710 + xOffset, y: 1180 + yOffset },
		radius: 50,
	},
	{
		id: 'global_def_1_1',
		name: 'Global_Def_1_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 10,
				requiredPrerequisiteLevel:  [
				{
					id: 'pierce_1_1',
					level: 20,
				},
				{
					id: 'ignore_dodge_1_1',
					level: 20,
				},
			]
			},
			{ minLevel: 11, maxLevel: 20,
				requiredPrerequisiteLevel:  [
				{
					id: 'pierce_1_1',
					level: 40,
				},
				{
					id: 'ignore_dodge_1_1',
					level: 40,
				},
			]
			},
			{ minLevel: 21, maxLevel: 30,
				requiredPrerequisiteLevel:  [
				{
					id: 'pierce_1_1',
					level: 60,
				},
				{
					id: 'ignore_dodge_1_1',
					level: 60,
				},
			]
			},
			{ minLevel: 31, maxLevel: 40,
				requiredPrerequisiteLevel:  [
				{
					id: 'pierce_1_1',
					level: 80,
				},
				{
					id: 'ignore_dodge_1_1',
					level: 80,
				},
			]
			},
			{ minLevel: 41, maxLevel: 50,
				requiredPrerequisiteLevel:  [
				{
					id: 'pierce_1_1',
					level: 100,
				},
				{
					id: 'ignore_dodge_1_1',
					level: 100,
				},
			]
			},
		],
		position: { x: 600 + xOffset, y: 1345 + yOffset },
		radius: 35,
	},
	{
		id: 'hp_2_1',
		name: 'HP_2_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 10,
				requiredPrerequisiteLevel:  [{
					id: 'defense',
					level: 20,
				}]
			},
			{ minLevel: 11, maxLevel: 20,
				requiredPrerequisiteLevel: [{
					id: 'defense',
					level: 40,
				}]
			},
			{ minLevel: 21, maxLevel: 30,
				requiredPrerequisiteLevel: [{
					id: 'defense',
					level: 60,
				}]
			},
			{ minLevel: 31, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'defense',
					level: 80,
				}]
			},
			{ minLevel: 41, maxLevel: 50,
				requiredPrerequisiteLevel: [{
					id: 'defense',
					level: 100,
				}]
			}
		],
		position: { x: 330 + xOffset, y: 565 + yOffset },
		radius: 35,
	},
	{
		id: 'dodge_2_1',
		name: 'Dodge_2_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'hp_2_1',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'hp_2_1',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'hp_2_1',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'hp_2_1',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'hp_2_1',
					level: 100,
				}]
			}
		],
		position: { x: 145 + xOffset, y: 570 + yOffset },
		radius: 50,
	},
	{
		id: 'pierce_2_1',
		name: 'Pierce_2_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'hp_2_1',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'hp_2_1',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'hp_2_1',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'hp_2_1',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'hp_2_1',
					level: 100,
				}]
			}
		],
		position: { x: 250 + xOffset, y: 395 + yOffset },
		radius: 50,
	},
	{
		id: 'global_hp_2_1',
		name: 'Global_HP_2_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 10,
				requiredPrerequisiteLevel:  [
				{
					id: 'pierce_2_1',
					level: 20,
				},
				{
					id: 'dodge_2_1',
					level: 20,
				},
			]
			},
			{ minLevel: 11, maxLevel: 20,
				requiredPrerequisiteLevel:  [
				{
					id: 'pierce_2_1',
					level: 40,
				},
				{
					id: 'dodge_2_1',
					level: 40,
				},
			]
			},
			{ minLevel: 21, maxLevel: 30,
				requiredPrerequisiteLevel:  [
				{
					id: 'pierce_2_1',
					level: 60,
				},
				{
					id: 'dodge_2_1',
					level: 60,
				},
			]
			},
			{ minLevel: 31, maxLevel: 40,
				requiredPrerequisiteLevel:  [
				{
					id: 'pierce_2_1',
					level: 80,
				},
				{
					id: 'dodge_2_1',
					level: 80,
				},
			]
			},
			{ minLevel: 41, maxLevel: 50,
				requiredPrerequisiteLevel:  [
				{
					id: 'pierce_2_1',
					level: 100,
				},
				{
					id: 'dodge_2_1',
					level: 100,
				},
			]
			},
		],
		position: { x: 60 + xOffset, y: 415 + yOffset },
		radius: 35,
	},
	{
		id: 'def_3_2',
		name: 'Def_3_2',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 10,
				requiredPrerequisiteLevel:  [{
					id: 'HP',
					level: 20,
				}]
			},
			{ minLevel: 11, maxLevel: 20,
				requiredPrerequisiteLevel: [{
					id: 'HP',
					level: 40,
				}]
			},
			{ minLevel: 21, maxLevel: 30,
				requiredPrerequisiteLevel: [{
					id: 'HP',
					level: 60,
				}]
			},
			{ minLevel: 31, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'HP',
					level: 80,
				}]
			},
			{ minLevel: 41, maxLevel: 50,
				requiredPrerequisiteLevel: [{
					id: 'HP',
					level: 100,
				}]
			}
		],
		position: { x: 865 + xOffset, y: 875 + yOffset },
		radius: 35,
	},
	{
		id: 'ignore_dodge_3_2',
		name: 'Ignore_Dodge_3_2',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'def_3_2',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'def_3_2',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'def_3_2',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'def_3_2',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'def_3_2',
					level: 100,
				}]
			}
		],
		position: { x: 1050 + xOffset, y: 860 + yOffset },
		radius: 50,
	},
	{
		id: 'ignore_counterattack_3_2',
		name: 'Ignore_Counterattack_3_2',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'def_3_2',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'def_3_2',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'def_3_2',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'def_3_2',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'def_3_2',
					level: 100,
				}]
			}
		],
		position: { x: 945 + xOffset, y: 1040 + yOffset },
		radius: 50,
	},
	{
		id: 'global_def_3_2',
		name: 'Global_Def_3_2',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 10,
				requiredPrerequisiteLevel:  [
				{
					id: 'ignore_dodge_3_2',
					level: 20,
				},
				{
					id: 'ignore_counterattack_3_2',
					level: 20,
				},
			]
			},
			{ minLevel: 11, maxLevel: 20,
				requiredPrerequisiteLevel:  [
				{
					id: 'ignore_dodge_3_2',
					level: 40,
				},
				{
					id: 'ignore_counterattack_3_2',
					level: 40,
				},
			]
			},
			{ minLevel: 21, maxLevel: 30,
				requiredPrerequisiteLevel:  [
				{
					id: 'ignore_dodge_3_2',
					level: 60,
				},
				{
					id: 'ignore_counterattack_3_2',
					level: 60,
				},
			]
			},
			{ minLevel: 31, maxLevel: 40,
				requiredPrerequisiteLevel:  [
				{
					id: 'ignore_dodge_3_2',
					level: 80,
				},
				{
					id: 'ignore_counterattack_3_2',
					level: 80,
				},
			]
			},
			{ minLevel: 41, maxLevel: 50,
				requiredPrerequisiteLevel:  [
				{
					id: 'ignore_dodge_3_2',
					level: 100,
				},
				{
					id: 'ignore_counterattack_3_2',
					level: 100,
				},
			]
			},
		],
		position: { x: 1135 + xOffset, y: 1025 + yOffset },
		radius: 35,
	},
	{
		id: 'def_1_2',
		name: 'Def_1_2',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 10,
				requiredPrerequisiteLevel:  [{
					id: 'Attack',
					level: 20,
				}]
			},
			{ minLevel: 11, maxLevel: 20,
				requiredPrerequisiteLevel: [{
					id: 'Attack',
					level: 40,
				}]
			},
			{ minLevel: 21, maxLevel: 30,
				requiredPrerequisiteLevel: [{
					id: 'Attack',
					level: 60,
				}]
			},
			{ minLevel: 31, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'Attack',
					level: 80,
				}]
			},
			{ minLevel: 41, maxLevel: 50,
				requiredPrerequisiteLevel: [{
					id: 'Attack',
					level: 100,
				}]
			}
		],
		position: { x: 330 + xOffset, y: 875 + yOffset },
		radius: 35,
	},
	{
		id: 'dodge_1_2',
		name: 'Dodge_1_2',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'def_1_2',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'def_1_2',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'def_1_2',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'def_1_2',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'def_1_2',
					level: 100,
				}]
			}
		],
		position: { x: 145 + xOffset, y: 860 + yOffset },
		radius: 50,
	},
	{
		id: 'ignore_counterattack_1_2',
		name: 'Ignore_Counterattack_1_2',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'def_1_2',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'def_1_2',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'def_1_2',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'def_1_2',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'def_1_2',
					level: 100,
				}]
			}
		],
		position: { x: 250 + xOffset, y: 1040 + yOffset },
		radius: 50,
	},
	{
		id: 'global_hp_1_2',
		name: 'Global_HP_1_2',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 10,
				requiredPrerequisiteLevel:  [
				{
					id: 'dodge_1_2',
					level: 20,
				},
				{
					id: 'ignore_counterattack_1_2',
					level: 20,
				},
			]
			},
			{ minLevel: 11, maxLevel: 20,
				requiredPrerequisiteLevel:  [
				{
					id: 'dodge_1_2',
					level: 40,
				},
				{
					id: 'ignore_counterattack_1_2',
					level: 40,
				},
			]
			},
			{ minLevel: 21, maxLevel: 30,
				requiredPrerequisiteLevel:  [
				{
					id: 'dodge_1_2',
					level: 60,
				},
				{
					id: 'ignore_counterattack_1_2',
					level: 60,
				},
			]
			},
			{ minLevel: 31, maxLevel: 40,
				requiredPrerequisiteLevel:  [
				{
					id: 'dodge_1_2',
					level: 80,
				},
				{
					id: 'ignore_counterattack_1_2',
					level: 80,
				},
			]
			},
			{ minLevel: 41, maxLevel: 50,
				requiredPrerequisiteLevel:  [
				{
					id: 'dodge_1_2',
					level: 100,
				},
				{
					id: 'ignore_counterattack_1_2',
					level: 100,
				},
			]
			},
		],
		position: { x: 60 + xOffset, y: 1025 + yOffset },
		radius: 35,
	},
	{
		id: 'attack_2_2',
		name: 'Attack_2_2',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 10,
				requiredPrerequisiteLevel:  [{
					id: 'defense',
					level: 20,
				}]
			},
			{ minLevel: 11, maxLevel: 20,
				requiredPrerequisiteLevel: [{
					id: 'defense',
					level: 40,
				}]
			},
			{ minLevel: 21, maxLevel: 30,
				requiredPrerequisiteLevel: [{
					id: 'defense',
					level: 60,
				}]
			},
			{ minLevel: 31, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'defense',
					level: 80,
				}]
			},
			{ minLevel: 41, maxLevel: 50,
				requiredPrerequisiteLevel: [{
					id: 'defense',
					level: 100,
				}]
			}
		],
		position: { x: 600 + xOffset, y: 410 + yOffset },
		radius: 35,
	},
	{
		id: 'ignore_dodge_2_2',
		name: 'Ignore_Dodge_2_2',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'attack_2_2',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'attack_2_2',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'attack_2_2',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'attack_2_2',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'attack_2_2',
					level: 100,
				}]
			}
		],
		position: { x: 495 + xOffset, y: 255 + yOffset },
		radius: 50,
	},
	{
		id: 'critical_hit_2_2',
		name: 'Critical_Hit_2_2',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'attack_2_2',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'attack_2_2',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'attack_2_2',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'attack_2_2',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'attack_2_2',
					level: 100,
				}]
			}
		],
		position: { x: 710 + xOffset, y: 255 + yOffset },
		radius: 50,
	},
	{
		id: 'global_attack_2_2',
		name: 'Global_Attack_2_2',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 10,
				requiredPrerequisiteLevel:  [
				{
					id: 'ignore_dodge_2_2',
					level: 20,
				},
				{
					id: 'critical_hit_2_2',
					level: 20,
				},
			]
			},
			{ minLevel: 11, maxLevel: 20,
				requiredPrerequisiteLevel:  [
				{
					id: 'ignore_dodge_2_2',
					level: 40,
				},
				{
					id: 'critical_hit_2_2',
					level: 40,
				},
			]
			},
			{ minLevel: 21, maxLevel: 30,
				requiredPrerequisiteLevel:  [
				{
					id: 'ignore_dodge_2_2',
					level: 60,
				},
				{
					id: 'critical_hit_2_2',
					level: 60,
				},
			]
			},
			{ minLevel: 31, maxLevel: 40,
				requiredPrerequisiteLevel:  [
				{
					id: 'ignore_dodge_2_2',
					level: 80,
				},
				{
					id: 'critical_hit_2_2',
					level: 80,
				},
			]
			},
			{ minLevel: 41, maxLevel: 50,
				requiredPrerequisiteLevel:  [
				{
					id: 'ignore_dodge_2_2',
					level: 100,
				},
				{
					id: 'critical_hit_2_2',
					level: 100,
				},
			]
			},
		],
		position: { x: 600 + xOffset, y: 95 + yOffset },
		radius: 35,
	},
	{
		id: 'final_1',
		name: 'Final_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 1,
				requiredPrerequisiteLevel:  [
				{
					id: 'global_hp_1_2',
					level: 10,
				},
				{
					id: 'global_def_1_1',
					level: 10,
				},
			]
			},
			{ minLevel: 2, maxLevel: 2,
				requiredPrerequisiteLevel:  [
				{
					id: 'global_hp_1_2',
					level: 20,
				},
				{
					id: 'global_def_1_1',
					level: 20,
				},
			]
			},
			{ minLevel: 3, maxLevel: 3,
				requiredPrerequisiteLevel:  [
				{
					id: 'global_hp_1_2',
					level: 30,
				},
				{
					id: 'global_def_1_1',
					level: 30,
				},
			]
			},
			{ minLevel: 4, maxLevel: 4,
				requiredPrerequisiteLevel:  [
				{
					id: 'global_hp_1_2',
					level: 40,
				},
				{
					id: 'global_def_1_1',
					level: 40,
				},
			]
			},
			{ minLevel: 5, maxLevel: 5,
				requiredPrerequisiteLevel:  [
				{
					id: 'global_hp_1_2',
					level: 50,
				},
				{
					id: 'global_def_1_1',
					level: 50,
				},
			]
			},
		],
		position: { x: 220 + xOffset, y: 1325 + yOffset },
		radius: 65,
	},
	{
		id: 'final_2',
		name: 'Final_2',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 1,
				requiredPrerequisiteLevel:  [
				{
					id: 'global_hp_2_1',
					level: 10,
				},
				{
					id: 'global_attack_2_2',
					level: 10,
				},
			]
			},
			{ minLevel: 2, maxLevel: 2,
				requiredPrerequisiteLevel:  [
				{
					id: 'global_hp_2_1',
					level: 20,
				},
				{
					id: 'global_attack_2_2',
					level: 20,
				},
			]
			},
			{ minLevel: 3, maxLevel: 3,
				requiredPrerequisiteLevel:  [
				{
					id: 'global_hp_2_1',
					level: 30,
				},
				{
					id: 'global_attack_2_2',
					level: 30,
				},
			]
			},
			{ minLevel: 4, maxLevel: 4,
				requiredPrerequisiteLevel:  [
				{
					id: 'global_hp_2_1',
					level: 40,
				},
				{
					id: 'global_attack_2_2',
					level: 40,
				},
			]
			},
			{ minLevel: 5, maxLevel: 5,
				requiredPrerequisiteLevel:  [
				{
					id: 'global_hp_2_1',
					level: 50,
				},
				{
					id: 'global_attack_2_2',
					level: 50,
				},
			]
			},
		],
		position: { x: 220 + xOffset, y: 90 + yOffset },
		radius: 65,
	},
	{
		id: 'final_3',
		name: 'Final_3',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 1,
				requiredPrerequisiteLevel:  [
				{
					id: 'global_attack_3_1',
					level: 10,
				},
				{
					id: 'global_def_3_2',
					level: 10,
				},
			]
			},
			{ minLevel: 2, maxLevel: 2,
				requiredPrerequisiteLevel:  [
				{
					id: 'global_attack_3_1',
					level: 20,
				},
				{
					id: 'global_def_3_2',
					level: 20,
				},
			]
			},
			{ minLevel: 3, maxLevel: 3,
				requiredPrerequisiteLevel:  [
				{
					id: 'global_attack_3_1',
					level: 30,
				},
				{
					id: 'global_def_3_2',
					level: 30,
				},
			]
			},
			{ minLevel: 4, maxLevel: 4,
				requiredPrerequisiteLevel:  [
				{
					id: 'global_attack_3_1',
					level: 40,
				},
				{
					id: 'global_def_3_2',
					level: 40,
				},
			]
			},
			{ minLevel: 5, maxLevel: 5,
				requiredPrerequisiteLevel:  [
				{
					id: 'global_attack_3_1',
					level: 50,
				},
				{
					id: 'global_def_3_2',
					level: 50,
				},
			]
			},
		],
		position: { x: 1335 + xOffset, y: 720 + yOffset },
		radius: 65,
	}
]