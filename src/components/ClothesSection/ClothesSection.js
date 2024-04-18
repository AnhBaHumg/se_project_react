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
    <div className="clothing__section-cards">
      <ul className="clothingcard">
        {clothingItems.map((item) => {
          const isOwn = item.owner === currentUser._id;
          if (isOwn) {
            return (
              <ItemCard
                item={item}
                onSelectCard={onSelectCard}
                onCreateModal={onCreateModal}
                key={item._id}
                loggedIn={loggedIn}
                onCardLike={onCardLike}
              />
            );
          } else return null;
        })}
      </ul>
    </div>
  );
};

export default ClothesSection;
