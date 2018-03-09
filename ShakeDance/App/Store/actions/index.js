import { SOUND_OFF, SOUND_ON } from '../constants';

export const sound_off = () => ({
  type: SOUND_OFF,
  payload: {
    soundControl: false
  }
});

export const sound_on = () => ({
  type: SOUND_ON,
  payload: {
    soundControl: true
  }
});
