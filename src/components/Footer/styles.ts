import { StyleSheet, } from "react-native";
import { colors } from "../../constants/theme";


export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 74,
    position: "absolute",
    bottom: 0,
    left: 0,
    borderTopWidth: 1,
    borderTopColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    color: colors.light,
  },
  buttonContainer: {
    fontWeight: "bold",
  },
});
