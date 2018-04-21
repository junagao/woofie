import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';

const RootStackNavigator = StackNavigator({
  Main: {
    screen: TabNavigator,
  }
});

export default class RootNavigator extends Component {
  render () {
    return <RootStackNavigator />;
  }
}
