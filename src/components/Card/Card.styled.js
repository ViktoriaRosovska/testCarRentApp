import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 274px;
  height: 426px;
  border: 1px solid red;
`;

export const ImageItem = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 274px;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
  margin-bottom: 14px;
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
export const ShortDescription = styled.div`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  line-height: 18px;
  height: 40px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 28px;
`;
