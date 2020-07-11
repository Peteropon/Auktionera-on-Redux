import * as types from "./actionTypes";
import * as usersApi from "../../api/authorApi";

export function loadUserSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function loadUsers() {
  return function (dispatch) {
    return usersApi
      .getUsers()
      .then((users) => {
        dispatch(loadUserSuccess(users));
      })
      .catch((error) => {
        throw error;
      });
  };
}
