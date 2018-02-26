import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

class MainMenu extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.mainMenu}>
        <Button
          buttonStyle={styles.buttons}
          textStyle={styles.textButtons}
          onPress={()=>{ console.log(1)}}
          title='PLAY NOW' />
        <Button
          buttonStyle={styles.buttons}
          textStyle={styles.textButtons}
          onPress={()=>{ console.log(1)}}
          title='LEVELS' />
        <Button
          buttonStyle={styles.buttons}
          textStyle={styles.textButtons}
          onPress={()=>{ console.log(1)}}
          title='OPTIONS' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#ff7291",
    marginBottom: 10,
    width: 260,
    opacity: .8,
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 30
  },
  textButtons: {
    color: '#fff5fd',
    fontFamily: 'BarlowSemiCondensed-Bold',
    fontSize: 20
  },
  mainMenu: {
    flex: 1,
    marginTop: 140,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default MainMenu;