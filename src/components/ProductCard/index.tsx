import { EventHandler, useContext } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { ProductDataContext } from "../../contexts/ProductProvider";
import { ProductType, productPropType } from "../../types/types";
import { colors } from "../../constants/theme";
import { styles } from "./styles";

export const ProductCard = ({
  title,
  price,
  favorited,
  image,
  id,
}: productPropType) => {
  const sizeHeart = 27;
  const colorHeart = colors.background;
  const navigate = useNavigation();
  const favoriteHandler = (id: number, currentSatte: boolean) => {
    updateProduct(id, favorited);
  };

  const { apiData, updateProduct } = useContext(ProductDataContext);

  const productDetailView = () => {
    navigate.navigate("Detail", { id: id });
  };

  return (
    <View style={styles.wrap}>
      <View>
        <Text style={styles.itemTitle}>{title}</Text>
      </View>

      <View>
        <Pressable onPress={productDetailView}>
          <Image style={styles.itemImage} source={{ uri: image }} />
        </Pressable>
      </View>
      <View style={styles.itemPriceWrap}>
        <View style={styles.itemPrice}>
          <Text style={styles.itemPriceText}>{`R$ ${price
            .toFixed(2)
            .replace(".", ",")}`}</Text>
        </View>
        <Ionicons
          onPress={() => favoriteHandler(id, favorited)}
          name={favorited ? "heart" : "heart-outline"}
          size={sizeHeart}
          color={colorHeart}
        />
      </View>
    </View>
  );
};
