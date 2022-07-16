// Components
import Header from "../../components/header";
import Footer from "../../components/footer";
// Style
import "./style/style.css";
// App
const Profile = () => {
  return (
    <div className="container-profile">
      <Header />

      <div className="argos">
        <p>
          Acá es donde vas a configurar tu cuenta, como tu personaje principal y tu{`(s)`} alters.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
