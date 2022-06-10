import { useContext } from "react";
//
import ContextApi from "../../Context/ContextApi";
//
import Header from "../../components/header";
import Footer from "../../components/footer";
import SideBar from "../../components/sideBar";
//
import "./style/style.css";

const Members = () => {
  //  const { trueOrFalse } = useContext(ContextApi);
  //  console.log(trueOrFalse);
  return (
    <div className="container">
      <Header />

      <SideBar />

      <div className="members">
        <p>
          Acá va a ir la lista de miembros del gremio, y sus respectivos alters
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Members;
