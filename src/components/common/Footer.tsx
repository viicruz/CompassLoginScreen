import { View, Text, StyleSheet,} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useKeyboardVisible from "../../Hooks/useKeyboardVisible";

type Props = {
  buttonName: string;
  goTo: string;
  textName: string;

};

export default function Footer(props: Props) {
  const [wasClicked, setWasClicked] = useState<boolean>(false);
  const navigation = useNavigation();
  const isKeyboardVisible = useKeyboardVisible();

  
  return (
    <View style={[styles.Container, {
      display: isKeyboardVisible ? 'none' : 'flex'
    }]} >
      <Text style={styles.textContainer}>
      {props.textName}
        <Text
          onPress={() => {
            setWasClicked(true);
            navigation.navigate(props.goTo as never);
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
    flexDirection: "row",
  },
  textContainer: {
    color: "#fff",
  },
  buttonContainer: {
    fontWeight: "600",
  },
});
