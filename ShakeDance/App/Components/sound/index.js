import Sound from 'react-native-sound';

export function setTestState(testInfo, component, status) {
}

/**
 * Generic play function for majority of tests
 */
export function playSound(testInfo, component) {

  const callback = (error, sound) => {
    if (error) {
      Alert.alert('error', error.message);
      setTestState(testInfo, component, 'fail');
      return;
    }
    setTestState(testInfo, component, 'playing');
    testInfo.onPrepared && testInfo.onPrepared(sound, component);
    sound.play(() => {
      setTestState(testInfo, component, 'win');
      sound.release();
    });
  };

  // If the audio is a 'require' then the second parameter must be the callback.
  if (testInfo.isRequire) {
    const sound = new Sound(testInfo.url, error => callback(error, sound));
  } else {
    const sound = new Sound(testInfo.url, testInfo.basePath, error => callback(error, sound));
  }
}