import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {DarkModeContext} from './DarkModeContext'
import { useContext } from "react";

function App() {
  const theme =useContext(DarkModeContext);
  const darkMode= theme.state.darkMode;
  return (
    <div className="App"
     style={{background: darkMode? "black" : "white", 
    color: darkMode? "white" : ""}}
     >

      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
