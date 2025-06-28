import React, { useEffect, useState } from 'react';
import { SkillData } from './Skill';
import { useSkillContext } from './SkillContext';

interface LevelChangeModalProps {
	skillName: string;
	onClose: () => void;
	onChange: (change: number) => void;
	skillData: SkillData;
}

const canLevelUp = (thisSkill: SkillData, allSkills: SkillData[]) => {
	const currentSkill = allSkills.find((skill) => skill.id === thisSkill.id)!;
	if (currentSkill && currentSkill.specialRule && !checkSpecialRules(currentSkill, allSkills)) return false;

	for (const tier of currentSkill.levelTiers) {
		if (currentSkill.currentLevel >= tier.minLevel && currentSkill.currentLevel < tier.maxLevel) {
			// Check all required prerequisites for this tier
			return tier.requiredPrerequisiteLevel.every(req => {
				const prerequisiteSkill = allSkills.find(skill => skill.id === req.id);
				if (prerequisiteSkill) {
					return prerequisiteSkill.currentLevel >= req.level; // Check if prerequisite is met
				}
				return false; // If prerequisite not found, cannot level up
			});
		}
		if (currentSkill.currentLevel >= tier.maxLevel) {
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
}

const LevelChangeModal: React.FC<LevelChangeModalProps> = ({ skillName, onClose, onChange, skillData }) => {
	const { skills } = useSkillContext();
	const [isLevelUpEnabled, setIsLevelUpEnabled] = useState(false);

	useEffect(() => {
		const enabled = canLevelUp(skillData, skills);
		setIsLevelUpEnabled(enabled);
	}, [skills, skillData]);

	const handleChange = (change: number) => {
		onChange(change);
	};

	return (
		<div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#fff', padding: '20px', zIndex: 1000 }}>
			<h2 style={{color: 'black'}}>{`${skillName}`}</h2>
			<button onClick={() => handleChange(1)} disabled={!isLevelUpEnabled}>+1</button>
			<button onClick={() => handleChange(-1)}>-1</button>
			<button onClick={onClose}>Cancel</button>
		</div>
	);
};

export default LevelChangeModal;
