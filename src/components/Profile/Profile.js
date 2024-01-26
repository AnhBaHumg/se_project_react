import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ clothingItems, onSelectCard, onCreateModal }) => {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section>
        <ClothesSection
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
          clothingItems={clothingItems}
        />
      </section>
    </div>
  );
};

export default Profile;