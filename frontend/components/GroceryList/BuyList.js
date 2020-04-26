import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { Appbar, TextInput, Button } from 'react-native-paper'
import {StyleSheet, FlatList} from 'react-native';
import { List, Input, Layout, Text,  Icon } from '@ui-kitten/components';
import BuyItem from './BuyItem';

function BuyList() {
    const [ todo, setTodo ] = React.useState('');
    const [ loading, setLoading ] = React.useState(true);
    const [ todos, setTodos ] = React.useState([]);

    const ref = firestore().collection('groceryLists');

    async function addTodo() {
        await ref.add({
          title: todo,
          complete: false,
        });
        setTodo('');
    }

    React.useEffect(() => {
        return ref.onSnapshot(querySnapshot => {
          // const list = [];
          // querySnapshot.forEach(doc => {
          //   const { groceryList, complete } = doc.data();
          //   list.push({
          //     id: doc.id,
          //     username,
          //     complete,
          //   });
          // });
          const userDocument = firestore()
          .collection('groceryLists')
          .doc('JohnDoe123');
    
          setTodos(userDocument.groceryList);
    
          if (loading) {
            setLoading(false);
          }
        });
    }, []);

    return (
        <Layout style={{ flex: 1}}>
            <FlatList 
                style={{flex: 1}}
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <BuyItem {...item} />}
            />
        </Layout>
      );
 }

const styles = StyleSheet.create({
    container: {
      maxHeight: 192,
    },
 }); 
export default BuyList

{/* <TextInput label={'New Todo'} value={todo} onChangeText={setTodo} />
<Button onPress={() => addTodo()}>Add TODO</Button> */}