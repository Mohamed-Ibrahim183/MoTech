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
        </div>
        <div className="cards">
          <Card
            imageSource="https://res.cloudinary.com/dlommecfr/image/upload/v1715424755/FrontEnd_jpkm2j.jpg"
            Alt="Front-End"
            Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ex, sapiente iusto nulla temporibus excepturi doloremque officiis. Minima optio quod similique recusandae perspiciatis maxime, temporibus modi dolorem excepturi dicta laboriosam."
            Title="Front-End"
            Link="#"
          />
          <Card
            imageSource="https://res.cloudinary.com/dlommecfr/image/upload/v1715424756/BackEnd_xyvqa7.jpg"
            Alt="Back-End"
            Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ex, sapiente iusto nulla temporibus excepturi doloremque officiis. Minima optio quod similique recusandae perspiciatis maxime, temporibus modi dolorem excepturi dicta laboriosam."
            Title="Back-End"
            Link="#"
          />
          <Card
            imageSource="https://res.cloudinary.com/dlommecfr/image/upload/v1715424766/19199025_vjoazb.jpg"
            Alt="Full Stack"
            Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ex, sapiente iusto nulla temporibus excepturi doloremque officiis. Minima optio quod similique recusandae perspiciatis maxime, temporibus modi dolorem excepturi dicta laboriosam."
            Title="Full Stack"
            Link="#"
          />
          <Card
            imageSource="https://res.cloudinary.com/dlommecfr/image/upload/v1715424755/UIUX_lqhi1t.jpg"
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
