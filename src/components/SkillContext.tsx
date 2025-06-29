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

// Combine state management into a single provider
export const SkillProvider: React.FC<{ initialSkills: SkillData[], children: ReactNode }> = ({ initialSkills, children }) => {
	const [skills, setSkills] = useState<SkillData[]>(initialSkills); // Initialize with the desired skill data
	const [loadedSkillsData] = useState<SkillDataDetails[]>(skillsData); // Load skillsData once

	return (
		<SkillContext.Provider value={{ skills, setSkills, skillsData: loadedSkillsData }}>
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
