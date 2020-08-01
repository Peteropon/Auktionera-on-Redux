import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadAuctionSuccess(auctions) {
  return { type: types.LOAD_AUCTIONS_SUCCESS, auctions };
}

export function updateAuctionSuccess(auction) {
  return { type: types.UPDATE_AUCTION_SUCCESS, auction };
}

export function createAuctionSuccess(auction) {
  return { type: types.CREATE_AUCTION_SUCCESS, auction };
}

export function loadAuctions() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getAuctions()
      .then((auctions) => {
        dispatch(loadAuctionSuccess(auctions));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveAuction(auction) {
  debugger;
  return function (dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .saveAuction(auction)
      .then((savedAuction) => {
        debugger;
        auction.id
          ? dispatch(updateAuctionSuccess(savedAuction))
          : dispatch(createAuctionSuccess(savedAuction));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
