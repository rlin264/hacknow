import React, {Component} from 'react';
import {Plaform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import DropDownItem from 'react-native-drop-down-item';

const IC_ARR_DOWN = require('../../images/arrdonw.png');
const IC_ARR_UP = require('../../images/arrowup.png');

type Props = {};
export default class Dropdown extends Component<Props> {
  state = {
    contents: [
      {
        title: 'What time will you go out to shop?',
        body: '1:00',
        body1: '2:00',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{alignSelf: 'stretch'}}>
          {this.state.contents
            ? this.state.contents.map((param, i) => {
                return (
                  <DropDownItem
                    key={i}
                    style={styles.dropDownItem}
                    contentVisible={false}
                    invisibleImage={IC_ARR_DOWN}
                    visibleImage={IC_ARR_UP}
                    header={
                      <View style={styles.header}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: 'blue',
                          }}>
                          {param.title}
                        </Text>
                      </View>
                    }>
                    <Text
                      style={[
                        styles.txt,
                        {
                          fontSize: 20,
                        },
                      ]}>
                      {param.body}
                    </Text>
                    <Text
                        style={[
                          styles.txt,
                          {
                            fontSize: 20,
                          },
                        ]}>
                      {param.body1}
                    </Text>
                  </DropDownItem>
                );
              })
            : null}
          <View style={{height: 96}} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 60,
  },
  header: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 12,
    color: 'rgb(74,74,74)',
    marginRight: 60,
    flexWrap: 'wrap',
  },
  txt: {
    fontSize: 14,
  },
});
