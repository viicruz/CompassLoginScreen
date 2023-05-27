import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { Props } from "../../types/types";

export default function ButtonBuyAdd({
  label = "button",
  onPress,
  disable = false,
  isLoading = false,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, disable && styles.disable]}
      onPress={onPress}
      disabled={disable}
    >
      {isLoading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}
