import axios from "axios";
import actionTypes from "../types";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    dispatch({
      type: actionTypes.GET_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    throw error;
  }
};

export const getProduct = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT,
    payload: id,
  });
};

export const removeProduct =()=> dispatch=> {
  dispatch({
    type: actionTypes.REMOVE_PRODUCT
  })
}


export const addToCart = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: id,
  });
};

export const removeFromCart = (removeItem) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: removeItem,
  });
};

export const deleteItem = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_ITEMS,
    payload: id,
  });
};