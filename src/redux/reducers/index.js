import { combineReducers } from "redux";
import auctions from "./auctionReducer";
import users from "./userReducer";
import categories from "./categoryReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  auctions,
  users,
  categories,
  apiCallsInProgress,
});

export default rootReducer;
