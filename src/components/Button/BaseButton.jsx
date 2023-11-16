import PropTypes from "prop-types";
import { StyledButton } from "./BaseButton.styled";

export const BaseButton = ({ title, type = "button" }) => {
  return <StyledButton type={type}>{title}</StyledButton>;
};

BaseButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};
