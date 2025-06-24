import React from 'react';

interface LevelChangeModalProps {
	skillName: string;
	onClose: () => void;
	onChange: (change: number) => void;
}

const LevelChangeModal: React.FC<LevelChangeModalProps> = ({ skillName, onClose, onChange }) => {
	const handleChange = (change: number) => {
		onChange(change);
		onClose();
	};

	return (
		<div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#fff', padding: '20px', zIndex: 1000 }}>
			<h2>{`Change Level for ${skillName}`}</h2>
			<button onClick={() => handleChange(1)}>+1</button>
			<button onClick={() => handleChange(-1)}>-1</button>
			<button onClick={onClose}>Cancel</button>
		</div>
	);
};

export default LevelChangeModal;
