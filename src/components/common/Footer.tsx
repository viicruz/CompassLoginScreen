import { View, Text, StyleSheet,} from "react-native";
import { useState } from "react";

type Props = {
  buttonName: string;
};

export default function Footer(props: Props) {
  const [wasClicked, setWasClicked] = useState<boolean>(false);
 
  
  return (
    <View style={styles.Container}>
      <Text style={styles.textContainer}>
        {" Don't have an account? "}
        <Text
          onPress={() => {
            setWasClicked(true);
          }}
          style={[
            styles.buttonContainer,
            {
              color: wasClicked ? "#2f75ed" : "#D78F3C",
            },
          ]}
          onPressOut={() => {
            setWasClicked(false);
          }}
        >
          {props.buttonName}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: 72,
    position:"absolute",
    bottom:36,
    left: 0,
    borderTopWidth: 1,
    borderTopColor: "#D78F3C",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    color: "#fff",
  },
  buttonContainer: {
    fontWeight: "600",
  },
});
