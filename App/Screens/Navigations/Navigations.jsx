import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen/HomeScreen";
import Medi from "../Medicines/Medi";
import Siri from "../Search/Siri";
import Menu from "../Menu/Menu";
import Cart from '../Cartt/Cart';
import { Entypo, Ionicons } from '@expo/vector-icons'; // Import Ionicons along with Entypo
import React from 'react';

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
            <Ionicons name="medkit" size={size} color={color} />
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
