import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function fileReducer(state = initialState.file, action) {
  switch (action.type) {
    case types.LOAD_FILES_SUCCESS:
      return action.file;
    default:
      return state;
  }
}
