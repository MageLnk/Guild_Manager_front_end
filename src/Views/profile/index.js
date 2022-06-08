import { useContext } from "react";
//
import ContextApi from "../../Context/ContextApi";
//
import Header from "../../components/header";
import Footer from "../../components/footer";
//
import "./style/style.css";

const Profile = () => {
  const { trueOrFalse } = useContext(ContextApi);
  console.log(trueOrFalse);
  return (
    <div className="container-profile">
      <Header />

      <div className="argos">
        <p>
          Acá es donde vas a configurar tu cuenta, como tu personaje principal y
          tu{`(s)`} alters.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
