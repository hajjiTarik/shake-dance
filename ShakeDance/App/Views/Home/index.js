import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import soundHOC from '../../Components/sound';
import BackgroundImage from '../../Components/BackgroundImage';
import MainMenu from '../../Components/MainMenu';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View scrollEnabled={false} style={styles.contentContainer}>
        <BackgroundImage />
        <MainMenu />
      </View>
    );
  }
}

const source = {
  isRequire: true,
  url: require('./../../../assets/sounds/sound-1.mp3'),
};

export const ConnectedHome = connect()(Home);
export default soundHOC(ConnectedHome, source);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});