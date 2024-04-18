import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  clothingItems,
  onSelectCard,
  onCreateModal,
  onClick,
  onCardLike,
  loggedIn,
  editProfile,
  logout,
}) => {
  return (
    <div className="profile">
      <SideBar editProfile={editProfile} logout={logout}></SideBar>
      <div className="profile__clothing">
        <div className="profile__clothing-header">
          <p className="profile__clothing-title">Your Items</p>
          <button className="profile__clothing-button" onClick={onCreateModal}>
            + Add New
          </button>
        </div>
        <ClothesSection
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
          onCardLike={onCardLike}
          loggedIn={loggedIn}
          clothingItems={clothingItems}
        ></ClothesSection>
      </div>
    </div>
  );
};

export default Profile;
