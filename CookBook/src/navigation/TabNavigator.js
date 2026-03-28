import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import AddRecipeScreen from '../screens/AddRecipeScreen';
import CookingTipsScreen from '../screens/CookingTipsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#f4511e',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { 
          paddingBottom: 8, 
          height: 70, 
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#eee',
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 5,
        },
        tabBarIcon: ({ color, size }) => {
          let icon;
          if (route.name === 'Recipes') icon = '📖';
          else if (route.name === 'AddRecipe') icon = '➕';
          else if (route.name === 'CookingTips') icon = '💡';
          return <Text style={{ fontSize: size }}>{icon}</Text>;
        },
      })}
    >
      <Tab.Screen 
        name="Recipes" 
        component={StackNavigator} 
        options={{ title: 'Explorar' }} 
      />
      <Tab.Screen 
        name="AddRecipe" 
        component={AddRecipeScreen} 
        options={{ title: 'Crear Receta', headerShown: true }} 
      />
      <Tab.Screen 
        name="CookingTips" 
        component={CookingTipsScreen} 
        options={{ title: 'Tips', headerShown: true }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
