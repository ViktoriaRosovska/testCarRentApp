import { useEffect, useState } from "react";
import { getAdverts } from "../../redux/adverts/operations";
import { advertsSelector, filterSelector } from "../../redux/adverts/advertsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { AdvertsCollection } from "../../components/AdvertsCollection/AdvertsCollection";
import { Modal } from "../../components/Modal/Modal";
import { CatalogModal } from "../../components/Modal/CatalogModal/CatalogModal";
import { FilterSearch } from "../../components/FilterSearch/FilterSearch";
import { LoadMoreButton, PageWrapper } from "./CatalogPage.styled";

export default function CatalogPage() {
  const filter = useSelector(filterSelector);
  console.log(filter);
  const [showModal, setShowModal] = useState(false);
  const [advertId, setAdvertId] = useState("");
  const onShowModalClick = (advertId) => {
    setShowModal(true);
    setAdvertId(advertId);
  };
  const onBackdropClose = () => {
    setShowModal(false);
  };
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
    <PageWrapper>
      <FilterSearch />
      <AdvertsCollection adverts={filter.length ? filter : moreAdverts} onShowModalClick={onShowModalClick} />
      {!filter.length && moreAdverts.length === 12 && (
        <LoadMoreButton type="button" onClick={() => handleLoadMore()}>
          Load more
        </LoadMoreButton>
      )}

      {showModal && (
        <Modal onBackdropClose={onBackdropClose} advertId={advertId}>
          <CatalogModal advertId={advertId} />
        </Modal>
      )}
    </PageWrapper>
  );
}
