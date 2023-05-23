import { View, Text } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useKeyboardVisible from "../../../Hooks/useKeyboardVisible";

import { styles } from "./styles";

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