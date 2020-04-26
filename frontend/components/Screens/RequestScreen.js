import React from 'react';
import { Input, Layout, Text, Button, Icon } from '@ui-kitten/components';
import { TextInput, FlatList, Dimensions, View, StyleSheet, TouchableNativeFeedbackBase } from 'react-native';
import GroceryList from '../GroceryList/GroceryList';
import GrocerySearch from '../GrocerySearch/GrocerySearch';
import Modal from 'react-native-modal';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};


const data = new Array(8).fill({
    title: 'Title for Item',
    description: 'Description for Item',
  });

const mockData = [
    { id: '1', text: 'Spinach' },
    { id: '2', text: 'Apples' },
    { id: '3', text: 'Oranges' }
  ];


const CartIcon = (props) => (
    <Icon {...props} width='30' height='30' name='shopping-cart-outline'/>
);

const SearchIcon = (style) => (
    <Icon {...style} name='search' />
);


class ShoppingCartList extends React.Component {

    constructor(props, shopdata) {
      super(props);

      this.state = {
        loading: false,
        data: shopdata,
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

        <View style={{margin: 20, height: "50%", width: "90%"}}>

        <FlatList
          data={this.state.data}
          keyExtractor={ (item, index) => index.toString() }
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({ item }) => <Text style={styles.row}
          onPress={this.GetFlatListItem.bind(this, item.text)} >{item.text}</Text>}
          style={{ marginTop: 10}} />

      </View>
    );}
  }


class requestScreen extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
            inputNumber: Number,
            searchText: String,
            shoppingCart: []
        };
    }
    onChanged(text){
        let newText = '';
        let numbers = '0123456789';

        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
            else {
                // your call back function
                alert("please enter numbers only");
            }
        }
        this.setState({ myNumber: newText });
    }
    onSubmit(){
        var {searchText} = this.state;
        var {inputNumber} = this.state;
        var joined = this.state.shoppingCart.concat([searchText, inputNumber]);
        this.setState({ shoppingCart: joined });
        alert("Added to cart");
    }

    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
      };


    render(){
        return(
            <Layout style={{ flex: 3, justifyContent: 'center'}}>

                <Text category='h1' style={{textAlign: "center"}}>Groceries</Text>
                <Button
                    style={styles.cart}
                    appearance='ghost'
                    accessoryLeft={CartIcon}
                    size='large'
                    onPress={this.toggleModal}
                />
                <GrocerySearch/>

                <View>
                    <Modal isVisible={this.state.isModalVisible}>
                    <View style={{ flex: 1, width: window.width, marginBottom:200, margin: 10, padding:2, alignItems:'center', borderWidth:4, borderColor:'#888', borderRadius:10, backgroundColor:'#fff'}}>
                        <Text>SHOPPING CART</Text>
                        <ShoppingCartList shopdata = {this.ShoppingCartList}/>
                        <Button onPress={this.toggleModal}> Hide Cart </Button>
                    </View>
                    </Modal>
                </View>

                <View style={{flexDirection:'row', width: window.width, margin: 10, padding:4, alignItems:'center', justifyContent:'center', borderWidth:4, borderColor:'#888', borderRadius:10, backgroundColor:'#fff'}}>
                    <View style={{flex:4}}>
                        <TextInput
                            placeholder="Enter Item Name"
                            onChangeText = {(textEntry) => {this.setState({searchText: textEntry})}}
                            style={styles.inputText}
                            onSubmitEditing = {()=>{this.onSubmit(this.state.searchText)}}
                        />
                        <TextInput
                            placeholder="Enter Item Quantity"
                            onChangeText = {(textEntry) => {this.setState({inputNumber: textEntry})}}
                            style={styles.inputText}
                            keyboardType={'number-pad'}
                            onSubmitEditing = {()=>{this.onSubmit(this.state.inputNumber)}}
                        />
                        <Button onPress={ () => this.onSubmit() }>Add to cart
                        </Button>
                    </View>



                </View>

            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      margin: 2,
    },
    cart:{
      marginTop: 20,
        margin: 2,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    inputText:{
      backgroundColor:'#d4d4d4',
      fontSize: 16,
      margin: 2,
      marginBottom: 5,
      borderColor: '#d4d4d4',
      borderWidth: 3,
    }
});

export default requestScreen;
