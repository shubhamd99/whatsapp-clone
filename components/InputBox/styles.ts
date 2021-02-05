import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 30,
        alignItems: "center",
    },
    mainContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: Colors.light.background,
        padding: 10,
        borderRadius: 25,
        marginRight: 10,
        alignItems: "center",
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10
    },
    icon: {
        paddingHorizontal: 5
    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;