import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home_screen';
import MyCards from './myCards_screen';
import Statistics from './Statistics_screen';
import Settings from './Settings_screen';
import { useTheme } from './themeContext';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView} from 'react-native';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  const { colors } = useTheme();
return (
    <NavigationContainer>
     <Tab.Navigator initialRouteName="home"
     screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'cog' : 'cog';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'user' : 'user';
        } else if (route.name === 'Details') {
          iconName = focused ? 'info' : 'info';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: colors.background },
      headerStyle: { backgroundColor: colors.background },
      headerTintColor: colors.text,
      tabBarStyle: { backgroundColor: colors.background },
    })}
     
     >
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