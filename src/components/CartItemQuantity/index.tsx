import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import style from "./styles";
import { ProductDataContext } from "../../contexts/ProductProvider";

function CartItemQuantity() {
  const { cartItemsIndex } = useContext(ProductDataContext);
  const [lenght, setLenght] = useState<number>(0);

  useEffect(() => {
    setLenght(cartItemsIndex.length);
  }, [cartItemsIndex]);

  return (
    <View style={style.container}>
      <Text style={style.text}>{lenght}</Text>
    </View>
  );
}

export default CartItemQuantity;
