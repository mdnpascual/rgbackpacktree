import React from 'react';
import { useSkillContext } from './SkillContext';

interface Prerequisite {
	skillName: string;
	currentLevel: number;
}

interface RequiredPrerequisite {
	id: string;
	level: number;
}

export interface LevelTier {
	minLevel: number;
	maxLevel: number;
	requiredPrerequisiteLevel: RequiredPrerequisite[];
}

export interface SkillData {
    id: string;
    name: string;
    currentLevel: number;
    levelTiers: LevelTier[];
	position: { x: number; y: number };
	radius: number;
}

interface SkillProps {
	x: number;
	y: number;
	r: number; // radius
	name: string;
	currentLevel: number;
	levelTiers: LevelTier[];
	onLevelChange: (id: string, change: number) => void; // Function to change level
	id: string; // Skill ID
}

const Skill: React.FC<SkillProps> = ({ x, y,r, name, currentLevel, levelTiers, onLevelChange, id }) => {
	const { skills } = useSkillContext();

	const handleClick = (event: React.MouseEvent<SVGCircleElement>) => {
		event.stopPropagation();
		// Call the onLevelChange here
		openLevelChangePopup(id);
	};

	const openLevelChangePopup = (id: string) => {
		// TODO: Logic to open a popup/modal here
		if (canLevelUp(skills)){
			onLevelChange(id, 1);
		} else {
			console.log("nop")
		}
		console.log(`Open popup for level change on ${id}`);
	};

	const canLevelUp = (allSkills: SkillData[]) => {
		for (const tier of levelTiers) {
			if (currentLevel >= tier.minLevel && currentLevel < tier.maxLevel) {
				// Check all required prerequisites for this tier
				return tier.requiredPrerequisiteLevel.every(req => {
					const prerequisiteSkill = allSkills.find(skill => skill.id === req.id);
					if (prerequisiteSkill) {
						return prerequisiteSkill.currentLevel >= req.level; // Check if prerequisite is met
					}
					return false; // If prerequisite not found, cannot level up
				});
			}
			if (currentLevel >= tier.maxLevel) {
				return false; // Already at max level for this tier
			}
		}
		return false; // No tiers satisfied
	};

	// Position text above and to the right of the circle at 45 degrees
	const angle = Math.PI / 4; // 45 degrees in radians
	const offset = 5; // Additional space outside the circle

	const levelTextX = x + (r + offset) * Math.cos(angle);
	const levelTextY = y - (r + offset) * Math.sin(angle);

	return (
		<g>
			<circle
				cx={x}
				cy={y}
				r={r}
				fill={currentLevel > 0 ? '#0ff' : '#f0f0f0'}
				stroke="#0ff"
				onClick={handleClick}
				style={{ pointerEvents: 'visible' }}
			/>
			<text
				x={levelTextX}
				y={levelTextY}
				fill="yellow"
				fontSize="24"
				textAnchor="start"
			>
				{currentLevel}
			</text>
			<text
				x={x}
				y={y + offset}
				fill="red"
				fontSize="12"
				textAnchor="middle"
			>
				{name}
			</text>
		</g>
	);
};

export default Skill;
