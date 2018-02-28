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
    }

    static contextTypes = { store: PropTypes.object };

    output ({play, pause, stop, reset, release}){
      return ({
        play,
        pause,
        stop,
        reset,
        release,
      });
    }

    componentDidMount() {
      const dispatch = this.context.store.dispatch;

      this.setState(()=>({
        soundList
      }));

      playSound(soundList, dispatch, {type: 'PLAY_SOUND', url : soundList.url}, this.output);
    }

    render() {
      return <WrappedComponent {...this.props} {...this.output}  />;
    }
  }
}
