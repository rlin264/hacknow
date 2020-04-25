import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import {AppNavigator} from './components/Drawer/AppNavigator';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

export default () => (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator/>
    </ApplicationProvider>
);

/*TODO: make a navigator go back to the homescreen
*       Make some sort of map that displays nearby users
*       Mongo? backend to store what groceries a user would like to buy (Express.js needed probs)
*          MERN?
*       Delivery system?
*       Payment?
*/
