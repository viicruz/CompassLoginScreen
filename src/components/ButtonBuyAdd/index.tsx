import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props = {
    label?: string
    disable?: boolean
    onPress?: () => void
}

export default function ButtonBuyAdd({ label = 'button', onPress, disable = false }: Props) {
    return (
        <TouchableOpacity
            style={[styles.container, disable && styles.disable]}
            onPress={onPress}
            disabled={disable}
        >
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}