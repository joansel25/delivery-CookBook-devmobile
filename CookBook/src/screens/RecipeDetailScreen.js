import React, { useEffect } from 'react';
import { 
  ScrollView, 
  View, 
  Text, 
  TouchableOpacity, 
  Alert 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFavorites } from '../context/FavoritesContext';
import RecipeDetailStyles from '../styles/RecipeDetailStyles';

const RecipeDetailScreen = ({ route, navigation }) => {
  const { recipe } = route.params;
  const { toggleFavorite, isFavorite } = useFavorites();
  const currentlyFavorite = isFavorite(recipe.id);

  useEffect(() => {
    navigation.setOptions({ title: recipe.name });
  }, [navigation, recipe.name]);

  const handleToggle = () => {
    toggleFavorite(recipe);
    Alert.alert(
      !currentlyFavorite ? 'Añadido a Favoritos' : 'Eliminado de Favoritos',
      `${recipe.name} ha sido ${!currentlyFavorite ? 'añadida a' : 'eliminada de'} tu lista.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={RecipeDetailStyles.container} edges={['right', 'left', 'bottom']}>
      <ScrollView style={RecipeDetailStyles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={RecipeDetailStyles.header}>
          <Text style={RecipeDetailStyles.emoji}>{recipe.emoji}</Text>
          <Text style={RecipeDetailStyles.title}>{recipe.name}</Text>
          <Text style={RecipeDetailStyles.category}>{recipe.category}</Text>
        </View>

        <View style={RecipeDetailStyles.infoContainer}>
          <View style={RecipeDetailStyles.infoItem}>
            <Text style={RecipeDetailStyles.infoLabel}>Tiempo</Text>
            <Text style={RecipeDetailStyles.infoValue}>{recipe.prepTime}</Text>
          </View>
          <View style={RecipeDetailStyles.infoItem}>
            <Text style={RecipeDetailStyles.infoLabel}>Dificultad</Text>
            <Text style={RecipeDetailStyles.infoValue}>{recipe.difficulty}</Text>
          </View>
        </View>

        <View style={RecipeDetailStyles.section}>
          <Text style={RecipeDetailStyles.sectionTitle}>Ingredientes</Text>
          {recipe.ingredients.map((ingredient, index) => (
            <Text key={index} style={RecipeDetailStyles.ingredientItem}>• {ingredient}</Text>
          ))}
        </View>

        <View style={RecipeDetailStyles.section}>
          <Text style={RecipeDetailStyles.sectionTitle}>Preparación</Text>
          {recipe.steps.map((step, index) => (
            <View key={index} style={RecipeDetailStyles.stepContainer}>
              <Text style={RecipeDetailStyles.stepNumber}>{index + 1}.</Text>
              <Text style={RecipeDetailStyles.stepText}>{step}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity 
          style={[RecipeDetailStyles.favoriteButton, currentlyFavorite && RecipeDetailStyles.unfavoriteButton]}
          onPress={handleToggle}
        >
          <Text style={RecipeDetailStyles.favoriteButtonText}>
            {currentlyFavorite ? 'Quitar de Favoritos' : 'Marcar como Favorito'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetailScreen;
