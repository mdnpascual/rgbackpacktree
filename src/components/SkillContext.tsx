import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SkillData } from './Skill';
import skillsData from '../data/SkillDetails.json';

export interface SkillDataDetails {
	id: string[];
	name: string;
	description: string;
	total_value: number;
	value: number;
	level: number;
	cost: number;
}

interface SkillContextProps {
	skills: SkillData[];
	setSkills: (skills: SkillData[]) => void;
	skillsData: SkillDataDetails[];
}

const SkillContext = createContext<SkillContextProps | undefined>(undefined);

export const SkillProvider: React.FC<{
	initialSkills: SkillData[],
	globalSkillsUpdater: (skills: SkillData[]) => void, children: ReactNode
}> = ({ initialSkills, globalSkillsUpdater, children }) => {
	const [skills, setSkills] = useState<SkillData[]>(initialSkills);
	const [loadedSkillsData] = useState<SkillDataDetails[]>(skillsData);

	// Update the global skills whenever local skills change
	const handleSetSkills = (newSkills: SkillData[]) => {
		setSkills(newSkills);
		globalSkillsUpdater(newSkills); // Call the passed function to update global skills
	};

	return (
		<SkillContext.Provider value={{ skills, setSkills: handleSetSkills, skillsData: loadedSkillsData }}>
			{children}
		</SkillContext.Provider>
	);
};

export const useSkillContext = () => {
	const context = useContext(SkillContext);
	if (!context) {
		throw new Error("useSkillContext must be used within a SkillProvider");
	}
	return context;
};
