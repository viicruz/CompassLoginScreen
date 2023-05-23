import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";


import { styles } from "./styles";
import { ProductCard } from "../../components/productCard/ProductCard";
import { productPropType } from "../../types/types";
import { useContext } from "react";
import { ProductDataContext } from "../../contexts/ProductProvider";

type Props = {};

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
    <View style={styles.Container}>
      {/* <View>
        <Text style={styles.HomeTitle}>Home</Text>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={List}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{ height: 10  }} />}
          keyExtractor={(list, index) => {
            return index + "";
          }}
          renderItem={(list) => {
            return <Card/>;
          }}
        />
      </View> */}
      <View style={styles.flatListContainer}>
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
