import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function auctionReducer(state = initialState.auctions, action) {
  switch (action.type) {
    case types.CREATE_AUCTION_SUCCESS:
      return [...state, { ...action.auction }];
    case types.UPDATE_AUCTION_SUCCESS:
      return state.map((auction) => {
        auction.id === action.auction.id ? action.auction : auction;
      });
    case types.LOAD_AUCTIONS_SUCCESS:
      return action.auctions;
    default:
      return state;
  }
}
