import { FETCH_COLLECTION } from "../actions/types";

const initialState = {
  tracks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COLLECTION:
      return {
        ...state,
        tracks: action.payload
      };
    default:
      return state;
  }
}
