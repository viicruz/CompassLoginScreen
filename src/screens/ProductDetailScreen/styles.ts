import { StyleSheet } from "react-native";
import { colors, windowWidth } from "../../constants/theme";


export const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      padding: 20,
    },
    contentContainer: {
      marginTop: 50,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 733,
      backgroundColor: colors.cardProduct,
      padding: 20,
    },
    headerCard: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textHeaderCard: {
      fontWeight: 'bold',
      width: windowWidth * 0.5,
      fontSize: 16,
    },
    image: {
      width: 218,
      height: 249,
    },
    starArea: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
    },
    containerPrice: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
    },
  
    price: {
      backgroundColor: colors.background,
      color: colors.primary,
      borderRadius: 15,
      fontWeight: 'bold',
      fontSize: 20,
      paddingVertical: 10,
      paddingHorizontal: 25,
    },
    areaQuantity: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    circle: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 45,
      height: 45,
      borderRadius: 50,
      backgroundColor: colors.background,
    },
    innerCircle: {
      fontSize: 48,
      color: colors.primary,
      paddingHorizontal: 10
    },
    description: {},
  });