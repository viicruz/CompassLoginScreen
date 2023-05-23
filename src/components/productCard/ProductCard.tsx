import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ProductType, productPropType } from "../../types/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { EventHandler, useContext } from "react";
import { ProductDataContext } from "../../contexts/ProductProvider";
import { colors } from "../../constants/theme";

export const ProductCard = ({
  title,
  price,
  favorited,
  image,
  id,
}: productPropType) => {
  const favoriteHandler = (id: number, currentSatte: boolean) => {
    updateProduct(id, favorited);
  };
  const { apiData, updateProduct } = useContext(ProductDataContext);
  return (
    <View style={style.wrap}>
      <View>
        <Text style={style.itemTitle}>{title}</Text>
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
          size={27}
          color={favorited ? colors.primary : colors.light}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  wrap: {
    width: 186,
    height: 226,
    borderRadius: 10,
    backgroundColor: colors.cardProduct,
    marginHorizontal: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: 'space-around',
  },

  itemTitle: {
    color: colors.light,
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
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'
  },

  itemPrice: {
    marginVertical: 5,
    width: 109,
    height: 30,
    justifyContent: 'center',
    paddingVertical: 3,
    backgroundColor: colors.cardPrice,
    borderRadius: 8,
    padding: 5,
  },

  itemPriceText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: "center",
  },
});
