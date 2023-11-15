import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";

import { HeaderContainer } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav />
    </HeaderContainer>
  );
};
