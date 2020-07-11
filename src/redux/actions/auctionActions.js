import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createAuction(auction) {
  return { type: types.CREATE_AUCTION, auction };
}

export function loadAuctionSuccess(auctions) {
  return { type: types.LOAD_AUCTIONS_SUCCESS, auctions };
}

export function loadAuctions() {
  return function (dispatch) {
    return courseApi
      .getAuctions()
      .then((auctions) => {
        dispatch(loadAuctionSuccess(auctions));
      })
      .catch((error) => {
        throw error;
      });
  };
}
