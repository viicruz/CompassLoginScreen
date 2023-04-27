import { View, Text,StyleSheet } from "react-native";

export default function Card() {
  return (
    <View style={styles.container}>
      <View style={styles.cardStyle}>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    display:"flex",
    alignItems:"center",
    
    
  },

  cardStyle: {
    backgroundColor: "#F5F5F5",
    width:180,
    height:226,
    borderRadius:10,
    
    
  },
});
