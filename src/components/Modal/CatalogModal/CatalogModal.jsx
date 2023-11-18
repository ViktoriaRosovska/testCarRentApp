import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { advertById } from "../../../redux/adverts/advertsSelectors";
import { useEffect, useState } from "react";
import { getAdvertById } from "../../../redux/adverts/operations";
import {
  CompanyWrapper,
  Description,
  ImageWrapper,
  SpanBtn,
  SubTitle,
  TitleWraper,
  Wrapper,
} from "./CatalogModal.styled";
import { ImageItem } from "../../../App.styled";
import { ShortDescription } from "../../Card/Card.styled";
import { BaseButton } from "../../Button/BaseButton";
import { Modal } from "../Modal";

export const CatalogModal = ({ advertId }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const currentAdvert = useSelector(advertById);
  const {
    id,
    img,
    accessories,
    address,
    description,
    engineSize,
    fuelConsumption,
    functionalities,
    make,
    model,
    rentalCompany,
    rentalConditions,
    rentalPrice,
    type,
    mileage,
    year,
  } = currentAdvert;
  console.log(currentAdvert);
  useEffect(() => {
    dispatch(getAdvertById(advertId));
  }, [dispatch, advertId]);

  const checkNumber = (word) => {
    const index = word.search(/: /);
    console.log(word);
    if (index !== -1) {
      return (
        <>
          {word.substring(0, index + 1)} <span>{word.substring(index + 1)}</span>
        </>
      );
    } else {
      return word;
    }
  };
  const onShowModalClick = () => {
    setShowModal(true);
  };
  const onBackdropClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <ImageWrapper>
        <ImageItem src={img} />
      </ImageWrapper>
      <TitleWraper>
        {make}&nbsp;<span>{model}</span>&nbsp;{year}
      </TitleWraper>
      <ShortDescription marginbottom="14px">
        {address} | id: {id} | Year: {year} | Type: {type} | Fuel Consumption:&nbsp;
        {fuelConsumption} | Engine Size: {engineSize}
      </ShortDescription>
      <Wrapper>
        <Description>{description}</Description>
      </Wrapper>
      <Wrapper>
        <SubTitle>Accessories and functionalities:</SubTitle>
        {functionalities?.join(" | ")} {accessories?.join(" | ")}
      </Wrapper>
      <Wrapper>
        <SubTitle>Rental Conditions:</SubTitle>
        {rentalConditions?.split("\n").map((el, idx) => (
          <SpanBtn key={idx}>{checkNumber(el)}</SpanBtn>
        ))}
        <SpanBtn>
          Mileage: <span>{mileage / 1000}</span>
        </SpanBtn>
        <SpanBtn>
          Rental Price: <span>{rentalPrice}</span>
        </SpanBtn>
        <CompanyWrapper></CompanyWrapper>
      </Wrapper>
      <CompanyWrapper>
        <SubTitle>Rental Company:</SubTitle>&nbsp;{rentalCompany}
      </CompanyWrapper>

      <BaseButton type="button" title="Rental car" onClick={onShowModalClick} />
      {showModal && <Modal onBackdropClose={onBackdropClose}>{/* <CatalogModal  /> */}</Modal>}
    </>
  );
};

CatalogModal.propTypes = {
  advertId: PropTypes.string,
};
