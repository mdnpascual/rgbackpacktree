import React, { CSSProperties, useLayoutEffect, useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Skill, { SkillData } from './Skill';
import LevelChangeModal from './LevelChangeModal';
import { useSkillContext } from './SkillContext';

const styles: { overlay: CSSProperties } = {
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh',
		background: 'rgba(0, 0, 0, 0.5)',
		zIndex: 999
	},
};

const VanguardTab = () => {
	const svgWidth = 1400;
	const svgHeight = 1400;

	const { skills, setSkills } = useSkillContext();
	const [modalSkill, setModalSkill] = useState<SkillData | null>(null); // Skill to change level
	const [isModalOpen, setModalOpen] = useState(false);

	const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

	useLayoutEffect(() => {
		const updateDimensions = () => {
			setDimensions({ width: window.innerWidth, height: window.innerHeight });
		};
		updateDimensions();
	}, []);

	const handleLevelChange = (id: string, change: number) => {
		setSkills(
			skills.map(skill =>
				skill.id === id ? { ...skill, currentLevel: Math.max(0, skill.currentLevel + change) } : skill
			)
		);
	};

	const handleClick = (id: string) => {
		const skillToEdit = skills.find(skill => skill.id === id);
		console.log("wpt: ", skillToEdit)
		setModalSkill(skillToEdit || null);
		setModalOpen(true);
	};

	return (
		<TransformWrapper
			initialScale={0.5}
			minScale={0.25}
			limitToBounds={false}
			doubleClick={{disabled: true}}
		>
			{(setTransform) => {
				setTimeout(() => {
					const scaleWidth = dimensions.width * 0.65 / svgWidth;
					const scaleHeight = dimensions.height * 0.85 / svgHeight;
					setTransform.setTransform(0,0, Math.min(scaleWidth, scaleHeight))
				}, 400);

				return (
				<TransformComponent>
					<div>
						<svg width={svgWidth} height={svgHeight}>
							{skills.map(skill => (
								<Skill
									key={skill.id}
									x={skill.position.x}
									y={skill.position.y}
									r={skill.radius}
									name={skill.name}
									currentLevel={skill.currentLevel}
									levelTiers={skill.levelTiers}
									onOpenModal={handleClick}
									id={skill.id}
									color={skill.color}
								/>
							))}
						</svg>

						{isModalOpen && modalSkill && (
							<>
								<div style={styles.overlay} onClick={() => setModalOpen(false)} /> {/* Clicking on overlay closes modal */}
									<LevelChangeModal
										skillName={modalSkill.name}
										onClose={() => setModalOpen(false)}
										onChange={change => handleLevelChange(modalSkill.id, change)}
										skillData={modalSkill}
								/>
							</>
						)}
					</div>
				</TransformComponent>
			)}}
		</TransformWrapper>
	);
};

export default VanguardTab;
