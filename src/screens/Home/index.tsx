import { useContext } from "react";
import { View, FlatList, ListRenderItemInfo, } from "react-native";

import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductDataContext } from "../../contexts/ProductProvider";
import { productPropType } from "../../types/types";
import { styles } from "./styles";

export default function Home() {
  const { apiData } = useContext(ProductDataContext);
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
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={apiData}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{ height: 10, gap: 5 }} />}
          keyExtractor={(item) => {
            return item.id + "aa";
          }}
          renderItem={itemRenderer}
        ></FlatList>
      </View>
    </View>
  );
}
