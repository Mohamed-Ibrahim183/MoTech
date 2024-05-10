import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Landing from "./Landing/Landing";
import Services from "./Services/Services";
const Home = () => {
  return (
    <div className="HomePage">
      <Navbar />
      <Landing />
      <Services />
    </div>
  );
};

export default Home;
