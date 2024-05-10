import React from "react";
import "../Home.css";
const Card = (props) => {
  return (
    <div className="Service">
      <div className="image">
        <img src={props.imageSource} alt={props.Alt} />
      </div>
      <div className="content">
        <h3 className="serviceHeading">{props.Title}</h3>
        <p className="Text">{props.Text}</p>
        <a className="MainBtn Link" href={props.Link}>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
