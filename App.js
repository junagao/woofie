import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './config/store';
import RootNavigator from './navigation/RootNavigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
