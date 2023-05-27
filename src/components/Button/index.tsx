import {
  Text,
  Pressable,
  type GestureResponderEvent,
  ActivityIndicator,
} from "react-native";

import { styles } from "./styles";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  name: string;
  isLoading: boolean;
};

export default function Button(props: Props) {
  return (
    <Pressable onPress={props.onPress} style={styles.buttonStyle}>
      {props.isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.textPropContainer}>{props.name}</Text>
      )}
    </Pressable>
  );
}
