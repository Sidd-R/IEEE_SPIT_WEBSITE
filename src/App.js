import { Route, Routes } from "react-router-dom";
import Events from "./Pages/Events"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import { Home } from "./Pages/Home";
import { Team } from "./Pages/Team";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;