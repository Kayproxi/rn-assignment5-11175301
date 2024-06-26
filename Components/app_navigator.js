import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home_screen';
import MyCards from './myCards_screen';
import Statistics from './Statistics_screen';
import Settings from './Settings_screen';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView} from 'react-native';

const Tab = createBottomTabNavigator();

function AppNavigator() {
return (
    <NavigationContainer>
     <Tab.Navigator initialRouteName="home">
       <Tab.Screen name="Home" component={Home} options={{  headerShown: false, tabBarIcon: () => (
        <Image source={require('./assets/home.png')} style={{ width:24, height:24}}/>
       )}}/>
       <Tab.Screen name="MyCards" component={MyCards} options={{ headerShown: false, tabBarIcon: () => (
        <Image source={require('./assets/myCards.png')} style={{ width:24, height:24}}/>
       )}}/>
        <Tab.Screen name="Statistics" component={Statistics} options={{ headerShown: false,tabBarIcon: () => (
        <Image source={require('./assets/statictics.png')} style={{ width:24, height:24}}/>
       )}}/>
        <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false,tabBarIcon: () => (
        <Image source={require('./assets/settings.png')} style={{ width:24, height:24}}/>
       )}}/>
     </Tab.Navigator>
  </NavigationContainer>
);
}

export default AppNavigator;