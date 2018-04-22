import React, { Component } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import { connect } from 'react-redux';

import DogCard from '../components/DogCard';
import data from '../data/dogData.json';

class Home extends Component {

  componentDidMount() {
    this.login();
    this.fetchDogs();
  }

  login = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('358905621286418', {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }
  
  fetchDogs = () => {
    this.props.getDogs(data);
  }

  renderDogs = (dogs) => {
    if (dogs) {
      return (
        dogs.map(dog => {
          return (
            <DogCard key={dog.id} dog={dog} />
          );
        })
      );
    }
  }

  render () {
    return (
      <View>
        {this.renderDogs(this.props.dogs)}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  dogs: state.dogs
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actionCreators, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
