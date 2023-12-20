import "./WeatherCard.css";

const weatherOptions = [
  { url: require("../../images/Day/Sunny.svg").default, day: true, type: "sunny" },
  {
    url: require("../../images/Day/Cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../../images/Day/Fogy.svg").default, day: true, type: "fogy" },
  { url: require("../../images/Day/Rainy.svg").default, day: true, type: "rainy" },
  { url: require("../../images/Day/Snowy.svg").default, day: true, type: "snowy" },
  {
    url: require("../../images/Day/Stormy.svg").default,
    day: true,
    type: "stormy",
  },

  {
    url: require("../../images/Night/cloud.svg").default,
    day: false,
    type: "cloud",
  },
  {
    url: require("../../images/Night/Moon.svg").default,
    day: false,
    type: "moon",
  },
  { url: require("../../images/Night/Fog.svg").default, day: false, type: "fog" },
  {
    url: require("../../images/Night/Rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../../images/Night/Snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../../images/Night/Storm.svg").default,
    day: false,
    type: "storm",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.find((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc?.url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp} F</div>
      <div>
        <img src={require("../../images/Night/Moon.svg").default} className="weather_image" alt="weather" />
      </div>
    </section>
  );
};

export default WeatherCard;
