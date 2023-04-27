import { View, TextInput, Text, StyleSheet } from "react-native";
import IconMail from "../../assets/icons/IconMail";
import IconLock from "../../assets/icons/IconLock";
import UserIcon from "../../assets/icons/UserIcon";
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

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 72,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  viewContainer: {
    paddingHorizontal: 24,
    height: 55,
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    alignItems: "center",
    backgroundColor: "#656262",
    overflow: "hidden",
    borderRadius: 30,
  },
  inputContainer: {
    width: "100%",
    height: 40,
    color: "#A8A8A8",
    fontSize: 20,
  },
});
