import { React, useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

const ClothesSection = ({
  clothingItems,
  onSelectCard,
  onCreateModal,
  onCardLike,
  loggedIn,
}) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <section className="clothes__section" id="clothes-section">
      <div className="clothes__section_name-wrapper">
        <p className="clothes__section_name">Your items</p>
        <button
          className="clothes__section_button"
          type="text"
          onClick={onCreateModal}
        >
          + Add New
        </button>
      </div>
      <div className="clothing__section-cards">
        {clothingItems.map((item) => {
          const isOwn = item.owner === currentUser._id;
          if (isOwn) {
            return (
              <ItemCard
                item={item}
                onSelectCard={onSelectCard}
                key={item.id || item._id}
                loggedIn={loggedIn}
                onCardLike={onCardLike}
              />
            );
          } else return null;
        })}
      </div>
    </section>
  );
};

export default ClothesSection;
