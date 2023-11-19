import styled from "styled-components";
import Select from "react-select";

export const FilterSelect = styled(Select)`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
  border: none;
  background: "transparent";
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`;
export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    height: 74px;
  }
`;
export const SelectLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: rgba(138, 138, 137, 1);
  & span {
    margin-bottom: 8px;
  }
`;

export const FormSearch = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 18px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 18px;
    justify-content: flex-start;
    align-items: flex-end;
  }
`;
