import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    setTimeout(function () {
      AOS.init();
    }, 1000);
  }, []);
  return (
    <div className="text-center contact">
      <div className="animation"></div>
      <h1
        className="contact-heading"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        Contact
      </h1>
      <p className="text-one" data-aos="fade-up" data-aos-duration="1000">
        Start a new project with us
      </p>
      <p
        className="head-one hover-underline-animation"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        projects@loftgarten.co
      </p>
      <p className="text-two" data-aos="fade-up" data-aos-duration="3000">
        Press enquiries
      </p>
      <p
        className="head-two hover-underline-animation"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        press@loftgarten.co
      </p>
    </div>
  );
};

export default Contact;
