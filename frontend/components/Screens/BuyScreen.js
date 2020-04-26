import React from 'react';
import { List, Input, Layout, Text,  Icon } from '@ui-kitten/components';
import { TextInput, FlatList, Dimensions, View, StyleSheet } from 'react-native';
import {Button} from 'react-native-paper';
import BuyList from '../GroceryList/BuyList';

const renderItem = ({ item, index }) => (
    <ListItem title={`${item.title} ${index + 1}`}/>
  );

class BuyScreen extends React.Component{
    render(){
        return(
          <>
            <BuyList/>
          </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      maxHeight: 180,
    },
  });

export default BuyScreen;