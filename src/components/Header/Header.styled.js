import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  min-width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  @media screen and (min-width: 375px) and (max-width: 767.98px) {
    padding-left: 20px;
    padding-right: 20px;
    width: 375px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439.98px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
    width: 1440px;
  }
`;
