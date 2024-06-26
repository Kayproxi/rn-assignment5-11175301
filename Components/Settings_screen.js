import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from './themeContext';


const Settings = () => {
    const { colors, isDarkMode, toggleTheme} = useTheme();
  return (
  
   <SafeAreaView >
    <View style={{backgroundColor: colors.background}}>
        <View style={styles.settings}><Text style={[{textAlign:'center', fontSize: 25, color: colors.text}]}>Settings</Text></View>
            <View style={[styles.option]}>
                <TouchableOpacity style={styles.options}>
                    <Text style={[styles.size, {color: colors.text}]}>Language</Text>
                    <Icon name="chevron-forward-outline" size={24} color="#8e8e8e" />
                </TouchableOpacity>
            </View>

            <View style={styles.option}>
                <TouchableOpacity style={styles.options}>
                    <Text style={[styles.size, {color: colors.text}]}>My Profile</Text>
                    <Icon name="chevron-forward-outline" size={24} color="#8e8e8e" />
                </TouchableOpacity>
            </View>

            <View style={styles.option}>
                <TouchableOpacity style={styles.options}>
                    <Text style={[styles.size, {color: colors.text}]}>Contact Us</Text>
                    <Icon name="chevron-forward-outline" size={24} color="#8e8e8e" />
                </TouchableOpacity>
            </View>

            <View style={styles.option}>
                <TouchableOpacity style={styles.options}>
                    <Text style={[styles.size, {color: colors.text}]}>Change Password</Text>
                    <Icon name="chevron-forward-outline" size={24} color="#8e8e8e" />
                </TouchableOpacity>
            </View>

            <View style={styles.option}>
                <TouchableOpacity style={styles.options}>
                    <Text  style={[styles.size, {color: colors.text}]}>Privacy Policy</Text>
                    <Icon name="chevron-forward-outline" size={24} color="#8e8e8e" />
                </TouchableOpacity>
            </View>
            <View style={styles.switchView}>
                <Text style ={[{fontSize: 25}, {color: colors.text}]}>Theme</Text>

                <Switch trackColor={{ false: colors.switchTrack, true: colors.switchTrack }}
            thumbColor={isDarkMode ? colors.switchThumb : colors.switchThumb}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleTheme}
            value={isDarkMode}/>

            </View>
       </View>
   </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  settings:{
    marginBottom:80,
    marginTop: 20,
  },
  options:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(86, 85, 96, 0.15)',
    paddingBottom: 10,
    paddingLeft:4,
    paddingRight:4,
  },
  size:{
    fontSize: 20,
  },
  option: {
    padding: 10
  },
  switchView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 60,
    padding: 12,
    height:320,
  },
});

export default Settings;