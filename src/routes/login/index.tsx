import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
  type NativeStackHeaderProps,
} from "@react-navigation/native-stack";

import { useContext, useEffect, useState } from "react";
import { ProductDataContext } from "../../contexts/ProductProvider";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./styles";
import {
  createBottomTabNavigator,
  type BottomTabNavigationOptions,
  BottomTabHeaderProps,
} from "@react-navigation/bottom-tabs";

import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import Home from "../../screens/Home";
import ShoppingCart from "../../screens/ShoppingCart";

import TabBar from "../../components/TabBar";
import ProductDetailScreen from "../../screens/ProductDetailScreen/";
import CartItemQuantity from "../../components/CartItemQuantity";

import { IconArrow, IconCart } from "../../assets/icons";
import { colors } from "../../constants/theme";

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
      <Stack.Screen
        name="Detail"
        component={ProductDetailScreen}
        options={{
          header: (props) => {
            return <DetailHeader {...props} />;
          },
          headerShown: true,
        }}
      />
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
    <View style={{ paddingTop: 40, backgroundColor: colors.background }}>
      {props.navigation.canGoBack() && (
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{ marginLeft: 32 }}
        >
          <IconArrow size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
}

function HomeHeader(props: BottomTabHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.WelcomeContainer}>Welcome</Text>
        <Text style={styles.userNameContainer}>Team 1</Text>
        <View style={styles.underWrapContainer}></View>
      </View>

      <View style={styles.IconCartContainer}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("ShoppingCart");
          }}
        >
          <View style={styles.wrap}>
            <View style={styles.cart}>
              <CartItemQuantity />
            </View>
            <IconCart size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DetailHeader(props: NativeStackHeaderProps) {
  const { cartItemsIndex } = useContext(ProductDataContext);
  const [qtd, setQtd] = useState(cartItemsIndex.length);
  useEffect(() => {
    setQtd(cartItemsIndex.length);
  }, [cartItemsIndex]);
  return (
    <View style={styles.detailHeaderContainer}>
      {props.navigation.canGoBack() && (
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{ marginLeft: 32 }}
        >
          <View>
            <IconArrow size={24} />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <View style={styles.wrap}>
          <TouchableOpacity
            style={styles.cart}
            onPress={() => {
              props.navigation.navigate("ShoppingCart");
            }}
          >
            <View style={styles.cart}>
              <CartItemQuantity />
            </View>
            <IconCart size={27} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
