import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  FlatList, 
  View, 
  Text, 
  TouchableOpacity, 
  ActivityIndicator 
} from 'react-native';
import recipesData from '../data/recipesData';
import RecipeListStyles from '../styles/RecipeListStyles';

const RecipeListScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulación de carga desde API (C.A. 1.2)
    const loadRecipes = setTimeout(() => {
      setRecipes(recipesData);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(loadRecipes);
  }, []);

  const renderRecipeItem = ({ item }) => (
    <TouchableOpacity 
      style={RecipeListStyles.card}
      onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
      activeOpacity={0.7}
    >
      <View style={RecipeListStyles.cardInfo}>
        <Text style={RecipeListStyles.recipeName}>{item.name}</Text>
        <Text style={RecipeListStyles.recipeCategory}>{item.category}</Text>
      </View>
      <View style={RecipeListStyles.emojiContainer}>
        <Text style={RecipeListStyles.emoji}>{item.emoji}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <SafeAreaView style={RecipeListStyles.loader}>
        <ActivityIndicator size="large" color="#f4511e" />
        <Text style={{ marginTop: 10, color: '#666' }}>Cargando recetas...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={RecipeListStyles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipeItem}
        contentContainerStyle={RecipeListStyles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default RecipeListScreen;
