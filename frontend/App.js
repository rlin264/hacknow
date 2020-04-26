import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import Login from '././components/Drawer/Login/Login';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Layout, Text} from '@ui-kitten/components';
import {AppNavigator} from './navigation/AppNavigator';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator/>
    </ApplicationProvider>
  </>
);
