import { Text,StyleSheet, Pressable, type GestureResponderEvent} from "react-native";

import { styles } from "./styles";

type Props = {
  onPress: (event: GestureResponderEvent) => void
  name : string
};

export default function Button(props:Props) {
  return (
    <Pressable onPress={props.onPress} style={styles.buttonStyle}>
      <Text style={styles.textPropContainer}>{props.name}</Text>
    </Pressable>
  );
}