import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import IconHome from "../../../assets/icons/IconHome";

interface Props extends BottomTabBarProps {}
export default function TabBar(props: Props) {
  const postion = props.state.index;
  return (
    <View
      style={{
        backgroundColor: "red",
        height: 71,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        style={[styles.TouchablesContainer, styles.leftContainer]}
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
          <IconHome size={27} />
          <Text>Home</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.TouchablesContainer, styles.rightContainer]}
        onPress={() => {
          props.navigation.navigate("ShoppingCart");
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
          <IconHome size={27} />
          <Text>Home</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
