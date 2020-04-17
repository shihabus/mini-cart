import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../configs/colorsPalette";

const Nav = styled.nav`
  background: ${colors.MAASTRICHT_BLUE};
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  padding: 0px 1rem;
`;

const AlignContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export default function NavBar(props) {
  return (
    <Nav>
      <AlignContainer style={{ justifyContent: "flex-start" }}>
        <div style={{ color: colors.WHITE, fontSize: "2rem" }}>
          {props.companyName}
        </div>
      </AlignContainer>
      <AlignContainer style={{ justifyContent: "flex-end" }}>
        <div style={{ color: colors.WHITE }}>
          <sub style={{ fontSize: "1.5rem" }}>Cart</sub>
          {""} {props.count || "0"}
        </div>
      </AlignContainer>
    </Nav>
  );
}
NavBar.propTypes = {
  count: PropTypes.number,
  companyName: PropTypes.string
};
