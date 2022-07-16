// Components
import Header from "../../components/header";
import Footer from "../../components/footer";
import SideBar from "../../components/sideBar";
// Style
import "./style/style.css";
// App
const Contribution = () => {
  return (
    <div className="container">
      <Header />

      <SideBar />

      <div className="contribution">
        <p>
          Esta vista está hecha para poner escribir la contrubición de cada uno de los miembros.
          PODEEER
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Contribution;
