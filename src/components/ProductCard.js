import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaCartArrowDown } from "react-icons/fa";
import * as strings from "../constants/strings";
import { ProductButton, Input } from "./index";
import { colors } from "../configs/colorsPalette";

const Wrapper = styled.section`
  background: ${colors.WHITE};
  margin: 1rem 2rem;
  height: 125px;
  width: 350px;
  min-width: 350px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const ProductImage = styled.div`
  background: ${colors.RANDOM};
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

const ProductName = styled.div`
  flex: 1;
  margin: 0px 0.5rem;
`;

const Row = styled.div`
  display: flex;
`;

const ProductCard = props => {
  const inputEl = useRef(null);
  const { id, quantity, name, price } = props;
  return (
    <Wrapper data-id={id}>
      <Row>
        <ProductImage />
        <ProductName>
          <p>{name}</p>
          {strings.CURRENCY} {price}
        </ProductName>
        <FaCartArrowDown
          style={{
            fontSize: "26px",
            color: quantity <= 0 ? colors.OFF_WHITE : colors.MARIGOLD
          }}
        />
      </Row>
      <Row style={{ marginTop: "0.5rem" }}>
        <ProductButton
          data-action="add"
          btnText="+ Add"
          onClick={() => inputEl.current.stepUp(1)}
        />
        <Input
          ref={inputEl}
          type="number"
          value={quantity}
          min={0}
          data-action="onchange"
          id={id}
        />
        <ProductButton
          btnText="- Remove"
          data-action="remove"
          onClick={() => inputEl.current.stepDown(1)}
          disabled={quantity <= 0}
        />
      </Row>
    </Wrapper>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string
};
