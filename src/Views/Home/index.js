import { useContext } from "react";
//
import ContextApi from "../../Context/ContextApi";
//
import Header from "../../components/header";
import Footer from "../../components/footer";
import SideBar from "../../components/sideBar";
import MainContent from "./mainContent";
//

const Home = () => {
  const { trueOrFalse } = useContext(ContextApi);
  console.log(trueOrFalse);
  return (
    <div className="container">
      <Header />

      <SideBar />

      <MainContent />

      <Footer />
    </div>
  );
};

export default Home;
