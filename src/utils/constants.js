import daySunny from "../images/Day/Sunny.svg";
import dayClody from "../images/Day/Cloudy.svg";
import dayRainy from "../images/Day/Rainy.svg";
import daySnowy from "../images/Day/Snowy.svg";
import dayStormy from "../images/Day/Stormy.svg";
import dayFogy from "../images/Day/Fogy.svg";

import nightMoon from "../images/Night/Moon.svg";
import nightCloud from "../images/Night/cloud.svg";
import nightRain from "../images/Night/Rain.svg";
import nightSnow from "../images/Night/Snow.svg";
import nightStorm from "../images/Night/Storm.svg";
import nightFog from "../images/Night/Fog.svg";

export const weatherOptions = [
  { url: daySunny, day: true, type: "sunny" },
  { url: dayClody, day: true, type: "cloudy" },
  { url: dayRainy, type: true, type: "rainy" },
  { url: daySnowy, day: true, type: "snowy" },
  { url: dayStormy, day: true, type: "stormy" },  
  { url: dayFogy, day: true, type: "fogy" },

  { url: nightMoon, day: false, type: "moon" },
  { url: nightCloud, day: false, type: "cloud" },  
  { url: nightRain, day: false, type: "rain" },  
  { url: nightSnow, day: false, type: "snow" },
  { url: nightStorm, day: false, type: "storm" },  
  { url: nightFog, day: false, type: "fog" },
];

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];


