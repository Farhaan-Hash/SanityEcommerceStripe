import React from "react";
import {AiFillInstagram, AiOutlineFacebook} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p> Cool Hop Shop © 2023 All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineFacebook />
      </p>
    </div>
  );
};

export default Footer;
