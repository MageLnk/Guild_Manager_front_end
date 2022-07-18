// Componentes
import Header from "../../components/header";
import Footer from "../../components/footer";
import SideBar from "../../components/sideBar";
import MainContent from "./mainContent";
//

const Home = () => {
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
