import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Button, Icon} from '@ui-kitten/components';

/*const FacebookIcon = (props) => (
    <Icon name = 'facebook' {...props} />
);*/

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="username or email"
          placeholderTextColor="rgba(255,255,255,1)"
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,1)"
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        {/*<Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#2c3e50',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
