import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { ModalContainer, Overlay } from "./Modal.styled";

export const Modal = ({ onBackdropClose, children }) => {
  document.body.classList.add("openModal");
  const onBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onBackdropClose();
      document.body.classList.remove("openModal");
    }
  };
  return createPortal(
    <Overlay onClick={onBackdrop} id="Overlay">
      <ModalContainer>{children}</ModalContainer>
    </Overlay>,

    document.querySelector("#modal-root")
  );
};

Modal.propTypes = {
  onBackdropClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
