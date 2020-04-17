import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import {
  Container,
  Scrollable,
  TotalPriceWrapper,
  ButtonContainer
} from "./styledComponents";

import { Header, CartCard, CheckOutButton } from "../../components";

import * as strings from "../../constants/strings";
import { CHECKOUT } from "../../constants/routes";
import { colors } from "../../configs/colorsPalette";

export default function Index(props) {
  const history = useHistory();
  const { list, total, onCartUpdate, flushCart } = props;
  return (
    <Container>
      <Header header="Cart" height="3rem" />
      <Scrollable
        height="calc(100% - (14rem))"
        onClick={e => {
          e.persist();
          const action = e.target.dataset.action;
          if (action === "remove") {
            const productID = e.target.closest("section").dataset.id;
            onCartUpdate({
              id: productID,
              quantity: 0
            });
          }
          return;
        }}
      >
        {list.length !== 0 &&
          list.map(item => <CartCard key={item.id} {...item} />)}
        {list.length === 0 && (
          <section
            style={{
              padding: "0px 2rem",
              fontSize: "1.5rem",
              color: colors.OFF_WHITE
            }}
          >
            Cart is empty
          </section>
        )}
      </Scrollable>
      <TotalPriceWrapper>
        Total: {strings.CURRENCY} <b>{total}</b>
      </TotalPriceWrapper>
      <ButtonContainer>
        <CheckOutButton
          btnText="Check out"
          btnPadding="1.25rem 5rem"
          backgroundColor={colors.AQUAMARINE}
          btnTextSize="1.5rem"
          btnColor={colors.MAASTRICHT_BLUE}
          style={{ fontWeight: "600" }}
          disabled={list.length === 0}
          onClick={() => history.push(CHECKOUT)}
        />
        {list.length !== 0 && (
          <MdDeleteForever
            onClick={flushCart}
            style={{
              cursor: "pointer",
              fontSize: "3.5rem",
              color: colors.WHITE,
              paddingLeft: "5px"
            }}
          />
        )}
      </ButtonContainer>
    </Container>
  );
}
Index.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number,
  onCartUpdate: PropTypes.func,
  flushCart: PropTypes.func
};
