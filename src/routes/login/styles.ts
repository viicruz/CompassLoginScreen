import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
    backgroundColor: "#282729",
    height: 151,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 23,
    paddingRight: 25,
  },
  userNameContainer: {
    fontSize: 25,
    color: colors.primary,
  },
  WelcomeContainer: {
    fontSize: 20,
    color: "#A8A8A8",
  },

  IconCartContainer: {
    flexDirection: "row",
    paddingTop: 30,
  },
  underwrapContainer: {
    width: 87,
    height: 5,
    borderRadius: 8,
    backgroundColor: "white",
  },

  detailHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingRight: 25,
    backgroundColor: colors.background,
  },
});
export default styles;
