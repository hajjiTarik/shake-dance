import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const bg = require('../../../assets/images/play-bg.png');

class PlayButton extends Component {

  renderBg = () => {
    return [
      <Image
        style={[styles.playBg, { opacity: .3, top: 180, left: 120 }]}
        source={bg}
        key={0}
      />,
      <Image
        style={[styles.playBg, { opacity: .4, top: 180, left: 100 }]}
        source={bg}
        key={1}
      />,
      <Image
        style={[styles.playBg, { opacity: .2 }]}
        source={bg}
        key={2}
      />
    ]
  };

  render() {
    return (
      <View style={styles.mainMenu}>
        {this.renderBg()}
        <TouchableOpacity onPress={() => {
          alert('fuck you')
        }}>
          <View style={styles.playButton}>
            <Icon name="play" size={60} color="#fff"/>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  playButton: {
    backgroundColor: '#f1536d',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 36,
    paddingRight: 36,
    borderRadius: 160,
    borderWidth: 5,
    borderColor: '#fff',
    opacity: .9
  },
  mainMenu: {
    flex: 1,
    marginTop: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playBg: {
    position: 'absolute',
    top: 190,
    left: 100,
    width: 150,
    height: 150,
  }
});

export default PlayButton;