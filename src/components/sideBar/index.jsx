import { Link } from "react-router-dom";
// Context

// Style
import "./style/style.css";
// App
const SideBar = () => {
  return (
    <div className="side-bar">
      <p>
        <Link className="hyper-link-decoration" to={`/`}>
          Inicio
        </Link>
      </p>
    </div>
  );
};

export default SideBar;
