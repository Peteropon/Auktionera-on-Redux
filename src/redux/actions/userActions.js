import * as types from "./actionTypes";
import * as usersApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadUserSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function loadUsers() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return usersApi
      .getUsers()
      .then((users) => {
        dispatch(loadUserSuccess(users));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
