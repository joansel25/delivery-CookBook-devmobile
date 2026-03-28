import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const CookingTipsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Consejos de Cocina (Próximamente en Hito 3)</Text>
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

export default CookingTipsScreen;
