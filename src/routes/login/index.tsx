import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../screens/Login/Login";

const Stack = createNativeStackNavigator();

export default function loginNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Login} />
    </Stack.Navigator>
  );
}
