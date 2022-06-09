import { useContext } from "react";

//
import ContextApi from "../../Context/ContextApi";
//
import Login from "../login";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SideBar from "../../components/sideBar";
import MainContent from "./mainContent";
//

const Home = () => {
  const { login } = useContext(ContextApi);
  if (login === false) {
    return <Login />;
  } else {
    return (
      <div className="container">
        <Header />

        <SideBar />

        <MainContent />

        <Footer />
      </div>
    );
  }
};

export default Home;

// Debo hacer el tenario, aunque no me funciona por alguna razón. La otra opción
// es hacer en la carpeta "global-Logic" una función que valide a través del useEffect
// si el usuario está logeado o no. De set así, pasamos al home, de lo contrario no.
// Pero para agilizar el trabajo, lo dejaremos así por mientras
