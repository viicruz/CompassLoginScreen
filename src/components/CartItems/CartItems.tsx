import React, { useContext, useEffect, useState } from "react";
import { ProductDataContext } from "../../contexts/ProductProvider";
import { ProductType, productPropType } from "../../types/types";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import CartItem from "./CartItem";

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
    const filtred = getCartItems();
    console.log(`rerender ${cartItemsIndex}`);
    setCarts(filtred);
  }, [cartItemsIndex]);

  const renderItem = ({ item }: ListRenderItemInfo<productPropType>) => {
    return (
      <CartItem
        price={item.price}
        image={item.image}
        title={item.title}
        id={item.id}
        favorited={item.favorited}
      />
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
