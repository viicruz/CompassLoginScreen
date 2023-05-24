import { View, Text } from 'react-native';
import { styles } from './styles';
import ButtonBuyAdd from '../../components/ButtonBuyAdd';
export default function ShoppingCart() {
   return (
      <View style={styles.container}>
         <View style={styles.containerArea}>
            <Text style={styles.warning}>Ops, Empty Cart :( </Text>
            <Text style={styles.text}>Add a product </Text>
         </View>
         <View style={styles.buttonPlace}>
            <ButtonBuyAdd label='buy' onPress={() => { }} />
         </View>
      </View>
   )
}