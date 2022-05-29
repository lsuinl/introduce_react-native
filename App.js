import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Fontisto,FontAwesome} from '@expo/vector-icons';
import Main from "./screens/Main";
import Side from "./screens/Side";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Main">
      <Tab.Navigator>
        <Tab.Screen 
          name="개인 정보" 
          component={Main}
          options={{
            tabBarIcon:()=>(
            <Fontisto name="baidu" size={24}/>)
          }}/>
        <Tab.Screen 
          name="추가 정보" 
          component={Side}
          options={{
            tabBarIcon:()=>(
            <Fontisto name="baidu" size={24}/>)
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}