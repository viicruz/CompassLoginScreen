import { NavigationContainer } from "@react-navigation/native";
import LoginNavigation from "./login";
import { StatusBar } from 'expo-status-bar';



function Routes() {
  return (
    <NavigationContainer>
      <LoginNavigation />
      <StatusBar style="light" translucent />
    </NavigationContainer>
  );
}

export default Routes;
