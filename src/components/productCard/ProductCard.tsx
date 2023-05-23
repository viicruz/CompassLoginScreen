import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ProductType, produtcPropType } from "../../types/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { EventHandler, useContext } from "react";
import { ProductDataContext } from "../../contexts/ProductProvider";

export const ProductCard = ({
  title,
  price,
  favorited,
  image,
  id,
}: produtcPropType) => {
  const favoriteHandler = (id: number, currentSatte: boolean) => {
    updateProduct(id, favorited);
  };
  const { apiData, updateProduct } = useContext(ProductDataContext);
  return (
    <View style={style.wrap}>
      <View>
        <Text style={style.itemTitile}>{title}</Text>
      </View>

      <View>
        <Pressable>
          <Image style={style.itemImage} source={{ uri: image }} />
        </Pressable>
      </View>
      <View style={style.itemPriceWrap}>
        <View style={style.itemPrice}>
          <Text style={style.itemPriceText}>{`R$ ${price}`}</Text>
        </View>
        <Ionicons
          onPress={() => favoriteHandler(id, favorited)}
          name="heart"
          size={33}
          color={favorited ? "red" : "gray"}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  wrap: {
    backgroundColor: "white",
    padding: 5,
    flex: 1,
    height: 200,
    marginHorizontal: 5,
    alignItems: "center",
  },

  itemTitile: {
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  itemImage: {
    height: 122,
    width: 122,
    marginVertical: 5,
  },

  itemPriceWrap: {
    flexDirection: "row",
  },
  itemPrice: {
    alignSelf: "flex-start",
    marginVertical: 5,
    width: 100,
    paddingVertical: 3,
    backgroundColor: "black",
    borderRadius: 8,
    padding: 5,
  },

  itemPriceText: {
    color: "white",
    textAlign: "center",
  },
});
