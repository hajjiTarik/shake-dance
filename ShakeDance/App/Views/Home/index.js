import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import BackgroundImage from '../../Components/BackgroundImage';
import PlayButton from '../../Components/PlayButton';
import Footer from '../../Components/Footer';

@connect()
class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View scrollEnabled={false} style={styles.contentContainer}>
        <BackgroundImage />
        <PlayButton />
        <Footer />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});