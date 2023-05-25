import { StyleSheet} from "react-native";
import {colors} from "../../../constants/theme";

export const styles = StyleSheet.create({ 

   
container: {
    width: 45,
    heigh: 45,
    backgroundColor: colors.warning,
    borderRadius: 25,
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: -16
    
    
    
    
    },
      
    fonts: {
    
      fontSize: 30,
      color: colors.white,
      marginBottom: 8,
      transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
      
    }
      
      
      
});