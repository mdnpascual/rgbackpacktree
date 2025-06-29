import React, { useEffect, useState, useRef } from 'react';
import { LevelTier, SkillData } from './Skill';
import { SkillDataDetails, useSkillContext } from './SkillContext';
import { CSSProperties } from '@mui/material';
import { getNextSkillDataDetails, getSkillDataDetails } from './BackpackTree';

interface LevelChangeModalProps {
	skillName: string;
	onClose: () => void;
	onChange: (change: number) => void;
	skillData: SkillData;
	availableBudget: number;
	setBudget: (newBudget: number) => void;
}

const textStyle: CSSProperties = { textAlign: 'center', color: 'black' };

const getCurrentSkill = (thisSkill: SkillData, allSkills: SkillData[]) => {
	return allSkills.find((skill) => skill.id === thisSkill.id)!;
}

const canLevelUp = (
	thisSkill: SkillData,
	allSkills: SkillData[],
	allSkillDetails: SkillDataDetails[],
	availableBudget: number
): boolean => {
	if (thisSkill && thisSkill.specialRule && !checkSpecialRules(thisSkill, allSkills)) return false;

	const nextSkillDetails = getNextSkillDataDetails(thisSkill, allSkillDetails);
	if (!nextSkillDetails || nextSkillDetails.cost > availableBudget) {
		return false; // Not enough budget or no next skill available
	}

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
			continue;
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

const LevelChangeModal: React.FC<LevelChangeModalProps> = ({
	skillName,
	onClose,
	onChange,
	skillData,
	availableBudget,
	setBudget
}) => {
	const { skills, skillsData } = useSkillContext();
	const [isLevelUpEnabled, setIsLevelUpEnabled] = useState(false);
	const [skillDetails, setSkillDetails] = useState<SkillDataDetails | undefined>(undefined);
	const [nextSkillDetails, nextSetSkillDetails] = useState<SkillDataDetails | undefined>(undefined);

	const modalRef = useRef<HTMLDivElement>(null); // Reference for the modal

	useEffect(() => {
		const currentSkill = getCurrentSkill(skillData, skills);
		setSkillDetails(getSkillDataDetails(currentSkill, skillsData));
		nextSetSkillDetails(getNextSkillDataDetails(currentSkill, skillsData));

		const enabled = canLevelUp(currentSkill, skills, skillsData, availableBudget);
		setIsLevelUpEnabled(enabled);
	}, [skills, skillData, skillsData, availableBudget]);

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

	const deductAndUpdate = (availableBudget: number, cost: number) => {
		setBudget(availableBudget - cost);
		onChange(1);
		return availableBudget - cost;
	}

	const handleLevelUp = () => {
		if (nextSkillDetails) {
			deductAndUpdate(availableBudget, nextSkillDetails.cost);
		}
	};

	const handleLevelUpMax = () => {
		const currentSkill = getCurrentSkill(skillData, skills);
		let currentLevel = currentSkill.currentLevel;
		const maxLevelCap = 100;
		let localBudget = availableBudget

		let levelUpCount = 0;

		while (canLevelUp({ ...currentSkill, currentLevel: currentLevel }, skills, skillsData, localBudget) && levelUpCount < maxLevelCap) {
			levelUpCount++;
			currentLevel++;
			const skillDetails = getSkillDataDetails({ ...currentSkill, currentLevel: currentLevel }, skillsData)
			if (skillDetails) {
				localBudget = deductAndUpdate(localBudget, skillDetails.cost);
			}
		}

		onChange(levelUpCount);
	};

	const handleLevelDown = () => {
		const currentSkill = getCurrentSkill(skillData, skills);
		if (currentSkill.currentLevel > 0) {
			const currentLevel = currentSkill.currentLevel;
			// Get the cost for the current level
			const skillDetails = getSkillDataDetails({ ...currentSkill, currentLevel }, skillsData);
			if (skillDetails) {
				// Refund the cost of leveling down
				setBudget(availableBudget + skillDetails.cost); // Refund previous level cost
			}
			onChange(-1); // Reduce level by 1
		}
	};

	const handleLevelDownMax = () => {
		const currentSkill = getCurrentSkill(skillData, skills);
		// Refund cost for all levels down to 0
		const currentLevel = currentSkill.currentLevel;
		let localBudget = availableBudget

		// Refund for each level down
		for (let level = currentLevel; level > 0; level--) {
			const skillDetails = getSkillDataDetails({ ...currentSkill, currentLevel: level }, skillsData);
			if (skillDetails) {
				setBudget(localBudget + skillDetails.cost);
				localBudget += skillDetails.cost;
			}
		}

		onChange(-currentLevel); // Set level to 0
	};

	if (!skillDetails) {
		return null; // Or a loading indicator
	}

	const currentSkill = getCurrentSkill(skillData, skills);
	const maxLevel = getMaxLevel(currentSkill.levelTiers);
	const totalValuePercentage = skillDetails.total_value * 100;
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
				{skillDetails.description} {totalValuePercentage}%
			</p>

			{nextSkillDetails ? (
				<>
					<p style={{...textStyle, color: availableBudget >= nextSkillDetails.cost ? 'green' : 'red'}}>Cost: {nextSkillDetails.cost}</p>
				</>
			) : (
				<>
					<p style={textStyle}>MAX LVL!</p>
				</>
			)}

			{isLevelUpEnabled ? (
				<>
					<div style={{ margin: '5px 0', display: 'flex', justifyContent: 'center' }}>
						<button onClick={handleLevelUp} style={{ margin: '0 5px' }}>Level Up</button>
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
					<button onClick={handleLevelDown} style={{ margin: '0 5px' }}>Level Down</button>
					<button onClick={handleLevelDownMax} style={{ margin: '0 5px' }}>Level Down Max</button>
				</div>
			)}
		</div>
	);
};

export default LevelChangeModal;
