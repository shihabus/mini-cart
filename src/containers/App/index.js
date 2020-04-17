import React from "react";
import PropTypes from "prop-types";
import { Layout, Navbar } from "../../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "../Cart";
import Products from "../Products";
import { connect } from "react-redux";
import * as selectors from "./selectors";
import actionCreator from "./actions";
import * as routes from "../../constants/routes";
import CheckOut from "../CheckOut";
import { COMPANY } from "../../constants/strings";

function Index(props) {
  const { cartList, cartTotal, onCartUpdate, products, flushCart } = props;
  return (
    <Layout>
      <Router>
        <Navbar count={cartList.length} companyName={COMPANY} />
        <Switch>
          <Route path={routes.CHECKOUT}>
            <CheckOut flushCart={flushCart} list={cartList} total={cartTotal} />
          </Route>
          <Route>
            <Cart
              list={cartList}
              total={cartTotal}
              onCartUpdate={onCartUpdate}
              flushCart={flushCart}
            />
            <Products onCartUpdate={onCartUpdate} products={products} />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

const mapStateToProps = state => ({
  cartList: selectors.getCartList(state),
  products: selectors.getProductList(state),
  cartTotal: selectors.getTotal(state)
});

const mapDispatchToProps = dispatch => ({
  onCartUpdate: data => dispatch(actionCreator.ON_CART_UPDATE(data)),
  flushCart: () => dispatch(actionCreator.FLUSH_CART())
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);

Index.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object),
  cartTotal: PropTypes.number,
  onCartUpdate: PropTypes.func,
  flushCart: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.object)
};
