import styled from "styled-components";

export const HomeImg = styled.img`
  width: 335px;
  height: auto;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 705px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1440px) {
    width: 1260px;
    margin-bottom: 40px;
  }
`;
export const Paragraph = styled.p`
  text-indent: 30px;
  margin-bottom: 20px;
  line-height: 1.3;
  letter-spacing: 0.02;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const HomeTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 25px;
  }
`;
