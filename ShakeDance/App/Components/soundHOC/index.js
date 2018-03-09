import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-native-sound';
import { playSound } from './../../utils/sound';

/**
 * @param WrappedComponent class
 * @param soundList Array
 */
export default (WrappedComponent, soundList) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.constructor.displayName = `Sound(${WrappedComponent.name})`;
      Sound.setCategory('Playback', true);
      this.output = this.output.bind(this);
      this.state = {
        sound: null
      };
    }

    static contextTypes = { store: PropTypes.object };

    output (sound){
      this.setState(()=>({
        sound
      }));
    }

    componentDidMount() {
      const dispatch = this.context.store.dispatch;

      this.setState(()=>({
        soundList
      }));

      console.log(this.context.store.getState());

      playSound(soundList, dispatch, {type: 'PLAY_SOUND', url : soundList.url}, this.output);
    }

    render() {
      if(this.state.sound !== null) return <WrappedComponent {...this.props} {...this.state}  />;
      return <WrappedComponent {...this.props}  />;
    }
  }
}
