import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Skill from './Skill';

const VanguardTab = () => {

	return (
		<TransformWrapper>
			<TransformComponent>
				<svg width="10000" height="10000" style={{ border: '1px solid white' }}>
					<Skill x={100} y={100} name="Skill 1" />
					<Skill x={300} y={200} name="Skill 2" />
					<Skill x={500} y={100} name="Skill 3" />
					{/* Add more Skills as needed */}
				</svg>
			</TransformComponent>
		</TransformWrapper>
	);
};

export default VanguardTab;
