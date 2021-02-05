import React from "react";
import { Text, View } from "react-native";

import { useRoute } from "@react-navigation/native"

const ChatRoomScreen = () => {
    const route = useRoute();

    // console.log("route", route.params);

    return (
        <View></View>
    );
}

export default ChatRoomScreen;