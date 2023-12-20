import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, weatherType, weatherTemp = "" }) => {
  const weatherOption = weatherOptions.find((option) => {
    return option.day === day && option.type === weatherType;
  });
  const imageSrcUrl = weatherOption?.url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp} F</div>
      <div>
        <img
          src={require("../../images/Night/Moon.svg").default}
          className="weather_image"
          alt="weather"
        />
      </div>
    </section>
  );
};

export default WeatherCard;
