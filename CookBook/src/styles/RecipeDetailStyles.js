import { StyleSheet } from 'react-native';

const RecipeDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#fff3e0',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ffe0b2',
  },
  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  category: {
    fontSize: 16,
    color: '#f4511e',
    fontWeight: '600',
    marginTop: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoItem: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 12,
    color: '#999',
    textTransform: 'uppercase',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#f4511e',
    paddingLeft: 10,
  },
  ingredientItem: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
    paddingLeft: 5,
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f4511e',
    marginRight: 10,
    width: 25,
  },
  stepText: {
    fontSize: 16,
    color: '#444',
    flex: 1,
    lineHeight: 22,
  },
  favoriteButton: {
    backgroundColor: '#f4511e',
    padding: 15,
    borderRadius: 30,
    margin: 20,
    alignItems: 'center',
  },
  favoriteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  unfavoriteButton: {
    backgroundColor: '#ccc',
  },
});

export default RecipeDetailStyles;
