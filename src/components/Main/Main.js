import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { weatherType } from "../../utils/weatherApi";
import { useContext } from "react";

function Main({ weatherTemp, onSelectCard, clothingItems, handleOpenItemModal }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

  const currentWeatherType = weatherType(temp, currentTemperatureUnit);

  const filteredCards = clothingItems.filter((clothingItem) => {
    return clothingItem.weather.toLowerCase() === currentWeatherType;
  });

  return (
    <main className="main">
      <WeatherCard
        day={false}
        type="clearnight"
        temperatureString={`${temp}°`}
      />
      <section className="card_section" id="card-section">
        Today is {`${temp}° ${currentTemperatureUnit}`} / You may want to wear:
        <div className="card_items">
          {filteredCards.map((item) => (
            <ItemCard
              item={item}
              onSelectCard={onSelectCard}
              key={item._id}
              handleOpenItemModal={handleOpenItemModal}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;