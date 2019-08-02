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
  Text
} from 'react-native';


import api from '../config/api';

export default class Posts extends React.Component {

  static navigationOptions = {
    headerStyle:{
      backgroundColor:"#B79944"
    }
  }

  constructor(props){
    super(props);
    this.state={
      posts:[],
      isLoading : false
    };
  }

 
  render(){
    
    return (
      <View style={styles.container}>
        <Text>OK</Text>
        
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
