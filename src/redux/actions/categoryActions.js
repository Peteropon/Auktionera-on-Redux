import * as types from "./actionTypes";
import * as categoryApi from "../../api/categoryApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCategoriesSuccess(categories) {
  return { type: types.LOAD_CATEGORIES_SUCCESS, categories };
}

export function loadCategories() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return categoryApi
      .getCategories()
      .then((categories) => {
        dispatch(loadCategoriesSuccess(categories));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
