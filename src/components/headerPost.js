import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
//Adapter largeur et hauteur en fonction de l'écran
const { width, height } = Dimensions.get('window');

export default function HeaderPost(props) {
  const { 
    rendHeader,
    width85per,
    textRendHea,
    fontRoboto,
    displayNone
  } = styles;
  //console.warn("width of the device : ",width, "height of the device :", height);

  let display;
  if(!props.display){
    display = displayNone;
  }

  return (
   <View style={rendHeader}>
      <View style={width85per}>
        <Text style={[textRendHea, fontRoboto,]}>{props.headerTitle}</Text>
        <Text style={[textRendHea, fontRoboto, display]}>{props.headerTitle2}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rendHeader:{
    marginBottom: 20, 
    marginTop: 20,
    fontSize:17, 
    display:'flex', 
    justifyContent:'center', 
    alignItems:'center'
  },
  width85per:{
    width:'85%'
  },
  textRendHea:{
    fontSize:20,
    textAlign:'left'
  },
  fontRoboto:{
    fontFamily: 'Roboto-Regular'
  },  
  displayNone:{
    display:'none'
  }, 
});
