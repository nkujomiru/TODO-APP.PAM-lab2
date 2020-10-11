import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Screens from "./screens/ScreenNames"
import LandingScreen from "./screens/Landing";
import HomeScreen from "./screens/Home";
import NewTaskScreen from "./screens/CreateNewTask";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={Screens.Home}>
        <RootStack.Screen 
          name={Screens.Home} 
          component={HomeScreen}
          options={{title: 'TODO List'}} />
        <RootStack.Screen 
          name={Screens.Landing} 
          component={LandingScreen} />
        <RootStack.Screen 
          name={Screens.NewTask} 
          component={NewTaskScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


