import Header from "../Header/Header";
import "./App.css";
import "../Footer/Footer.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
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
import React from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weatherType, setWeatherType] = useState("");
  const [isDay, setIsDay] = useState(true);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [deleteCard, setDeleteCard] = useState(false);
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") handleCloseModal();
    };
    function handleOutsideModalClick(evt) {
      if (evt.target.classList.contains("modal")) {
        handleCloseModal();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", handleOutsideModalClick);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", handleOutsideModalClick);
    };
  }, [activeModal]);

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };


  const handleOpenConfirmationModal = () => {
    setActiveModal("delete");
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  // const onAddItem = async (values) => {
  //   try {
  //     const res = await postItems(values);
  //     setClothingItems((items) => [res, ...items]);
  //     handleCloseModal();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

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

  const handleDeleteItem = () => {
    console.log(selectedCard._id);
    setDeleteCard(true);
    deleteItems(selectedCard._id)
      .then(() => {
        const filteredCards = clothingItems.filter((card) => {
          return card._id !== selectedCard._id;
        });

        setClothingItems(filteredCards);
        handleCloseModal();
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
        getItems().then((res) => {
          setClothingItems(res);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
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
            isLoading={isLoading}
            buttonText={isLoading? 'Saving...' : 'Save'}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onDelete={handleOpenConfirmationModal}
            handleOpenConfirmationModal={handleOpenConfirmationModal}
          />
        )}
        {activeModal === "delete" && (
          <DeleteConfirmationModal
            handleDeleteItem={handleDeleteItem}
            handleCloseModal={handleCloseModal}
            selectedCard={selectedCard}
          ></DeleteConfirmationModal>
        )}
      </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
