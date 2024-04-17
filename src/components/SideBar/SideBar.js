import "./SideBar.css";
import { React, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

const SideBar = ({ editProfile, logout }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__user-info-container">
        <img
          className="sidebar__avatar-image"
          src={currentUser?.avatar}
          alt="Avatar Image"
        />
        <div className="sidebar__username">{currentUser?.name}</div>
      </div>
      <div className="sidebar__user-options">
        <button className="sidebar__user-button" onClick={editProfile}>
          Change Profile Data
        </button>
        <button className="sidebar__user-button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
