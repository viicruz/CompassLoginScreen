import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../screens/Login/Login";
import SignUp from "../../screens/SignUp/SignUp";

const Stack = createNativeStackNavigator();

export default function loginNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp}/>
    </Stack.Navigator>
  );
}
