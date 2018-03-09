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

    sound.setNumberOfLoops(-1);
    sound.setPan(1);

    if(cb && typeof cb === 'function') {
      cb(sound);
    }
  };

}