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
        alignSelf: 'center',
        bottom: 10,
        marginBottom: 20,
    },
    priceWrap: {
        width: "100%",
        marginLeft: 30,
    },
})