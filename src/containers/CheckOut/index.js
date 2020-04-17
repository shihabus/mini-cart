import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CheckOutButton } from "../../components";
import { useHistory } from "react-router-dom";
import { CURRENCY } from "../../constants/strings";
import { colors } from "../../configs/colorsPalette";

const Wrapper = styled.div`
  grid-area: 2/1/3/3;
  background: ${colors.INDEPENDENCE};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BannerText = styled.div`
  margin: 1rem;
  color: ${colors.WHITE};
  font-size: 1.5rem;
`;

export default function Index(props) {
  const { list, total, flushCart } = props;
  const history = useHistory();
  return (
    <Wrapper>
      <BannerText>
        {total !== 0 ? (
          <p>
            Amount payable:{CURRENCY} {total}{" "}
            <span role="img" aria-label="dollar bills">
              💵
            </span>
          </p>
        ) : (
          <p>
            Payment was successful{" "}
            <span role="img" aria-label="tick mark">
              ✅
            </span>
          </p>
        )}
      </BannerText>

      <CheckOutButton
        btnText={list.length === 0 ? "Back" : "Pay"}
        btnPadding="1.5rem 5rem"
        backgroundColor={colors.AQUAMARINE}
        btnTextSize="1.5rem"
        btnColor={colors.MAASTRICHT_BLUE}
        style={{ fontWeight: "600" }}
        onClick={() => {
          list.length === 0 ? history.goBack() : flushCart();
        }}
      />
    </Wrapper>
  );
}

Index.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number,
  flushCart: PropTypes.func
};
