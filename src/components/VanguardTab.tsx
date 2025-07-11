import { useSkillContext } from './SkillContext';
import SkillTree from './SkillTree';

const VanguardTab = () => {
	const { skills } = useSkillContext();

	return (
		<SkillTree initialSkills={skills} />
	);
};
export default VanguardTab;
