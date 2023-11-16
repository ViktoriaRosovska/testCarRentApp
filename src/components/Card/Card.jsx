import PropTypes from "prop-types";
import { CardWrapper, ImageItem, ImageWrapper, ShortDescription, TitleWraper } from "./Card.styled";
import { BaseButton } from "../Button/BaseButton";

export const Card = ({ advert }) => {
  const { img, model, year, make, rentalPrice, address, rentalCompany, mileage, type, functionalities } = advert;
  const shortAdress = (address) => {
    const adr = [...address.split(",")];
    adr.splice(0, 1);
    return adr.join(" | ");
  };
  return (
    <CardWrapper>
      <ImageWrapper>
        <ImageItem src={img} alt={make + " " + model} />
      </ImageWrapper>
      <div>
        <TitleWraper>
          <div>
            {make} <span>{model}</span> {year}
          </div>

          <div>{rentalPrice}</div>
        </TitleWraper>
        <ShortDescription>
          {shortAdress(address)} | {rentalCompany} | {type} | {model} | {mileage} | {functionalities[0]}
        </ShortDescription>
      </div>
      <BaseButton type="button" title="Learn more" />
    </CardWrapper>
  );
};
Card.propTypes = {
  advert: PropTypes.shape({
    address: PropTypes.string,
    functionalities: PropTypes.array,
    type: PropTypes.string,
    mileage: PropTypes.number,
    rentalCompany: PropTypes.string,
    img: PropTypes.string,
    model: PropTypes.string,
    make: PropTypes.string,
    rentalPrice: PropTypes.string,
    year: PropTypes.number,
  }),
};
