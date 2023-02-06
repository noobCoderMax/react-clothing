import { useRoutes } from "react-router-dom";
import Tool from "./components/Tool";
import WeatherCard from "./components/WeatherCard";
import routes from "./router";

function App() {
  const outlet = useRoutes(routes);
  return (
    <>
      <div>{outlet}</div>
      <Tool />
      <WeatherCard/>
    </>
  );
}

export default App;
