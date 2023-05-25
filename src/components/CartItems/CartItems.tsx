import React, { useContext, useEffect, useState } from "react";
import { ProductDataContext } from "../../contexts/ProductProvider";
import { ProductType, productPropType } from "../../types/types";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import CartItem from "./CartItem";
import { styles } from "../cards/styles";

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

    setCarts(filtred);
  }, []);

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

       <View style={styles.line}></View>

      </>
    );
  };
  return (
    <View>
      <FlatList
        data={carts}
        keyExtractor={(item) => item.id + "aa"}
        renderItem={renderItem}
      ></FlatList>
     
    </View>
  );
}

export default CartItems;
