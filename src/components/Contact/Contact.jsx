import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" width="500px" />
      </div>
      <div className="right">
        <h2>Contact Me!</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Your message" />
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP!</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
