import { useState } from "react";
import { BaseButton } from "../Button/BaseButton";
import { CustomFilterSelect } from "./CustomFilterSelect";
import { FilterWrapper, FormSearch } from "./FilterSearch.styled";
import { useDispatch, useSelector } from "react-redux";
import { getFilterAdverts } from "../../redux/adverts/operations";
import { filterSelector } from "../../redux/adverts/advertsSelectors";

const makeCar = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land",
].map((el) => {
  return { value: el, label: el };
});
const rentalPriceCar = [
  "10$",
  "15$",
  "20$",
  "25$",
  "30$",
  "35$",
  "40$",
  "45$",
  "50$",
  "55$",
  "60$",
  "65$",
  "70$",
  "75$",
  "80$",
  "85$",
  "90$",
  "95$",
  "100$",
  "105$",
  "110$",
  "115$",
  "120$",
  "125$",
  "130$",
  "135$",
  "140$",
  "145$",
  "150$",
  "155$",
  "160$",
  "165$",
  "170$",
  "175$",
  "180$",
  "185$",
  "190$",
  "195$",
  "200$",
  "205$",
  "210$",
  "215$",
  "220$",
  "225$",
  "230$",
  "235$",
  "240$",
  "245$",
  "250$",
  "255$",
  "260$",
  "265$",
  "270$",
  "275$",
  "280$",
  "285$",
  "290$",
  "295$",
  "300$",
  "305$",
  "310$",
  "315$",
  "320$",
  "325$",
  "330$",
  "335$",
  "340$",
  "345$",
  "350$",
  "355$",
  "360$",
  "365$",
  "370$",
  "375$",
  "380$",
  "385$",
  "390$",
  "395$",
  "400$",
].map((el) => {
  return { value: el, label: el };
});

export const FilterSearch = () => {
  const filterAdverts = useSelector(filterSelector);
  console.log(filterAdverts);
  const dispatch = useDispatch();
  const [rentalPrice, setRentalPrice] = useState("");
  const [make, setMake] = useState("");

  const handlePriceChange = (e) => {
    setRentalPrice(e.value);
    console.log(rentalPrice);
  };
  const handleMakeChange = (e) => {
    setMake(e.value);
    console.log(make);
  };
  const handleFormSearchSubmit = (e) => {
    e.preventDefault();
    const searchParams = {
      rentalPrice,
      make,
    };
    dispatch(getFilterAdverts(searchParams));
    console.log(searchParams);
  };
  return (
    <FilterWrapper>
      <FormSearch onSubmit={handleFormSearchSubmit}>
        <CustomFilterSelect
          options={makeCar}
          placeholder="Enter the text"
          label="Car brand"
          name="make"
          width="224px"
          value={make}
          onChange={(e) => handleMakeChange(e)}
        />
        <CustomFilterSelect
          options={rentalPriceCar}
          placeholder="To $"
          label="Price/ 1 hour"
          name="rentalPrice"
          width="160px"
          value={rentalPrice}
          onChange={(e) => handlePriceChange(e)}
        />
        <BaseButton type="submit" title="Search" padding="14px 44px" />{" "}
      </FormSearch>
    </FilterWrapper>
  );
};
