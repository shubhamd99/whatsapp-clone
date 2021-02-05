import React from "react";
import { FlatList, ImageBackground, StyleSheet } from "react-native";

// import { useRoute } from "@react-navigation/native";
import ChatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
import InputBox from "../components/InputBox";
// Image
const BG = require("../assets/images/BG.png");

const ChatRoomScreen = () => {
	// const route = useRoute();
	// console.log("route", route.params);

	return (
		<ImageBackground  style={styles.backgroundImage} source={BG}>
			<FlatList
				data={ChatRoomData.messages}
				renderItem={({ item }) => <ChatMessage message={item} />}
				inverted // for reversing the array
			/>
			<InputBox />
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		width: "100%",
		height: "100%",
	}
});

export default ChatRoomScreen;