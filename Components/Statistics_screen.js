import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView} from 'react-native';


const Statistics = () => {
  return (
   <View style = {styles.container}><Text>Statistics</Text></View>
  );
};

const styles = StyleSheet.create({
    container:{
      backgroundColor:'grey'
    },
  });

export default Statistics;
