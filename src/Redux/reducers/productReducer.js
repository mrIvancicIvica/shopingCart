import actionTypes from "../types";
import { addItem, removeItem } from "../card.utils";

const initState = {
  products: [],
  cart: [],
};

export const products = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: addItem(state.cart, action.payload),
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: removeItem(state.cart, action.payload),
      };
    case actionTypes.DELETE_ITEMS:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export const selectedProduct = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT:
      return { ...state, ...action.payload };

    case actionTypes.REMOVE_PRODUCT:
      return {};
    default:
      return state;
  }
};
