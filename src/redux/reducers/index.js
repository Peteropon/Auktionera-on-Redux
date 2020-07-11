import { combineReducers } from "redux";
import auctions from "./auctionReducer";
import users from "./userReducer";

const rootReducer = combineReducers({
  auctions,
  users,
});

export default rootReducer;
