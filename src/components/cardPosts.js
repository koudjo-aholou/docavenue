import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
//Adapter largeur et hauteur en fonction de l'écran
const { width, height } = Dimensions.get('window');

export default function Card(props) {
  const { 
    post, 
    postElements,
    width85per,
    postIdUserId,
    postTextIdUser,
    fontMontserrat,
    postTitleBody,
    textPostTitle,
    textPostBody
  } = styles;
  //console.warn("width of the device : ",width, "height of the device :", height);

  capitalizeFirstLetter = (string) => {
   if(typeof string == undefined) return;
    let firstLetter = string[0] || string.charAt(0);
    return firstLetter ? string.replace(/^./, firstLetter.toUpperCase()) : '';
  }

  return (
       <View style={post}>
        <View style={[postElements, width85per]}> 
          <View style={postIdUserId}>
            <Text style={[postTextIdUser, fontMontserrat]}>{props.userId}</Text>
            <Text style={[postTextIdUser, fontMontserrat]}>N°{props.id}</Text>
          </View>
          <View style={postTitleBody}>
            <Text style={[textPostTitle, fontMontserrat]}>{capitalizeFirstLetter(props.title)}</Text>
            <Text style={[textPostBody, fontMontserrat]}>{capitalizeFirstLetter(props.body)}</Text>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  post:{
    display:'flex', 
    justifyContent:'center', 
    alignItems:'center', 
    marginBottom:20,
  },
  postElements:{
    backgroundColor:'#619CC5',
    shadowColor: "#000",
    shadowOffset:
    {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6
  },
  width85per:{
    width:'85%'
  },
  postIdUserId:{
    flexDirection:'column', 
    alignItems:'flex-end', 
    backgroundColor:'#2EC7B5'
  },
  postTextIdUser:{
    color:'#fff',
    fontSize:16, 
    //paddingLeft & paddingRight de 30
    paddingLeft:width *0.08333,
    paddingRight:width *0.08333,
    paddingBottom: 10
 },
  fontMontserrat:{
    fontFamily: 'Montserrat-Regular'
},
  postTitleBody:{
    marginBottom:15,
    marginTop:15,
    fontWeight:'600'
 },
  textPostTitle:{
    color:'#fff', 
    textAlign:'center',
    //paddingLeft & paddingRight de 30
    paddingLeft:width *0.08333, 
    fontSize:15, 
    paddingRight:width *0.08333, 
    paddingBottom:10
  },
  textPostBody:{
    color:'#fff', 
    fontSize:14, 
    textAlign:'left',
    //paddingLeft & paddingRight de 30 
    paddingLeft:width *0.08333, 
    paddingRight:width *0.08333
  }
});
