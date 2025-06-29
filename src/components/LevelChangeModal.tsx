import React, { useEffect, useState, useRef } from 'react';
import { LevelTier, SkillData } from './Skill';
import { SkillDataDetails, useSkillContext } from './SkillContext';
import { CSSProperties } from '@mui/material';

interface LevelChangeModalProps {
	skillName: string;
	onClose: () => void;
	onChange: (change: number) => void;
	skillData: SkillData;
}

const textStyle: CSSProperties = { textAlign: 'center', color: 'black' };

const getCurrentSkill = (thisSkill: SkillData, allSkills: SkillData[]) => {
	return allSkills.find((skill) => skill.id === thisSkill.id)!;
}

const getSkillDataDetails = (thisSkill: SkillData, skillsData: SkillDataDetails[]) => {
	return skillsData.find(skill => skill.id.includes(thisSkill.id) && skill.level === thisSkill.currentLevel);
}

const getNextSkillDataDetails = (thisSkill: SkillData, skillsData: SkillDataDetails[]) => {
	return skillsData.find(skill => skill.id.includes(thisSkill.id) && skill.level === thisSkill.currentLevel + 1);
}

const canLevelUp = (thisSkill: SkillData, allSkills: SkillData[]) => {
	if (thisSkill && thisSkill.specialRule && !checkSpecialRules(thisSkill, allSkills)) return false;

	for (const tier of thisSkill.levelTiers) {
		if (thisSkill.currentLevel + 1 >= tier.minLevel && thisSkill.currentLevel < tier.maxLevel) {
			// Check all required prerequisites for this tier
			return tier.requiredPrerequisiteLevel.every(req => {
				const prerequisiteSkill = allSkills.find(skill => skill.id === req.id);
				if (prerequisiteSkill) {
					return prerequisiteSkill.currentLevel >= req.level; // Check if prerequisite is met
				}
				return false; // If prerequisite not found, cannot level up
			});
		}
		if (thisSkill.currentLevel >= tier.maxLevel) {
			const tierIndex = thisSkill.levelTiers.findIndex((thisTier) => thisTier === tier)
			if (tierIndex > -1) {
				continue;
			} else {
				return false; // Already at max level for this tier
			}
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
			const finalSkillCount = checkFinalSkillCount(allSkills);
			return checkConditions(finalSkillCount, [hpSkill, defenseSkill]);
		}
		else if (thisSkill.id === 'defense') {
			const finalSkillCount = checkFinalSkillCount(allSkills);
			return checkConditions(finalSkillCount, [hpSkill, attackSkill]);
		}
		else if (thisSkill.id === 'hp') {
			const finalSkillCount = checkFinalSkillCount(allSkills);
			return checkConditions(finalSkillCount, [defenseSkill, attackSkill]);
		}
		return false
	}
	return false;
}

const checkFinalSkillCount = (allSkills: SkillData[]) => {
	const finalSkillCount = Math.min(
		Math.max(allSkills.find((skill) => skill.id === 'final_1')?.currentLevel ?? 0, 0),
		1
	) +
	Math.min(
		Math.max(allSkills.find((skill) => skill.id === 'final_2')?.currentLevel ?? 0, 0),
		1
	) +
	Math.min(
		Math.max(allSkills.find((skill) => skill.id === 'final_3')?.currentLevel ?? 0, 0),
		1
	)

	return finalSkillCount;
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

const LevelChangeModal: React.FC<LevelChangeModalProps> = ({ skillName, onClose, onChange, skillData }) => {
	const { skills, skillsData } = useSkillContext();
	const [isLevelUpEnabled, setIsLevelUpEnabled] = useState(false);
	const [skillDetails, setSkillDetails] = useState<SkillDataDetails | undefined>(undefined);
	const [nextSkillDetails, nextSetSkillDetails] = useState<SkillDataDetails | undefined>(undefined);

	const modalRef = useRef<HTMLDivElement>(null); // Reference for the modal

	useEffect(() => {
		const currentSkill = getCurrentSkill(skillData, skills);
		setSkillDetails(getSkillDataDetails(currentSkill, skillsData));
		nextSetSkillDetails(getNextSkillDataDetails(currentSkill, skillsData));

		const enabled = canLevelUp(currentSkill, skills);
		setIsLevelUpEnabled(enabled);
	}, [skills, skillData, skillsData]);

	const handleClickOutside = (event: MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
			onClose();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const getMaxLevel = (levelTiers: LevelTier[]) => {
		return levelTiers.length > 0
			? Math.max(...levelTiers.map(tier => tier.maxLevel))
			: 0;
	};

	const handleLevelUpMax = () => {
		const currentSkill = getCurrentSkill(skillData, skills);
		let currentLevel = currentSkill.currentLevel;
		const maxLevelCap = 100;

		let levelUpCount = 0;

		while (canLevelUp({ ...currentSkill, currentLevel: currentLevel + 1 }, skills) && levelUpCount < maxLevelCap) {
			levelUpCount++;
			currentLevel++;
		}

		// Apply the level up change
		onChange(levelUpCount + 1);
	};

	const handleLevelDownMax = () => {
		const currentSkill = getCurrentSkill(skillData, skills);
		onChange(-currentSkill.currentLevel); // Bring down the level to 0
	};

	if (!skillDetails) {
		return null; // Or a loading indicator
	}

	const currentSkill = getCurrentSkill(skillData, skills);
	const maxLevel = getMaxLevel(currentSkill.levelTiers);
	const totalValuePercentage = (skillDetails.total_value / skillDetails.value) * 100;
	return (
		<div
			ref={modalRef}
			style={{
				position: 'fixed',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				background: '#fff',
				padding: '20px',
				zIndex: 1000,
				border: '1px solid #ccc',
				borderRadius: '8px',
				boxShadow: '0 0 10px rgba(0,0,0,0.5)',
			}}>
			<h2 style={textStyle}>{skillDetails.name}</h2>
			<h3 style={textStyle}>
				Lvl. {currentSkill.currentLevel} / {maxLevel}
			</h3>
			<p style={textStyle}>
				{skillDetails.description} {totalValuePercentage.toFixed(2)}%
			</p>

			{nextSkillDetails ? (
				<>
					<p style={textStyle}>Cost: {nextSkillDetails.cost}</p>
				</>
			) : (
				<>
					<p style={textStyle}>MAX LVL!</p>
				</>
			)}

			{isLevelUpEnabled ? (
				<>
					<div style={{ margin: '5px 0', display: 'flex', justifyContent: 'center' }}>
						<button onClick={() => onChange(1)} style={{ margin: '0 5px' }}>Level Up</button>
						<button onClick={handleLevelUpMax} style={{ margin: '0 5px' }}>Max Level Up</button>
					</div>
				</>
			) : (
				<p style={textStyle}>
					Cannot level up! Check requirements.
				</p>
			)}

			{currentSkill.currentLevel > 0 && (
				<div style={{ margin: '5px 0', display: 'flex', justifyContent: 'center' }}>
					<button onClick={() => onChange(-1)} style={{ margin: '0 5px' }}>Level Down</button>
					<button onClick={handleLevelDownMax} style={{ margin: '0 5px' }}>Level Down Max</button>
				</div>
			)}
		</div>
	);
};

export default LevelChangeModal;
