import React from 'react';
import { Drawer, DrawerItem, Layout, Text } from '@ui-kitten/components';
import { Dimensions, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const UsersMap = props => {
  return (
    <View style={styles.mapContainer}>
        <MapView style = {styles.map}/>
        <View style={styles.mapDrawerOverlay} />
    </View>
  );
};

const mapScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <UsersMap />
    </Layout>
  );

const styles = StyleSheet.create({
    mapContainer: {
        width: Screen.width,
        height: Dimensions.get('window').height
    },
    map: {
        width: Screen.width,
        height: Dimensions.get('window').height
    },
    mapDrawerOverlay: {
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: 0.0,
      height: Dimensions.get('window').height,
      width: 20,
    }
});

export default mapScreen;