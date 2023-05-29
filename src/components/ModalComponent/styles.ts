import React from 'react'
import { StyleSheet } from 'react-native';
import { fontsize, windowHeight, windowWidth } from '../../constants/theme';


export const styles = StyleSheet.create({
    modalContainer: {
        position: "absolute",
        width: windowWidth,
        minHeight: windowHeight,
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
    modalContent: {
        width: 270,
        height: 194,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
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
    closeButton: {
        alignSelf: "flex-end",
        width: '100%',
        height: '65%'
    },
    closeButtonText: {
        fontSize: fontsize.titleH2,
        fontWeight: '500',
        position: 'absolute',
        top: 20,
        right: 0,
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
});