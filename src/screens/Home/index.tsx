import { View, Text, FlatList } from "react-native";

import Card from "./components/Card"

import { styles } from "./styles";



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
          ItemSeparatorComponent={() => <View style={{ height: 10  }} />}
          keyExtractor={(list, index) => {
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

