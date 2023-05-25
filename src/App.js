import { Route, Routes } from "react-router-dom";
import Events from "./Pages/Events"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import { Home } from "./Pages/Home";
import { Team } from "./Pages/Team";
import './styles/App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <div style={{marginTop:"10vh",zIndex:"5",backgroundColor:"(0,0,0,0.1)"}}>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;