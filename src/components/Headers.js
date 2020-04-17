import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../configs/colorsPalette";

const Wrapper = styled.div`
  font-size: 24px;
  height: ${props => props.height};
  color: ${props => props.txtColor};
  display: flex;
  align-items: center;
  padding: 0px 1rem;
`;

export default function Headers(props) {
  const { header } = props;
  return <Wrapper {...props}>{header}</Wrapper>;
}

Headers.propTypes = {
  header: PropTypes.string,
  height: PropTypes.string,
  txtColor: PropTypes.string
};

Headers.defaultProps = {
  height: "2rem",
  txtColor: colors.WHITE
};
