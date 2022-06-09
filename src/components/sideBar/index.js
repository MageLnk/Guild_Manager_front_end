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
        <Link className="hyper-link-decoration" to={`/contribution`}>
          Contribución
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
      <p>
        <Link className="hyper-link-decoration" to={`/valtan`}>
          Valtan
        </Link>
      </p>
      <p>
        <Link className="hyper-link-decoration" to={`/vykas`}>
          Vykas
        </Link>
      </p>
      <p>
        <Link className="hyper-link-decoration" to={`/kakul-saydon`}>
          Kakul Saydon
        </Link>
      </p>
      <p>
        <Link className="hyper-link-decoration" to={`/brelshaza`}>
          Brelshaza
        </Link>
      </p>
      <p>
        <Link className="hyper-link-decoration" to={`/managment`}>
          Managment
        </Link>
      </p>
    </div>
  );
};

export default SideBar;
