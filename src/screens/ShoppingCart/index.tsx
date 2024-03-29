import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

import EmptyCart from "../../components/EmptyCart";
import CartItems from "../../components/CartItems/CartItems";
import ButtonBuyAdd from "../../components/ButtonBuyAdd";
import { ProductDataContext } from "../../contexts/ProductProvider";
import { styles } from "./styles";
import ModalComponent from "../../components/ModalComponent";
import TotalAccount from "../../components/TotalAccount";

export default function ShoppingCart() {
  const { cartItemsIndex, clearCartItems } = useContext(ProductDataContext);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isProductPurchased, SetIsProductPurchased] = useState<boolean>(false);

  const openModal = () => {
    SetIsProductPurchased(true)
    setTimeout(() => {
      setModalVisible(true);
      SetIsProductPurchased(false)
    }, 500);
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
      <View style={styles.priceWrap}>
        <TotalAccount />
      </View>
      <View>
        <CartItems />
        <View style={styles.buttonPlace}>
          <ButtonBuyAdd label="buy" onPress={openModal} isLoading={isProductPurchased} />
        </View>
      </View>
      <ModalComponent
        onConfirm={clearCartItems}
        visible={modalVisible}
        onClose={closeModal}
        title="Good!"
        text="Product successfully purchased."
      />
    </View>
  );
}

