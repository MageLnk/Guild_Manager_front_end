import { useContext } from "react";
import { Link } from "react-router-dom";
// Context
import ContextApi from "../../Context/ContextApi";
import SelectedGame from "./selectedGame";
import DeployOptionsByGame from "./deployOptionsByGame";
// Style
import "./style/style.css";
// App
const SideBar = () => {
  const { temporaryUser, selectedGameOnSideBar, setselectedGameOnSideBar, temporaryLostArkGame } =
    useContext(ContextApi);
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
        <DeployOptionsByGame temporaryLostArkGame={temporaryLostArkGame} />
      </div>
      <Link to={`/argos`}>
        <p>Ola</p>
      </Link>
    </div>
  );
};

export default SideBar;
