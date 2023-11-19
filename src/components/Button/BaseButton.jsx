import PropTypes from "prop-types";
import { StyledButton } from "./BaseButton.styled";

export const BaseButton = ({ title, type = "button", onClick, padding }) => {
  return (
    <StyledButton type={type} onClick={onClick} padding={padding}>
      {title}
    </StyledButton>
  );
};

BaseButton.propTypes = {
  padding: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};
