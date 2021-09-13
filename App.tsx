import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/navigation/StackNavigation";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useFonts } from "expo-font";
import { View, Text } from "react-native";
import BottomNavigation from "./src/navigation/BottomNavigation";

export default function App() {
  const [loaded] = useFonts({
    SWF1: require("./src/constants/fonts/Starjedi.ttf"),
    SWF2: require("./src/constants/fonts/Starjhol.ttf"),
    SWF3: require("./src/constants/fonts/starwars.ttf"),
  });

  if (!loaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="light" backgroundColor="transparent" />
        <NavigationContainer>
          <BottomNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
