import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';

export const Button = () => {

    const [counter, setCounter] = React.useState(0);
  
    return (
      <Layout style={styles.container} level='1'>
  
        <Button onPress={() => setCounter(counter + 1)}>
          BUTTON
        </Button>
  
        <Text style={styles.text}>
          Pressed {counter} times
        </Text>
  
      </Layout>
    );
  };