import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import AppNavigator from './Components/app_navigator';
import { ThemeProvider } from './Components/themeContext';

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator/>
    </ThemeProvider>
  );
};

