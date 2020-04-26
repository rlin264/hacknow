//stack that sits inside the tabnav

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';
import {  TouchableOpacity } from 'react-native'

export const mapScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>MAP</Text>
  </Layout>
);

class Communities extends Component {

  static navigationOptions = {
    title: 'Stack'
  }

  render () {
    return ( //TODO: update styling - make them look like buttons
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>I'm a StackNavigator!</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('homeScreen', { title: homeScreen })}>
        <Text>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('mapScreen', { title: mapScreen })}>
        <Text>Map</Text>
        </TouchableOpacity>
      </Layout>
      )
  }
}

export default Communities
/*
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const phBuyScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Going out to buy</Text>
  </Layout>
);

const phRequestScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Requesting Groceries</Text>
  </Layout>
);

const phDMScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Messaging community members</Text>
  </Layout>
);

const homeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

const mapScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>MAP</Text>
  </Layout>
);

export default class YourCommunitiesScreen extends React.Component {
  render() {
    return (
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category='h1'>Your Communities</Text>
      <Button onPress={() => navigation.navigate('ph1')}>
      Go to placeholder1
      </Button>
      </Layout>
    );
  }
}

export const CommunitiesNav = () => (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='Logout' component={ homeScreen }/>
    <Stack.Screen name='Map' component={ mapScreen }/>
  </Stack.Navigator>
  </NavigationContainer>
);
*/

//title: Your Communities
//something that displays your communities - for now can just be placeholder Text
//button for logout --> goes back to homeScreen can it do this without nav?
//button for map --> goes to map with stack navigator
