import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Pressable,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import ButtonBuyAdd from "../../components/ButtonBuyAdd";
import ModalComponent from "../../components/ModalComponent";
import { ProductDataContext } from "../../contexts/ProductProvider";
import { ProductType } from "../../types/types";
import {
  IconMinus,
  IconPlus,
  IconFullStar,
  IconHalfStar,
} from "../../assets/icons";
import { colors } from "../../constants/theme";
import { styles } from "./styles";

export default function ProductDetailScreen({ route }: any) {
  const { apiData, updateCart, cartItemsIndex } =
    useContext(ProductDataContext);
  const [currentData, setCurrentData] = useState<ProductType>();
  const [quantity, setQuantity] = useState<number>(1);
  const [cartId, setCartId] = useState<number>(-1);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const [isProductAdded, setIsProductAdded] = useState<boolean>(false);

  useEffect(() => {
    const param = route.params;
    const id: number = param.id;
    setCartId(id);
    const result = apiData.filter((item) => item.id === id);
    setCurrentData(result[0]);
    setIsFavorited(result[0]?.favorited || false);
  }, [cartItemsIndex]);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  

  const addCartHandler = () => {
    let quat: number[] = [];
    const id: number = currentData?.id as number;
    for (let i = 0; i < quantity; i++) {
      quat.push(id);
    }
    updateCart(quat);
    setModalVisible(true);
    setIsProductAdded(true);
    setTimeout(() => {
      setIsProductAdded(false);
    }, 3000);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const sizeHeart = 53;
  const colorHeart = colors.background;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.headerCard}>
            <Text style={styles.textHeaderCard}>{currentData?.title}</Text>
            <Pressable onPress={toggleFavorite}>
              <Ionicons
                name={isFavorited ? "heart" : "heart-outline"}
                size={sizeHeart}
                color={colorHeart}
              />
            </Pressable>
          </View>
          <View>
            <Image style={styles.image} source={{ uri: currentData?.image }} />
          </View>

          <View style={styles.starArea}>
            <IconFullStar size={30} />
            <IconFullStar size={30} />
            <IconFullStar size={30} />
            <IconFullStar size={30} />
            <IconHalfStar size={30} />
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>{`R$ ${currentData?.price
              .toFixed(2)
              .replace(".", ",")}`}</Text>
            <View style={styles.areaQuantity}>
              <Pressable style={styles.circle} onPress={decreaseQuantity}>
                <IconMinus size={25} />
              </Pressable>
              <Text style={styles.innerCircle}>{quantity}</Text>
              <Pressable style={styles.circle} onPress={addQuantity}>
                <IconPlus size={25} />
              </Pressable>
            </View>
          </View>

          <Text style={styles.description}>{currentData?.description}</Text>

          <ButtonBuyAdd
            label="add to cart"
            onPress={addCartHandler}
            isLoading={isProductAdded}
          />
          <ModalComponent
            title="Good!"
            text="Product added to cart."
            visible={modalVisible}
            onClose={closeModal}
          />
        </View>
      </ScrollView>
    </View>
  );
}
