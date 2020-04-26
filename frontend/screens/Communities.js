// Creates the main functional scene in the app. Displays the user's communities
// planned to later allow for a summary of the requests made, people planning to go buy, etc.

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import {  TouchableOpacity } from 'react-native'

import Login from '../components/Drawer/Login/Login.js';
import TabNavigator from '../navigation/TabNavigator.js';

class Communities extends Component {
  render () {
    return (
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Your Communities</Text>
      </Layout>
      )
  }
}

export default Communities
