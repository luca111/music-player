import { PLAY_TRACK } from "./types";

export const playTrack = trackId => dispatch => {
  dispatch({
    type: PLAY_TRACK,
    payload: trackId
  });
};
