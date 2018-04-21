import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class DogCard extends React.Component {

  render () {
    return (
      <View style={s.card}>
        <Image style={s.img} source={{uri: this.props.dog.image}} />
        <View>
          <Text style={s.dogName}>{this.props.dog.name}, {this.props.dog.age}</Text>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  card: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
    margin: 10,
    marginTop: 16,
    marginBottom: 200,
  },
  img: {
    height: 350,
    width: 350
  },
  dogName: {
    marginTop: 10,
    fontSize: 16,
  }
});
