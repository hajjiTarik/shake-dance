import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import soundHOC from '../../Components/soundHOC';
import { sound_off, sound_on } from '../../Store/actions';

export const mapDispatchToProps = dispatch => ({
  sound_on: bindActionCreators(sound_on, dispatch),
  sound_off: bindActionCreators(sound_off, dispatch),
});

export const mapStateToProps = ({ app }) => ({
  soundControl: app.soundControl
});

@connect(mapStateToProps, mapDispatchToProps)
class Volume extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{padding: 10}}>
        {this.props.soundControl ?
          <TouchableOpacity onPress={() => {
            this.props.sound.play();
            this.props.sound_off();
          }}>
            <Icon name="volume-off" size={40} color="#fff"/>
          </TouchableOpacity> :
          <TouchableOpacity onPress={() => {
            this.props.sound.pause();
            this.props.sound_on();
          }}>
            <Icon name="volume-up" size={40} color="#fff"/>
          </TouchableOpacity>
        }
      </View>
    )
  }
}

const source = {
  isRequire: true,
  url: require('./../../../assets/sounds/sound-1.mp3'),
};

export default soundHOC(Volume, source);
