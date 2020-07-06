import { combineReducers } from "redux";
import auctions from "./auctionReducer";

const rootReducer = combineReducers({
  auctions,
});

export default rootReducer;
