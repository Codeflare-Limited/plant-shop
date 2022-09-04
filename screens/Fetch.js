import React, {Component} from 'react';
import {View, StyleSheet, Alert, Text} from 'react-native';
import axios from 'axios';
 

class Fetch extends Component {


    fetchRecords = () => {
        let one = "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
        let two = "https://reqres.in/api/users?page=2";

        const requestOne = axios.get(one);
        const requestTwo = axios.get(two);

        axios.all([requestOne, requestTwo])
        .then(
            axios.spread((...responses) => {
                if(responses[0].status === 200){
                    // console.warn(responses[0]);
                }

                if(responses[1].status === 200){
                    console.warn(responses[1].data)
                }
            })
        ).catch((error) => {
            Alert.alert("Something went wrong", error.message);
        });

        
    }

    componentDidMount(){
        this.fetchRecords();
    }

   
    render(){
        return(
            <View>

            </View>

        )
    }
}

export default Fetch;