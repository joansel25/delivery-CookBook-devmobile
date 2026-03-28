import React from 'react';
import { 
  FlatList, 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFavorites } from '../context/FavoritesContext';
import RecipeListStyles from '../styles/RecipeListStyles';

const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useFavorites();

  const renderRecipeItem = ({ item }) => (
    <TouchableOpacity 
      style={RecipeListStyles.card}
      onPress={() => navigation.navigate('RecipeList', { screen: 'RecipeDetail', params: { recipe: item } })}
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

  return (
    <SafeAreaView style={RecipeListStyles.container} edges={['right', 'left', 'bottom']}>
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>💔</Text>
          <Text style={styles.emptyText}>Aún no tienes recetas favoritas.</Text>
          <Text style={styles.emptySubtext}>Explora el catálogo y marca las que más te gusten.</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={renderRecipeItem}
          contentContainerStyle={RecipeListStyles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyEmoji: {
    fontSize: 60,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default FavoritesScreen;
