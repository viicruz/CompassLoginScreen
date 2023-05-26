import React, { useContext, useEffect, useState } from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";

import { ProductDataContext } from "../../contexts/ProductProvider";
import { ProductType, productPropType } from "../../types/types";
import CartItem from "./CartItem";
import Line from "../Line";

function CartItems() {
  const { cartItemsIndex, apiData } = useContext(ProductDataContext);
  const [carts, setCarts] = useState<ProductType[]>([]);

  const getCartItems = () => {
    let items: ProductType[] = [];
    cartItemsIndex.map((id) => {
      const item = apiData.filter((item) => item.id === id)[0];
      items.push(item);
    });

    return items;
  };

  useEffect(() => {
    const filtered = getCartItems();
    // console.log(`rerender ${cartItemsIndex}`);
    setCarts(filtered);
  }, [cartItemsIndex]);

  const renderItem = ({ item }: ListRenderItemInfo<productPropType>) => {
    return (
      <>
        <CartItem
          price={item.price}
          image={item.image}
          title={item.title}
          id={item.id}
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
        keyExtractor={(item, index) => `${item.id + index}`}
        renderItem={renderItem}
      ></FlatList>
    </View>
  );
}

export default CartItems;
