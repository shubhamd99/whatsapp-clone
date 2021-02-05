import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom} = props;

    const navigation = useNavigation();

    const user = chatRoom.users[1];
    // console.log(user.imageUri)

    const onClick = () => {
        navigation.navigate("ChatRoom", { id: chatRoom.id, name: user.name, imageUri: user.imageUri });
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
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
        </TouchableWithoutFeedback>
    );
};

export default ChatListItem;