import React from "react";
import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 274px;
  height: 426px;
`;

export const ImageWrapper = styled.div`
  width: 274px;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
  margin-bottom: 14px;
  position: relative;
  & svg {
    position: absolute;
    top: 14px;
    right: 14px;
  }
`;
export const TitleWraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  height: 24px;
  width: 274px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
  & span {
    max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #3470ff;
    height: 24px;
  }
`;
export const ShortDescription = styled(({ children, ...props }) => {
  delete props["marginbottom"];
  return React.createElement("div", props, children);
})`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  line-height: 18px;
  height: 40px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: ${(props) => props.marginbottom};
`;
