import Sound from 'react-native-sound';

export const playSound = (info, dispatch, action, cb) => {

  const sound = new Sound(info.url, error => callback(error, sound));

  const callback = (error, sound) => {
    if (error) {
      console.alert('error', error.message);
      return;
    }

    sound.play(() => {
      dispatch({type: 'PLAY_SOUND'});
      sound.release();
    });


    if(cb && typeof cb === 'function') {
      cb({
        play: sound.play,
        pause: sound.pause,
        stop: sound.stop,
        reset: sound.reset,
        release: sound.release,
      });
      dispatch({type: 'POPULATE STORE'});
    }
  };

}