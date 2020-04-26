// Creates tab navigator that goes along the bottom screen and navigates between
// the main Your Communities screen, Buy, Request, and Map screens.

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Layout, Text, Icon} from '@ui-kitten/components';

import CommunitiesNav from '../screens/Communities.js';
import Dropdown from '../components/Drawer/BuyPage/Dropdown.js'

const Tab = createBottomTabNavigator();

const GroupIcon = (props) => (
  <Icon {...props} name='person'/>
);

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

//TODO: figure out icons?
export default Tabs = () => (
<NavigationContainer independent={true}>
  <Tab.Navigator /*tabBarOptions={{ showIcon: true, showLabel: false }}*/>
    <Tab.Screen name="Communities" component={CommunitiesNav} options={{ tabBarIcon:({color, focused}) => <GroupIcon focused={focused} color={color} />}}/>
    <Tab.Screen name="Buy" component={Dropdown} />
    <Tab.Screen name="Request" component={phRequestScreen} />
    <Tab.Screen name="Map" component={mapScreen} />
  </Tab.Navigator>
</NavigationContainer>
);
