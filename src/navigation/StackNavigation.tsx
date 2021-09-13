import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
  StackNavigationOptions,
} from "@react-navigation/stack";
import Home from "../pages/Home";
import Character from "../pages/character";
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

const options: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
  transitionSpec: {
    open: { animation: "timing", config: { duration: 900 } },
    close: { animation: "timing", config: { duration: 900 } },
  },
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeCharacters" component={Home} options={options} />
      <Stack.Screen name="character" component={Character} options={options} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
