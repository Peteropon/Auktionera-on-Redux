import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import { Storage } from "aws-amplify";

export function loadFileSuccess(file) {
  return { type: types.LOAD_FILES_SUCCESS, file };
}

export function loadFile(attachment) {
  return function (dispatch) {
    dispatch(beginApiCall);
    return Storage.vault
      .get(attachment)
      .then((file) => {
        dispatch(loadFileSuccess(file));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
