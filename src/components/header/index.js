import { Link } from "react-router-dom";
//
import guildLogo from "../../assets/img/BW_logo.jpg";
import "./style/style.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="/">
          <img className="header-logo" src={guildLogo} alt="Logo"></img>
        </Link>
      </div>

      <div className="header-buttons">
        <button>
          <Link to="/profile">Profile</Link>
        </button>
        <button>Cerrar sesión</button>
      </div>
    </div>
  );
};

export default Header;

// Ver por qué pasa ese error de arriba con el logo y el Link.
// Si le saco el Link, el grid funciona bien y todo OK.
// Si le dejo el Link, pasa lo que pasa.
