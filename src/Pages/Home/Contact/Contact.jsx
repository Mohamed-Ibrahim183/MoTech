import React from "react";
import "../Home.css";
const Contact = () => {
  return (
    <div className="Contact">
      <div className="container1">
        <div className="mainHeading">
          <h2 className="Heading1">Contact</h2>
          <p className="Heading2">Let's Work Together</p>
        </div>
        <main>
          <input
            type="Email"
            placeholder="Enter Your Email"
            name="userMail"
            id="userMail"
          />
          <textarea
            name="userMessage"
            id="userMessage"
            placeholder="Let Us know your problem and how can we help you"
          ></textarea>
          <button className="MainBtn">Send</button>
        </main>
      </div>
    </div>
  );
};

export default Contact;
