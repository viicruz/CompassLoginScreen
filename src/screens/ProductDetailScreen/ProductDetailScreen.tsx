import React, { useContext, useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ProductDataContext } from "../../contexts/ProductProvider";
import { ProductType } from "../../types/types";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProductDetailScreen = ({ route }) => {
  const { apiData } = useContext(ProductDataContext);
  const [currentData, setCurrentData] = useState<ProductType>();
  const [quantity, setQuantity] = useState<number>(1);
  useEffect(() => {
    const param = route.params;
    console.log(param.id);
    const id: number = param.id;
    const resul = apiData.filter((item) => item.id === id);
    setCurrentData(resul[0]);
  }, []);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={style.container}>
      <View>
        <Text>Carinho</Text>
      </View>

      <View>
        <View style={style.headWrap}>
          <View>
            <Text>{currentData?.title}</Text>
          </View>
          <View>
            <Ionicons
              color="white"
              name={currentData?.favorited ? "md-heart" : "md-heart-outline"}
              size={25}
            />
          </View>
        </View>

        <View style={style.imageWrap}>
          <Image style={style.image} source={{ uri: currentData?.image }} />
        </View>

        <View>
          <Text>rate stars</Text>
        </View>

        <View style={style.price_quantity_wrap}>
          <View style={style.priceWrap}>
            <Text style={style.price}>{`R$ ${currentData?.price}`}</Text>
          </View>
          <View style={style.quantityManager}>
            <Pressable onPress={addQuantity}>
              <Ionicons size={40} name="ios-add-circle" />
            </Pressable>
            <View>
              <Text style={style.quantity}>{quantity}</Text>
            </View>
            <Pressable onPress={decreaseQuantity}>
              <Ionicons size={40} name="md-remove-circle" />
            </Pressable>
          </View>
        </View>

        <View style={style.description}>
          <Text style={style.descriptionText}>{currentData?.description}</Text>
        </View>
      </View>

      <View style={style.buttonWrap}>
        <Pressable>
          <Text style={style.buttonText}>Buttom for Buy</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductDetailScreen;

const style = StyleSheet.create({
  headWrap: {
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "space-around",
    marginVertical: 5,
    padding: 10,
  },
  image: {
    height: 218,
    width: 249,
  },
  imageWrap: {
    alignItems: "center",
    marginVertical: 8,
  },

  price_quantity_wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceWrap: {
    width: 177,
    height: 50,
    backgroundColor: "gray",
    borderRadius: 15,
    justifyContent: "center",
  },

  price: {
    alignSelf: "center",
  },
  quantityManager: {
    flexDirection: "row",
  },
  quantity: {
    fontSize: 30,
    marginHorizontal: 2,
  },
  description: {
    marginVertical: 10,
  },
  descriptionText: {
    textAlign: "justify",
  },
  container: {
    marginHorizontal: 10,
  },

  buttonWrap: {
    justifyContent: "center",
    alignContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    padding: 10,
    backgroundColor: "blue",
    textAlign: "center",
  },
});
