import { useContext } from "react";
//
import ContextApi from "../../Context/ContextApi";
//
import Header from "../../components/header";
//

const Home = () => {
  const { trueOrFalse } = useContext(ContextApi);
  console.log(trueOrFalse);
  return (
    <div className="container">
      <Header />
      <div className="side-bar">
        <p>Acá va la barra lateral</p>
      </div>
      <div className="main-content">
        <p>Acá va el main content</p>
      </div>
      <div className="footer">
        <p>Acá va el footer</p>
      </div>
    </div>
  );
};

export default Home;
