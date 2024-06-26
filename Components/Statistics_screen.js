import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import { useTheme } from './themeContext';

const Statistics = () => {
    const { colors } = useTheme();
  return (
   <View style = {[styles.container, {backgroundColor: colors.background}]}><Text style={[styles.text, {color: colors.text}]}>Statistics</Text></View>
  );
};

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
    },
  });

export default Statistics;
