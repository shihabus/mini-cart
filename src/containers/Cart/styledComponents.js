import styled from "styled-components";
import { colors } from "../../configs/colorsPalette";

const Container = styled.div`
  grid-area: cart;
  background: ${colors.INDEPENDENCE};
  height: 100%;
`;

const Scrollable = styled.div`
  overflow: auto;
  padding: 1rem 0px;
  height: max-content;
  max-height: ${props => props.height};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TotalPriceWrapper = styled.p`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  height: 3rem;
  color: ${colors.WHITE};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 6rem;
`;

export { Container, Scrollable, TotalPriceWrapper, ButtonContainer };
