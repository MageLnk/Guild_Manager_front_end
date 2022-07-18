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
  const { temporaryUser, selectedGameOnSideBar, setselectedGameOnSideBar, temporaryGamePages } =
    useContext(ContextApi);

  // Esta función tiene el propósito de, dependiendo de la elección del juego en el sideBar
  // traer las vistas/pages del juego y enviarle el array de esas vistas al DeployOptionByGame
  // para que se vean en el sidebar.
  const searchPagesFromSelectedGame = () => {
    let pages = undefined;
    for (let i = 0; i < temporaryGamePages.length; i++) {
      if (selectedGameOnSideBar === temporaryGamePages[i].gameName) {
        pages = temporaryGamePages[i];
        break;
      }
      if (selectedGameOnSideBar !== temporaryGamePages[i].gameName) {
        pages = { pages: [""] };
      }
    }
    return pages;
  };

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
        <DeployOptionsByGame gamePages={searchPagesFromSelectedGame()} />
      </div>
    </div>
  );
};

export default SideBar;
