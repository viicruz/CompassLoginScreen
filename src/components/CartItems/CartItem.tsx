import React from "react";
import { productPropType } from "../../types/types";
import { Text, View } from "react-native";

function CartItem({ price, title, image, id, favorited }: productPropType) {
  return (
    <View>
      <View>
        <Text>Image</Text>
      </View>

      <View>
        <Text>{title}</Text>
        <Text>{price}</Text>
      </View>
    </View>
  );
}

export default CartItem;
