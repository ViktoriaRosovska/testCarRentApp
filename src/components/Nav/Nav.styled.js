import styled from "styled-components";

export const Menu = styled.nav`
  display: flex;
  gap: 20px;
  font-size: 14px;
  & a {
    color: rgba(18, 20, 23, 0.7);
  }
  & a.active {
    color: #3470ff;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    gap: 50px;
  }
`;
