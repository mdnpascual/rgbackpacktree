import { useSkillContext } from './SkillContext';
import SkillTree from './SkillTree';

const CannonTab = () => {
	const { skills } = useSkillContext();

	return (
		<SkillTree initialSkills={skills} />
	);
};

export default CannonTab;
