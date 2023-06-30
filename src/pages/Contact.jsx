import { Email, LocationOn, PhoneIphone } from "@mui/icons-material";
import React from "react";
import ContactPage from "../components/ContactPage";
import "./styles/contact.css";

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='contact__section'>
        <div className='contact__section--one'>
          <h4>Get in Touch</h4>
          <p>Feel Free to Contact</p>
          <div className='contact__details'>
            <div className='contact__address'>
              <LocationOn />
              <p>Banglore, Karnataka 560001</p>
            </div>
            <div className='contact__email'>
              <Email />
              <p>contact@ramkrishnajena.com</p>
            </div>
            <div className='contact__number'>
              <PhoneIphone />
              <p>+91-7008799608, +91-7852999606</p>
            </div>
          </div>
        </div>
        <div className='contact__section--two'>
          <ContactPage />
        </div>
      </div>
    </section>
  );
};

export default Contact;
