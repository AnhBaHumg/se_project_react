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
import { Switch, Route, useHistory } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import {
  deleteItems,
  getItems,
  postItems,
  likeClothingItem,
  dislikeClothingItem,
} from "../../utils/api";
import Profile from "../Profile/Profile";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { login, update, register, checkToken } from "../../utils/auth.js";
import LoginModal from "../LoginModal/LoginModal.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import EditProfileModal from "../EditProfileModal/EditProfileModal.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weatherType, setWeatherType] = useState("");
  const [isDay, setIsDay] = useState(true);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [city, setCity] = useState("");
  const [deleteCard, setDeleteCard] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory("");
  const [currentUser, setCurrentUser] = useState({});

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleOpenLoginModal = () => {
    setActiveModal("login");
  };

  const handleOpenRegisterModal = () => {
    setActiveModal("register");
  };

  const handleOpenEditModal = () => {
    setActiveModal("edit");
  };

  const handleOpenConfirmationModal = () => {
    setActiveModal("delete");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
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

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const onAddItem = (values) => {
    setIsLoading(true);
    postItems(values)
      .then((res) => {
        setClothingItems([res.data, ...clothingItems]);
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
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleCardLike = (_id, isLiked) => {
    isLiked
      ? dislikeClothingItem(_id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === _id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err))
      : likeClothingItem(_id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === _id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err));
  };

  function checkTokenSetUser(token) {
    return checkToken(token)
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function loginUser(values) {
    setIsLoading(true);
    login(values)
      .then((res) => {
        handleCloseModal();
        const jwt = res.data;
        localStorage.setItem("jwt", jwt);

        return checkTokenSetUser(jwt);
      })
      .catch((e) => {
        console.error(`Unable to login to user due to: ${e}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function updateUser(values) {
    const jwt = localStorage.getItem("jwt");
    setIsLoading(true);
    update(values, jwt)
      .then((res) => {
        setCurrentUser(res.data);
        handleCloseModal();
      })
      .catch((e) => {
        console.error(`Unable to update user due to ${e}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function registerUser(values) {
    setIsLoading(true);
    register(values)
      .then(() => {
        handleCloseModal();
        loginUser(values);
      })
      .catch((e) => {
        console.error(`Unable to register user due to: ${e}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function logoutUser() {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setLoggedIn(false);
    history.push("/");
  }

  function fetchClothes() {
    getItems()
      .then((items) => {
        setClothingItems(items.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchClothes();
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt !== null) {
      checkTokenSetUser(jwt).catch((e) => {
        console.error(e);
      });
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreateModal={handleCreateModal}
          temp={temp}
          weatherCity={city}
          loggedIn={loggedIn}
          register={handleOpenRegisterModal}
          login={handleOpenLoginModal}
        />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              weatherType={weatherType}
              onSelectCard={handleSelectedCard}
              day={isDay}
              clothingItems={clothingItems}
              onCardLike={handleCardLike}
              loggedIn={loggedIn}
            />
          </Route>
          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
              onCreateModal={handleCreateModal}
              onCardLike={handleCardLike}
              loggedIn={loggedIn}
              editProfile={handleOpenEditModal}
              logout={logoutUser}
            />
          </ProtectedRoute>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
            isLoading={isLoading}
            buttonText={isLoading ? "Saving..." : "Save"}
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
        {activeModal === "login" && (
          <LoginModal
            onClose={handleCloseModal}
            loginUser={loginUser}
            isLoading={isLoading}
          />
        )}
        {activeModal === "register" && (
          <RegisterModal
            onClose={handleCloseModal}
            registerUser={registerUser}
            openLoginModal={handleOpenLoginModal}
            isLoading={isLoading}
          />
        )}
        {activeModal === "edit" && (
          <EditProfileModal
            onClose={handleCloseModal}
            updateUser={updateUser}
            isLoading={isLoading}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
