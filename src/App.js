import { ReactLenis } from "lenis/dist/lenis-react";
import './App.css';
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="bg-zinc-950">
    <ReactLenis
      root
      options={{
       // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
        lerp: 0.05,
        //   infinite: true,
        //   syncTouch: true,
      }}
    >
      <Navbar />
      <Hero />
      <Services/>
      <Schedule />
      <Contact/>
      <Footer/>
    </ReactLenis>
  </div>
  );
}

export default App;
