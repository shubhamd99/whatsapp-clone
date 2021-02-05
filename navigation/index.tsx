import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View, StyleSheet, Image, Text } from 'react-native';
import Colors from '../constants/Colors';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ChatRoomScreen from '../screens/ChatRoom';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

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
				shadowOpacity: 0, // Fix white line for IOS
				elevation: 0, // Fix white line for Android
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
						<View style={styles.headerRightContainer}>
							<Octicons name="search" size={22} color={Colors.light.background} />
							<MaterialCommunityIcons name="dots-vertical" size={22} color={Colors.light.background} />
						</View>
					),
				}}
			/>
			<Stack.Screen
				name="ChatRoom"
				component={ChatRoomScreen}
				options={({ route, navigation }) => ({
					headerTitle: () => (
						<View></View>
					),
					headerLeft: () => (
						<View style={styles.headerLeftContainer}>
							<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
								<MaterialIcons name="arrow-back" size={22} color={Colors.light.background} />
							</TouchableWithoutFeedback>
							<Image source={{ uri: route.params.imageUri }} style={styles.avatar} />
							<Text style={styles.title}>{route.params.name}</Text>
						</View>
					),
					headerRight : () => (
						<View style={[styles.headerRightContainer, { width: 110 }]}>
							<FontAwesome5 name="video" size={20} color={Colors.light.background} />
							<MaterialIcons name="call" size={22} color={Colors.light.background} />
							<MaterialCommunityIcons name="dots-vertical" size={22} color={Colors.light.background} />
						</View>
					),
				})}
			/>
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	headerRightContainer: {
		flexDirection: "row",
		width: 60,
		justifyContent: "space-between",
		marginRight: 10,
	},
	headerLeftContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10,
		width: 100,
		justifyContent: "space-between",
	},
	avatar: {
        width: 32,
        height: 32,
        marginRight: 15,
		borderRadius: 50,
		backgroundColor: Colors.light.background,
	},
	title: {
		fontSize: 20,
		color: Colors.light.background,
	}
});
