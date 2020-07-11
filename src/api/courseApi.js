import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/auctions/";

export function getAuctions() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveAuction(auction) {
  return fetch(baseUrl + (auction.id || ""), {
    method: auction.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(auction),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteAuction(auctionId) {
  return fetch(baseUrl + auctionId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
