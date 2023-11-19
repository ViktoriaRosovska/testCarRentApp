import React from "react";
import styled from "styled-components";

export const StyledButton = styled(({ children, ...props }) => {
  delete props["padding"];
  return React.createElement("button", props, children);
})`
  height: 44px;
  background-color: #3470ff;
  color: white;
  font-family: "Manrope";
  font-weight: 600;
  font-size: 14px;
  border-radius: 12px;
  padding: ${(props) => props.padding};
  line-height: 20px;
  white-space: nowrap;
  &:hover {
    background-color: rgba(11, 68, 205, 1);
  }
`;
