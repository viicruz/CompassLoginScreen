import { View, TextInput, StyleSheet } from "react-native";
import UserIcon from "../../assets/icons/UserIcon";
import IconMail from "../../assets/icons/IconMail";
type Props = {
  icon: "User" | "Mail";
};
export default function InputField(props: Props) {
  return (
    <View style={styles.ViewContainer}>
      {props.icon === "User" && <UserIcon size={24} />}

      {props.icon === "Mail" && <IconMail size={24} />}
      <TextInput style={styles.inputContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  ViewContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    width: "100%",
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
    height: 55,
    color: "#A8A8A8",
    fontSize: 20,
  },
});
