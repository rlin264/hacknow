import React from 'react';
import { Input, Layout, Text, Button, Icon } from '@ui-kitten/components';
import { TextInput, FlatList, Dimensions, View, StyleSheet } from 'react-native';
import GroceryList from '../GroceryList/GroceryList';
import GrocerySearch from '../GrocerySearch/GrocerySearch';


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

class requestScreen extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            inputNumber: Number,
            searchText: String,
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
    onSubmit(numberText){
        this.setState({})
    }
    render(){
        return(
            <Layout style={{ flex: 3}}>
                <Button
                    style={styles.cart}
                    appearance='ghost'
                    accessoryLeft={CartIcon}
                    size='large'
                />
                <Text category='h1' style={{textAlign: "center"}}>Groceries</Text>
                <GrocerySearch/>
                <Input
                    placeholder="Enter Quantity"  
                    underlineColorAndroid='transparent'  
                    style={styles.TextInputStyle}  
                    keyboardType={'number-pad'}
                    onChangeText={(text)=> this.onChanged(text)}  
                /> 
                <View style={{flexDirection:'row', width: window.width, margin: 10, padding:4, alignItems:'center', justifyContent:'center', borderWidth:4, borderColor:'#888', borderRadius:10, backgroundColor:'#fff'}}>
                    <View style={{flex:4}}>
                        <TextInput
                            onChangeText = {(textEntry) => {this.setState({searchText: textEntry})}}
                            style={{backgroundColor:'transparent'}}
                            onSubmitEditing = {()=>{this.onSubmit(this.state.searchText)}}
                        />
                    </View>
                    <View style={{flex:1}}>
                        <Button onPress={ () => this.onSubmit(this.state.searchText) }>
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
        margin: 2,
        position: 'absolute',
        right: 0,
        top: 0,
    }
});

export default requestScreen;
