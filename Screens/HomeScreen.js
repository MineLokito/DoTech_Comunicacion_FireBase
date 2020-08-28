import  React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from "react-native"
import * as firebase from 'firebase'


export default class HomeScreen extends React.Component {
    state = {
        email: "",
        displayName: ""
    };
    

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;
        this.setState({ email, displayName });
    }
    singOutUser = () => {
        firebase.auth().signOut();
    }
    

    render() {
      LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
                <Text>Hola {this.state.email}!</Text>

                <TouchableOpacity style={{ marginTop: 32}} onPress={this.singOutUser}>
                <Text style={{ color: "#E9446A", fontWeight: "500", }}> salir</Text>
                </TouchableOpacity>
            </View>
        );
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
});

