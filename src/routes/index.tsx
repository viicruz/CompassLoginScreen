import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import LoginNavigation from "./login";



function Routes() {
  return (
    <NavigationContainer>
      <LoginNavigation />
      <StatusBar style="light" translucent />
    </NavigationContainer>
  );
}

export default Routes;
