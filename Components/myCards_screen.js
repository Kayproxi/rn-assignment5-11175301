import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import { useTheme } from './themeContext';

const MyCards = () => {
    const { colors } = useTheme();
  return (
    <View style = {[styles.container, {backgroundColor: colors.background}]}><Text style={[styles.text, {color: colors.text}]}>My Cards</Text></View>
);
};
const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
    },
  });

export default MyCards;