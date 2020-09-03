import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as firebase from 'firebase'


var email = ""
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        user.providerData.forEach(function (profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            email = profile.email
        });
    } else {

    }
}); 

const Header = props => (
    <View style={styles.container}>
    <TouchableWithoutFeedback onPress={() => props.toggle()}>
            <Ionicons name="md-menu" size={28} color="white" />
        </TouchableWithoutFeedback>
        <Text style={styles.greeting}>{`Bienvenido(a) \n `}{email}</Text>
       
        <Ionicons name="md-contact" size={40} color="white" />
    </View>
)


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#CB2436",
        paddingHorizontal: 15


    },
    greeting: {
        color: "white"
    }

});
export default Header