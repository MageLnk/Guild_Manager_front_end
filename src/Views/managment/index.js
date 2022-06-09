import { useContext } from "react";
//
import ContextApi from "../../Context/ContextApi";
//
import Header from "../../components/header";
import Footer from "../../components/footer";
import SideBar from "../../components/sideBar";
//
import "./style/style.css";

const Managment = () => {
  const { trueOrFalse } = useContext(ContextApi);
  console.log(trueOrFalse);
  return (
    <div className="container">
      <Header />

      <SideBar />

      <div className="managment">
        <p>
          Todo el manejo de la guild. Sacar miembros, aceptar miembros, agregar
          alters, configurar su contribución, etc etc
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Managment;
