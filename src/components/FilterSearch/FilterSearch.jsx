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

const rentalPriceCar = [];
for (let i = 10; i <= 400; i += 5) {
  const price = `$${i}`;
  rentalPriceCar.push({ value: price, label: price });
}

export const FilterSearch = () => {
  const dispatch = useDispatch();
  const [rentalPrice, setRentalPrice] = useState("");
  const [make, setMake] = useState("");

  const handleFormSearchSubmit = (e) => {
    e.preventDefault();
    const searchParams = {
      make,
      rentalPrice,
    };
    dispatch(getFilterAdverts(searchParams));
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
          onChange={(options) => (!options ? setMake(" ") : setMake(options.value))}
        />
        <CustomFilterSelect
          options={rentalPriceCar}
          placeholder="To $"
          label="Price/ 1 hour"
          name="rentalPrice"
          width="160px"
          value={rentalPrice}
          onChange={(options) => (!options ? setRentalPrice(" ") : setRentalPrice(options.value))}
        />
        <BaseButton type="submit" title="Search" padding="14px 44px" />
      </FormSearch>
    </FilterWrapper>
  );
};
