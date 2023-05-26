import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: colors.background,

    },
    containerArea: {
        marginVertical: 150,
    },
    warning: {
        fontSize: 32,
        fontWeight: '600',
        color: colors.light,
    },
    text: {
        fontSize: 20,
        color: colors.light,
        textAlign: 'center',
    },
    buttonPlace: {
        position: "absolute",
        bottom: 35,
    }
})