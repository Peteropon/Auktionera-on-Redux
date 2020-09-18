import { combineReducers } from "redux";
import myAuctions from "./auctionReducer";
import users from "./userReducer";
import categories from "./categoryReducer";
import apiCallsInProgress from "./apiStatusReducer";
import isAuthenticated from "./authReducer";
import file from "./fileReducer";

const rootReducer = combineReducers({
  //auctions,
  myAuctions,
  users,
  categories,
  file,
  apiCallsInProgress,
  isAuthenticated,
});

export default rootReducer;
