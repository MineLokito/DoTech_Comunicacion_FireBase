import React from "react";
import {View, Text, StyleSheet } from "react-native";
 export default class ProfileScreen extends React.Component{
     render(){
         return(
             <View style={styles.container}>
                 <Text>Pantalla de perfil</Text>
             </View>
         );
     }
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         alignItems: "center",
         justifyContent: "center"
     }
 });