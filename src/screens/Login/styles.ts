import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.background,
      flex: 1,
      alignItems: "center",
      justifyContent: 'center'
    },
    
    inputContainer: {
        width: '100%',
        paddingHorizontal: 25,
        height: 227,
        justifyContent:"space-between",
        marginTop: '30%',
    }
  });