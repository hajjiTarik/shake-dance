import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import BackgroundImage from '../../Components/BackgroundImage';
import MainMenu from '../../Components/MainMenu';
import Sound from 'react-native-sound';
import { playSound, setTestState } from './../../Components/sound';


export default class extends Component {

  constructor(props) {
    super(props);
    Sound.setCategory('Playback', true); // true = mixWithOthers

  }

  render() {
    const testInfo =  {
        title: 'mp3 via require()',
        isRequire: true,
        url: require('./../../../assets/sounds/sound-1.mp3'),
      };

    playSound(testInfo, this);
    return (
      <View scrollEnabled={false} style={styles.contentContainer}>
        <BackgroundImage />
        <MainMenu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});