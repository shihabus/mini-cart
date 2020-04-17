import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../configs/colorsPalette";

const ButtonWrapper = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  font-size: ${props => props.btnTextSize};
  padding: ${props => props.btnPadding};
  background: ${props => props.backgroundColor};
  color: ${props => props.btnColor};
  cursor: pointer;

  :disabled {
    background: ${colors.OFF_WHITE_2};
    color: ${colors.GREY_OFF};
    cursor: no-drop;
  }
`;

function BaseButton(props) {
  const { btnText, disabled } = props;
  return (
    <ButtonWrapper {...props} disabled={disabled}>
      {btnText}
    </ButtonWrapper>
  );
}

BaseButton.propTypes = {
  disabled: PropTypes.bool,
  btnText: PropTypes.string,
  onClickHandler: PropTypes.func
};

BaseButton.defaultProps = {
  disabled: false,
  btnText: "Click",
  btnTextSize: "1rem",
  btnColor: colors.WHITE
};

const ProductButton = props => {
  return (
    <BaseButton
      {...props}
      btnPadding=".5rem 1rem"
      backgroundColor={colors.YANKEES_BLUE}
      btnTextSize="1rem"
    />
  );
};

const CheckOutButton = props => {
  return <BaseButton {...props} />;
};

export { ProductButton, CheckOutButton };
