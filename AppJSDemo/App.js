/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Image, TextInput, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <ScrollView>
      <View style={{backgroundColor:'#4197C2', flexDirection:'row', paddingTop:30}}>
        <Image source={{uri:'https://facebook.github.io/react-native/img/header_logo.png'}} style={{width: 33, height: 29}}/>
        <Text style={{ color:'white', padding:10}}>React Native</Text>
      </View>
      <View style={{flexDirection:'row',flex:1, justifyContent: 'center', alignItems:"flex-start"}}>
      <Text style={{alignSelf:'center', padding:10, fontFamily:'GillSans-Bold'}}>React Native is Awesome.</Text>
              </View>
              <Text style={{ fontFamily: 'GillSans-Bold' }}> {this.state.text} </Text>
              <Text> Is learning React Native Today</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 2 }}
                placeholder="Enter your Name"
                onChangeText={(text) => this.setState({ text })}
              />
    <View style={{flexDirection:'row',flex:1, justifyContent: 'center', alignItems:"flex-end"}}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 100, height: 50, backgroundColor: 'skyblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
