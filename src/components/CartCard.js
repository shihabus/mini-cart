import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MdRemoveShoppingCart } from "react-icons/md";
import * as strings from "../constants/strings";
import { Totalizer } from "../utils/totalizer";
import { colors } from "../configs/colorsPalette";

const CardWrapper = styled.section`
  background: ${colors.WHITE};
  margin: 0.15rem 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductName = styled.p`
  font-size: 20px;
  font-weight: bold;
  width: 50%;
`;

const VerticalCentered = styled.p`
  display: flex;
  align-items: center;
`;

export default function CartCard(props) {
  const { name, quantity, price, id } = props;
  return (
    <CardWrapper key={id} data-id={id}>
      <Row style={{ height: "2.5rem" }}>
        <ProductName>{name}</ProductName>
        <VerticalCentered>
          {quantity}{" "}
          <span style={{ fontSize: "0.65rem", padding: "0px 4px" }}> X </span>{" "}
          {price}
        </VerticalCentered>
        <div
          data-action="remove"
          style={{
            padding: "0.25rem",
            cursor: "pointer"
          }}
        >
          <MdRemoveShoppingCart
            style={{
              fontSize: "1.5rem",
              color: colors.ERROR_RED
            }}
            data-action="remove"
          />
        </div>
      </Row>
      <Row style={{ justifyContent: "flex-end" }}>
        <VerticalCentered>
          Total :
          <span style={{ fontsize: "1.5rem" }}>
            {strings.CURRENCY}
            <b>{Totalizer(quantity, price)}</b>
          </span>
        </VerticalCentered>
      </Row>
    </CardWrapper>
  );
}
CartCard.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.number
};
