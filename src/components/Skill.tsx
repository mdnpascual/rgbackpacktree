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
	color: string;
	specialRule?: string
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
	color: string;
}

const Skill: React.FC<SkillProps> = ({
	x, y, r,
	name,
	currentLevel,
	levelTiers,
	onLevelChange,
	id,
	color
}) => {
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
		const thisSkill = allSkills.find((skill) => skill.id === id);
		if (thisSkill && thisSkill.specialRule && !checkSpecialRules(thisSkill, allSkills)) return false;
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

	const checkSpecialRules = (thisSkill: SkillData, allSkills: SkillData[]): Boolean => {
		const rule = thisSkill.specialRule
		if (rule === 'firstNode') {
			const hpSkill = allSkills.find((skill) => skill.id === 'hp')!
			const attackSkill = allSkills.find((skill) => skill.id === 'attack')!
			const defenseSkill = allSkills.find((skill) => skill.id === 'defense')!

			if (thisSkill.id === 'attack') {
				const finalSkillCount = checkFinalSkillCount('final_2', 'final_3', allSkills);
				return checkConditions(finalSkillCount, [hpSkill, defenseSkill]);
			}
			else if (thisSkill.id === 'defense') {
				const finalSkillCount = checkFinalSkillCount('final_1', 'final_3', allSkills);
				return checkConditions(finalSkillCount, [hpSkill, attackSkill]);
			}
			else if (thisSkill.id === 'hp') {
				const finalSkillCount = checkFinalSkillCount('final_1', 'final_2', allSkills);
				return checkConditions(finalSkillCount, [defenseSkill, attackSkill]);
			}
			return false
		}
		return false;
	}

	const checkFinalSkillCount = (final1Id: string, final2Id: string, allSkills: SkillData[]) => {
		const finalSkillCount = Math.min(
			Math.max(allSkills.find((skill) => skill.id === final1Id)?.currentLevel ?? 0, 0),
			1
		) +
		Math.min(
			Math.max(allSkills.find((skill) => skill.id === final2Id)?.currentLevel ?? 0, 0),
			1
		);

		return finalSkillCount;
	};

	const checkConditions = (finalSkillCount: number, otherSkills: SkillData[]) => {
		if (finalSkillCount === 0 && otherSkills.every(skill => skill.currentLevel === 0)) {
			return true;
		}
		if (finalSkillCount === 1 &&
			((otherSkills[0].currentLevel > 0 && otherSkills[1].currentLevel === 0) ||
				(otherSkills[0].currentLevel === 0 && otherSkills[1].currentLevel > 0))) {
			return true;
		}
		return finalSkillCount > 1;
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
				fill={currentLevel > 0 ? color : 'grey'}
				stroke="#grey"
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
				fill="white"
				fontSize="16"
				textAnchor="middle"
			>
				{name}
			</text>
		</g>
	);
};

export default Skill;
