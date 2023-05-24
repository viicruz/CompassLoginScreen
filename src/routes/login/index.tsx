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
};
export default function loginNavigation() {
  return (
    <Stack.Navigator screenOptions={configuration}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={HomeTabStackNavigator} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
    </Stack.Navigator>
  );
}

function HomeTabStackNavigator() {
  return (
    <Tab.Navigator screenOptions={bottomTabConfigurations}>
      <Tab.Screen name="Bar" component={Home} />
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
