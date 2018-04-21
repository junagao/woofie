import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';
import store from './config/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>Hello world!</Text>
        </View>
      </Provider>
    );
  }
}
