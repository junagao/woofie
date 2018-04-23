import React, { Component } from 'react';
import { TouchableHighlight, View, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class FacebookButton extends Component {

  render() {
    return (
      <TouchableHighlight style={styles.button} onPress={this.props.onPress} >
        <View style={styles.buttonContainer}>
          <FontAwesome name={'facebook-f'} size={20} color={'white'} />
          <Text style={styles.buttonText}>Login with Facebook</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3b5998',
    borderRadius: 20,
    height: 40,
    width: 220,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
  }
});
