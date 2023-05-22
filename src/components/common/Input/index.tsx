import { View, TextInput, Text } from "react-native";
import IconMail from "../../../assets/icons/IconMail";
import IconLock from "../../../assets/icons/IconLock";
import UserIcon from "../../../assets/icons/UserIcon";

import { styles } from "./styles";

type Props = {
  icon: "User" | "Mail" | "Lock";
  secureTextEntry?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
  isWrong: boolean;
  wrongText: string;
};
export default function InputField(props: Props) {
  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.viewContainer,
          {
            borderColor: props.isWrong ? "#FF4B4B" : undefined,
          },
        ]}
      >
        {props.icon === "Lock" && <IconLock size={24} />}

        {props.icon === "Mail" && <IconMail size={24} />}

        {props.icon === "User" && <UserIcon size={24} />}

        <TextInput
          placeholderTextColor="#A8A8A8"
          placeholder={props.placeholder}
          style={styles.inputContainer}
          secureTextEntry={props.secureTextEntry}
          onChangeText={(e) => {
            props.onChange(e);
          }}
        />
      </View>
      {props.isWrong && (
        <Text style={{ color: "#FF4B4B", marginLeft:16 }} children={props.wrongText} />
      )}
    </View>
  );
}

