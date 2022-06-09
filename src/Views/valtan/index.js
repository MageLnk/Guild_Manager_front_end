import { useContext } from "react";
//
import ContextApi from "../../Context/ContextApi";
//
import Login from "../login";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SideBar from "../../components/sideBar";
//
import "./style/style.css";

const Valtan = () => {
  const { login } = useContext(ContextApi);
  if (login === false) {
    return <Login />;
  } else {
    return (
      <div className="container">
        <Header />

        <SideBar />

        <div className="valtan">
          <p>
            Este es el panel en donde podrás ver todas las partys de Valtan que
            están intentarno armarse a través de la guild, y obviamente, poder
            inscribirte en ellas. Además, se intentará poner botones para poder
            crear tu propia instancia para crear tu propia party de Valtan,
            liderarla y llevarla al éxito junto a la guild!
          </p>
        </div>

        <Footer />
      </div>
    );
  }
};

export default Valtan;

// Agregué la lógica de lógin acá también, pero mantiene la misma lógica del home. Se hará bien y más eficiente
// después
