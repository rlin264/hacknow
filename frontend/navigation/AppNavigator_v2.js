import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Drawer, DrawerItem, Layout, Text, Button } from '@ui-kitten/components';

import CommunitiesNav from '../screens/Communities.js';
import Login from '../components/Drawer/Login/Login.js';

const Stack = createStackNavigator();

function homeScreen({ navigation }){
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
    <Button onPress={() => navigation.navigate('YourCommunities')}>
    Go to communities
    </Button>
    </Layout>
  );
}

const ph1Screen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Placeholder1</Text>
  </Layout>
);

const ph2Screen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Placeholder2</Text>
  </Layout>
);

export const AppNavigator = () => (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='Home' component={ Login }/>
    <Stack.Screen name='ph1' component={ ph1Screen }/>
    <Stack.Screen name='YourCommunities' component={ CommunitiesNav }/>
  </Stack.Navigator>
  </NavigationContainer>
);
