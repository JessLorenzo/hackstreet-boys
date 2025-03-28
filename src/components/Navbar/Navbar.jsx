import "./Navbar.scss";
import Logo from "../../assets/icons/icons.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="max logo" />
      <span className="navbar__text">TRIVIA</span>
    </div>
  );
}

export default Navbar;
