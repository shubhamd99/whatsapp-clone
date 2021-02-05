import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import Colors from "../../constants/Colors";
import styles from "./styles";

const NewMessageButton = () => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="message-reply-text" size={28} color={Colors.light.background} />
        </View>
    );
};

export default NewMessageButton;