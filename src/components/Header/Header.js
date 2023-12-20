import "./Header.css";
import avatarImage from "../../images/avatar.svg"
import logoImg from "../../images/Logo.svg";



const Header = ({ onCreateModal}) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logoImg} alt="Logo" />
        </div>
        <p className="header__date">{currentDate}, TX</p>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            type="text"
            className="header__button"
            onClick={onCreateModal}
          >
            +Add Clothes
          </button>
        </div>
        <p className="header__name">Terrence Tegegne</p>
        <div>
          <img src={avatarImage} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
