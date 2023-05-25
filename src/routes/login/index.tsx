import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
  type NativeStackHeaderProps,
} from "@react-navigation/native-stack";

import { View, TouchableOpacity } from "react-native";
import {
  createBottomTabNavigator,
  type BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";

import Arrow from "../../assets/icons/Arrow";

import { colors } from "../../constants/theme";
import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import Home from "../../screens/Home";
import ShoppingCart from "../../screens/ShoppingCart";
import { ProductDataContext } from "../../contexts/ProductProvider";
import TabBar from "../../components/TabBar";
import ProductDetailScreen from "../../screens/ProductDetailScreen/ProductDetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const configuration: NativeStackNavigationOptions = {
  header: (props) => {
    return <Header {...props} />;
  },
};

const bottomTabConfigurations: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveBackgroundColor: colors.tabBarNavigator,
  tabBarInactiveBackgroundColor: colors.tabBarNavigator,
  tabBarShowLabel: false,
  tabBarIcon: (props) => {
    return <View></View>;
  },

  // tabBarBadgeStyle:{
  //   backgroundColor: colors.buyAdd
  // },
  // tabBarBadge:'2'
};
export default function loginNavigation() {
  return (
    <Stack.Navigator screenOptions={configuration}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Detail" component={ProductDetailScreen} />
      <Stack.Screen name="Home" component={HomeTabStackNavigator} />
    </Stack.Navigator>
  );
}

function HomeTabStackNavigator() {
  return (
    <Tab.Navigator
      screenOptions={bottomTabConfigurations}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="HomeBar" component={Home} />
      <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
    </Tab.Navigator>
  );
}

function Header(props: NativeStackHeaderProps) {
  return (
    <View style={{ paddingTop: 40, backgroundColor: "#2D2D2D" }}>
      {props.navigation.canGoBack() && (
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{ marginLeft: 32 }}
        >
          <Arrow size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
}
