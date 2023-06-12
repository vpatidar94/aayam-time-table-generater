import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import Loader from "./layouts/loader/Loader";

const App = () => {
  const routing = useRoutes(Themeroutes);

  return <div className="dark">
    <Loader />
    {routing}
  </div>;
};

export default App;
