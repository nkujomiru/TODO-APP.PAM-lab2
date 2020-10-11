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

import { Provider } from "react-redux";
import * as Store from "./store/Store";
import { PersistGate } from 'redux-persist/integration/react';

const store = Store.getStore()
const persistor = Store.getPersistor()
const RootStack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName={Screens.Home}>
            <RootStack.Screen
              name={Screens.Home}
              component={HomeScreen}
              options={{ title: "TODO List" }}
            />
            <RootStack.Screen name={Screens.Landing} component={LandingScreen} />
            <RootStack.Screen name={Screens.NewTask} component={NewTaskScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
