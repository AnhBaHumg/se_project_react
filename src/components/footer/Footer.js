import "./Footer.css";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__info">Developed by Thinh Nguyen</div>
      <div className="footer__info">{currentYear}</div>
    </footer>
  );
};

export default Footer;
//