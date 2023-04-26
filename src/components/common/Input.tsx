import { View, TextInput, Text, StyleSheet } from "react-native";
import IconMail from "../../assets/icons/IconMail";
import IconLock from "../../assets/icons/IconLock";
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
    <>
      <View
        style={[
          styles.ViewContainer,
          {
            borderColor: props.isWrong ? "red" : undefined,
          },
        ]}
      >
        {props.icon === "Lock" && <IconLock size={24} />}

        {props.icon === "Mail" && <IconMail size={24} />}

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
        <Text style={{ color: "red" }} children={props.wrongText} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  ViewContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
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
