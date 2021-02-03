import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<RootNavigator />
		</NavigationContainer>
	);
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{
			headerStyle: {
				backgroundColor: Colors.light.tint,
			},
			headerTintColor: Colors.light.background,
			headerTitleAlign: "left",
			headerTitleStyle: {
				fontWeight: "bold",
			}
		}}>
			<Stack.Screen name="Root" component={MainTabNavigator}
				options={{
					title: "Whatsapp",
					headerRight: () => (
						<View style={styles.container}>
							<Octicons name="search" size={22} color={Colors.light.background} />
							<MaterialCommunityIcons name="dots-vertical" size={22} color={Colors.light.background} />
						</View>
					)
				}}
			/>
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		width: 60,
		justifyContent: "space-between",
		marginRight: 10,
	}
});
