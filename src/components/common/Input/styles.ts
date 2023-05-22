import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
      width: "100%",
      height: 72,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    viewContainer: {
      paddingHorizontal: 24,
      height: 55,
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
  