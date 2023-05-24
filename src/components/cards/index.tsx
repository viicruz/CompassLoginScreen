import { Image, Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";
import Delete from "./Delete";


export default function CardProd () {
    return (
        <View style={styles.cardBox}>
            <View>
                <Image source={require('../../../assets/produto.png')} style={styles.image}/>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.fonts} numberOfLines={2}>Headphone Razer Dragon, 20Dcbs, with bluetooth</Text>

                <View style={styles.priceBox}>
                    <Text style={styles.priceProd}>R$: 300,00 </Text>
                </View>

                
            </View>
            <Delete/>
        </View>
    );
}

