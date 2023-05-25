import { StyleSheet} from "react-native";
import {fontsize, colors} from "../../constants/theme";

export const styles = StyleSheet.create({ 

    cardBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 368,
        height: 139,
        borderRadius: 25,
        padding: 12,
        backgroundColor: colors.cardProduct,
        marginTop: 20,
        marginBottom: 20,
        alignSelf: "center",
        
        },
    
        detailsContainer: {
    
        flex: 1,
        marginLeft: 20,

        },
    
        priceBox : {
        
        width: 140, 
        height: 43,
        backgroundColor: colors.background,
        marginTop: 10,
        padding: 8,
        alignItems: 'center',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    
        },
    
    
        image: {

         width: 100,
         height: 130,
    
    
        },
    
        fonts: {
    
        fontSize: fontsize.textCart,
        color: colors.background,
        flexWrap: 'wrap',
        marginBottom: 10,
        fontWeight: "bold",
        
        
        },
    
        priceProd: {
        color: colors.primary,
        fontSize: 19,
        fontWeight: '600',
        
        },

        line: {

        borderTopColor: colors.input,
        borderTopWidth: 1,
        width: 367,
        alignSelf: 'center',
        paddingBottom: 5, 

        }
        
});