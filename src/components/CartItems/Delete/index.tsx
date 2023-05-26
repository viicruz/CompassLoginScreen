import { Pressable, Text, StyleSheet, View } from "react-native";
import { styles } from "./styles";
import { IconMinus } from "../../../assets/icons";
import { colors } from "../../../constants/theme";


export default function Excluir() {
    return (
      <Pressable >
        <View style={styles.container}>
          <IconMinus size={20} color={colors.light}/>
        </View>
      </Pressable>
    );
  }

