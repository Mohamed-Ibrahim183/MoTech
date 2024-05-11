import React, { useState } from "react";
import "../Home.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [userFormData, setUserFormData] = useState({
    userMail: "",
    userMessage: "",
    userName: "",
  });
  function handleChange(name) {
    setUserFormData((prev) => {
      return { ...prev, [name]: document.getElementById(name).value };
    });
  }
  function sendMail(e) {
    e.preventDefault();
    const serviceID = "service_odp3dxq";
    const templateID = "template_gc9bmao";
    const publicKey = "_evoWsuSocP7PSlJG";
    // console.log("userFormData:", userFormData);
    const templateParams = {
      from_name: userFormData["userName"],
      from_email: userFormData["userMail"],
      to_name: "MoTech",
      message: userFormData["userMessage"],
    };
    // Your submit logic here

    // Reset userFormData using functional update
    function isValidEmail(email) {
      // Regular expression for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    if (!isValidEmail(userFormData.userMail)) {
      alert("Please enter a valid email address");
    }
    let validData = true;
    Object.keys(userFormData).forEach((ele) => {
      if (userFormData[ele].trim() === "") {
        validData = false;
      }
    });
    if (!validData) {
      alert("The Form must be not empty ");
      return;
    }

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((res) => {
        console.log("Email Send Successfully", res);
        setUserFormData((prevFormData) => ({
          userMail: "",
          userMessage: "",
          userName: "",
        }));
        alert("Email Send Successfully");
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className="Contact">
      <div className="container1">
        <div className="mainHeading">
          <h2 className="Heading1">Contact</h2>
          <p className="Heading2">Let's Work Together</p>
        </div>
        <main>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="userName"
            id="userName"
            value={userFormData.userName}
            onChange={() => handleChange("userName")}
          />
          <input
            type="Email"
            placeholder="Enter Your Email"
            name="userMail"
            id="userMail"
            value={userFormData.userMail}
            onChange={() => handleChange("userMail")}
          />
          <textarea
            name="userMessage"
            id="userMessage"
            placeholder="Let Us know your problem and how can we help you"
            value={userFormData.userMessage}
            onChange={() => handleChange("userMessage")}
          ></textarea>
          <button className="MainBtn" onClick={sendMail}>
            Send
          </button>
        </main>
      </div>
    </div>
  );
};

export default Contact;
