import { filter, get } from "lodash";
import { Totalizer } from "../../utils/totalizer";

const getProductList = state => {
  return get(state, "appReducer.products", []);
};

const getCartList = state => {
  const products = getProductList(state);
  return filter(products, product => product.quantity > 0);
};

const getTotal = state => {
  const cartItems = getCartList(state);
  return cartItems.reduce(
    (acc, item) => parseFloat(acc) + Totalizer(item.quantity, item.price),
    0
  );
};

export { getCartList, getTotal, getProductList };
