import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackgroundImage from '../../Components/BackgroundImage';

export default class extends Component {

  constructor(props) {
    super(props);
  }


  static get gradientFill() {
    console.log(1);
    return (
      <LinearGradient
        colors={['#000', '#fff']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
    );
  }

  render() {
    return (
      <View scrollEnabled={false} style={styles.contentContainer}>
        { this.gradientFill }
        <BackgroundImage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 30,

  },
  gradient: {
    ...StyleSheet.absoluteFillObject
  },
});