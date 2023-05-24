import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: colors.tabBarNavigator,
    width: '100%',
    height: 71,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    flexDirection: "row",
  },
  textContainer: {
    color: colors.light,
  },
});


export default styles;
