import { FETCH_COLLECTION } from "./types";

export const fetchCollection = () => dispatch => {
  fetch(`/tracks/`)
    .then(res => res.json())
    .then(collection =>
      dispatch({
        type: FETCH_COLLECTION,
        payload: collection
      })
    );
};
