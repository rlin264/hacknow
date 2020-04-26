import React from 'react'
import {
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native'
import { ListItem, SearchBar } from 'react-native-elements';
import {Text, Avatar, Input } from '@ui-kitten/components'


class GrocerySearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };
    this.arrayholder = [];
  }
  componentDidMount(){

    const data = new Array(80).fill({
      title: 'Title for Item',
      description: 'Description for Item',
    });
    const mockData = [
      { id: '1', text: 'Spinach' },
      { id: '2', text: 'Apples' },
      { id: '3', text: 'Oranges' },
      { id: '3', text: 'Oranges' },
      { id: '3', text: 'Oranges' },
      { id: '3', text: 'Oranges' },
      { id: '3', text: 'Oranges' },
    ];

    this.setState({
      data: mockData,
    })
    this.arrayholder = mockData;
  }
  GetFlatListItem(name) {
    Alert.alert(name);
  }
  searchData(text) {
    const newData = this.arrayholder.filter(item => {
      const itemData = item.text.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });
 
    this.setState({
      data: newData,
      text: text
      })
    }
  itemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
  }
  render() {
    return (
 
      <View style={styles.MainContainer}>
 
      <TextInput 
       style={styles.textInput}
       onChangeText={(text) => this.searchData(text)}
       value={this.state.text}
       underlineColorAndroid='transparent'
       placeholder="Search Here" />

      <FlatList
        data={this.state.data}
        keyExtractor={ (item, index) => index.toString() }
        ItemSeparatorComponent={this.itemSeparator}
        renderItem={({ item }) => <Text style={styles.row}
        onPress={this.GetFlatListItem.bind(this, item.text)} >{item.text}</Text>}
        style={{ marginTop: 10, height: 1, }} />

    </View>
  );}
}

const styles = StyleSheet.create({
 
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    maxHeight: 250
  },
 
  row: {
    fontSize: 18,
    padding: 12
  },
  textInput: {
    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 8,
    backgroundColor: "#FFFF"
  }
});

export default GrocerySearch;