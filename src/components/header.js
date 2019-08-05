import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
//Adapter largeur et hauteur en fonction de l'écran
const { width, height } = Dimensions.get('window');

export default function Header() {

  const {container, picture, width85per} = styles;

    return (
      <View style={container}>
        <View style={width85per}>
          <Image 
            source={require('../assets/docavenue-logo-white.png')} 
            style={picture}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#11424D", 
    justifyContent:"center", 
    alignItems:"center", 
    flex:0.7
  },
  width85per:{
    width:"85%"
  },
  picture:{
    height: height * 0.047,
    width:"100%",
  }  
});
