import {
  Text,
  Pressable,
  ActivityIndicator,
} from "react-native";

import { styles } from "./styles";

import { PropsButton } from "../../types/types";

export default function Button(props: PropsButton) {
  return (
    <Pressable onPress={props.onPress} style={styles.buttonStyle}>
      {props.isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.textPropContainer}>{props.name}</Text>
      )}
    </Pressable>
  );
}
