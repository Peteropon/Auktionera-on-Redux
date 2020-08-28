import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import { API } from "aws-amplify";

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
  return async function (dispatch) {
    dispatch(beginApiCall());

    try {
      const savedAuction = await API.post("auctions", "/auctions", {
        body: auction,
      });
      dispatch(createAuctionSuccess(savedAuction));
    } catch (error) {
      dispatch(apiCallError(error));
      throw error;
    }

    // return courseApi
    //   .saveAuction(auction)
    //   .then((savedAuction) => {
    //     auction.id
    //       ? dispatch(updateAuctionSuccess(savedAuction))
    //       : dispatch(createAuctionSuccess(savedAuction));
    //   })
    //   .catch((error) => {
    //     dispatch(apiCallError(error));
    //     throw error;
    //   });
  };
}
