import React, { useState, useEffect } from 'react';
import { 
  ScrollView, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform, 
  Alert 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddRecipeStyles from '../styles/AddRecipeStyles';

const AddRecipeScreen = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = 
      name.trim().length > 0 && 
      category.trim().length > 0 && 
      prepTime.trim().length > 0 && 
      difficulty.trim().length > 0 && 
      ingredients.trim().length > 0;
    
    setIsFormValid(isValid);
  }, [name, category, prepTime, difficulty, ingredients]);

  const handleSave = () => {
    const summary = `
      Nombre: ${name}
      Categoría: ${category}
      Tiempo: ${prepTime}
      Dificultad: ${difficulty}
      Ingredientes: ${ingredients}
    `;

    Alert.alert(
      '¡Receta Guardada!',
      `Has creado una nueva receta con éxito: ${summary}`,
      [{ text: 'Excelente', onPress: handleClear }]
    );
  };

  const handleClear = () => {
    setName('');
    setCategory('');
    setPrepTime('');
    setDifficulty('');
    setIngredients('');
  };

  return (
    <SafeAreaView style={AddRecipeStyles.container} edges={['right', 'left', 'bottom']}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={AddRecipeStyles.keyboardView}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        <ScrollView style={AddRecipeStyles.scrollView} showsVerticalScrollIndicator={false}>
          <Text style={AddRecipeStyles.headerText}>Registra tu Creación 👨‍🍳</Text>
          
          <View style={AddRecipeStyles.inputGroup}>
            <Text style={AddRecipeStyles.label}>Nombre de la Receta *</Text>
            <TextInput
              style={AddRecipeStyles.input}
              placeholder="Ej: Sancocho de Gallina"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={AddRecipeStyles.inputGroup}>
            <Text style={AddRecipeStyles.label}>Categoría *</Text>
            <TextInput
              style={AddRecipeStyles.input}
              placeholder="Ej: Colombiana, Postre..."
              value={category}
              onChangeText={setCategory}
            />
          </View>

          <View style={AddRecipeStyles.row}>
            <View style={[AddRecipeStyles.inputGroup, AddRecipeStyles.rowItem]}>
              <Text style={AddRecipeStyles.label}>Tiempo (min) *</Text>
              <TextInput
                style={AddRecipeStyles.input}
                placeholder="Ej: 45"
                keyboardType="numeric"
                value={prepTime}
                onChangeText={setPrepTime}
              />
            </View>
            <View style={[AddRecipeStyles.inputGroup, AddRecipeStyles.rowItem]}>
              <Text style={AddRecipeStyles.label}>Dificultad *</Text>
              <TextInput
                style={AddRecipeStyles.input}
                placeholder="Baja/Media/Alta"
                value={difficulty}
                onChangeText={setDifficulty}
              />
            </View>
          </View>

          <View style={AddRecipeStyles.inputGroup}>
            <Text style={AddRecipeStyles.label}>Ingredientes *</Text>
            <TextInput
              style={[AddRecipeStyles.input, { height: 100, textAlignVertical: 'top' }]}
              placeholder="Ej: Pollo, Papa, Yuca..."
              multiline
              value={ingredients}
              onChangeText={setIngredients}
            />
          </View>

          <View style={AddRecipeStyles.buttonContainer}>
            <TouchableOpacity style={AddRecipeStyles.clearButton} onPress={handleClear}>
              <Text style={AddRecipeStyles.clearButtonText}>Limpiar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[AddRecipeStyles.saveButton, !isFormValid && AddRecipeStyles.disabledButton]}
              onPress={handleSave}
              disabled={!isFormValid}
            >
              <Text style={AddRecipeStyles.saveButtonText}>Guardar Receta</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddRecipeScreen;
