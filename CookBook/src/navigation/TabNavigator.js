import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import AddRecipeScreen from '../screens/AddRecipeScreen';
import CookingTipsScreen from '../screens/CookingTipsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#f4511e',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { paddingBottom: 5, height: 60 },
      }}
    >
      <Tab.Screen 
        name="Recipes" 
        component={StackNavigator} 
        options={{ title: 'Explorar' }} 
      />
      <Tab.Screen 
        name="AddRecipe" 
        component={AddRecipeScreen} 
        options={{ title: 'Nuevo Plato', headerShown: true }} 
      />
      <Tab.Screen 
        name="CookingTips" 
        component={CookingTipsScreen} 
        options={{ title: 'Consejos', headerShown: true }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
