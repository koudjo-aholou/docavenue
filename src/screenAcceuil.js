/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Header from './components/header';
import BodyAccueil from './components/bodyAccueil';

export default class Acceuil extends React.Component {

 
  render(){
    
    return (
      <View style={styles.container}>
        <Header />
        <BodyAccueil navigation={this.props.navigation} /> 
        
      </View>
    );
  };
};

const styles = StyleSheet.create({

 container:{
  backgroundColor: "#44a7b7",
  flex:1,
  width:'100%',
  flexDirection: 'column'
 }

});
