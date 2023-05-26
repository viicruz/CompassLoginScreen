import { useContext, useEffect, useState } from "react";
import { View } from "react-native";

import EmptyCart from "../../components/EmptyCart";
import CartItems from "../../components/CartItems/CartItems";
import ButtonBuyAdd from "../../components/ButtonBuyAdd";
import { ProductDataContext } from "../../contexts/ProductProvider";
import { styles } from "./styles";
import ModalComponent from "../../components/ModalComponent";

export default function ShoppingCart() {
  const { cartItemsIndex } = useContext(ProductDataContext);

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = () => {
    setModalVisible(true); 
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  if (!cartItemsIndex.length) {
    return (
      <View>
        <EmptyCart />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <CartItems />
      <View style={styles.buttonPlace}>
        <ButtonBuyAdd label="buy" onPress={openModal} />
      </View>
      <ModalComponent
        visible={modalVisible}
        onClose={closeModal}
        title="Good!"
        text="Product successfully purchased."
      />
    </View>
  );
}
