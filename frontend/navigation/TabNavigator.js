// Creates tab navigator that goes along the bottom screen and navigates between
// the main Your Communities screen, Buy, Request, and Map screens.

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Layout, Text} from '@ui-kitten/components';

import CommunitiesNav from '../screens/Communities.js';

const Tab = createBottomTabNavigator();

//TODO: replace with imports
const phBuyScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Buy</Text>
  </Layout>
);

const phRequestScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Request</Text>
  </Layout>
);

export const mapScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>MAP</Text>
  </Layout>
);

export default Tabs = () => (
<NavigationContainer independent={true}>
  <Tab.Navigator>
  <Tab.Screen name="Your Communities" component={CommunitiesNav} />
  <Tab.Screen name="Buy" component={phBuyScreen} />
  <Tab.Screen name="Request" component={phRequestScreen} />
  <Tab.Screen name="Map" component={mapScreen} />
  </Tab.Navigator>
  </NavigationContainer>
);
