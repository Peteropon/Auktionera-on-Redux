import { combineReducers } from "redux";
import auctions from "./auctionReducer";
import users from "./userReducer";
import categories from "./categoryReducer";
import apiCallsInProgress from "./apiStatusReducer";
import isAuthenticated from "./authReducer";

const rootReducer = combineReducers({
  auctions,
  users,
  categories,
  apiCallsInProgress,
  isAuthenticated,
});

export default rootReducer;
