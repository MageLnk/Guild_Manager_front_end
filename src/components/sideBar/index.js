import { Link } from "react-router-dom";
//
import "./style/style.css";
//
const SideBar = () => {
  return (
    <div className="side-bar">
      <p>
        <Link className="hyper-link-decoration" to={`/`}>
          Inicio
        </Link>
      </p>
      <p>
        <Link className="hyper-link-decoration" to={`/members`}>
          Miembros
        </Link>
      </p>
      <p>
        <Link className="hyper-link-decoration" to={`/argos`}>
          Argos
        </Link>
      </p>
      <p>Valtan</p>
      <p>Vykas</p>
      <p>Kakul Saydon</p>
      <p>Brelshaza</p>
      <p>Managment</p>
    </div>
  );
};

export default SideBar;
