import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import { connect } from 'react-redux';

import DogCard from '../components/DogCard';
import data from '../data/dogData.json';

class Home extends Component {

  componentDidMount() {
    this.fetchDogs();
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
