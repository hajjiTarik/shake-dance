import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Settings extends Component {

  render() {
    return <View style={{padding: 10}}>
      <TouchableOpacity>
        <Icon name="gear" size={40} color="#fff"/>
      </TouchableOpacity>
    </View>
  }
}