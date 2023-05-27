import { Text, View } from "react-native";

import { styles } from "./styles";
import { Props } from "../../types/types";

export default function Title({title}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}