import "./ModalWithForm.css";
import React from "react";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  onSubmit,
  isLoading,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <h1 className="modal__title">{title}</h1>
        <button className="modal__close" type="button" onClick={onClose} />

        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}
          <div>
            <button type="submit" className="modal__button">
              {isLoading ? "Saving..." : buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
