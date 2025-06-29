import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, TextField } from "@mui/material";
import GuardianTab from "./GuardianTab";
import VanguardTab from "./VanguardTab";
import CannonTab from "./CannonTab";
import { useGlobalSkillContext } from "./GlobalSkillContext";
import { SkillDataDetails, SkillProvider } from "./SkillContext";
import skillsData from '../data/SkillDetails.json';
import { SkillData } from "./Skill";

type TabKeys = 'guardian' | 'vanguard' | 'cannon';

const BackpackTree = () => {
	const [value, setValue] = React.useState(0);
	const { skills, setSkills: globalSetSkills, budget, setBudget } = useGlobalSkillContext(); // Access global updater

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const handleVanguardSkillsUpdate = (newSkills: SkillData[]) => {
		globalSetSkills('vanguard', newSkills);
	};

	const handleGuardianSkillsUpdate = (newSkills: SkillData[]) => {
		globalSetSkills('guardian', newSkills);
	};

	const handleCannonSkillsUpdate = (newSkills: SkillData[]) => {
		globalSetSkills('cannon', newSkills);
	};

	return (
		<Box display="flex" height="100vh">
			{/* Left Section */}
			<Box flex={0.7} padding={2} overflow="hidden" display="flex" flexDirection="column">
				<Box marginX={2}>
					<Tabs value={value} onChange={handleChange} variant="fullWidth">
						<Tab label="Guardian" />
						<Tab label="Vanguard" />
						<Tab label="Cannon" />
					</Tabs>
				</Box>
				<Box flexGrow={1} overflow="hidden" marginTop={2} height="calc(100vh - 64px)">
					{/* Render selected tab content based on the value */}
					{value === 0 && (
						<SkillProvider initialSkills={skills["guardian"]} globalSkillsUpdater={handleGuardianSkillsUpdate}>
							<GuardianTab />
						</SkillProvider>
					)}
					{value === 1 && (
						<SkillProvider initialSkills={skills["vanguard"]} globalSkillsUpdater={handleVanguardSkillsUpdate}>
							<VanguardTab />
						</SkillProvider>
					)}
					{value === 2 && (
						<SkillProvider initialSkills={skills["cannon"]} globalSkillsUpdater={handleCannonSkillsUpdate}>
							<CannonTab />
						</SkillProvider>
					)}
				</Box>
			</Box>

			{/* Right Section */}
			<Box flex={0.3} overflow="hidden" padding={2}>
				<Box>
					<TextField
						label="Budget"
						type="number"
						value={budget}
						onChange={(e) => setBudget(Number(e.target.value))}
						variant="outlined"
						fullWidth
						margin="normal"
					/>
					</Box>
				<RightSide /> {/* Call the new component for the right section */}
			</Box>
		</Box>
	);
};

const RightSide = () => {
	const { skills } = useGlobalSkillContext();
	const [loadedSkillsData] = useState<SkillDataDetails[]>(skillsData); // Load skillsData once

	const totalCosts = {
		total: 0,
		guardian: 0,
		vanguard: 0,
		cannon: 0,
	};

	// You can calculate costs for each tab based on the collected skills here.
	Object.entries(skills).forEach(([tab, tabSkills]) => {
		tabSkills.forEach(skill => {
			const skillCost = getCostsFromLevel(skill, loadedSkillsData); // Assuming 'cost' is accessible as skill.cost
			if (tab in totalCosts) { // Check if tab is a valid key
				totalCosts[tab as TabKeys] += skillCost; // Accumulate costs per tab, using type assertion
				totalCosts.total += skillCost; // Total costs
			}
		});
	});

	const bonuses = getAllBonuses(skills, loadedSkillsData);
	return (
		<>
			<Typography>Total cost: {totalCosts.total}</Typography>
			<Typography>Guardian: {totalCosts.guardian}</Typography>
			<Typography>Vanguard: {totalCosts.vanguard}</Typography>
			<Typography>Canon: {totalCosts.cannon}</Typography>
			<div style={{ width: "100%" }}>
				<table style={{ width: "100%", borderCollapse: "collapse" }}>
					<thead>
						<tr>
							<th style={{ border: '1px solid black', padding: '8px' }}>Effect</th>
							<th style={{ border: '1px solid black', padding: '8px' }}>Bonus</th>
						</tr>
					</thead>
					<tbody>
						{bonuses.split("\n").filter(Boolean).map((line, index) => {
							const [name, value] = line.split(": ");
							return (
								<tr key={index}>
									<td style={{ border: '1px solid black', padding: '8px' }}>{name}</td>
									<td style={{ border: '1px solid black', padding: '8px' }}>
										{value ? `${new Intl.NumberFormat().format(parseFloat(value.replace('%', '')))}%` : "0%"}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

const getAllBonuses = (skills: Record<string, SkillData[]>, skillsData: SkillDataDetails[]) => {
	const bonusMap = new Map<string, number>();

	Object.entries(skills).forEach(([tab, tabSkills]) => {
		tabSkills.forEach(skill => {
			const skillDetails = getSkillDataDetails(skill, skillsData);
			if (skillDetails && skillDetails.total_value > 0) {
				const currentTotal = bonusMap.get(skillDetails.name) || 0;
				bonusMap.set(skillDetails.name, currentTotal + skillDetails.total_value * 100);
			}
		});
	});

	const sortedBonuses = Array.from(bonusMap.entries()).sort((a, b) => b[1] - a[1]);

	// Construct the result string
	let result = "";
	sortedBonuses.forEach(([name, totalValue]) => {
		result += `${name}: ${totalValue}%\n`;
	});

	return result;
}

const getCostsFromLevel = (thisSkill: SkillData, skillsData: SkillDataDetails[]) => {
	const currLevel = thisSkill.currentLevel;
	let totalCosts = 0;
	for(let i = currLevel; i > 0; i--){
		totalCosts += getSkillDataDetails({...thisSkill, currentLevel: i}, skillsData)?.cost ?? 0;
	}
	return totalCosts;
}

export const getSkillDataDetails = (thisSkill: SkillData, skillsData: SkillDataDetails[]) => {
	return skillsData.find(skill => skill.id.includes(thisSkill.id) && skill.level === thisSkill.currentLevel);
}

export const getNextSkillDataDetails = (thisSkill: SkillData, skillsData: SkillDataDetails[]) => {
	return skillsData.find(skill => skill.id.includes(thisSkill.id) && skill.level === thisSkill.currentLevel + 1);
}

export default BackpackTree;
