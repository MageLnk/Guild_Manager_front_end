import { useContext } from "react";
import { Link } from "react-router-dom";
// Context
import ContextApi from "../../Context/ContextApi";
import SelectedGame from "./selectedGame";
// Style
import "./style/style.css";
// App
const SideBar = () => {
  const { temporaryUser, selectedGameOnSideBar, setselectedGameOnSideBar } = useContext(ContextApi);
  return (
    <div className="side-bar">
      <div className="game-list-container">
        <SelectedGame
          setselectedGameOnSideBar={setselectedGameOnSideBar}
          selectedGameOnSideBar={selectedGameOnSideBar}
          temporaryUser={temporaryUser}
        />
      </div>
      <div className="permanents-options">
        <span>
          <Link className="hyper-link-decoration" to={`/`}>
            Inicio
          </Link>
        </span>
      </div>
      <div className="reactive-options">
        <span>Prueba</span>
      </div>
    </div>
  );
};

export default SideBar;
