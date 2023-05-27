import { Pressable, Text, StyleSheet, View } from "react-native";
import { styles } from "./styles";
import { IconMinus } from "../../../assets/icons";
import { colors } from "../../../constants/theme";
import { useContext } from "react";
import { ProductDataContext } from "../../../contexts/ProductProvider";

type deleteProp = {
  index: number;
};
export default function Excluir({ index }: deleteProp) {
  const { cartItemsIndex, removeCartItem } = useContext(ProductDataContext);
  const deleteHanler = () => {
    removeCartItem(index);
  };
  return (
    <Pressable onPress={deleteHanler}>
      <View style={styles.container}>
        <IconMinus size={20} color={colors.light} />
      </View>
    </Pressable>
  );
}
