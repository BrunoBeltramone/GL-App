import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import List from "./Components/Ejercicios/1.1-List";
import ColorChange from "./Components/Ejercicios/2.1-ColorChange";
import HeaderAndFooter from "./Components/Ejercicios/2.2-HeaderAndFooter";
import WeatherApp from "./Components/Ejercicios/2.3-WheatherApp";
import { Route, Routes } from "react-router-dom";
import EventManagment from "./Components/Ejercicios/2.5-EventManagment";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<List />} />
          <Route path="/ColorChange" element={<ColorChange />} />
          <Route path="/HeaderAndFooter" element={<HeaderAndFooter />} />
          <Route path="/WeatherApp" element={<WeatherApp />} />
          <Route path="/EventManagment" element={<EventManagment />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
