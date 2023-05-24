//Imports
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { colors } from "../../../constants/theme";

//Types
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

//icons
import IconHome from "../../../assets/icons/IconHome";
import IconShop from "../../../assets/icons/IconShop";

interface Props extends BottomTabBarProps {}
export default function TabBar(props: Props) {
  const position = props.state.index;
  return (
    <View
      style={{
        backgroundColor: colors.tabBarNavigator,
        height: 71,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        style={[styles.touchablesContainer, styles.leftContainer]}
        onPress={() => {
          props.navigation.navigate("HomeBar");
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconHome
            size={27}
            color={position === 0 ? colors.primary : "white"}
          />
          <Text style={styles.textContainer}>Home</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.touchablesContainer, styles.rightContainer]}
        onPress={() => {
          props.navigation.navigate("ShoppingCart");
        }}
      >
        <View style={styles.viewContainer}>
          <IconShop
            size={27}
            color={position === 0 ? "white" : colors.primary}
          />
          <Text style={styles.textContainer}>Cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
