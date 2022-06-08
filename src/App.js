//
import ContextApi from "./Context/ContextApi/Provider";
import Routes from "./Routes";
//

//

const App = () => {
  return (
    <ContextApi>
      <Routes />
    </ContextApi>
  );
};

export default App;
