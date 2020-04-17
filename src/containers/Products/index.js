import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ProductCard, Header } from "../../components";
import { colors } from "../../configs/colorsPalette";

const Container = styled.div`
  grid-area: items;
  background: ${colors.SEA_SERPENT};
`;

const Scrollable = styled.div`
  overflow: auto;
  height: ${props => props.height};
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
`;

function Index(props) {
  const { products, onCartUpdate } = props;

  return (
    <Container>
      <Header header="Items" height="3rem" txtColor={colors.MAASTRICHT_BLUE} />
      <Scrollable
        height={"calc(100% - 4rem)"}
        onChange={e => {
          const action = e.target.dataset.action;
          if (action === "onchange") {
            const productID = e.target.closest("section").dataset.id;
            onCartUpdate({
              id: productID,
              quantity: e.target.value
            });
          }
          return;
        }}
        onClick={e => {
          const action = e.target.dataset.action;
          if (action === "add" || action === "remove") {
            const productID = e.target.closest("section").dataset.id;
            const value = document.getElementById(`${productID}`).value;
            onCartUpdate({ id: productID, quantity: value });
          }
          return;
        }}
      >
        {products.map(product => (
          <ProductCard key={product.id} {...product}>
            {product.id}
          </ProductCard>
        ))}
      </Scrollable>
    </Container>
  );
}

export default Index;
Index.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  onCartUpdate: PropTypes.func
};
