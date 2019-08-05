import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  View
} from 'react-native';

import Accueil from '../src/screenAcceuil';
import Posts from '../src/screenPosts';



const AppNavigator = createStackNavigator(
	{
	  Accueil: {
	  	screen: Accueil,  
	  	navigationOptions: () => ({ header: null })
	  },
	  Posts: {
	  	screen: Posts, 
	  	navigationOptions: () => ({ 
	  		title: 'Posts', 
	  		headerRight: <View /> })
	  },
	},{
		defaultNavigationOptions:{
			headerStyle:{
	  		backgroundColor:'#11424D'
			},
			title: 'Nouvelle Page',
    		headerTintColor: '#fff',
    		headerTitleStyle: { flex:1, textAlign: 'center' },
    		headerRight: <View />
  		}
	}
);



export default Navigation = createAppContainer(AppNavigator)
