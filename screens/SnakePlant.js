import React, {PureComponent} from 'react';
import {View, StatusBar, StyleSheet, Image, ScrollView, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';
import { styles } from '../assets/styles/Style';
import snake_plant from '../assets/images/snake_plant.png';

class SnakePlant extends PureComponent{
  static navigationOptions = {
      //To hide the ActionBar/NavigationBar
      headerShown: false,
  };
    render(){
        return(
            <ScrollView>
            <StatusBar barStyle="dark-content" />
            <Appbar.Header style={{backgroundColor:'#056608'}}>
            <Appbar.Content title="Snake Plant" titleStyle={{ fontSize: 27}}/>
            <Appbar.Action />
             <Appbar.Action />
            </Appbar.Header>
                 <View style={{flexDirection:'column', alignItems:'center'}}>
                    <Image source={snake_plant} />
                </View>
                <View style={styles.productCard}>
                    <View style={styles.productContent}>
                    <View style={ styles.titleContainer }>
                    <Text style={styles.productTitle}>Snake</Text>
                    <View style={ styles.priceTagContainer }>
                    <Text style={ styles.priceTag}>$50</Text>
                    </View>
                    </View>
                    <Text style={styles.productDes}>
                    Description
                    </Text>
                    <Text style={[styles.productInfo,{marginBottom:20, marginRight:25}]}>
                    The Snake plant purifies air by absorbing toxins through the leaves and producing pure oxygen.
                    In fact, the Sansevieria is an ideal bedroom plant.
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
export default SnakePlant;
