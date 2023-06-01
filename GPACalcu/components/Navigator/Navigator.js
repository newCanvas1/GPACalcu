import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Homescreen from "../../screens/Homescreen";
import Termscreen from "../../screens/Termscreen";
const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Term" component={Termscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
