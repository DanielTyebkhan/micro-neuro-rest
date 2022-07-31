import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SettingsProvider, useSettings } from './src/Context/SettingsProvider';
import { HomePage, HomePageName } from './src/Screens/HomePage';
import { AlertnessPage, AlertnessPageName } from './src/Screens/AltertnessPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
	return (
		<SettingsProvider>
			<MainComponent />
		</SettingsProvider>
	);
}


const Stack = createNativeStackNavigator();

const MainComponent = () => {
	const {
		theme
	} = useSettings();

	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{headerShown: false}}>
					<Stack.Screen name={HomePageName} component={HomePage} />
					<Stack.Screen name={AlertnessPageName} component={AlertnessPage} />
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	);
};
