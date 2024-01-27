import React from "react";
import ModalWithForm from "../ModalWithForm/ModalwithForm";
import { useForm } from "../../Hooks/useForm";

const AddItemModal = ({ isOpen, onAddItem, handleCloseModal, isLoading }) => {
  const { values, handleChange, setValues } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem(values);
  }

  return (
    <ModalWithForm
      title="New gardment"
      buttontext={isLoading ? "Saving..." : "Add garment"}
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          value={values.name}
          className="modal__input"
          placeholder="Name"
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Image
        <input
          type="url"
          name="imageUrl"
          value={values.imageUrl}
          className="modal__input"
          placeholder="Image URL"
          onChange={handleChange}
        />
      </label>
      <p className="modal__label_header">Select the weather type:</p>
      <div>
        <div className="modal__label_container">
          <label className="modal__label_radio">
            <input
              className="modal__input_radio"
              type="radio"
              id="hot"
              value="hot"
              name="weather"
              onChange={handleChange}
            />
            <span className="weather__name" htmlFor="hot">
              Hot
            </span>
          </label>
        </div>
        <div className="modal__label_container">
          <label className="modal__label_radio">
            <input
              className="modal__input_radio"
              type="radio"
              id="warm"
              value="warm"
              name="weather"
              onChange={handleChange}
            />
            <span className="weather__name" htmlFor="warm">
              Warm
            </span>
          </label>
        </div>
        <div className="modal__label_container">
          <label className="modal__label_radio">
            <input
              className="modal__input_radio"
              type="radio"
              id="cold"
              value="cold"
              name="weather"
              onChange={handleChange}
            />
            <span className="weather__name" htmlFor="cold">
              Cold
            </span>
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
