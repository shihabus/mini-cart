import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../configs/colorsPalette";

const Wrapper = styled.div`
  height: 100%;
  background: ${colors.OFF_WHITE};
  display: grid;
  grid-template-columns: calc(100% - (400px + 0.25rem)) 400px;
  grid-template-rows: 10vh calc(100% - (10vh + 0.25rem));
  grid-gap: 0.25rem;
  grid-template-areas:
    "nav nav"
    "items cart";
`;

export default function Layout(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};
