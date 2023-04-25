import { Text,StyleSheet, Pressable, type GestureResponderEvent} from "react-native";
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

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: 55,
    backgroundColor: "#D78F3C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    
  },
  textPropContainer: {
    color:'#fff',
    
  }
});
