//Imports
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { colors } from "../../constants/theme";

//Types
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

//icons
import {IconHome, IconShop} from "../../assets/icons";

interface Props extends BottomTabBarProps {}
export default function TabBar(props: Props) {
  const position = props.state.index;
  return (
    <View style={styles.tabBarContainer}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("HomeBar");
        }}
      >
        <View>
          <IconHome
            size={27}
            color={position === 0 ? colors.primary : colors.light}
          />
          <Text style={styles.textContainer}>Home</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("ShoppingCart");
        }}
      >
        <View>
          <IconShop
            size={27}
            color={position === 0 ? colors.light : colors.primary}
          />
          <Text style={styles.textContainer}>Cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
