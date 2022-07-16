// Components
import Header from "../../components/header";
import Footer from "../../components/footer";
import SideBar from "../../components/sideBar";
// Style
import "./style/style.css";
// App
const Members = () => {
  return (
    <div className="container">
      <Header />

      <SideBar />

      <div className="members">
        <p>Acá va a ir la lista de miembros del gremio, y sus respectivos alters</p>
      </div>

      <Footer />
    </div>
  );
};

export default Members;
