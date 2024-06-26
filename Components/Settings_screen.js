import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Settings = () => {
  return (
   <SafeAreaView styles={styles.container}>
    <View style={styles.settings}><Text style={{textAlign:'center', fontSize: 25}}>Settings</Text></View>
        <View style={styles.option}>
            <TouchableOpacity style={styles.options}>
                <Text style={styles.size}>Language</Text>
                <Icon name="chevron-forward-outline" size={24} color="#8e8e8e" />
            </TouchableOpacity>
        </View>

        <View style={styles.option}>
            <TouchableOpacity style={styles.options}>
                <Text style={styles.size}>My Profile</Text>
                <Icon name="chevron-forward-outline" size={24} color="#8e8e8e" />
            </TouchableOpacity>
        </View>

        <View style={styles.option}>
            <TouchableOpacity style={styles.options}>
                <Text style={styles.size}>Contact Us</Text>
                <Icon name="chevron-forward-outline" size={24} color="#8e8e8e" />
            </TouchableOpacity>
        </View>

        <View style={styles.option}>
            <TouchableOpacity style={styles.options}>
                <Text style={styles.size}>Change Password</Text>
                <Icon name="chevron-forward-outline" size={24} color="#8e8e8e" />
            </TouchableOpacity>
        </View>

        <View style={styles.option}>
            <TouchableOpacity style={styles.options}>
                <Text style={styles.size}>Privacy Policy</Text>
                <Icon name="chevron-forward-outline" size={24} color="#8e8e8e" />
            </TouchableOpacity>
        </View>
        <View style={styles.switchView}>
            <Text style ={{fontSize: 25}}>Theme</Text>
            <Switch ios_backgroundColor="#8e8e8e"/>
        </View>
    
   </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  settings:{
    //backgroundColor:'grey',
    marginBottom:80,
    marginTop: 25,
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
    padding: 12
  },
});

export default Settings;