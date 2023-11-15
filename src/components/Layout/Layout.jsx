import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import GlobalStyles from "../../styles/GlobalStyles";
import { Container } from "./Layout.styled";

export default function Layout() {
  return (
    <>
      <GlobalStyles />

      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
