import { Link } from "react-router-dom";
import "./Header.css";
import headerlogo from "../../images/Logo.svg";
// import { parseWeatherData } from "../../utils/weatherApi";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { useContext } from "react";

const Header = ({ weatherCity, onCreateModal, loggedIn, register, login }) => {
  const currentUser = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={headerlogo} alt="logo" />
          </Link>
        </div>
        <div>
          {currentDate}, {weatherCity}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        {loggedIn ? (
          <>
            <button
              className="header__button"
              type="button"
              onClick={onCreateModal}
            >
              + Add Clothes
            </button>
            <Link className="header__username" to="/profile">
              <p className="header__user-name">{currentUser?.name}</p>
              <img
                className="header__user-avatar"
                src={currentUser?.avatar}
                alt="Profile Avatar"
              />
            </Link>
          </>
        ) : (
          <>
            <button type="button" className="header__button" onClick={register}>
              Sign Up
            </button>
            <button type="button" className="header__button" onClick={login}>
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
