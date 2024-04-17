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
      <section className="profile__sidebar">
        <SideBar editProfile={editProfile} logout={logout}></SideBar>
      </section>
      <section>
        <ClothesSection
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
          onCardLike={onCardLike}
          loggedIn={loggedIn}
          clothingItems={clothingItems}
        />
      </section>
    </div>
  );
};

export default Profile;
