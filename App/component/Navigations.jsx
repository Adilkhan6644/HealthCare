import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import Medi from "../Screens/Medi";
import Siri from "../Screens/Siri";
import Menu from "./Menu";
import Cart from '../Screens/Cart';
import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Medicine" 
        component={Medi} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="medicinebox" size={24} color="black" />
          ),
        }} 
      />
      <Tab.Screen 
        name="Search" 
        component={Siri} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="magnifying-glass" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Cart" 
        component={Cart} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="shopping-cart" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Menu" 
        component={Menu} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="menu" size={size} color={color} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}
