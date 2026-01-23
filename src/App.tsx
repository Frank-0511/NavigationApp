import { StackNavigator } from '@/routes/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
