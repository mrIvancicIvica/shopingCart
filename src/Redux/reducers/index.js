import { combineReducers } from "redux";
import { products, selectedProduct } from "../reducers/productReducer";

const rootReducers = combineReducers({
  products,
  selectedProduct,
});

export default rootReducers;
