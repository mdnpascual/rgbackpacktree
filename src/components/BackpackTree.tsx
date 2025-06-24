import React from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import GuardianTab from "./GuardianTab";
import VanguardTab from "./VanguardTab";
import CanonTab from "./CanonTab";

const BackpackTree = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box display="flex" height="100vh">
		{/* Left Section */}
		<Box flex={0.7} padding={2} overflow="hidden" display="flex" flexDirection="column">
			<Box marginX={2}>
				<Tabs value={value} onChange={handleChange} variant="fullWidth">
					<Tab label="Guardian" />
					<Tab label="Vanguard" />
					<Tab label="Canon" />
				</Tabs>
			</Box>
			<Box flexGrow={1} overflow="hidden" marginTop={2} height="calc(100vh - 64px)"> {/* Adjust height as needed */}
				{/* Render selected tab content based on the value */}
				{value === 0 && <GuardianTab />}
				{value === 1 && <VanguardTab />}
				{value === 2 && <CanonTab />}
			</Box>
		</Box>

		{/* Right Section */}
		<Box flex={0.3} overflow="hidden" padding={2}>
			<Typography variant="h6">Bonuses</Typography>
			<textarea
				readOnly
				value="This is an uneditable textbox, but it's copyable."
				style={{ width: "100%", height: "100px" }}
			/>
			<Typography>Total cost: 0</Typography>
			<Typography>Guardian: 0</Typography>
			<Typography>Vanguard: 0</Typography>
			<Typography>Canon: 0</Typography>
		</Box>
		</Box>
	);
};

export default BackpackTree;
