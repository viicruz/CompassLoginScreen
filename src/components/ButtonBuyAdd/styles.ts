import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.buyAdd,
        width: 260,
        height: 56,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    label: {
        textTransform: 'uppercase',
        fontWeight: '500',
        color: colors.light,
    }
})