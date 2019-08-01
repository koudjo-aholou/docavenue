import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import LottieView from 'lottie-react-native';

export default class BodyAccueil extends React.Component {

  render() {
    const {container, lottie, bouton, textBouton} = styles;
    
    return (
        <View style={container}>
          <View style={lottie}>
            <LottieView source={require('../assets/lottie-accueil-news.json')} autoPlay loop /> 
          </View>
            <View>
              <TouchableOpacity
                  style={bouton}
                  underlayColor='#fff'
                  onPress={() => this.props.navigation.navigate('Posts') }
                >
                <Text style={textBouton}>Découvrir les posts</Text>
              </TouchableOpacity>  
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:3, 
    backgroundColor : "#44a7b7", 
    justifyContent:"flex-end"
  },
  lottie:{
    flex:2
  },
  bouton:{
    marginRight:40,
    marginLeft:40,
    marginTop:20,
    marginBottom:20,
    paddingTop:10,
    paddingBottom:10,
    borderRadius:30,
    borderWidth: 1,
    width:"75%",
    borderColor: '#B79944',
    backgroundColor:'#B79944'
  },
  textBouton:{
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    color:'#fff'
  }
    
});
