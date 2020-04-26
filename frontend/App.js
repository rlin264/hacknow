import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import Login from '././components/Drawer/Login/Login';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {AppNavigator} from './navigation/AppNavigator';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">HOME</Text>
  </Layout>
);

export default () => (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator/>
    </ApplicationProvider>
);
