import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';

export const HomeScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => console.log('Navigating to Products')}
      >
        <Text style={globalStyles.buttonText}>Productos</Text>
      </Pressable>
    </View>
  );
};
