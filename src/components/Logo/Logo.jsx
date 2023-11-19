import { LogoImg, LogoWrap } from "./Logo.styled";
import logoImg from "../../assets/image/logo.jpg";
export const Logo = () => {
  return (
    <LogoWrap>
      <LogoImg src={logoImg} />
    </LogoWrap>
  );
};
