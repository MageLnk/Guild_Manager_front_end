import { useContext } from "react";
//
import ContextApi from "../../Context/ContextApi";
//
import Header from "../../components/header";
import Footer from "../../components/footer";
//
import "./style/style.css";

const FourOFour = () => {
  //const { trueOrFalse } = useContext(ContextApi);
  //console.log(trueOrFalse);
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
