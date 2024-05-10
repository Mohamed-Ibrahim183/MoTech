import React from "react";
import Card from "./Card";
import "../Home.css";
const Services = () => {
  return (
    <div className="Services">
      <div className="container1">
        <div className="mainHeading">
          <h2 className="Heading1">Services</h2>
          <p className="Heading2">What We Offer</p>
          {/* <img src="./Images/FrontEnd.jpg" alt="" /> */}

          <Card
            imageSource="./Images/FrontEnd.jpg"
            Alt="Front-End"
            Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ex, sapiente iusto nulla temporibus excepturi doloremque officiis. Minima optio quod similique recusandae perspiciatis maxime, temporibus modi dolorem excepturi dicta laboriosam."
            Title="Front-End"
            Link="#"
          />
          <Card
            imageSource="./Images/BackEnd.jpg"
            Alt="Back-End"
            Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ex, sapiente iusto nulla temporibus excepturi doloremque officiis. Minima optio quod similique recusandae perspiciatis maxime, temporibus modi dolorem excepturi dicta laboriosam."
            Title="Back-End"
            Link="#"
          />
          <Card
            imageSource="./Images/UIUX.jpg"
            Alt="UI-UX"
            Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ex, sapiente iusto nulla temporibus excepturi doloremque officiis. Minima optio quod similique recusandae perspiciatis maxime, temporibus modi dolorem excepturi dicta laboriosam."
            Title="UI / UX"
            Link="#"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
