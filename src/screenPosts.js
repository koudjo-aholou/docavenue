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
} from 'react-native';

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
      isLoading : false,
      isLoaded:false
    };
  }

  componentDidMount(){
    this.getData();
  }

  // componentDidUpdate(){
  //   console.warn(this.state.posts);

  // }

  //appel BDD
  getData = () =>{
    this.setState({ isLoading: true });
    ctx = this;

    //Fetch vers post
    fetch(api)
      .then((response) =>{
        return response.json();
    
      }).then((data) =>{
        const posts = [];
        //Recupérer les 50 premiers posts
        for(let i = 0; i < 50; i++){
          posts.push(data[i]);
        };
        //console.warn(posts);

        //Filtrer de A à Z
        posts.sort((a, b) => {
          if(a.title < b.title) { return -1; }
          if(a.title > b.title) { return 1; }
          return 0;
        })

       // console.warn(posts);
        ctx.setState({
          posts,
          isLoading: false,
          isLoaded: true
        });
      }).catch((error) => {
        console.error(error);
      });
  }

    //Afficher les posts (inté temporaire avant choix librairie + pagination)
    renderPosts = (posts) => (
      posts ?
        this.state.posts.map( (post) =>(
        <View key={post.id} style={{width:'100%', alignItems:'center', textAlign:'center', flex: 1, justifyContent:'center'}}>
          <Text>Id User : {post.userId}</Text>
          <Text>Id Post : {post.id}</Text>
          <Text>{post.title}</Text>
          <Text>{post.body} </Text>
        </View>
        ))
      : null
    );

 
  render(){
    const { loading, background, container} = styles;

    if(this.state.isLoading){
      return( 
        <View style={[loading, background]}>
          <LottieView source={require('./assets/lottie-loading-posts.json')} autoPlay loop /> 
        </View>
      )
    }else{

      return (
        <ScrollView style={[ container, background]}>
          <View>
            {this.renderPosts(this.state.isLoaded)}
          </View>
        </ScrollView>
    );
    }
    
  };
};

const styles = StyleSheet.create({

 container:{
    flex:1,
    width:'100%',
    flexDirection: 'column'
 },
 background:{
  backgroundColor: "#A0D6DF",
},
 loading:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
 }

});
