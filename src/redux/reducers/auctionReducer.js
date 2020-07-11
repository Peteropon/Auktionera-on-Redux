import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function auctionReducer(state = initialState.auctions, action) {
  switch (action.type) {
    case types.CREATE_AUCTION:
      return [...state, { ...action.auction }];
    case types.LOAD_AUCTIONS_SUCCESS:
      return action.auctions;
    default:
      return state;
  }
}
