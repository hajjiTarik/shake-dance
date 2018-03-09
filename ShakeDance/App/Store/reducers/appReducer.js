import { createReducer } from '../../utils/createReducer';

export const initialState = {
  soundControl: false
};

export default createReducer(initialState, {
  SOUND_ON: (state, { soundControl }) => ({ ...state, soundControl : true }),
  SOUND_OFF: (state, { soundControl }) => ({ ...state, soundControl : false })
});