import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import cookingTipsData from '../data/cookingTipsData';
import CookingTipsStyles from '../styles/CookingTipsStyles';

const CookingTipsScreen = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextTip();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentTipIndex]);

  const handleNextTip = () => {
    setCurrentTipIndex((prevIndex) => 
      prevIndex === cookingTipsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <SafeAreaView style={CookingTipsStyles.container} edges={['right', 'left', 'bottom']}>
      <View style={CookingTipsStyles.content}>
        <View style={CookingTipsStyles.card}>
          <Text style={CookingTipsStyles.tipIcon}>💡</Text>
          <Text style={CookingTipsStyles.tipText}>
            "{cookingTipsData[currentTipIndex]}"
          </Text>
          <View style={CookingTipsStyles.progressContainer}>
            <Text style={CookingTipsStyles.progressText}>
              CONSEJO {currentTipIndex + 1} DE {cookingTipsData.length}
            </Text>
          </View>
        </View>

        <View style={CookingTipsStyles.controls}>
          <TouchableOpacity 
            style={CookingTipsStyles.nextButton} 
            onPress={handleNextTip}
            activeOpacity={0.8}
          >
            <Text style={CookingTipsStyles.nextButtonText}>Siguiente Tip</Text>
            <Text style={{ fontSize: 18, color: '#fff' }}>➔</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CookingTipsScreen;
