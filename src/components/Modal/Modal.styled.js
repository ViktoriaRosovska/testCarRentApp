import styled from "styled-components";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(50, 50, 50, 0.4);
  z-index: 100;
`;

const ModalContainer = styled.div`
  background-color: white;
  max-width: 541px;
  min-width: 350px;
  position: absolute;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  padding: 40px;

  @media screen and (max-width: 767.98px) {
    overflow-y: auto;
    max-height: 700px;
  }
  @media screen and (min-width: 768px) {
    width: 541px;
    height: fit-content;
    overflow-y: auto;
  }
`;

export { Overlay, ModalContainer };
