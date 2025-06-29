import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, AppBar, Tabs, Tab, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';
import BackpackTree from './components/BackpackTree';
import About from './components/About';
import { GlobalSkillProvider } from './components/GlobalSkillContext';

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const tabNameToIndex: Record<number, string> = {
	0: '/',
	1: '/about',
};

const indexToTabName: Record<string, number> = {
	'/': 0,
	'/about': 1,
};

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router basename="/rgbackpacktree">
				<GlobalSkillProvider>
					<NavigationTabs />
					<Routes>
						<Route path="/" element={<BackpackTree />} />
						<Route path="/about" element={<About />} />
						<Route path="*" element={<Navigate to="/" />} /> {/* Redirects unknown routes to home */}
					</Routes>
				</GlobalSkillProvider>
			</Router>
		</ThemeProvider>
	);
};

const NavigationTabs = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const pathname = location.pathname;

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		navigate(tabNameToIndex[newValue]);
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<Tabs value={indexToTabName[pathname] ?? 0} onChange={handleTabChange}>
					<Tab label="Backpack Tree" />
					<Tab label="About" />
				</Tabs>
			</Toolbar>
		</AppBar>
	);
};

export default App;
