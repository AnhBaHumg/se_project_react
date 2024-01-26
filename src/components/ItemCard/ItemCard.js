import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard}) => {
  return (
    <li className="card">
      
      <div className="card_list">
        <img
          src={item.imageUrl}
          className="card_image"
          alt={item.name}
          onClick={() => {
            onSelectCard(item);
          }}
        />
        <p className="card_name">{item.name}</p>
      </div>
    </li>
  );
};

export default ItemCard;