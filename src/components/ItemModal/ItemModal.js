import "./ItemModal.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemModal = ({
  selectedCard,
  onClose,
  handleOpenConfirmationModal,
  isLoading,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;

  return (
    <div className={`modal`}>
      <div className="modal__content-card">
        <button
          className="image__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__info">
          <div id="modal-group-divider">
            <p className="modal__card-name">{selectedCard.name}</p>
          </div>
          <div id="preview-group-divider">
            {isOwn ? (
              <button
                type="text"
                className="modal__delete-button"
                onClick={handleOpenConfirmationModal}
              >
                {isLoading ? "Deleting..." : "Delete item"}
              </button>
            ) : (
              <></>
            )}
            <p className="modal__card-weather">
              Weather type: {selectedCard.weather}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
