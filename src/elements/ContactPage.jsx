import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Check, LinkedIn, LocationOn, Send } from "@mui/icons-material";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [messageStatus, setMessageStatus] = useState(false);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
    setMessageStatus(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    formData && setMessageStatus(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  }

  // destructuring was done
  const { name, email, subject, message } = formData;
  return (
    <>
      <div className="contact-us">
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="name"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={handleChange}
          />
          <input
            type="email"
            className="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={handleChange}
          />
          <input
            type="text"
            className="subject"
            name="subject"
            placeholder="Subject"
            required
            value={subject}
            onChange={handleChange}
          />
          <input
            type="text"
            className="message"
            name="message"
            placeholder="Message"
            required
            value={message}
            onChange={handleChange}
          />
          <button className="submit-btn" value="submit">
            {!messageStatus ? "Send Message" : <Check color="success" />}
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactPage;
