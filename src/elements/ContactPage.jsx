import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LinkedIn, LocationOn } from "@mui/icons-material";

function ContactPage() {
  return (
    <>
      <div className="contact-us">
        <form className="contact__form">
          <input type="text" className="name" placeholder="Name" required />
          <input type="email" className="email" placeholder="Email" required />
          <input
            type="text"
            className="subject"
            placeholder="Subject"
            required
          />
          <input
            type="text"
            className="message"
            placeholder="Message"
            required
          />
          <input type="button" className="submit-btn" value="Sent Message" />
        </form>

        <div className="back-btn">
          {/* <Link to="/"> */}
          <div className="back-img">
            <img src="https://img.icons8.com/pastel-glyph/64/000000/circled-left.png" />
          </div>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}

export default ContactPage;
