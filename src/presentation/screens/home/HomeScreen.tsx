import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { PrimaryButton } from '../../components';
import { globalStyles } from '../../theme/theme';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products' as never)}
        title="Productos"
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        title="Settings"
      />
    </View>
  );
};
