import moment from "moment";
import React from "react";
import { View, Text, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom} = props;

    const user = chatRoom.users[1];
    // console.log(user.imageUri)
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text numberOfLines={2} ellipsizeMode={"tail"} style={styles.lastMessage}>
                        {chatRoom.lastMessage.content}
                    </Text>
                </View>
            </View>

            <Text style={styles.timestamp}>
                {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YY")}
            </Text>
        </View>
    );
};

export default ChatListItem;