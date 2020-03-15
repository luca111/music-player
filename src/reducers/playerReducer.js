import { PLAY_TRACK } from "../actions/types";

const initialState = {
  trackId: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PLAY_TRACK:
      return {
        ...state,
        trackId: action.payload
      };
    default:
      return state;
  }
}
