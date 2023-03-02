import { useRoutes } from "react-router-dom";
import Tool from "./components/Tool";
import routes from "./router";
import { useLocation } from 'react-router'
function App() {
  const outlet = useRoutes(routes);
  const location = useLocation()
  const toolVisiale: boolean = location.pathname === "/login" ? false : true;

  return (
    <>
      <div>{outlet}</div>
      {
        toolVisiale ? <Tool /> : null
      }
    </>
  );
}

export default App;
