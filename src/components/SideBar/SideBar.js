import avatarImage from "../../images/avatar.svg";
import "./SideBar.css";

const SideBar = () => {
  const username = " Terrence Tegegne";
  return (
    <div className="sidebar">
      <img
        className="sidebar__avatar-image"
        src={avatarImage}
        alt="Avatar Image"
      />
      <div className="sidebar__username">{username}</div>
    </div>
  );
};

export default SideBar;