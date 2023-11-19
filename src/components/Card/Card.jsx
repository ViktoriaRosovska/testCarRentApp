import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import { CardWrapper, ImageWrapper, ShortDescription, TitleWraper } from "./Card.styled";
import { BaseButton } from "../Button/BaseButton";
import { ImageItem } from "../../App.styled";
import { shortAddress } from "../../helpers/shortAddress";
import active from "../../assets/image/active.svg";
import normal from "../../assets/image/normal.svg";
import { addFavoriteAdvert, deleteFavoriteAdvert } from "../../redux/adverts/favorites/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { favoriteSelector } from "../../redux/adverts/favorites/favoriteSelector";

export const Card = ({ advert, onShowModalClick }) => {
  const { img, model, year, make, rentalPrice, address, rentalCompany, mileage, type, functionalities, id } = advert;
  const favoriteAdverts = new Set(useSelector(favoriteSelector));

  const isFavorite = favoriteAdverts.has(advert.id);
  const dispatch = useDispatch();

  const onShowModal = (advertId) => {
    onShowModalClick(advertId);
  };

  const handleImageClick = () => {
    if (!isFavorite) {
      dispatch(addFavoriteAdvert(advert.id));
    } else {
      dispatch(deleteFavoriteAdvert(advert.id));
    }
  };

  return (
    <CardWrapper>
      <ImageWrapper onClick={(advert) => handleImageClick(advert)}>
        {isFavorite ? <ReactSVG src={active} /> : <ReactSVG src={normal} />}
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
          {shortAddress(address)} | {rentalCompany} | {type} | {model} | {mileage} | {functionalities[0]}
        </ShortDescription>
      </div>
      <BaseButton type="button" title="Learn more" onClick={() => onShowModal(id)} padding="12px 99px" />
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
