import React from 'react';
import { Drawer, DrawerItem, Layout, Text } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const UsersMap = props => {
  return (
    <View style={styles.mapContainer}>
        <MapView style = {styles.map}/>
    </View>
  );
};

const mapScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h1'>Map Screen!</Text>
      <UsersMap />
    </Layout>
  );

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 200
    },
    map: {
        width: '100%',
        height: '100%'
    }
});

export default mapScreen;