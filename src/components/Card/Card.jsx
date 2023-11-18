import PropTypes from "prop-types";
import { CardWrapper, ImageWrapper, ShortDescription, TitleWraper } from "./Card.styled";
import { BaseButton } from "../Button/BaseButton";
import { ImageItem } from "../../App.styled";

export const Card = ({ advert, onShowModalClick }) => {
  const { img, model, year, make, rentalPrice, address, rentalCompany, mileage, type, functionalities, id } = advert;
  const shortAdress = (address) => {
    const adr = [...address.split(",")];
    adr.splice(0, 1);
    return adr.join(" | ");
  };
  const onShowModal = (advertId) => {
    onShowModalClick(advertId);
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
        <ShortDescription marginbottom="28px">
          {shortAdress(address)} | {rentalCompany} | {type} | {model} | {mileage} | {functionalities[0]}
        </ShortDescription>
      </div>
      <BaseButton type="button" title="Learn more" onClick={() => onShowModal(id)} />
    </CardWrapper>
  );
};
Card.propTypes = {
  onShowModalClick: PropTypes.func,
  advert: PropTypes.shape({
    id: PropTypes.string,
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
