/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Todo from './src/component/index';
import {Provider} from 'react-redux';
import store from './src/store/index.js';

export default class App extends Component{
  render() {
    return (
      <View>
        {/* <Text>HAMZA ASLAM</Text>
        <Text>MUHAMMAD ASLAM</Text> */}
        <Provider store={store}>
        <Todo />
        </Provider>
      </View>
    );
  }
}
