import { StyleSheet } from "react-native";
import { fontsize, colors, windowWidth } from "../../constants/theme";

export const styles = StyleSheet.create({

    cardBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth * 0.8,
        height: 139,
        borderRadius: 20,
        padding: 12,
        backgroundColor: colors.cardProduct,
        margin: 20,
        alignSelf: "center",
    },

    detailsContainer: {
        justifyContent: 'space-between',
        flex: 2,
        marginHorizontal: 15,
    },

    priceBox: {
        width: 140,
        height: 43,
        backgroundColor: colors.background,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },


    image: {
        width: 100,
        height: 130,
    },

    fonts: {
        fontSize: fontsize.textCart,
        color: colors.background,
        flexWrap: 'wrap',
        marginBottom: 10,
        fontWeight: "bold",
    },

    priceProd: {
        color: colors.primary,
        fontSize: 19,
        fontWeight: '600',
    },

    line: {
        borderTopColor: colors.input,
        borderTopWidth: 1,
        width: 367,
        alignSelf: 'center',
        paddingBottom: 5,
    },
    containerCartItems: {
        flex: 1,
    }
});