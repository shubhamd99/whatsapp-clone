import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton';

import chatRooms from "../data/ChatRooms";

export default function ChatsScreen() {
	return (
		<View style={styles.container}>
			<FlatList
				style={styles.listContainer}
				data={chatRooms}
				renderItem={({ item }) => <ChatListItem chatRoom={item} />}
				keyExtractor={(item) => item.id}
			/>
			<NewMessageButton />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	listContainer: {
		width: "100%",
	}
});
