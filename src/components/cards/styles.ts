import { StyleSheet} from "react-native";
import {fontsize, colors} from "../../../constants/theme";

export const styles = StyleSheet.create({ 

    cardBox: {
        flexDirection: 'row',
        alignItems: 'center',
        display: "flex",
        width: '368px',
        height: '139px',
        borderRadius: 25,
        padding: 12,
        backgroundColor: colors.cardProduct,
        marginTop: 20
        
        },
    
        detailsContainer: {
    
        flex: 1,
        marginLeft: 20,
        },
    
        priceBox : {
        
        width: '140px',
        height: '43px',
        backgroundColor: colors.background,
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    
        },
    
    
        image: {
         width: '109px',
         height: '124px',
    
        },
    
        fonts: {
    
        fontSize: fontsize.textCart,
        color: '#F5F5F5',
        flexWrap: 'wrap',
        marginBottom: 10,
        
        
        },
    
        priceProd: {
        color: colors.primary,
        fontSize: 19,
        fontWeight: '600',
        
        }
        
});