import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
//Adapter largeur et hauteur en fonction de l'écran
const { width, height } = Dimensions.get('window');
import LottieView from 'lottie-react-native';

export default class BodyAccueil extends React.Component {

  render() {
    const {container, lottie, bouton, textBouton} = styles;
    console.warn("width of the device : ",width, "height of the device :", height);

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
                <Text style={textBouton}>Découvrir les témoignages</Text>
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
   //marginLeft & marginRight de 40 
    marginRight:width * 0.1111,
    marginLeft:width * 0.1111,
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
    //paddingLeft & paddingRight de 10
    paddingLeft :width * 0.0277,
    paddingRight :width * 0.0277,
    color:'#fff'
  }
    
});
