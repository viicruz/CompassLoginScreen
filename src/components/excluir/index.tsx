import { Pressable, Text, StyleSheet, View } from "react-native";
import { styles } from "./styles";


export default function Excluir() {
    return (
      <Pressable>
        <View style={styles.container}>
          <Text style={styles.fonts}>-</Text>
        </View>
      </Pressable>
    );
  }

