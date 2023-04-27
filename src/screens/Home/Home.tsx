import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../../components/specific/Card";
type Props = {};

export default function Home() {
  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.HomeTitle}>Home</Text>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={List}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          keyExtractor={(fruta, index) => {
            return index + "";
          }}
          renderItem={(list) => {
            return <Card/>;
          }}
        />
      </View>
    </View>
  );
}

const List = [
  { item: "item1" },
  { item: "item2" },
  { item: "item3" },
  { item: "item4" },
  { item: "item5" },
  { item: "item6" },
  { item: "item7" },
  { item: "item8" },
  { item: "item9" },
  { item: "item10" },
];

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#2D2D2D",
    flex: 1,
  },
  HomeTitle: {
    color: "#D78F3C",
    fontWeight: "500",
    fontSize: 20,
    marginLeft: 26,
    marginTop: 26,
    marginBottom:100
  },

  flatListContainer: {
    width: "100%",
    height: "100%",
   
    
  },
});
