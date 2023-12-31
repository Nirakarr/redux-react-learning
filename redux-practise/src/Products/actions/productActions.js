import { ActionTypes } from "../contants/action-types";
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProducts = (products) => {
  return {
    type: ActionTypes.SELETED_PRODUCT,
    payload: products,
  };
};
export const removeSelectedProducts = (products) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    payload: products,
  };
};
