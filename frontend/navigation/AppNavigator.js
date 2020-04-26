// Creates the stack navigator that moves between the login screen and the main
// functional screens of the app.

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Drawer, DrawerItem, Layout, Text, Button } from '@ui-kitten/components';

import Login from '../components/Drawer/Login/Login.js';
import Tabs from './TabNavigator.js';

const Stack = createStackNavigator();

export const AppNavigator = () => (
<NavigationContainer>
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Log out' component={ Login }/>
    <Stack.Screen name='Your Communities' component={ Tabs }/>
  </Stack.Navigator>
  </NavigationContainer>
);
