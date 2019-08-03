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
  ScrollView,
  Text,
  FlatList,
  ActivityIndicator,
  Dimensions
} from 'react-native';

//Adapter largeur et hauteur en fonction de l'écran
const { width, height } = Dimensions.get('window');
import LottieView from 'lottie-react-native';
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
      page:1,
      postMax:50,
      isLoading : false,
      isLoaded:false
    };
  }

  componentDidMount(){
    this.getData();
  }

   // componentDidUpdate(){
   //   console.warn("page :",this.state.page);
   // }

  //appel BDD
  getData = () =>{
    this.setState({ isLoading: true });
    ctx = this;
    //Fetch vers post
   // fetch(`${api}?_limit=10&_page=${this.state.page}`)
    fetch(`${api}`)
      .then((response) =>{
        return response.json();
    
      }).then((data) =>{
        const posts = [];
         //Recupérer les 50 premiers posts cf nombre dans this.state.postMax
         for(let i = 0; i < this.state.postMax; i++){
           posts.push(data[i]);
         };
        //console.warn(posts);

        //Filtrer de A à Z
         posts.sort((a, b) => {
           if(a.title < b.title) { return -1; }
           if(a.title > b.title) { return 1; }
           return 0;
         })

         //Afficher en partant de 0 en page 1
         let debut = (10-1) * (this.state.page -1);
        // console.warn(debut)

         //Afficher de 10 en 10
         let fin = (10-1) * this.state.page;
        // console.warn(fin)

         if(this.state.page ===1){
            let page = posts.slice(debut, fin);
            //console.warn("page1",page.length)
            ctx.setState({
              posts : this.state.posts.concat(page),
              isLoading: false,
              isLoaded: true
            });
          }
          //Continuer pour les n autres pages
        else{
          let page = posts.slice(debut, fin)
         // console.warn("page",this.state.page,"nb posts:",this.state.posts.concat(page).length)
          ctx.setState({
             posts : this.state.posts.concat(page),
             isLoading: false,
             isLoaded: true
          });
         }      
      }).catch((error) => {
        console.error(error);
      });
  }

  capitalizeFirstLetter = (string) => {
   if(typeof string == undefined) return;
    let firstLetter = string[0] || string.charAt(0);
    return firstLetter ? string.replace(/^./, firstLetter.toUpperCase()) : '';
  }

  //Afficher les posts 
  renderPosts = ({item, index}) => {
    //console.warn(item)
    return(
      <View style={styles.post}>
        <View style={[styles.postElements, styles.width85per]}> 
          <View style={styles.postIdUserId}>
            <Text style={[styles.postTextIdUser, styles.fontMontserrat]}>{item.userId}</Text>
            <Text style={[styles.postTextIdUser, styles.fontMontserrat]}>N°{item.id}</Text>
          </View>
          <View style={styles.postTitleBody}>
            <Text style={[styles.textPostTitle, styles.fontMontserrat]}>{this.capitalizeFirstLetter(item.title)}</Text>
            <Text style={[styles.textPostBody, styles.fontMontserrat]}>{this.capitalizeFirstLetter(item.body)}</Text>
          </View>
        </View>
      </View>
    ) 
  };

  renderHeader = () => {
    if(this.state.page ==1 ){
      return (
        <View style={styles.rendHeader}>
          <View style={styles.width85per}>
            <Text style={[styles.textRendHea, styles.fontRoboto]}>Bienvenue ! </Text>
          </View>
        </View>
      )
    }else{
      return (
        <View style={styles.rendHeader}>
          <View style={styles.width85per}>
            <Text style={[styles.textRendHea, styles.fontRoboto]}>Wow!</Text>
            <Text style={[styles.textRendHea, styles.fontRoboto]}>Vous avez lus l'équivalent de {this.state.page} pages ! </Text>
          </View>
        </View>
      )
    }
  };

  renderFooter = () => {
    if (!this.state.isLoading) return null;
    return (
      <View style={styles.rendFooter}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  //Afficher le reste des posts initialement max 50
  handleLoadMore = () => {
    if(this.state.posts.length < this.state.postMax){
       this.setState(
      {
      page: this.state.page +1
      },
      this.getData
    )
    }else{
      //console.warn("Max atteint 50");
    }
  }

  render(){
    const { loading, background, container} = styles;
    //console.warn("width of the device : ",width, "height of the device :", height);

    if(this.state.isLoaded === false){
      return( 
        <View style={[loading, background]}>
          <LottieView source={require('./assets/lottie-loading-posts.json')} autoPlay loop /> 
        </View>
      )
    }else{
      return (
        <FlatList
          data={this.state.posts}
          style={[container, background]}
          ListHeaderComponent={this.renderHeader}
          renderItem={this.renderPosts}
          ListFooterComponent={this.renderFooter}
          keyExtractor={(item, index) =>item.id.toString()}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.01}
          />
      )
    }
  };
};

const styles = StyleSheet.create({

 container:{
    flex:1,
    width:'100%',
    flexDirection: 'column'
 },
 width85per:{
  width:'85%'
 },
 background:{
  backgroundColor: "#EFF7FD"
},
fontMontserrat:{
  fontFamily: 'Montserrat-Regular'
},
fontRoboto:{
  fontFamily: 'Roboto-Regular'
},
 loading:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
 },
 rendHeader:{
  marginBottom: 20, 
  marginTop: 20,
  fontSize:17, 
  display:'flex', 
  justifyContent:'center', 
  alignItems:'center'
 },
 textRendHea:{
  fontSize:20,
  textAlign:'left'
 },
 rendFooter:{
  paddingVertical: 20
 },
 post:{
  display:'flex', 
  justifyContent:'center', 
  alignItems:'center', 
  marginBottom:20,
 },
 postElements:{
  backgroundColor:'#619CC5',
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  elevation: 6
 },
 postTitleBody:{
  marginBottom:15,
  marginTop:15,
  fontWeight:'600'
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
