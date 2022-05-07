import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Main from "./screens/Main";
import Side from "./screens/Side";
import Start from "./screens/Start";

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

//첫화면 하는즁
function Starttomain(){
  return (
    <Stack.Navigator>
    <Stack.Screen name="Main" component={Main}/>
    <Stack.Screen name="Start" component={Start}/>
  </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={Starttomain}/>
        <Tab.Screen name="Side" component={Side}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}