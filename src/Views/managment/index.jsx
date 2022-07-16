// Components
import Header from "../../components/header";
import Footer from "../../components/footer";
import SideBar from "../../components/sideBar";
// Style
import "./style/style.css";
// App
const Managment = () => {
  return (
    <div className="container">
      <Header />

      <SideBar />

      <div className="managment">
        <p>
          Todo el manejo de la guild. Sacar miembros, aceptar miembros, agregar alters, configurar
          su contribución, etc etc
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Managment;
