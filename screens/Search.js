import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();

class Search extends Component{

    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    render(){
        return(
        <View style={{padding:15}}>
        <SearchBar
        placeholder="Search plant name"
        onChangeText={search=>this.setState({search})}
        value={this.state.search}
      />
            </View>
        )
    }
}

export default Search;
