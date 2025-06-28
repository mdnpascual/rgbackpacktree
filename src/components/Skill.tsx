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
	onOpenModal: (id: string) => void; // Function to change level
	id: string; // Skill ID
	color: string;
}

const Skill: React.FC<SkillProps> = ({
	x, y, r,
	name,
	currentLevel,
	levelTiers,
	onOpenModal,
	id,
	color
}) => {
	const { skills } = useSkillContext();

	const handleClick = (event: React.MouseEvent<SVGCircleElement>) => {
		event.stopPropagation();
		// Call the onLevelChange here
		onOpenModal(id);
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
