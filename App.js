import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView} from 'react-native';

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
          <Text  style={styles.btntxt}>Sent</Text>
        </View>
         <View style={styles.transactions}>

        <View style={styles.buttons}><Image source={require('./assets/recieve.png')} style={styles.btnimg}/></View>
          <Text  style={styles.btntxt}>Recieve</Text>
        </View>

        <View style={styles.transactions}>

        <View style={styles.buttons}><Image source={require('./assets/loan.png')} style={styles.btnimg}/></View>
          <Text  style={styles.btntxt}>Loan</Text>
        </View>

        <View style={styles.transactions}>

        <View style={styles.buttons}><Image source={require('./assets/topUp.png')} style={styles.btnimg}/></View>
          <Text  style={styles.btntxt}>Topup</Text>
        </View>
                
        
      </View>

      <View style={styles.bottom}>
       <Text style={{ fontSize: 22, fontWeight: 400}}>Transaction</Text>
       <Text style={{fontSize: 17, fontWeight: 350, color: 'rgba(92, 100, 255, 1)'}}>Sell All</Text>
      </View>

      <ScrollView style={styles.bscroll}>
      <View style={styles.header2}>
        <View style={styles.profile2}><Image source={require('./assets/apple.png')}/></View>
        <View style={styles.greet2}>
          <Text style={styles.wlctxt2}>Apple Store</Text>
          <Text style={styles.name2}>Entertainment</Text>
        </View>
        <View style={styles.search1}><Text>-$5,99</Text></View>
      </View>

      <View style={styles.header2}>
        <View style={styles.profile2}><Image source={require('./assets/spotify.png')}/></View>
        <View style={styles.greet2}>
          <Text style={styles.wlctxt2}>Spotify</Text>
          <Text style={styles.name2}>Music</Text>
        </View>
        <View style={styles.search2}><Text>-$12,99</Text></View>
      </View>

      <View style={styles.header2}>
        <View style={styles.profile2}><Image source={require('./assets/moneyTransfer.png')}/></View>
        <View style={styles.greet2}>
          <Text style={styles.wlctxt2}>Money Transfer</Text>
          <Text style={styles.name2}>Transaction</Text>
        </View>
        <View style={styles.search3}><Text>$300</Text></View>
      </View>

      <View style={styles.header2}>
        <View style={styles.profile2}><Image source={require('./assets/grocery.png')}/></View>
        <View style={styles.greet2}>
          <Text style={styles.wlctxt2}>Grocery</Text>
          <Text style={styles.name2}>Foodstuff</Text>
        </View>
        <View style={styles.search4}><Text>-$88</Text></View>
      </View>
      </ScrollView>
      
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
 btntxt: {
  marginTop: 5,
  fontWeight: '300',
  fontSize: 17
 },
 bottom: {
  flexDirection:'row',
  justifyContent:'space-between',
  //backgroundColor:'rgba(167, 160, 160, 0.35)',
  marginTop: 25,
  paddingLeft: 20,
  paddingRight: 20
},
bscroll:{
  marginTop: 15,

},
profile2: {
  marginLeft: 20,
  backgroundColor:'rgba(167, 160, 160, 0.35)',
  alignItems:'center',
  justifyContent:'center',
  width: 50,
  height: 50,
  borderRadius: 50
},
greet2:{
  marginLeft: 20,
},
wlctxt2: {
  marginBottom: 1,
  fontSize: 20
},
name2: {
 fontSize: 14,
 color: 'grey'
},
header2: {
  flexDirection:'row',
  marginBottom: 25
 },
 search1: {
  
  backgroundColor:'rgba(167, 160, 160, 0.42)',
  width: 55,
  alignItems:'center',
  justifyContent:'center',
  borderRadius: 100,
  marginLeft: 150,
  alignSelf:'center'
},
search2: {
  
  backgroundColor:'rgba(167, 160, 160, 0.42)',
  width: 55,
  alignItems:'center',
  justifyContent:'center',
  borderRadius: 100,
  marginLeft: 190,
  alignSelf:'center'
},
search3: {
 
  backgroundColor:'rgba(167, 160, 160, 0.42)',
  width: 55,
  alignItems:'center',
  justifyContent:'center',
  borderRadius: 100,
  marginLeft: 110,
  alignSelf:'center'
},
search4: {
 
  backgroundColor:'rgba(167, 160, 160, 0.42)',
  width: 55,
  alignItems:'center',
  justifyContent:'center',
  borderRadius: 100,
  marginLeft: 175,
  alignSelf:'center'
},

});
