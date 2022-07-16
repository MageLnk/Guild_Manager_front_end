// Components
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import SideBar from "../../../components/sideBar";
// Style
import "./style/style.css";
// App
const Argos = () => {
  return (
    <div className="container">
      <Header />

      <SideBar />

      <div className="argos">
        <p>
          Este es el panel en donde podrás ver todas las partys de Argos que están intentarno
          armarse a través de la guild, y obviamente, poder inscribirte en ellas. Además, se
          intentará poner botones para poder crear tu propia instancia para crear tu propia party de
          Argos, liderarla y llevarla al éxito junto a la guild!
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Argos;
