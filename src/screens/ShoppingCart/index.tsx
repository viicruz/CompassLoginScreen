import { View, Text } from "react-native";
import ButtonBuyAdd from "../../components/ButtonBuyAdd";
import { useContext, useEffect } from "react";
import { ProductDataContext } from "../../contexts/ProductProvider";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import CartItems from "../../components/CartItems/CartItems";
export default function ShoppingCart() {
  const { cartItemsIndex } = useContext(ProductDataContext);

  if (!cartItemsIndex.length) {
    return <EmptyCart />;
  }
  return (
    <View>
      <CartItems />
    </View>
  );
}
