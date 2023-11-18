import { useEffect, useState } from "react";
import { getAdverts } from "../../redux/adverts/operations";
import { advertsSelector } from "../../redux/adverts/advertsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { AdvertsCollection } from "../../components/AdvertsCollection/AdvertsCollection";
import { Modal } from "../../components/Modal/Modal";
import { CatalogModal } from "../../components/Modal/CatalogModal/CatalogModal";

export default function CatalogPage() {
  const [showModal, setShowModal] = useState(false);
  const [advertId, setAdvertId] = useState("");
  const onShowModalClick = (advertId) => {
    setShowModal(true);
    setAdvertId(advertId);
    console.log("hello", advertId);
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
    <>
      <AdvertsCollection adverts={moreAdverts} onShowModalClick={onShowModalClick} />
      {moreAdverts.length === 12 && (
        <button type="button" onClick={() => handleLoadMore()}>
          Load more
        </button>
      )}
      {showModal && (
        <Modal onBackdropClose={onBackdropClose} advertId={advertId}>
          <CatalogModal advertId={advertId} />
        </Modal>
      )}
    </>
  );
}
