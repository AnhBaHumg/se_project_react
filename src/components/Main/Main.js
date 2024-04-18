import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { weatherType } from "../../utils/weatherApi";
import { useContext } from "react";

function Main({
  weatherTemp,
  weatherCondition,
  onSelectCard,
  clothingItems,
  handleOpenItemModal,
  onCardLike,
  loggedIn,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

  const currentWeatherType = weatherType(temp, currentTemperatureUnit);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === currentWeatherType;
  });

  return (
    <main className="main">
      <WeatherCard
        day={false}
        type={weatherCondition ? weatherCondition : "clear"}
        temperatureString={`${temp}°`}
      />
      <section className="main__section" id="card-section">
        Today is {`${temp}° ${currentTemperatureUnit}`} / You may want to wear:
        <div className="card_items">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                item={item}
                onSelectCard={onSelectCard}
                key={item._id}
                handleOpenItemModal={handleOpenItemModal}
                onCardLike={onCardLike}
                loggedIn={loggedIn}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
