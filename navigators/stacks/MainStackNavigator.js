import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../../screens";

import HeaderButtons from "../../components/header-buttons/HeaderButtons";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: (props) => (
          <HeaderButtons
            defaultIconLibrary="Feather"
            items={[
              { title: "Activity", icon: { color: "red" } },
              {
                title: "Alert (Octagon)",
                icon: { name: "alert-octagon", color: "blue" },
              },
            ]}
          />
        ),
      }}
    >
      <Stack.Screen name="Main Screen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
