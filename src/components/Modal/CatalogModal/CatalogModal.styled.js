import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    height: 280px;
  }
`;

export const TitleWraper = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
  & span {
    color: #3470ff;
    font-weight: 600;
  }
`;

export const SubTitle = styled.h3`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;
`;
export const Wrapper = styled.div`
  margin-bottom: 24px;
`;
export const Description = styled.p`
  font-size: 14px;

  line-height: 20px;
`;
export const SpanBtn = styled.p`
  background-color: rgba(249, 249, 249, 1);
  display: inline-block;
  padding: 7px 14px;
  border-radius: 35px;
  margin-right: 8px;
  margin-bottom: 8px;
  white-space: nowrap;
  width: fit-content;
  & span {
    color: rgba(52, 112, 255, 1);
  }
`;
export const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;
