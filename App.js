import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <View style={styles.profile}><Image source={require('./assets/profile.png')}/></View>
        <View style={styles.greet}>
          <Text style={styles.wlctxt}>Welcome back,</Text>
          <Text style={styles.name}>Eric Atsu</Text>
        </View>
        <View style={styles.search}><Image source={require('./assets/search.png')}/></View>
      </View>

      <View style={styles.card}><Image source={require('./assets/Card.png')} style={styles.cardimg}/></View>

      <View style={styles.tranhead}>
        <View style={styles.transactions}>

        <View style={styles.buttons}><Image source={require('./assets/send.png')} style={styles.btnimg}/></View>
          <Text>Sent</Text>
        </View>
         <View style={styles.transactions}>

        <View style={styles.buttons}><Image source={require('./assets/recieve.png')} style={styles.btnimg}/></View>
          <Text>Sent</Text>
        </View>

        <View style={styles.transactions}>

        <View style={styles.buttons}><Image source={require('./assets/loan.png')} style={styles.btnimg}/></View>
          <Text>Sent</Text>
        </View>

        <View style={styles.transactions}>

        <View style={styles.buttons}><Image source={require('./assets/topUp.png')} style={styles.btnimg}/></View>
          <Text>Sent</Text>
        </View>
                
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   },
   header: {
    flexDirection:'row',
   },
   profile: {
     marginLeft: 20,
   },
  greet:{
    marginLeft: 15,
  },
  wlctxt: {
     marginBottom: 5,
     color: 'grey'
  },
  name: {
    fontSize: 21
  },
  search: {
    marginLeft: 10,
    backgroundColor:'rgba(167, 160, 160, 0.42)',
    width: 50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 100,
    marginLeft: 150
  },
  card: {
    //backgroundColor:'grey',
    width:'auto',
    height: 'auto',
    padding: 25,
    marginTop: 10,
    alignItems:'center',
    justifyContent:'center',
  },
  cardimg: {
  width: 380,
  height: 220,
  },
  tranhead: {
    flexDirection:'row',
    justifyContent:'space-around'
  },
  transactions: {
    width: 'auto',
    height: 'auto',
    //backgroundColor:'rgba(167, 160, 160, 0.42)',
    alignItems:'center',
  },
  buttons: {
    backgroundColor:'rgba(167, 160, 160, 0.35)',
    width: 70,
    height: 70,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 100,
  },
 btnimg: {
  //height: '200',
  //width: '200'
 },
});
