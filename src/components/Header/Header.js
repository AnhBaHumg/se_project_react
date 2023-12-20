import "./Header.css";

const Header = ({ onCreateModal }) => {
  console.log("Header");
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/Logo.svg").default} alt="logo" />
        </div>
        <p className="header__date">December 19, TX</p>
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
          <img src={require("../../images/avatar.svg").default} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
