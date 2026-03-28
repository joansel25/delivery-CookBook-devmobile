import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeListScreen from '../screens/RecipeListScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen 
        name="RecipeList" 
        component={RecipeListScreen} 
        options={{ title: 'Catálogo de Recetas' }} 
      />
      <Stack.Screen 
        name="RecipeDetail" 
        component={RecipeDetailScreen} 
        options={{ title: 'Ficha Técnica' }} 
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
