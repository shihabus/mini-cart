import ProductList from "../../data/cartItems";
import { cloneDeep } from "lodash";
import { ON_CART_UPDATE, FLUSH_CART } from "./actionTypes";

const updateQuantity = (id, quantity, currentState) => {
  return currentState.products.map(product => {
    if (product.id == id) product.quantity = Number(quantity);
    return product;
  });
};

const initialState = {
  products: cloneDeep(ProductList)
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ON_CART_UPDATE:
      return {
        ...state,
        products: updateQuantity(payload.id, payload.quantity, state)
      };
    case FLUSH_CART:
      console.log("{ ...state, products: [...ProductList] }", ProductList);
      return {
        products: cloneDeep(ProductList)
      };

    default:
      return state;
  }
};
