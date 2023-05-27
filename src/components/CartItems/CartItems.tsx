import React, { useContext, useEffect, useState } from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";

import { ProductDataContext } from "../../contexts/ProductProvider";
import { ProductType, productPropType } from "../../types/types";
import CartItem from "./CartItem";
import Line from "../Line";
import { getAmout, getCartItems } from "../../util/util";

function CartItems() {
  const { cartItemsIndex, apiData, updateAmount } =
    useContext(ProductDataContext);
  const [carts, setCarts] = useState<ProductType[]>([]);

  useEffect(() => {
    const filtered = getCartItems(cartItemsIndex, apiData);
    console.log("something has change");
    setCarts(filtered);
    const total = getAmout(cartItemsIndex, apiData);
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
    <View>
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
