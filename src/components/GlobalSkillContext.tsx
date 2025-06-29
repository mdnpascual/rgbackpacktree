import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SkillData } from './Skill'; // Import your SkillData type
import { GuardianTree } from '../data/GuardianTree';
import { VanguardTree } from '../data/VanguardTree';
import { CannonTree } from '../data/CannonTree';

interface GlobalSkillContextProps {
	skills: Record<string, SkillData[]>;
	setSkills: (tab: string, skills: SkillData[]) => void;
	budget: number;
	setBudget: (newBudget: number) => void; // Add budget-related functions
}

const GlobalSkillContext = createContext<GlobalSkillContextProps | undefined>(undefined);

export const GlobalSkillProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [skills, setSkills] = useState<Record<string, SkillData[]>>(
		{
			"guardian": GuardianTree(0,0),
			"vanguard": VanguardTree(0,0),
			"cannon": CannonTree(0,0)
		}
	);
	const [budget, setBudget] = useState<number>(4_126_878); // Initial budget

	const updateSkills = (tab: string, newSkills: SkillData[]) => {
		setSkills((prevSkills) => ({
			...prevSkills,
			[tab]: newSkills,
		}));
	};

	return (
		<GlobalSkillContext.Provider value={{ skills, setSkills: updateSkills, budget, setBudget }}>
			{children}
		</GlobalSkillContext.Provider>
	);
};

export const useGlobalSkillContext = () => {
	const context = useContext(GlobalSkillContext);
	if (!context) {
		debugger;
		throw new Error("useGlobalSkillContext must be used within a GlobalSkillProvider");
	}
	return context;
};