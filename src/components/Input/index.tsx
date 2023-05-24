import { View, TextInput, Text } from "react-native";
import IconMail from "../../assets/icons/IconMail";
import IconLock from "../../assets/icons/IconLock";
import UserIcon from "../../assets/icons/UserIcon";

import { styles } from "./styles";
import { colors } from "../../constants/theme";

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
            borderColor: props.isWrong ? colors.warning : undefined,
          },
        ]}
      >
        {props.icon === "Lock" && <IconLock size={24} />}

        {props.icon === "Mail" && <IconMail size={24} />}

        {props.icon === "User" && <UserIcon size={24} />}

        <TextInput
          placeholderTextColor={colors.inputPlaceholder}
          placeholder={props.placeholder}
          style={styles.inputContainer}
          secureTextEntry={props.secureTextEntry}
          onChangeText={(e) => {
            props.onChange(e);
          }}
        />
      </View>
      {props.isWrong && (
        <Text style={{ color: colors.warning, marginLeft: 16 }} children={props.wrongText} />
      )}
    </View>
  );
}

