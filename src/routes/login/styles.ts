import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
    backgroundColor: colors.background,
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
    color: colors.inputPlaceholder,
  },

  IconCartContainer: {
    flexDirection: "row",
    paddingTop: 30,
  },
  underWrapContainer: {
    width: 87,
    height: 5,
    borderRadius: 8,
    backgroundColor: "white",
  },
  wrap: {
    position: "relative",
  },
  cart: {
    position: "absolute",
    right: -20,
    top: -20,
    zIndex: 10,
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
