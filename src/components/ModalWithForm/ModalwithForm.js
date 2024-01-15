import { useEffect, useRef } from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttontext,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
}) => {
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" onSubmit={handleSubmit}>
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
