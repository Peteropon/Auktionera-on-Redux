import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authReducer(
  state = initialState.isAuthenticated,
  action
) {
  switch (action.type) {
    case types.AUTH_SUCCESS:
      return (state = true);
    default:
      return state;
  }
}
