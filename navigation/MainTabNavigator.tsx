// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
// import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Fontisto } from "@expo/vector-icons";

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatsScreen from '../screens/ChatsScreen';
import { MainTabParamList } from '../types';
import { View } from "react-native";

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
				component={TempComponent}
				options={{
					tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={18} />,
					tabBarLabel: () => null, // No Label For Camera Tab,
				}}
			/>
			<MainTab.Screen
				name="Chats"
				component={ChatsScreen}
			/>
			<MainTab.Screen
				name="Status"
				component={TempComponent}
			/>
			<MainTab.Screen
				name="Calls"
				component={TempComponent}
			/>
		</MainTab.Navigator>
	);
}

const TempComponent = () => <View></View>;

