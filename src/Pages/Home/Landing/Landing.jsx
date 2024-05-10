import React from "react";
import "../Home.css";
import { Typewriter } from "react-simple-typewriter";
const Landing = () => {
  const TypeProps = {
    speed: 100,
    delete: 50,
    delay: 2000,
  };

  return (
    <div className="Landing">
      <div className="container1">
        <span className="Writer">
          <Typewriter
            words={["Modern"]}
            loop={true}
            typeSpeed={TypeProps.speed}
            deleteSpeed={TypeProps.delete}
            delaySpeed={TypeProps.delay + 100}
          />{" "}
          <Typewriter
            words={["Omega"]}
            loop={true}
            typeSpeed={TypeProps.speed}
            deleteSpeed={TypeProps.delete}
            delaySpeed={TypeProps.delay + 200}
          />{" "}
          <Typewriter
            words={["Technologies"]}
            loop={true}
            typeSpeed={TypeProps.speed}
            deleteSpeed={TypeProps.delete}
            delaySpeed={TypeProps.delay + 300}
          />
        </span>
        <span className="Text">
          Welcome to MoTech - where innovation meets design. We craft custom
          systems and stunning websites to elevate your business.
        </span>
        <button className="MainBtn">Get Started</button>
      </div>
    </div>
  );
};

export default Landing;
