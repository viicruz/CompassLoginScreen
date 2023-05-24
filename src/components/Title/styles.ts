import { StyleSheet } from "react-native";
import { colors, fontsize } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
    },
    
    title: {
        color: colors.primary,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: fontsize.titleH1
    }
});