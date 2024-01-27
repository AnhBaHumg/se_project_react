import "../ModalWithForm/ModalWithForm.css";

const DeleteConfirmationModal = ({
  handleCloseModal,
  handleDeleteItem,
  selectedCard,
}) => {

  return (
    <div className="modal">
      <div className="modal__confirm-content" >
        <div>Are you sure you want to delete this item?</div>
        <div>This action is irreversible.</div>
        <button
          className="modal__close"
          type="button"
          onClick={handleCloseModal}
          alt="close-button"
        ></button>
        <div className="modal__confirm-buttons">
          <button
            className="modal__confirm-button"
            type="button"
            onClick={() => handleDeleteItem(selectedCard._id)}
          >
            Yes, delete item
          </button>
          <button
            className="modal__cancel-button"
            type="button"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteConfirmationModal;