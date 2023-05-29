import { StyleSheet } from "react-native";
import { windowWidth, colors } from "../../constants/theme";
export const styles = StyleSheet.create({
    line: {
        alignSelf: 'center',
        width: windowWidth * 0.8,
        borderTopWidth: 1,
        borderTopColor: colors.input,
        paddingBottom: 7,
    }
})