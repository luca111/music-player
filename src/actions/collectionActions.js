import { FETCH_COLLECTION } from "./types";
import { API_RELATIVE_PATH } from "../config";

export const fetchCollection = () => dispatch => {
  fetch(`${API_RELATIVE_PATH}/tracks/`)
    .then(res => res.json())
    .then(collection =>
      dispatch({
        type: FETCH_COLLECTION,
        payload: collection
      })
    );
};
