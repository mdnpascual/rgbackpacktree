export const CannonTree = (xOffset: number, yOffset: number) => [
	{
		id: 'root',
		name: 'Root',
		currentLevel: 0,
		levelTiers: [],
		position: { x: 600 + xOffset, y: 725 + yOffset },
		radius: 60,
		color: '#4ea6cf'
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
		color: '#d7af44',
		specialRule: 'firstNode'
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
		color: '#d2784d',
		specialRule: 'firstNode'
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
		color: '#4ea6cf',
		specialRule: 'firstNode'
	},
	{
		id: 'attack_3_1',
		name: 'Attack_3_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'hp',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'hp',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'hp',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'hp',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'hp',
					level: 100,
				}]
			}
		],
		position: { x: 865 + xOffset, y: 570 + yOffset },
		radius: 35,
		color: '#4ea6cf'
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
		color: '#4ea6cf'
	},
	{
		id: 'damage_reflection_3_1',
		name: 'Damage_reflection_3_1',
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
		color: '#4ea6cf'
	},
	{
		id: 'global_attack_3_1',
		name: 'Global_Attack_3_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 10,
				requiredPrerequisiteLevel:  [
				{
					id: 'damage_reflection_3_1',
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
					id: 'damage_reflection_3_1',
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
					id: 'damage_reflection_3_1',
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
					id: 'damage_reflection_3_1',
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
					id: 'damage_reflection_3_1',
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
		color: '#4ea6cf'
	},
	{
		id: 'hp_1_1',
		name: 'HP_1_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'attack',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'attack',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'attack',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'attack',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'attack',
					level: 100,
				}]
			}
		],
		position: { x: 600 + xOffset, y: 1030 + yOffset },
		radius: 35,
		color: '#d7af44'
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
		color: '#d7af44'
	},
	{
		id: 'skill_critical_res_1_1',
		name: 'Skill_crit_res_1_1',
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
		color: '#d7af44'
	},
	{
		id: 'global_def_1_1',
		name: 'Global_Def_1_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 10,
				requiredPrerequisiteLevel:  [
				{
					id: 'skill_critical_res_1_1',
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
					id: 'skill_critical_res_1_1',
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
					id: 'skill_critical_res_1_1',
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
					id: 'skill_critical_res_1_1',
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
					id: 'skill_critical_res_1_1',
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
		color: '#d7af44'
	},
	{
		id: 'hp_2_1',
		name: 'HP_2_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'defense',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'defense',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'defense',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'defense',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'defense',
					level: 100,
				}]
			}
		],
		position: { x: 330 + xOffset, y: 565 + yOffset },
		radius: 35,
		color: '#d2784d'
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
		color: '#d2784d'
	},
	{
		id: 'skill_crit_res_2_1',
		name: 'Skill_crit_res_2_1',
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
		color: '#d2784d'
	},
	{
		id: 'global_hp_2_1',
		name: 'Global_HP_2_1',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 10,
				requiredPrerequisiteLevel:  [
				{
					id: 'skill_crit_res_2_1',
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
					id: 'skill_crit_res_2_1',
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
					id: 'skill_crit_res_2_1',
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
					id: 'skill_crit_res_2_1',
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
					id: 'skill_crit_res_2_1',
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
		color: '#d2784d'
	},
	{
		id: 'def_3_2',
		name: 'Def_3_2',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'hp',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'hp',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'hp',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'hp',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'hp',
					level: 100,
				}]
			}
		],
		position: { x: 865 + xOffset, y: 875 + yOffset },
		radius: 35,
		color: '#4ea6cf'
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
		color: '#4ea6cf'
	},
	{
		id: 'ignore_stun_3_2',
		name: 'Ignore_Stun_3_2',
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
		color: '#4ea6cf'
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
					id: 'ignore_stun_3_2',
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
					id: 'ignore_stun_3_2',
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
					id: 'ignore_stun_3_2',
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
					id: 'ignore_stun_3_2',
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
					id: 'ignore_stun_3_2',
					level: 100,
				},
			]
			},
		],
		position: { x: 1135 + xOffset, y: 1025 + yOffset },
		radius: 35,
		color: '#4ea6cf'
	},
	{
		id: 'def_1_2',
		name: 'Def_1_2',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'attack',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'attack',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'attack',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'attack',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'attack',
					level: 100,
				}]
			}
		],
		position: { x: 330 + xOffset, y: 875 + yOffset },
		radius: 35,
		color: '#d7af44'
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
		color: '#d7af44'
	},
	{
		id: 'ignore_stun_1_2',
		name: 'Ignore_Stun_1_2',
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
		color: '#d7af44'
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
					id: 'ignore_stun_1_2',
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
					id: 'ignore_stun_1_2',
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
					id: 'ignore_stun_1_2',
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
					id: 'ignore_stun_1_2',
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
					id: 'ignore_stun_1_2',
					level: 100,
				},
			]
			},
		],
		position: { x: 60 + xOffset, y: 1025 + yOffset },
		radius: 35,
		color: '#d7af44'
	},
	{
		id: 'attack_2_2',
		name: 'Attack_2_2',
		currentLevel: 0,
		levelTiers: [
			{ minLevel: 0, maxLevel: 20,
				requiredPrerequisiteLevel:  [{
					id: 'defense',
					level: 20,
				}]
			},
			{ minLevel: 21, maxLevel: 40,
				requiredPrerequisiteLevel: [{
					id: 'defense',
					level: 40,
				}]
			},
			{ minLevel: 41, maxLevel: 60,
				requiredPrerequisiteLevel: [{
					id: 'defense',
					level: 60,
				}]
			},
			{ minLevel: 61, maxLevel: 80,
				requiredPrerequisiteLevel: [{
					id: 'defense',
					level: 80,
				}]
			},
			{ minLevel: 81, maxLevel: 100,
				requiredPrerequisiteLevel: [{
					id: 'defense',
					level: 100,
				}]
			}
		],
		position: { x: 600 + xOffset, y: 410 + yOffset },
		radius: 35,
		color: '#d2784d'
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
		color: '#d2784d'
	},
	{
		id: 'damage_reflection_2_2',
		name: 'Damage_Reflection_2_2',
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
		color: '#d2784d'
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
					id: 'damage_reflection_2_2',
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
					id: 'damage_reflection_2_2',
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
					id: 'damage_reflection_2_2',
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
					id: 'damage_reflection_2_2',
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
					id: 'damage_reflection_2_2',
					level: 100,
				},
			]
			},
		],
		position: { x: 600 + xOffset, y: 95 + yOffset },
		radius: 35,
		color: '#d2784d'
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
		color: '#d7af44'
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
		color: '#d2784d'
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
		color: '#4ea6cf'
	}
]