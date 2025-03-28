import "./Navbar.scss";
import Logo from "../../assets/icons/icons.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={Logo} alt="max logo" />
        <span className="navbar__text">TRIVIA</span>
      </Link>
    </div>
  );
}

export default Navbar;
