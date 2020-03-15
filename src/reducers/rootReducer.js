import { combineReducers } from "redux-starter-kit";
import collectionReducer from "./collectionReducer";
import playerReducer from "./playerReducer";

const rootReducer = combineReducers({
  collection: collectionReducer,
  activeTrack: playerReducer
});

export default rootReducer;
