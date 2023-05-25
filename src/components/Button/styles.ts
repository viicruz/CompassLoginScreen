import { StyleSheet} from "react-native";
import { colors, fontsize } from "../../constants/theme";

export const styles = StyleSheet.create({
    buttonStyle: {
      backgroundColor: colors.primary,
      borderRadius: 30,
      height: 55,
      justifyContent: "center",
      alignItems: "center",
    },
    
    textPropContainer: {
      textTransform: 'uppercase',
      fontSize: fontsize.textButton,
      color:colors.light,
    }
  });
  