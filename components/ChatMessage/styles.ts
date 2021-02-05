import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    messageBox: {
        alignSelf: "flex-end", // Take Text Width
        maxWidth: "70%",
        borderRadius: 5,
        padding: 10,
    },
    name: {
        color: Colors.light.tint,
        fontWeight: "bold",
        marginBottom: 5,
    },
    message: {
       
    },
    time: {
        alignSelf: "flex-end",
        color: Colors.greyColor,
        fontSize: 12
    },
});

export default styles;