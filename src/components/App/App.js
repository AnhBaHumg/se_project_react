import Header from "../Header/Header";
import "./App.css";
import "../footer/Footer.css";
import Main from "../Main/Main";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import {
  getForecastWeather,
  parseWeatherData,
  parseCityData,
} from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import { deleteItems, getItems, postItems } from "../../utils/api";
import Profile from "../Profile/Profile";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weatherType, setWeatherType] = useState("");
  const [isDay, setIsDay] = useState(true);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [setDeleteCard] = useState(false);
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleCloseConfirmModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const onAddItem = (values) => {
    setIsLoading(true);
    postItems(values)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDeleteCard = () => {
    console.log(selectedCard._id);
    setDeleteCard(true);
    deleteItems(selectedCard._id)
      .then(() => {
        const filteredCards = clothingItems.filter((card) => {
          return card._id !== selectedCard._id;
        });

        setClothingItems(filteredCards);
        handleCloseModal();
        handleCloseConfirmModal();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setDeleteCard(false);
      });
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
        setCity(parseCityData(data));
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const tempature = parseWeatherData(data);
        const date = new Date();
        setWeatherType(data.weather[0].main.toLowerCase());
        if (
          data?.sys.sunrise * 1000 < date.getTime() &&
          data?.sys.sunset * 1000 > date.getTime()
        ) {
          setIsDay(true);
        } else {
          setIsDay(false);
        }
        setTemp(tempature);
        getItems().then((res) => {
          setClothingItems(res);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreateModal={handleCreateModal}
          temp={temp}
          weatherCity={city}
        />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              weatherType={weatherType}
              onSelectCard={handleSelectedCard}
              day={isDay}
              clothingItems={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
              onCreateModal={handleCreateModal}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            handleDeleteCard={() => {
              handleDeleteCard(selectedCard);
            }}
          />
        )}
        {activeModal === "delete" && (
          <DeleteConfirmationModal
            handleDeleteItem={handleDeleteCard}
            handleCloseConfirmModal={handleCloseConfirmModal}
            selectedCard={selectedCard}
          ></DeleteConfirmationModal>
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;