import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, ScrollView, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';
import { styles } from '../assets/styles/Style';
import aloe from '../assets/images/aloe.png';
Icon.loadFont();

class AloeVera extends Component{
  static navigationOptions = {
      //To hide the ActionBar/NavigationBar
      headerShown: false,
  };
    render(){
        return(
            <ScrollView>
            <StatusBar barStyle="light-content" />
            <Appbar.Header style={{backgroundColor:'#056608'}}>
            <Appbar.Content title="Aloe Vera" titleStyle={{ fontSize: 27}}/>
            <Appbar.Action />
             <Appbar.Action />
            </Appbar.Header>
                <View style={{flexDirection:'column', alignItems:'center', backgroundColor: '#fff'}}>
                    <Image source={aloe} />
                </View>
                <View style={styles.productCard}>
                    <View style={styles.productContent}>
                    <View style={ styles.titleContainer }>
                    <Text style={styles.productTitle}>Aloe Vera</Text>
                    <View style={ styles.priceTagContainer }>
                    <Text style={ styles.priceTag}>$80</Text>
                    </View>
                    </View>

                    <Text style={styles.productDes}>
                    Description
                    </Text>
                    <Text style={[styles.productInfo,{marginBottom:20, marginRight:25}]}>
                    Aloe vera is made up of 99.5% water, but the . 5% solid portions are
                    known to have the most active nutrients. Aloe seems to be able to speed
                    wound healing by improving blood circulation through the area.
                    </Text>
                    <TouchableOpacity style={ styles.button}>
                        <Text style={ styles.buttonText }>Buy</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}


export default AloeVera;
