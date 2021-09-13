import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import StackNavigation from "./StackNavigation";
import favorites from "../pages/favorites";
import { Text, TouchableOpacity, View } from "react-native";

const Bottom = createBottomTabNavigator();

const CustomTab = (props) => {
  return (
    <View
      style={{
        height: 55,
        backgroundColor: "black",
        opacity: 0.9,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems:'center',
        
      }}
    >
      <TouchableOpacity onPress={() => props.navigation.navigate('HomeCharacters')}>
      <Text style={{ fontSize: 20, color: "yellow" }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Favorites')}>
      <Text style={{ fontSize: 20, color: "yellow" }}>Favorites</Text>
      </TouchableOpacity>
     
    </View>
  );
};

const BottomNavigation = () => {
  return (
    <Bottom.Navigator tabBar={(props) => <CustomTab {...props} />}>
      <Bottom.Screen name="Home" component={StackNavigation} />
      <Bottom.Screen name="Favorites" component={favorites} />
    </Bottom.Navigator>
  );
};

export default BottomNavigation;
