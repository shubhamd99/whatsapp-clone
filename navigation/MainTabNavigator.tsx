// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Fontisto } from "@expo/vector-icons";

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
	const colorScheme = useColorScheme(); // Dark Mode and Light Mode

	return (
		<MainTab.Navigator
			initialRouteName="Chats"
			tabBarOptions={{
				activeTintColor: Colors[colorScheme].background,
				style: {
					backgroundColor: Colors[colorScheme].tint,
				},
				indicatorStyle: {
					backgroundColor: Colors[colorScheme].background,
					height: 5,
				},
				labelStyle: {
					fontWeight: "bold",
				},
				showIcon: true,
			}}>
			<MainTab.Screen
				name="Camera"
				component={TabOneNavigator}
				options={{
					tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={18} />,
					tabBarLabel: () => null, // No Label For Camera Tab,
				}}
			/>
			<MainTab.Screen
				name="Chats"
				component={TabTwoNavigator}
			/>
			<MainTab.Screen
				name="Status"
				component={TabTwoNavigator}
			/>
			<MainTab.Screen
				name="Calls"
				component={TabTwoNavigator}
			/>
		</MainTab.Navigator>
	);
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
	return (
		<TabOneStack.Navigator screenOptions={{ headerShown: false }}>
			<TabOneStack.Screen
				name="TabOneScreen"
				component={TabOneScreen}
				options={{ headerTitle: 'Tab One Title' }}
			/>
		</TabOneStack.Navigator>
	);
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
	return (
		<TabTwoStack.Navigator screenOptions={{ headerShown: false }}>
			<TabTwoStack.Screen
				name="TabTwoScreen"
				component={TabTwoScreen}
				options={{ headerTitle: 'Tab Two Title' }}
			/>
		</TabTwoStack.Navigator>
	);
}
