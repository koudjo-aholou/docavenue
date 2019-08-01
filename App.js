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

import Acceuil from './src/screenAcceuil';

export default class App extends React.Component {

  render(){
    
    return (
      <View style={styles.container}>
        <Acceuil />
      </View>
    );
  };
};

const styles = StyleSheet.create({

 container:{
  backgroundColor: "#44a7b7",
  flex:1,
  width:'100%',
  flexDirection: 'column',
  justifyContent: 'space-around',
 }

});
