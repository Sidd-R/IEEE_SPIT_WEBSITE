import { Route, Routes } from "react-router-dom";
import Events from "./Pages/Events"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import { Home } from "./Pages/Home";
import { Team } from "./Pages/Team";
import './styles/App.css'
import MainAnimation from "./components/MainAnimation";
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { EaselPlugin } from "gsap/EaselPlugin";





function App() {
  gsap.registerPlugin(ScrollTrigger,Observer,EaselPlugin);
  return (
    <div className="App" >
      <Navbar />
      <div style={{marginTop:"10px",zIndex:"5"}}>
      <MainAnimation/>

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