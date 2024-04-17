import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard, onCardLike, loggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  const id = item._id;
  const isLiked = item.likes.some((user) => {
    return user.includes(currentUser?._id);
  });
  const likeButtonClass = `card__likebutton ${
    isLiked ? "card__likebutton_liked" : ""
  }`;

  function handleLike(id, isLiked) {
    onCardLike(id, isLiked);
  }
  return (
    <li className="card">
      <div className="card_list">
        <div className="card__info">
          <div className="card__name-list">
            <p className="card_name">{item.name}</p>
          </div>
          {loggedIn ? (
            <button
              className={likeButtonClass}
              type="button"
              onClick={() => {
                handleLike(id, isLiked);
              }}
            ></button>
          ) : (
            <></>
          )}
        </div>
        <img
          src={item.imageUrl}
          className="card_image"
          alt={item.name}
          onClick={() => {
            onSelectCard(item);
          }}
        />
      </div>
    </li>
  );
};

export default ItemCard;
