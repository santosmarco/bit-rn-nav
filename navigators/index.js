import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./stacks";

const AppNavigator = () => (
  <NavigationContainer>
    <MainStackNavigator />
  </NavigationContainer>
);

export default AppNavigator;
