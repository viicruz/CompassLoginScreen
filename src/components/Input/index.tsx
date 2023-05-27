import { View, TextInput, Text } from "react-native";

import { IconMail, IconLock, IconUser } from "../../assets/icons";
import { styles } from "./styles";
import { colors } from "../../constants/theme";
import { PropsInput } from "../../types/types";

export default function InputField(props: PropsInput) {
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

