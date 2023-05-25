import React from "react";
import { productPropType } from "../../types/types";
import { Text, View, Image } from "react-native";
import Excluir from "../cards/Delete";
import {styles} from "../cards/styles";

function CartItem({ price, title, image, id, favorited }: productPropType) {
  return (
    <View style={styles.cardBox}>
      <View>
        <Image source={{uri:image}} style={styles.image}/>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.fonts}>{title}</Text>

        <View style={styles.priceBox}>
          <Text style={styles.priceProd}>{`R$ ${price.toFixed(2).replace('.',',')}`}</Text>
        </View>  
      </View>
      <Excluir/>
    </View>
  );
} 

export default CartItem;
