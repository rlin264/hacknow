import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer, DrawerItem, Layout, Text } from '@ui-kitten/components';
import mapScreen from '../Screens/MapScreen'
import requestScreen from '../Screens/RequestScreen'

const { Navigator, Screen } = createDrawerNavigator();

const homeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
)

const ph1Screen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Placeholder1</Text>
  </Layout>
);

const DrawerContent = ({ navigation, state }) => (
  <Drawer
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index.row])}>
    <DrawerItem title='placeholder1' />
    <DrawerItem title='Map Screen' />
    <DrawerItem title='Request Screen' />
  </Drawer>
);

export const DrawerNavigator = () => (
  <Navigator drawerContent={props => <DrawerContent {...props}/>}>
    <Screen name='placeholder1' component={ph1Screen}/>
    <Screen name='Map Screen' component={mapScreen}/>
    <Screen name='Request Screen' component={requestScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <DrawerNavigator/>
  </NavigationContainer>
);