import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
    backgroundColor: "red",
    height: 114,
    flexDirection:"row",
  },
  userNameContainer: {
    fontSize:25,
    color: colors.primary,

  },
  WelcomeContainer: {
    fontSize:20,
    color: "#A8A8A8",
  },

  IconCartContainer: {
    flexDirection:"row",
    
    justifyContent: "flex-end",
  },
});
export default styles;
