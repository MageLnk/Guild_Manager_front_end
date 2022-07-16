// Components
import Header from "../../components/header";
import Footer from "../../components/footer";
// Style
import "./style/style.css";
// App
const FourOFour = () => {
  return (
    <div className="container-profile">
      <Header />

      <div className="four-o-four">
        <h1>ERROR 404</h1>
        <p>:{`(`}</p>
      </div>

      <Footer />
    </div>
  );
};

export default FourOFour;
