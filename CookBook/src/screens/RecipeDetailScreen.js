import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  View, 
  Text, 
  TouchableOpacity, 
  Alert 
} from 'react-native';
import RecipeDetailStyles from '../styles/RecipeDetailStyles';

const RecipeDetailScreen = ({ route, navigation }) => {
  // C.A. 2.1: Desestructuración desde route.params
  const { recipe } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  // C.A. 2.2: Actualización dinámica del título del header
  useEffect(() => {
    navigation.setOptions({ title: recipe.name });
  }, [navigation, recipe.name]);

  const toggleFavorite = () => {
    const newState = !isFavorite;
    setIsFavorite(newState);
    
    // C.A. 2.4: Interactividad adicional (Alert de confirmación)
    Alert.alert(
      newState ? 'Añadido a Favoritos' : 'Eliminado de Favoritos',
      `${recipe.name} ha sido ${newState ? 'añadida a' : 'eliminada de'} tu lista de favoritos.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={RecipeDetailStyles.container}>
      <ScrollView style={RecipeDetailStyles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Encabezado Visual */}
        <View style={RecipeDetailStyles.header}>
          <Text style={RecipeDetailStyles.emoji}>{recipe.emoji}</Text>
          <Text style={RecipeDetailStyles.title}>{recipe.name}</Text>
          <Text style={RecipeDetailStyles.category}>{recipe.category}</Text>
        </View>

        {/* C.A. 2.3: Información Técnica */}
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

        {/* Ingredientes */}
        <View style={RecipeDetailStyles.section}>
          <Text style={RecipeDetailStyles.sectionTitle}>Ingredientes</Text>
          {recipe.ingredients.map((ingredient, index) => (
            <Text key={index} style={RecipeDetailStyles.ingredientItem}>
              • {ingredient}
            </Text>
          ))}
        </View>

        {/* Pasos de Preparación */}
        <View style={RecipeDetailStyles.section}>
          <Text style={RecipeDetailStyles.sectionTitle}>Preparación</Text>
          {recipe.steps.map((step, index) => (
            <View key={index} style={RecipeDetailStyles.stepContainer}>
              <Text style={RecipeDetailStyles.stepNumber}>{index + 1}.</Text>
              <Text style={RecipeDetailStyles.stepText}>{step}</Text>
            </View>
          ))}
        </View>

        {/* C.A. 2.4: Botón de Favorito (Interacción) */}
        <TouchableOpacity 
          style={[
            RecipeDetailStyles.favoriteButton,
            isFavorite && RecipeDetailStyles.unfavoriteButton
          ]}
          onPress={toggleFavorite}
        >
          <Text style={RecipeDetailStyles.favoriteButtonText}>
            {isFavorite ? 'Quitar de Favoritos' : 'Marcar como Favorito'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetailScreen;
