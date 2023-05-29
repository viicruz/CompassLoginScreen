import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";
const style = StyleSheet.create({
  container: {
    marginTop: 70,
    marginBottom: 150,
  },

  totalText: {
    color: colors.light,
    fontSize: 20,
    fontWeight: "bold",
  },

  account: {
    color: colors.primary,
    fontSize: 32,
    fontWeight: "500",
  },
});
export default style;
