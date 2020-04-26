//first inside navigator - tab containing stack, screen, screen

import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="communities" component={YourCommunitiesScreen} />
        <Tab.Screen name="buy" component={phBuyScreen} />
        <Tab.Screen name="request" component={phRequestScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
