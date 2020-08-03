import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import { Auth } from "aws-amplify";

export function authSuccess() {
  return { type: types.AUTH_SUCCESS };
}
export function authenticateUser(user) {
  return async function (dispatch) {
    dispatch(beginApiCall());
    try {
      await Auth.signIn(user.email, user.password);
      dispatch(authSuccess());
    } catch (e) {
      dispatch(apiCallError(e));
    }
  };
}
