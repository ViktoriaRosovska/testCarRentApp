import PropTypes from "prop-types";
import { FilterSelect, SelectLabel } from "./FilterSearch.styled";

export const CustomFilterSelect = ({ width, label, placeholder, options, name, onChange }) => {
  const styles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      boxShadow: state.isFocused ? 0 : 0,
      backgroundColor: "rgba(247, 247, 251, 1)",
      borderWidth: "1px",
      borderColor: "rgba(247, 247, 251, 1)",
      justifyContent: "flex-end",
      borderRadius: "14px",
      height: "44px",
      width: width,
      paddingLeft: "18px",

      "&:hover": {
        borderColor: "rgba(138, 138, 137, 0.3)",
      },
    }),
    singleValue: (baseStyles) => ({
      ...baseStyles,
      textAlign: "right",
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "20px",
    }),

    valueContainer: (baseStyles) => ({
      ...baseStyles,
      justifyContent: "flex-start",
      alignItems: "center",
    }),
    indicatorsContainer: (baseStyles) => ({
      ...baseStyles,
      paddingLeft: "16px",
      paddingRight: "16px",
      justifyContent: "flex-end",
      alignContent: "center",
      color: "red",
      "&:hover": {
        color: "black",
      },
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      borderRadius: "14px",
      width: width,
      paddingRight: "5px",
    }),
    menuList: (baseStyles) => ({
      ...baseStyles,
      "&::-webkit-scrollbar": {
        width: "6px",
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgb(211 211 220)",
        borderRadius: "20px",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
      },
    }),
    option: (baseStyles) => ({
      ...baseStyles,
      boxShadow: "none",
      width: "100%",
      backgroundColor: "transparent",
      color: "rgba(18, 20, 23, 0.5)",
      "&:hover": {
        color: "black",
      },
    }),
    input: (baseStyles) => ({
      ...baseStyles,
    }),
    indicatorSeparator: (baseStyles) => ({
      ...baseStyles,
      display: "none",
    }),
    dropdownIndicator: (baseStyles, { isFocused }) => ({
      ...baseStyles,
      color: "rgba(18, 20, 23, 1)",
      padding: "0",
      "&:hover": {
        color: "rgba(52, 112, 255, 1)",
      },
      transition: "transform 0.25s ease-out",
      transform: isFocused && "rotate(180deg)",
    }),
  };

  return (
    <>
      <SelectLabel>
        <span>{label}</span>
        <FilterSelect
          placeholder={placeholder}
          options={options}
          styles={styles}
          name={name}
          onChange={onChange}
          width={width}
          isClearable={true}
          isSearchable={true}
        />
      </SelectLabel>
    </>
  );
};

CustomFilterSelect.propTypes = {
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  width: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};
