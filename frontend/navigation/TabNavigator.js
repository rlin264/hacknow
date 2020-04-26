//first inside navigator - tab containing stack, screen, screen

import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

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

/*export const TabNavigator = () => (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='Home' component={ Login }/>
    <Stack.Screen name='Your Communities' component={ CommunitiesNav }/>
    <Stack.Screen name='Map' component={ mapScreen }/>
  </Stack.Navigator>
  </NavigationContainer>
);*/

export function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Your Communities" component={YourCommunitiesScreen} />
        <Tab.Screen name="Buy" component={phBuyScreen} />
        <Tab.Screen name="Request" component={phRequestScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
