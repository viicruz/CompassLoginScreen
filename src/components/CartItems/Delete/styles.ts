import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        backgroundColor: colors.warning,
        padding: 12,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: "center",
        position: 'absolute',
        bottom: 40,
        right: -16
    },
});