import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
} from 'react-native';
const bg = require('../../../assets/images/bg.png');

export default class BackgroundImage extends Component {

  render() {

    return (
      <Image
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        source={bg}
      />
    );
  }
}

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);