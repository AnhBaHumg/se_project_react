import "./ModalWithForm.css";

const ModalWithForm = ({ children, buttontext, title, onClose, name }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form">
          {children}
          <button
            type="submit"
            className="modal__button modal__button_disabled"
            disabled
          >
            {buttontext}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;