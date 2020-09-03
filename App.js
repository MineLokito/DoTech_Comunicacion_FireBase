import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator, HeaderBackground} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons} from '@expo/vector-icons'
import { YellowBox } from 'react-native';

import LoadingScreen from './Screens/LoadingScreen'
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import MessageScreen from "./Screens/MessageScreen"
import NotificationScreen from "./Screens/NotificationScreen"
import PostScreen from "./Screens/PostSreen"
import ProfileScreen from "./Screens/ProfileScreen"


import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDxpYkxxtamu79jXGmZ4n9TtJabxYEoApY",
  authDomain: "dotech-1898d.firebaseapp.com",
  databaseURL: "https://dotech-1898d.firebaseio.com",
  projectId: "dotech-1898d",
  storageBucket: "dotech-1898d.appspot.com",
  messagingSenderId: "364110053039",
  appId: "1:364110053039:web:a0da4653c9b9711f3ade5a"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);

 const AppTabNavigator = createBottomTabNavigator(
   {
     Inicio: {
       screen: HomeScreen,
       navigationOptions: {
         tabBarIcon:({tintColor}) => <Ionicons name='md-pricetags' size={24} color={tintColor} />
       }
     },
     Anuncios: {
      screen: PostScreen,
      navigationOptions: {
        tabBarIcon:({tintColor}) => <Ionicons name='md-megaphone' size={24} color={tintColor}  />
      }
    },
    Chat: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon:({tintColor}) => <Ionicons name='md-chatbubbles' size={24} color={tintColor}  />
      }
    }
   },
   {
     tabBarOptions: {
      activeBackgroundColor:'#CB2436',
      inactiveBackgroundColor:'#CB2436',
      activeTintColor: '#9B9B9B',
      inactiveTintColor: 'white',
     }
   }
 );

 const AuthStack = createStackNavigator({
   Login: LoginScreen,
   Register: RegisterScreen 
 })

 export default createAppContainer(
   createSwitchNavigator(
     {
    Loading: LoadingScreen,
    App: AppTabNavigator,
    Auth: AuthStack
      },
      {
        initialRouteName: "Loading"
      }

   )
 );