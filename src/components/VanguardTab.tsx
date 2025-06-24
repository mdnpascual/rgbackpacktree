import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Skill, { SkillData } from './Skill';
import LevelChangeModal from './LevelChangeModal';
import { SkillProvider } from './SkillContext';

const VanguardTab = () => {
	const xOffset = 0;
	const yOffset = 0;
	const [skills, setSkills] = useState<SkillData[]>([
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
				{ minLevel: 1, maxLevel: 10,
					requiredPrerequisiteLevel:  []
				},
				{ minLevel: 11, maxLevel: 20,
					requiredPrerequisiteLevel: [{
						id: 'final_1',
						level: 1,
					}]
				},
				{ minLevel: 21, maxLevel: 30,
					requiredPrerequisiteLevel: [{
						id: 'final_1',
						level: 2,
					}]
				},
				{ minLevel: 31, maxLevel: 40,
					requiredPrerequisiteLevel: [{
						id: 'final_1',
						level: 3,
					}]
				},
				{ minLevel: 41, maxLevel: 50,
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
				{ minLevel: 1, maxLevel: 10,
					requiredPrerequisiteLevel:  []
				},
				{ minLevel: 11, maxLevel: 20,
					requiredPrerequisiteLevel: [{
						id: 'final_2',
						level: 1,
					}]
				},
				{ minLevel: 21, maxLevel: 30,
					requiredPrerequisiteLevel: [{
						id: 'final_2',
						level: 2,
					}]
				},
				{ minLevel: 31, maxLevel: 40,
					requiredPrerequisiteLevel: [{
						id: 'final_2',
						level: 3,
					}]
				},
				{ minLevel: 41, maxLevel: 50,
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
				{ minLevel: 1, maxLevel: 10,
					requiredPrerequisiteLevel:  []
				},
				{ minLevel: 11, maxLevel: 20,
					requiredPrerequisiteLevel: [{
						id: 'final_3',
						level: 1,
					}]
				},
				{ minLevel: 21, maxLevel: 30,
					requiredPrerequisiteLevel: [{
						id: 'final_3',
						level: 2,
					}]
				},
				{ minLevel: 31, maxLevel: 40,
					requiredPrerequisiteLevel: [{
						id: 'final_3',
						level: 3,
					}]
				},
				{ minLevel: 41, maxLevel: 50,
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
				{ minLevel: 1, maxLevel: 10,
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
				{ minLevel: 1, maxLevel: 20,
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
				{ minLevel: 1, maxLevel: 20,
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
				{ minLevel: 1, maxLevel: 10,
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
				{ minLevel: 1, maxLevel: 10,
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
				{ minLevel: 1, maxLevel: 20,
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
				{ minLevel: 1, maxLevel: 20,
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
				{ minLevel: 1, maxLevel: 10,
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
    ]);
	const [modalSkill, setModalSkill] = useState<SkillData | null>(null); // Skill to change level
	const [isModalOpen, setModalOpen] = useState(false);

	const handleLevelChange = (id: string, change: number) => {
		setSkills((prevSkills) =>
			prevSkills.map(skill =>
				skill.id === id ? { ...skill, currentLevel: Math.max(0, skill.currentLevel + change) } : skill
			)
		);
	};

	const handleClick = (id: string) => {
		const skillToEdit = skills.find(skill => skill.id === id);
		setModalSkill(skillToEdit || null);
		setModalOpen(true);
	};

	return (
		<SkillProvider>
			<TransformWrapper
				initialScale={1}
				limitToBounds={false}
				initialPositionX={0}
				initialPositionY={-300} // Pans down by 200px
			>
				<TransformComponent>

					<svg width="10000" height="10000">
						{skills.map(skill => (
							<Skill
								key={skill.id}
								x={skill.position.x}
								y={skill.position.y}
								r={skill.radius}
								name={skill.name}
								currentLevel={skill.currentLevel}
								levelTiers={skill.levelTiers}
								onLevelChange={handleClick}
								id={skill.id}
							/>
						))}
					</svg>

					{isModalOpen && modalSkill && (
						<LevelChangeModal
							skillName={modalSkill.name}
							onClose={() => setModalOpen(false)}
							onChange={(change) => handleLevelChange(modalSkill.id, change)}
						/>
					)}
				</TransformComponent>
			</TransformWrapper>
		</SkillProvider>
	);
};

export default VanguardTab;
