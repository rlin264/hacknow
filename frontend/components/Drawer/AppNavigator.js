import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer, DrawerItem, Layout, Text } from '@ui-kitten/components';

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

const ph2Screen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Placeholder2</Text>
  </Layout>
);

const DrawerContent = ({ navigation, state }) => (
  <Drawer
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index.row])}>
    <DrawerItem title='placeholder1' />
    <DrawerItem title='placeholder2' />
  </Drawer>
);

export const DrawerNavigator = () => (
  <Navigator drawerContent={props => <DrawerContent {...props}/>}>
    <Screen name='placeholder1' component={ph1Screen}/>
    <Screen name='placeholder2' component={ph2Screen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <DrawerNavigator/>
  </NavigationContainer>
);
