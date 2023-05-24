import { StyleSheet } from "react-native";
import { colors, fontsize } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: 270,
        height: 194,
        backgroundColor: colors.light,
        padding: 10,
        borderRadius: 5,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalView: {
        width: 326,
        height: 194,
        margin: 20,
        backgroundColor: colors.light,
        borderRadius: 5,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    modalTitle: {
        fontSize: fontsize.titleH2,
        fontWeight: '500',
    },

    modalText: {
        marginTop: 15,
        fontSize: fontsize.text,
    },

    textOk: {
        fontSize: fontsize.titleH2,
        fontWeight: '500',
        position: 'absolute',
        top: 60,
        right: 0,
        paddingVertical: 30,
        paddingHorizontal: 20,
    },

    buttonClose: {
        left: 200,
        bottom: 0,
    },


    // Para testar mostrar o modal - depois pode apagar
    openModal: {
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 20,
        padding: 10,
    },
    buttonOpen: {
        backgroundColor: 'red',
        position: "absolute",
        left: '50%',
        width: '50%',
        padding: 35,
        borderRadius: 5,
        bottom: 550
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})



