import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import styles from "./styles";
import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons } from "@expo/vector-icons";

const InputBox = () => {

    const [message, setMessage] = useState("");

    const onMicrophonePress = () => {
        console.log("Record Audio");
    };

    const onSendMessage = () => {
        console.log("Message Sent");
        setMessage("");
    };

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendMessage();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color={Colors.greyColor} />
                <TextInput style={styles.textInput}
                    placeholder="Type a message"
                    multiline
                    numberOfLines={6}
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} color={Colors.greyColor} style={styles.icon} />
                {!message && <Fontisto name="camera" size={24} color={Colors.greyColor} style={styles.icon} />}
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {
                        message.length === 0
                        ? <MaterialCommunityIcons name="microphone" size={28} color={Colors.light.background} />
                        : <MaterialIcons name="send" size={25} color={Colors.light.background} />
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default InputBox;