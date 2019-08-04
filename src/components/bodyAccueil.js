import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
//Adapter largeur et hauteur en fonction de l'écran
const { width, height } = Dimensions.get('window');
import LottieView from 'lottie-react-native';

export default function BodyAccueil(props) {
  const { 
    container, 
    width85per, 
    elements, 
    contLottie, 
    marginBotPercentage, 
    lottieView, 
    contBouton, 
    bouton, 
    textBouton 
  } = styles;
  //console.warn("width of the device : ",width, "height of the device :", height);

  return (
    <View style={container}>
      <View style={width85per}>
        <View style={elements}>
          <View style={contLottie}>
            <View style={marginBotPercentage} />
            <LottieView 
              source={require('../assets/lottie-accueil-news.json')} 
              style={lottieView} 
              autoPlay loop
              resizeMode="cover" 
            />
          </View>
          <View style={contBouton}>
             <TouchableOpacity
                style={bouton}
                underlayColor='#fff'
                onPress={() => props.navigation.navigate('Posts') }
              >
              <Text style={textBouton}>Découvrir les posts</Text>
            </TouchableOpacity> 
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:3, 
    backgroundColor : "#44a7b7",
    alignItems:"center",
    justifyContent:"center"
  },
  width85per:{
    width:"85%",
    flex:2,
    //permet espace en haut et espace en bas
    justifyContent:"space-around",
    //backgroundColor:"purple"
  },
  elements:{
    //backgroundColor:'green', 
    width:'100%', 
    height:"90%", 
    alignItems:'center', 
    justifyContent:'space-between'
  },
  conLottie:{
    justifyContent:'center',
    alignItems:'center',
  },
  marginBotPercentage:{
    // Remplacement de MarginBottom : height * xxx de conLottie
    backgroundColor:'transparent', 
    height:'42%'
  },
  lottieView:{
    width:160, 
    height:150,
    //backgroundColor:'brown'
  },
  contBouton:{
    height:'10%', 
    width:"80%",
    //backgroundColor:'pink',
    justifyContent:'center',
  },
  bouton:{
    //paddingTop paddingBottom 10
    paddingTop:height * 0.0156 ,
    paddingBottom:height * 0.0156,
    borderRadius:30,
    width:"100%",
    borderWidth: 1,
    borderColor: '#B79944',
    backgroundColor:'#B79944'
  },
  textBouton:{
    textAlign:'center',
    //paddingLeft & paddingRight de 10
    paddingLeft :width * 0.0277,
    paddingRight :width * 0.0277,
    color:'#fff',
    fontSize:15,
    fontFamily: 'Roboto-Regular'
  } 
});
