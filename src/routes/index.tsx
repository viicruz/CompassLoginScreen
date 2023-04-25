import { NavigationContainer } from "@react-navigation/native";
import LoginNavigation from "./login";

function Routes() {
  return (
    <NavigationContainer>
      <LoginNavigation />
    </NavigationContainer>
  );
}

export default Routes;
