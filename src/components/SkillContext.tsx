import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SkillData } from './Skill';

interface SkillContextProps {
	skills: SkillData[];
	setSkills: (skills: SkillData[]) => void;
}

const SkillContext = createContext<SkillContextProps | undefined>(undefined);

export const SkillProvider: React.FC<{ initialSkills: SkillData[], children: ReactNode }> = ({ initialSkills, children }) => {
	const [skills, setSkills] = useState<SkillData[]>(initialSkills); // Initialize with the desired skill data

	return (
		<SkillContext.Provider value={{ skills, setSkills }}>
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