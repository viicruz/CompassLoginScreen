import React, { useState } from "react";
import { View, Text, Modal, Alert, TouchableOpacity } from "react-native";
import { styles } from "./styles";


type Props = {
    title: string
    text: string
}

export default function ModalConfirm({ title, text }: Props) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>{title}</Text>
                        <Text style={styles.modalText}>{text}</Text>
                        <TouchableOpacity
                            style={[styles.buttonClose, styles.textOk]}
                            onPress={() => {
                                setModalVisible(!modalVisible)
                            }}>
                            <Text style={styles.textOk}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            
        {/* Para testar mostrar o modal - depois pode apagar */}
            <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.openModal}>Show Modal</Text>
            </TouchableOpacity>
        </View>

    )
}