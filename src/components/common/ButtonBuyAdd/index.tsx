import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props = {
    label: string
    onPress: () => void
}

export default function ButtonBuyAdd({label, onPress}: Props) {
    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={onPress}
        >
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}