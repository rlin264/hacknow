import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import {  TouchableOpacity } from 'react-native'

import Login from '../components/Drawer/Login/Login.js';
import TabNavigator from '../navigation/TabNavigator.js';

class Communities extends Component {
  render () {
    return ( //TODO: update styling - make them look like buttons
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>I'm a StackNavigator!</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
        <Text>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Map')}>
        <Text>Map</Text>
        </TouchableOpacity>
      </Layout>
      )
  }
}

export default Communities
