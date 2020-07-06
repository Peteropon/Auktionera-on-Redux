export default function auctionReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, { ...action.auction }];
    default:
      return state;
  }
}
