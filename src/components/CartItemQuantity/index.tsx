import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ProductDataContext } from "../../contexts/ProductProvider";
import style from "./styles";

function CartItemQuantity() {
  const { cartItemsIndex } = useContext(ProductDataContext);
  const [length, setLength] = useState<number>(0);

  useEffect(() => {
    setLength(cartItemsIndex.length);
  }, [cartItemsIndex]);

  return (
    <View style={style.container}>
      <Text style={style.text}>{length}</Text>
    </View>
  );
}

export default CartItemQuantity;
