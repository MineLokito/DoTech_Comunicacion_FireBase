import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import * as firebase from 'firebase'
import SideMenu from 'react-native-side-menu';

import Header from './Components/Header'
import MenuDesplegable from './Components/MenuDesplegable';


export default class HomeScreen extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            isOpen: false
        }
    }
    toggle(){
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    updateMenu(isOpen){
        this.setState({isOpen})
    }

    singOutUser = () => {
        firebase.auth().signOut();
    }
    render() {
        return (
            <View style={[{ flex: 1 }, styles.container]}>
                <SideMenu
                menu={<MenuDesplegable/>}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenu(isOpen)}
                >
                    <Header toggle={this.toggle.bind(this)}/>
                    <TouchableOpacity style={{ marginTop: 200 }} onPress={this.singOutUser}>
                    <Text style={{ color: "#E9446A", fontWeight: "500", }}> salir</Text>
                </TouchableOpacity>
                </SideMenu> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'

    }
});

