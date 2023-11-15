import styled from "styled-components";

export const Menu = styled.nav`
  display: flex;
  gap: 50px;
  font-size: 30px;
  & a.active {
    color: green;
  }
`;
