import * as types from "./actionTypes";

export function createAuction(auction) {
  return { type: types.CREATE_AUCTION, auction };
}
