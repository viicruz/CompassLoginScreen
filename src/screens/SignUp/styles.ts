import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

export const styles = StyleSheet.create({
    signUpScreen: {
      backgroundColor: colors.background,
      flex: 1,
      alignItems: "center",
    },
  
    signUpForm: {
      marginTop: '15%',
      width: "100%",
      height: 230,
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },

    areaTerms: {
      flexDirection: "row",
      gap: 5,      
    },
  
    inputHolder: {
      gap: 7,
    },

    CheckBoxContainer: {
      marginLeft: 5,
      paddingTop: 16,
      flexDirection: "row",
      gap: 8,
    },
    
    textTerms: {
      color: colors.light,
      textDecorationLine: "underline",
    },

    textError: {
      color: colors.warning,
      marginLeft: 16
    },
    
    //remove layout shift
    checkboxWrapper: {      
      marginBottom: 12,
      justifyContent: "center",
      flexDirection: "column",
      width: "100%",
    },
  });