import "./ModalWithForm.css";
import React from "react";

const ModalWithForm = ({
  children,
  buttontext,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
}) => {
  
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        />
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button
            type="submit"
            className="modal__button"
          >
            {buttontext}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;