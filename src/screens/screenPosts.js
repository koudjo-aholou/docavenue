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

import Card from '../components/cardPosts';
import HeaderPost from '../components/headerPost';

export default class Posts extends React.Component {

  static navigationOptions = {
    headerStyle:{
      backgroundColor:"#11424D"
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
            this.setState({
              posts : this.state.posts.concat(page),
              isLoading: false,
              isLoaded: true
            });
          }
          //Continuer pour les n autres pages
        else{
          let page = posts.slice(debut, fin)
         // console.warn("page",this.state.page,"nb posts:",this.state.posts.concat(page).length)
          this.setState({
             posts : this.state.posts.concat(page),
             isLoading: false,
             isLoaded: true
          });
         }      
      }).catch((error) => {
        console.error(error);
      });
  }


  //Afficher les posts 
  renderPosts = ({item}) => {
    //console.warn(item)
    return(
      <Card 
        userId={item.userId}
        id={item.id}
        title={item.title}
        body={item.body}
      />
    ) 
  };

  renderHeader = () => {
    if(this.state.page ==1 ){
      return (
        <HeaderPost 
          headerTitle="Bienvenue !"
          display={false}
          headerTitle2=""
        />
      )
    }else{
      return (
        <HeaderPost 
          headerTitle="Wow !"
          display={true}
          headerTitle2={"Vous avez lu l'équivalent de "+this.state.page+" pages !"}
        />
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
          <LottieView source={require('../assets/lottie-loading-posts.json')} autoPlay loop /> 
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
 rendFooter:{
  paddingVertical: 20
 }
});
