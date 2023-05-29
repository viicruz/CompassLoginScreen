import React, { useContext, useEffect, useState } from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";

import { ProductDataContext } from "../../contexts/ProductProvider";
import { ProductType, productPropType } from "../../types/types";
import CartItem from "./CartItem";
import Line from "../Line";
import { getAmount, getCartItems } from "../../util/util";

import { styles } from "./styles";


function CartItems() {
  const { cartItemsIndex, apiData, updateAmount } =
    useContext(ProductDataContext);
  const [carts, setCarts] = useState<ProductType[]>([]);

  useEffect(() => {
    const filtered = getCartItems(cartItemsIndex, apiData);
    setCarts(filtered);
    const total = getAmount(cartItemsIndex, apiData);
    updateAmount(total);
  }, [cartItemsIndex]);

  const renderItem = ({ item, index }: ListRenderItemInfo<productPropType>) => {
    return (
      <>
        <CartItem
          price={item.price}
          image={item.image}
          title={item.title}
          id={index}
          favorited={item.favorited}
        />
        <Line />
      </>
    );
  };

  return (
    <View style={styles.containerCartItems}>
      <FlatList
        data={carts}
        keyExtractor={(item, index) =>
          `${item.id + Math.random() + item.title}`
        }
        renderItem={renderItem}
      ></FlatList>
    </View>
  );
}

export default CartItems;
