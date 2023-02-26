import { Route, Routes } from "react-router-dom";
import  Events from "./Pages/Events/Events"
import { Home } from "./Pages/Home";
import { Team } from "./Pages/Team";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/team" element={<Team/>} />
       </Routes>
    </div>
  );
}

export default App;
