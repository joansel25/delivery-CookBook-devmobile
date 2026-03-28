import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const AddRecipeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Añadir Receta (Próximamente en Hito 3)</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddRecipeScreen;
