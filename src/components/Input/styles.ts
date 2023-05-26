import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

export const styles = StyleSheet.create({
    wrapper: {
      width: "100%",
      height: 72,
      marginBottom: 15,
    },
    viewContainer: {
      paddingHorizontal: 24,
      height: 55,
      width: "100%",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      backgroundColor: colors.input,
      borderRadius: 30,
    },
    inputContainer: {
      width: "100%",
      height: 40,
      color: "#A8A8A8",
      fontSize: 20,
    },
    warning: {
      color: colors.warning,
      marginLeft: 16,
      paddingVertical: 5,
    }
  });
  