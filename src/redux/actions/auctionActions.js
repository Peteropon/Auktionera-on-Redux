import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function loadAuctionSuccess(auctions) {
  return { type: types.LOAD_AUCTIONS_SUCCESS, auctions };
}

export function updateAuctionSuccess(auctions) {
  return { type: types.UPDATE_AUCTION_SUCCESS, auctions };
}

export function createAuctionSuccess(auctions) {
  return { type: types.CREATE_AUCTION_SUCCESS, auctions };
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

export function saveAuction(auction) {
  return function (dispatch) {
    return courseApi
      .saveAuction(auction)
      .then((savedAuction) => {
        auction.id
          ? dispatch(updateAuctionSuccess(savedAuction))
          : dispatch(createAuctionSuccess(savedAuction));
      })
      .catch((error) => {
        throw error;
      });
  };
}
