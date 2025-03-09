import React from "react";
import FadeIn from "./FadeIn";

const ContactForm = () => {
  return (
    <FadeIn>
      <div className="flex justify-center">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSeMnba-7Bs0BSJyaN7V6l-VKwju8uWHWTFunV6R4v9WRv16bA/viewform?embedded=true" 
          width="640" 
          height="100%" 
          style={{ minHeight: "1100px" }}
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0"
          title="Contact Form"
        >
          Loading…
        </iframe>
      </div>
    </FadeIn>
  );
};

export default ContactForm;