import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import ButtonBuyAdd from "../ButtonBuyAdd";

function EmptyCart() {
  return (
    <View style={styles.container}>
      <View style={styles.containerArea}>
        <Text style={styles.warning}>Ops, Empty Cart :( </Text>
        <Text style={styles.text}>Add a product </Text>
      </View>
      <View style={styles.buttonPlace}>
        <ButtonBuyAdd label="buy" onPress={() => {}} />
      </View>
    </View>
  );
}

export default EmptyCart;
