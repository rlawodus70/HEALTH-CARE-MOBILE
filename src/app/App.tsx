/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import RootNavigator from '../navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App(){
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}

