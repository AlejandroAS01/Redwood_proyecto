import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import {ApiProvider} from './src/api';
import Navigation from './src/navigation';

export default function App() {
  return (
    <ApiProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Navigation />
      </NavigationContainer>
    </ApiProvider>
  );
}
