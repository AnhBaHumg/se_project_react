import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  const onClick = () => {
    onSelectCard(item);
  };
  return (
    <div className="card">
      <div className="card_list">
        <img
          src={item.imageUrl}
          className="card_image"
          alt={item.name}
          onClick={onClick}
        />
        <div className="card_name">{item.name}</div>
      </div>
    </div>
  );
};

export default ItemCard;