import PropTypes from "prop-types";
import { StyledButton } from "./BaseButton.styled";

export const BaseButton = ({ title, type = "button", onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

BaseButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};
