import { combineReducers } from "redux";
import myAuctions from "./auctionReducer";
import users from "./userReducer";
import categories from "./categoryReducer";
import apiCallsInProgress from "./apiStatusReducer";
import isAuthenticated from "./authReducer";

const rootReducer = combineReducers({
  //auctions,
  myAuctions,
  users,
  categories,
  apiCallsInProgress,
  isAuthenticated,
});

export default rootReducer;
