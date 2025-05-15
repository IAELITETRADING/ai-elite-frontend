import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DocsScreen from '../screens/DocsScreen';
import CGUScreen from '../screens/CGUScreen';
import FAQScreen from '../screens/FAQScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Accueil" component={HomeScreen} />
      <Stack.Screen name="Connexion" component={LoginScreen} />
      <Stack.Screen name="Inscription" component={RegisterScreen} />
      <Stack.Screen name="Profil" component={ProfileScreen} />
      <Stack.Screen name="Documentation" component={DocsScreen} />
      <Stack.Screen name="CGU" component={CGUScreen} />
      <Stack.Screen name="FAQ" component={FAQScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
