import { useContext } from "react";
//
import ContextApi from "../../Context/ContextApi";
//
import Header from "../../components/header";
import Footer from "../../components/footer";
import SideBar from "../../components/sideBar";
//
import "./style/style.css";

const Brelshaza = () => {
  const { trueOrFalse } = useContext(ContextApi);
  console.log(trueOrFalse);
  return (
    <div className="container">
      <Header />

      <SideBar />

      <div className="brelshaza">
        <p>
          Este es el panel en donde podrás ver todas las partys de Brelshaza que
          están intentarno armarse a través de la guild, y obviamente, poder
          inscribirte en ellas. Además, se intentará poner botones para poder
          crear tu propia instancia para crear tu propia party de Brelshaza,
          liderarla y llevarla al éxito junto a la guild!
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Brelshaza;
