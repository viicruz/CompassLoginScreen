import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
  type NativeStackHeaderProps,
} from "@react-navigation/native-stack";

import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import {
  createBottomTabNavigator,
  type BottomTabNavigationOptions,
  BottomTabHeaderProps,
} from "@react-navigation/bottom-tabs";

import Arrow from "../../assets/icons/Arrow";
import Cart from "../../assets/icons/Cart";

import { colors } from "../../constants/theme";
import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import Home from "../../screens/Home";
import ShoppingCart from "../../screens/ShoppingCart";
import { ProductDataContext } from "../../contexts/ProductProvider";
import TabBar from "../../components/TabBar";
import ProductDetailScreen from "../../screens/ProductDetailScreen/";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const configuration: NativeStackNavigationOptions = {
  header: (props) => {
    return <Header {...props} />;
  },
  headerShown: false,
};

const bottomTabConfigurations: BottomTabNavigationOptions = {
  headerShown: true,
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
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: (props) => {
            return <Header {...props} />;
          },
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          header: (props) => {
            return <Header {...props} />;
          },
          headerShown: true,
        }}
      />
      <Stack.Screen name="Home" component={HomeTabStackNavigator} />
      <Stack.Screen name="Detail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}

function HomeTabStackNavigator() {
  return (
    <Tab.Navigator
      screenOptions={bottomTabConfigurations}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name="HomeBar"
        component={Home}
        options={{
          header: (props) => {
            return <HomeHeader {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{
          headerShown: false,
        }}
      />
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

function HomeHeader(props: BottomTabHeaderProps) {
  console.log("aaaaa");

  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.WelcomeContainer}>Welcome</Text>
        <Text style={styles.userNameContainer}>Team 1</Text>
        <View style={styles.underwrapContainer}></View>
      </View>

      <View style={styles.IconCartContainer}>
        <TouchableOpacity onPress={() => {
          props.navigation.navigate("ShoppingCart");
        }}>
          <Cart size={27} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
