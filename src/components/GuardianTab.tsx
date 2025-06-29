import SkillTree from './SkillTree';
import { useSkillContext } from './SkillContext';

const GuardianTab = () => {
	const { skills } = useSkillContext();

	return (
		<SkillTree initialSkills={skills} />
	);
};

export default GuardianTab;