import { useContext, useEffect, useState } from "react";
import {
  View,
  FlatList,
  ListRenderItemInfo,
  Text,
  StyleSheet,
} from "react-native";

import FetchLoader from "../../components/Loaders/fetchLoader";
import { ProductCard } from "../../components/ProductCard";
import { ProductDataContext } from "../../contexts/ProductProvider";
import { productPropType } from "../../types/types";
import { styles } from "./styles";

export default function Home() {
  const { apiData, getProducts } = useContext(ProductDataContext);
  const [isLoading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      await getProducts();
      setIsloading(false);
    };

    fetchData();
  }, []);

  const itemRenderer = ({ item }: ListRenderItemInfo<productPropType>) => {
    return (
      <ProductCard
        title={item.title}
        favorited={item.favorited}
        image={item.image}
        price={item.price}
        id={item.id}
      />
    );
  };

  if (isLoading)
    return (
      <View style={_styles.loadingMessageContainer}>
        <FetchLoader isLoading={isLoading} setIsloading={setIsloading} />
        <Text style={_styles.loadingMessage}> Carregando Dados</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={apiData}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{ height: 10, gap: 5 }} />}
          keyExtractor={(item, index) => {
            return `${item.id + index}`;
          }}
          renderItem={itemRenderer}
        ></FlatList>
      </View>
    </View>
  );
}

const _styles = StyleSheet.create({
  loadingMessageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingMessage: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
