import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Accueil from '../src/screenAcceuil';
import Posts from '../src/screenPosts';


const AppNavigator = createStackNavigator(
  {
  Accueil: {screen: Accueil,  navigationOptions: { header: null }},
  Posts: {screen:Posts, navigationOptions: { header: "Posts" }},
  }
);



export default Navigation = createAppContainer(AppNavigator)
