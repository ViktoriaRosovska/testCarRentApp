import { useDispatch, useSelector } from "react-redux";
import { favoriteSelector } from "../../redux/adverts/favorites/favoriteSelector";
import { useEffect, useState } from "react";
import { AdvertsCollection } from "../../components/AdvertsCollection/AdvertsCollection";
import { Modal } from "../../components/Modal/Modal";
import { CatalogModal } from "../../components/Modal/CatalogModal/CatalogModal";
import { getAllAdverts } from "../../redux/adverts/operations";
import { advertsSelector } from "../../redux/adverts/advertsSelectors";

export default function FavoritesPage() {
  const favorites = useSelector(favoriteSelector);
  const [showModal, setShowModal] = useState(false);
  const [favoriteId, setFavoriteId] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdverts());
  }, [dispatch]);

  const adverts = useSelector(advertsSelector);

  const onShowModalClick = (advertId) => {
    setShowModal(true);
    setFavoriteId(advertId);
  };
  const onBackdropClose = () => {
    setShowModal(false);
  };

  const favIds = new Set(favorites);
  const fav = adverts.filter((a) => favIds.has(a.id));
  return (
    <>
      <AdvertsCollection adverts={fav} onShowModalClick={onShowModalClick} />
      {showModal && (
        <Modal onBackdropClose={onBackdropClose} advertId={favoriteId}>
          <CatalogModal advertId={favoriteId} />
        </Modal>
      )}
    </>
  );
}
