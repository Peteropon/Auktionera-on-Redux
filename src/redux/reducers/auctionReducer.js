import * as types from "../actions/actionTypes";

export default function auctionReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_AUCTION:
      return [...state, { ...action.auction }];
    case types.LOAD_AUCTIONS_SUCCESS:
      return action.auctions;
    default:
      return state;
  }
}
