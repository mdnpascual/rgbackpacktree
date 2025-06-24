// Skill.tsx
import React from 'react';

interface SkillProps {
	x: number;
	y: number;
	name: string;
}

const Skill: React.FC<SkillProps> = ({ x, y, name }) => {
	const handleClick = (event: React.MouseEvent<SVGCircleElement>) => {
		event.stopPropagation(); // Prevent the click from bubbling up to the pan tool
		console.log(`Skill clicked at: x=${x}, y=${y}`);
	};

	return (
		<circle
			cx={x}
			cy={y}
			r="100"
			fill="#0ff"
			stroke="#0ff"
			onClick={handleClick}
			style={{ pointerEvents: 'visible' }} // Ensure skill is clickable
		/>
	);
};

export default Skill;
