import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default class Header extends React.Component {


  render() {
    const {container, picture} = styles;

    return (
      <View style={container}>
        <View style={{width:"85%"}}>
          <Image source={require('../assets/docavenue-logo-white.png')} 
                  style={picture}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#11424D", 
    justifyContent:"center", 
    alignItems:"center", 
    flex:1
  },
  picture:{
    height: 45, 
    width:"100%"
  }
    
});
