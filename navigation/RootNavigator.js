import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Login from '../screens/Login';
import TabNavigator from './TabNavigator';

const RootStackNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: { header: () => null }
  },
  Home: {
    screen: TabNavigator,
  },
});

export default class RootNavigator extends Component {
  render () {
    return <RootStackNavigator />;
  }
}
