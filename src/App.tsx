import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AppBar, Tabs, Tab, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BackpackTree from './components/BackpackTree';
import About from './components/About';

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router basename="/rgbackpacktree">
				<AppBar position="static">
					<Toolbar>
						<Tabs>
							<Tab label="Backpack Tree" href="/" />
							<Tab label="About" href="/about" />
						</Tabs>
					</Toolbar>
				</AppBar>
				<Routes>
					<Route path="/" element={<BackpackTree />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
