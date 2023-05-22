import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    signUpScreen: {
      backgroundColor: "#2D2D2D",
      flex: 1,
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
  
    header: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 80,
      paddingBottom: 40,
    },
  
    signUpForm: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
  
    inputHolder: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 30,
    },
  
    textContainer: {
      fontSize: 40,
      color: "#D78F3C",
    },
    CheckBoxContainer: {
      width: "100%",
      paddingTop: 16,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: 8,
    },
  
    //remove layout shift
    checkboxWrapper: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection: "column",
      width: "100%",
      height: 100,
    },
  });