import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  TouchablesContainer: {
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingHorizontal: 50,
  },
  leftContainer: {
    alignItems: "flex-start",
    paddingLeft: 41,
  },
  rightContainer: {
    alignItems: "flex-end",
    paddingRight: 41,
  },
});

export default styles;
