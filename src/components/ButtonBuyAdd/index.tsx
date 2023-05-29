import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { styles } from "./styles";

type Props = {
  label?: string;
  disable?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
};

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
        <ActivityIndicator color={"white"} />
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}
