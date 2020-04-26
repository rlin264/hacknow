// Creates the main functional scene in the app. Displays the user's communities
// planned to later allow for a summary of the requests made, people planning to go buy, etc.

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { ApplicationProvider, Layout, Text, Button, Divider, Card } from '@ui-kitten/components';
import {  TouchableOpacity } from 'react-native'

import Login from '../components/Drawer/Login/Login.js';
import TabNavigator from '../navigation/TabNavigator.js';

const Neighborhood = (props) => (
  <Layout {...props} style={styles.cardHeader}>
    <Text category='h6'>Neighborhood</Text>
  </Layout>
);

const Friends = (props) => (
  <Layout {...props} style={styles.cardHeader}>
    <Text category='h6'>Friends</Text>
  </Layout>
);

class Communities extends Component {
  render () {
    return (
      <Layout style={styles.backgroundContainer}>
        <Text category='h1'>Your Communities</Text>
        <Card style={styles.card} header={Neighborhood}>
            <Text>
              Requests made: 3
            </Text>
            <Text>
              No current planned purchases.
            </Text>
          </Card>
          <Card style={styles.card} header={Friends}>
              <Text>
                Requests made: 7
              </Text>
              <Text>
                Upcoming trip: 4:00 p.m. April 26, 2020 (today)
              </Text>
            </Card>
      </Layout>
      )
  }
}

export default Communities

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card:{
    backgroundColor: '#ee8277',
    fontSize: 35,
    width: 350,
    marginTop: 30,
  },
  cardHeader:{
    backgroundColor: '#ee8277',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  }
});
