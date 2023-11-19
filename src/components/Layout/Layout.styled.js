import styled from "styled-components";

export const Container = styled.section`
  min-width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

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
    padding-left: 90px;
    padding-right: 90px;
    width: 1440px;
  }
`;
