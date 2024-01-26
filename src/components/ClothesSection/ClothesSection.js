import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({ clothingItems, onSelectCard, onCreateModal }) => {
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
        {clothingItems.map((item) => (
          <ItemCard
            item={item}
            onSelectCard={onSelectCard}
            key={item.id || item._id}
          />
        ))}
      </div>
    </section>
  );
};

export default ClothesSection;