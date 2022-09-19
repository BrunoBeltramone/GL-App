import "./App.css";
import Home from "./Components/Home";
import List from "./Components/Ejercicios/1.1-List";
import ColorChange from "./Components/Ejercicios/2.1-ColorChange";
import HeaderAndFooter from "./Components/Ejercicios/2.2-HeaderAndFooter";
import WeatherApp from "./Components/Ejercicios/2.3-WheatherApp";
import { Route, Routes } from "react-router-dom";
import EventManagment from "./Components/Ejercicios/2.5-EventManagment";
import ReactEstilos from "./Components/Ejercicios/2.7-ReactEstilos";
import Hoc from "./Components/Ejercicios/3.1-Hoc";
import ToDoApp from "./Components/Ejercicios/3.2-ToDoApp";
import LifeCycle from "./Components/Ejercicios/3.3-LifeCycle";
import ConditionalRender from "./Components/Ejercicios/3.4-ConditionalRender";
import SimpleToDoApp from "./Components/Ejercicios/2.4-ToDoAppSimple";

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
          <Route path="/SimpleToDoApp" element={<SimpleToDoApp />} />
          <Route path="/EventManagment" element={<EventManagment />} />
          <Route path="/ReactEstilos" element={<ReactEstilos />} />
          <Route path="/Hoc" element={<Hoc />} />
          <Route path="/ToDoApp" element={<ToDoApp />} />
          <Route path="/LifeCycle" element={<LifeCycle />} />
          <Route path="/ConditionalRender" element={<ConditionalRender />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
