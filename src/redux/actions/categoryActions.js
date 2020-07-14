import * as types from "./actionTypes";
import * as usersApi from "../../api/categoryApi";

export function loadCategoriesSuccess(categories) {
  return { type: types.LOAD_CATEGORIES_SUCCESS, categories };
}

export function loadCategories() {
  return function (dispatch) {
    return usersApi
      .getCategories()
      .then((categories) => {
        dispatch(loadCategoriesSuccess(categories));
      })
      .catch((error) => {
        throw error;
      });
  };
}
