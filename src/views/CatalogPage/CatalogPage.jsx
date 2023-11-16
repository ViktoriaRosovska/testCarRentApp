import { useEffect, useState } from "react";
import { getAdverts } from "../../redux/adverts/operations";
import { advertsSelector } from "../../redux/adverts/advertsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { AdvertsCollection } from "../../components/AdvertsCollection/AdvertsCollection";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const adverts = useSelector(advertsSelector);
  const [moreAdverts, setMoreAdverts] = useState([...adverts]);

  const handleLoadMore = () => {
    setPage((page) => page + 1);

    setMoreAdverts((prevState) => [...prevState, ...adverts]);
  };
  useEffect(() => {
    setMoreAdverts([...adverts]);
  }, [adverts]);

  useEffect(() => {
    dispatch(getAdverts(page));
  }, [dispatch, page]);

  return !moreAdverts ? (
    <div>Loading</div>
  ) : (
    <>
      <AdvertsCollection adverts={moreAdverts} />
      {moreAdverts.length === 12 && (
        <button type="button" onClick={() => handleLoadMore()}>
          Load more
        </button>
      )}
    </>
  );
}
