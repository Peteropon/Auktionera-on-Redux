import * as types from "../actions/actionTypes";

export default function auctionReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_AUCTION:
      return [...state, { ...action.auction }];
    default:
      return state;
  }
}
