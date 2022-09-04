import React, { Component } from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AllListing from './screens/AllListing';
import AloeVera from './screens/AloeVera';
import Home from './screens/Home';
import Search from './screens/Search';
import SnakePlant from './screens/SnakePlant';
import Fetch from './screens/Fetch';

class Stack extends Component{
    render(){
        return <AppContainer />;
    }
}

export default Stack;

const AuthStack = createStackNavigator({

    'Home': Home,
    'Our Shop': AllListing,
    'Aloe Vera': AloeVera,
    'Snake Plant': SnakePlant,
    'Search': Search,
    'Fetch': Fetch

  },
  {
    initialRouteName: 'Home',
  });

  const AppContainer = createAppContainer(AuthStack);
