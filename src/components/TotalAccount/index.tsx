import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import style from "./style";
import { ProductDataContext } from "../../contexts/ProductProvider";

function TotalAccount() {
  const { totalAmount } = useContext(ProductDataContext);

  return (
    <View style={style.container}>
      <View>
        <Text style={style.totalText}>TOTAL </Text>
      </View>
      <View>
        <Text style={style.acount}>{`R$ ${totalAmount
          .toFixed(2)
          .replace(".", ",")}`}</Text>
      </View>
    </View>
  );
}

export default TotalAccount;
