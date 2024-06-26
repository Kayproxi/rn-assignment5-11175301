import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView} from 'react-native';

const MyCards = () => {
  return (
   <View style ={styles.container}><Text>My Cards</Text></View>
  );
};
const styles = StyleSheet.create({
    container:{
      backgroundColor:'grey'
    },
  });

export default MyCards;