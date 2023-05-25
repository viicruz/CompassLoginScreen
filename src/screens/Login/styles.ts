import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.background,
      flex: 1,
      alignItems: "center",
    },
    
    inputContainer: {
        width: '100%',
        paddingHorizontal: 20,
        height: 227,
        justifyContent:"space-between",
        marginTop: '30%',
    }
  });