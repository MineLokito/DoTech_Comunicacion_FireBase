import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './Screens/LoadingScreen'
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'

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
firebase.initializeApp(firebaseConfig);
 const AppStack = createStackNavigator({
   home: HomeScreen
 })

 const AuthStack = createStackNavigator({
   Login: LoginScreen,
   Register: RegisterScreen 
 })

 export default createAppContainer(
   createSwitchNavigator({
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack
      },
      {
        initialRouteName: "Loading"
      }

   )
 );