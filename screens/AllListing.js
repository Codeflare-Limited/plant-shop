import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import ivy from '../assets/images/ivy.png';
import snake_plant from '../assets/images/snake_plant.png';
import aloe from '../assets/images/aloe.png';
import violet from '../assets/images/violet.png';
import parlor from '../assets/images/parlor.png';
import spider from '../assets/images/spider.png';
import fig from '../assets/images/fig.png';
import umbrella from '../assets/images/umbrella.png';
import { Appbar } from 'react-native-paper';
import OptionsMenu from 'react-native-option-menu';
Icon.loadFont();



class AllListing extends Component{
    render(){
        return(
            <View>
                  <ScrollView>
        {/* FIRST COLUMN */}
        <View style={styles.recentScrollContainer}>
        <View style={styles.recentContainer}>
        <View style={styles.recentFirsColumn}>
        <Image style={[styles.scrollImage,{width:100, height:100}]} source={spider} />
        <View style={styles.recentSection}>
        <Text style={[styles.recentText,{marginBottom:10}]}>Spider Plant</Text>
        <Text style={[styles.recentText,{fontWeight:'bold'}]}>$85</Text>
        </View>
        </View>
        <View style={styles.recentSecondColumn}>
            <Icon name="chevron-right" size={25} />
            <Icon name="chevron-right" size={25} />
        </View>
        </View>
        {/* SECOND COLUMN */}
        <View style={styles.recentContainer}>
        <View style={styles.recentFirsColumn}>
        <Image style={[styles.scrollImage,{width:100, height:100}]} source={fig} />
        <View style={styles.recentSection}>
        <Text style={[styles.recentText,{marginBottom:10}]}>Weeping Fig</Text>
        <Text style={[styles.recentText,{fontWeight:'bold'}]}>$65</Text>
        </View>
        </View>
        <View style={styles.recentSecondColumn}>
            <Icon name="chevron-right" size={25} />
            <Icon name="chevron-right" size={25} />
        </View>
        </View>
        {/* THIRD COLUMN */}
        <View style={styles.recentContainer}>
        <View style={styles.recentFirsColumn}>
        <Image style={[styles.scrollImage,{width:100, height:100}]} source={umbrella} />
        <View style={styles.recentSection}>
        <Text style={[styles.recentText,{marginBottom:10}]}>Umbrella Tree</Text>
        <Text style={[styles.recentText,{fontWeight:'bold'}]}>$75</Text>
        </View>
        </View>
        <View style={styles.recentSecondColumn}>
            <Icon name="chevron-right" size={25} />
            <Icon name="chevron-right" size={25} />
        </View>
        </View>
        {/* FOURTH COLUMN */}
        <View style={styles.recentContainer}>
        <View style={styles.recentFirsColumn}>
        <Image style={[styles.scrollImage,{width:100, height:100}]} source={ivy} />
        <View style={styles.recentSection}>
        <Text style={[styles.recentText,{marginBottom:10}]}>English Ivy</Text>
        <Text style={[styles.recentText,{fontWeight:'bold'}]}>$45</Text>
        </View>
        </View>
        <View style={styles.recentSecondColumn}>
            <Icon name="chevron-right" size={25} />
            <Icon name="chevron-right" size={25} />
        </View>
        </View>
        {/* FIFTH COLUMN */}
        <View style={styles.recentContainer}>
        <View style={styles.recentFirsColumn}>
        <Image style={[styles.scrollImage,{width:100, height:100}]} source={parlor} />
        <View style={styles.recentSection}>
        <Text style={[styles.recentText,{marginBottom:10}]}>Parlor Palm</Text>
        <Text style={[styles.recentText,{fontWeight:'bold'}]}>$80</Text>
        </View>
        </View>
        <View style={styles.recentSecondColumn}>
            <Icon name="chevron-right" size={25} />
            <Icon name="chevron-right" size={25} />
        </View>
        </View>
        {/* SIXTH COLUMN  */}
        <View style={styles.recentContainer}>
        <View style={styles.recentFirsColumn}>
        <Image style={[styles.scrollImage,{width:100, height:100}]} source={snake_plant} />
        <View style={styles.recentSection}>
        <Text style={[styles.recentText,{marginBottom:10}]}>Snake Plant</Text>
        <Text style={[styles.recentText,{fontWeight:'bold'}]}>$50</Text>
        </View>
        </View>
        <View style={styles.recentSecondColumn}>
            <Icon name="chevron-right" size={25} />
            <Icon name="chevron-right" size={25} />
        </View>
        </View>
        </View>
        </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    recent: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    recentText: {
        fontSize: 18,
        color: '#FFF'
    },
    recentContainer: {
        flexDirection: 'row',
    },
    recentSection: {
      flexDirection: 'column',
    },
    recentScrollContainer: {
      marginLeft: 0,
      marginRight: 15,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center'
    },
    recentFirsColumn: {
        marginLeft: 15,
        marginTop: 20,
        width: 300,
        height: 110,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#7F867B',
        borderTopStartRadius: 20,
        borderBottomStartRadius: 20
    },
    recentSecondColumn: {
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      width: 50,
      height: 110,
      marginTop: 20,
      backgroundColor: '#C7C7BB',
      borderTopEndRadius: 20,
      borderBottomEndRadius: 20
    }
});

export default AllListing;