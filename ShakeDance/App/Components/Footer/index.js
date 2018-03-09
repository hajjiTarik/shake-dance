import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Volume from '../Volume';
import Settings from '../Settings';

@connect()
export default class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ position: 'absolute', bottom: 30, left: 30, zIndex: 999, flex:1, backgroundColor:'#f1536d', opacity: .6 }}>
        <Volume />
        <Settings />
      </View>
    )
  }
}

