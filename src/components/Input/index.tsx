import { View, TextInput, Text } from "react-native";

import { IconMail, IconLock, IconUser } from "../../assets/icons";
import { styles } from "./styles";
import { colors } from "../../constants/theme";

type Props = {
  icon: "User" | "Mail" | "Lock";
  secureTextEntry?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
  isWrong: boolean;
  wrongText: string | null;
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
        {props.icon === "Lock" && <IconLock size={19} />}

        {props.icon === "Mail" && <IconMail size={24} />}

        {props.icon === "User" && <IconUser size={22} />}

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
        <Text style={styles.warning} children={props.wrongText} />
      )}
    </View>
  );
}

