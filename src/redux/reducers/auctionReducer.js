import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function auctionReducer(state = initialState.auctions, action) {
  switch (action.type) {
    case types.CREATE_AUCTION_SUCCESS:
      return [...state, { ...action.auctions }];
    case types.LOAD_AUCTIONS_SUCCESS:
      return action.auctions;
    case types.UPDATE_AUCTION_SUCCESS:
      return state.map((auction) => {
        auction.id === action.auctions.id ? action.auctions : auction;
      });
    default:
      return state;
  }
}
