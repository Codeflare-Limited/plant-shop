import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, Image, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { styles } from '../assets/styles/Style';
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

class Home extends Component {
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        headerShown: false,
    };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Appbar.Header style={{backgroundColor:'#056608'}}>
        <Appbar.Content title="Mario Plant Shop" subtitle={'Beautify your surroundings'} />
        <Icon size={30} onPress={()=>this.props.navigation.navigate('Search')} name="search" color="#FFF" />
        <Appbar.Action />
        <OptionsMenu
          customButton={
            <Icon
              name="ellipsis-v"
              size={25}
              color="#FFF"
            />
          }
          destructiveIndex={1}
          options={['Settings']}
          actions={[this.settings, this.settings]}
        />
         <Appbar.Action />
        </Appbar.Header>

        <View style={styles.wrapper}>
          <Text style={styles.topSelling}>Top Selling</Text>
        </View>

        <View>
        <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
         <View style={styles.scrollContainer}>
           <TouchableOpacity
           onPress={()=>this.props.navigation.navigate('Aloe Vera')}>
          <View style={styles.card}>
            <Image style={styles.scrollImage} source={aloe} />
            <View style={styles.cardSplitter}>
              <Text style={styles.cactusText}>Aloe Vera</Text>
              <Text style={[styles.cactusText,{fontWeight:'bold'}]}>$80</Text>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('Snake Plant')}>
          <View style={styles.card}>
            <Image style={styles.scrollImage} source={snake_plant} />
            <View style={styles.cardSplitter}>
              <Text style={styles.cactusText}>Snake Plant</Text>
              <Text style={[styles.cactusText,{fontWeight:'bold'}]}>$50</Text>
            </View>
          </View>
          </TouchableOpacity>
          <View style={styles.card}>
            <Image style={styles.scrollImage} source={violet} />
            <View style={styles.cardSplitter}>
              <Text style={styles.cactusText}>African Violet</Text>
              <Text style={[styles.cactusText,{fontWeight:'bold'}]}>$30</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image style={styles.scrollImage} source={parlor} />
            <View style={styles.cardSplitter}>
              <Text style={styles.cactusText}>Parlor Palm</Text>
              <Text style={[styles.cactusText,{fontWeight:'bold'}]}>$80</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image style={styles.scrollImage} source={ivy} />
            <View style={styles.cardSplitter}>
              <Text style={styles.cactusText}>English Ivy</Text>
              <Text style={[styles.cactusText,{fontWeight:'bold'}]}>$45</Text>
            </View>
          </View>
          </View>
        </ScrollView>
        </View>


          <ScrollView>
        <View style={styles.recent}>
            <Text style={styles.topSelling}>Recently Added</Text>
            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('Our Shop')}>
            <Text style={ styles.topSelling }>View all</Text>
            </TouchableOpacity>
        </View>
        <View>
        {/* <ScrollView vertical> */}
        {/* FIRST COLUMN */}
        <View style={styles.recentScrollContainer}>
        <View style={styles.recentContainer}>
        <View style={styles.recentFirsColumn}>
        <Image style={[styles.scrollImage,{width:144, height:144}]} source={spider} />
        <View style={styles.recentSection}>
        <Text style={[styles.recentText,{fontSize: 20, marginBottom:10}]}>Spider Plant</Text>
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
        <Image style={[styles.scrollImage,{width:144, height:144}]} source={fig} />
        <View style={styles.recentSection}>
        <Text style={[styles.recentText,{fontSize: 20, marginBottom:10}]}>Weeping Fig</Text>
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
        <Image style={[styles.scrollImage,{width:144, height:144}]} source={umbrella} />
        <View style={styles.recentSection}>
        <Text style={[styles.recentText,{fontSize: 20, marginBottom:10}]}>Umbrella Tree</Text>
        <Text style={[styles.recentText,{fontWeight:'bold'}]}>$75</Text>
        </View>
        </View>
        <View style={styles.recentSecondColumn}>
            <Icon name="chevron-right" size={25} />
            <Icon name="chevron-right" size={25} />
        </View>
        </View>
        </View>
        {/* </ScrollView> */}
        </View>
        </ScrollView>
      </View>
    );
  }
}



export default Home;
