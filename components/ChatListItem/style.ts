import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 10,
    },
    leftContainer: {
        flexDirection: "row",
    },
    midContainer: {
        justifyContent: "space-around",
        paddingVertical: 2,
    },
    username: {
        fontWeight: "bold",
        fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
        color: Colors.greyColor,
    },
    timestamp: {
        fontSize: 14,
        color: Colors.greyColor,
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 15,
        borderRadius: 50,
    }
});

export default styles;