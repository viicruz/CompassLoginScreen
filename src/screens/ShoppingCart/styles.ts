import { StyleSheet } from "react-native";
import { colors, windowHeight } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.background, 
    },
    buttonPlace: {
        position: "absolute",
        bottom: 10,
    } 
})