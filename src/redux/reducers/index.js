import { combineReducers } from "redux";
import auctions from "./auctionReducer";
import users from "./userReducer";
import categories from "./categoryReducer";

const rootReducer = combineReducers({
  auctions,
  users,
  categories,
});

export default rootReducer;
