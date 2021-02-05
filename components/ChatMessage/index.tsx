import moment from "moment";
import React from "react";
import { Text, View } from "react-native";
import { Message } from "../../types";
import styles from "./styles";
import Colors from "../../constants/Colors";

export type ChatMessageProps = {
    message: Message;
    userName: string;
}

const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props;

    const isMyMessage = message.user.id === "u1";

    return (
        <View style={styles.container}>
            <View style={[
                    styles.messageBox,
                    {
                        backgroundColor: isMyMessage ? Colors.lightGreenColor : Colors.light.background,
                        alignSelf: isMyMessage ? "flex-end" : "flex-start",
                        // marginLeft: isMyMessage ? 50 : 0,
                        // marginRight: isMyMessage ? 0 : 50,
                    }
                ]}>
                {!isMyMessage && <Text style={styles.name}>{props.userName}</Text>}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage;