import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props = {
    label: string
}

export default function ButtonBuyAdd({label,}: Props) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}