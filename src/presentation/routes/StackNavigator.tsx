import { AboutScreen } from '@/screens/about';
import { HomeScreen } from '@/screens/home';
import { ProductScreen, ProductsScreen } from '@/screens/products';
import { ProfileScreen } from '@/screens/profile';
import { SettingsScreen } from '@/screens/settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
