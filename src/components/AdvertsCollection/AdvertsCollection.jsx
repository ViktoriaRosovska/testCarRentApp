import PropTypes from "prop-types";
import { Card } from "../Card/Card";
import { CollectionWrapper } from "./AdvertsCollection.styled";

export const AdvertsCollection = ({ adverts, onShowModalClick }) => {
  return (
    <>
      <CollectionWrapper>
        {adverts.map((advert) => (
          <li key={advert.id}>
            <Card advert={advert} onShowModalClick={onShowModalClick} />
          </li>
        ))}
      </CollectionWrapper>
    </>
  );
};

AdvertsCollection.propTypes = {
  onShowModalClick: PropTypes.func,
  adverts: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
};
