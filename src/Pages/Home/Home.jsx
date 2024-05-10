import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Landing from "./Landing/Landing";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
const Home = () => {
  return (
    <div className="HomePage">
      <Navbar />
      <Landing />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
