import React from "react";
import styled from "styled-components";
import { colors } from "../configs/colorsPalette";

const InputWrapper = styled.input.attrs(props => ({
  type: props.type,
  disabled: props.disabled
}))`
  background: ${colors.WHITE};
  border: 1px solid black;
  border-radius: 4px;
  width: 2.5rem;
  padding: 0px 0.5rem;
  margin: 0px 1rem;
  font-size: 1rem;

  :disabled {
    background: green;
  }

  ::focus {
    border: none;
  }
`;

// eslint-disable-next-line react/display-name
const Inputs = React.forwardRef((props, ref) => {
  return <InputWrapper {...props} ref={ref}></InputWrapper>;
});

export default Inputs;
