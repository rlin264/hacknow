import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Drawer, DrawerItem, Layout, Text, Button } from '@ui-kitten/components';

import Login from '../components/Drawer/Login/Login.js';
import Tabs from './TabNavigator.js';

const Stack = createStackNavigator();

export const AppNavigator = () => (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='Home' component={ Login }/>
    <Stack.Screen name='Your Communities' component={ Tabs }/>
  </Stack.Navigator>
  </NavigationContainer>
);
