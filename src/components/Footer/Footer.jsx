import React from "react";
import "./Footer.css";
import { ImGithub } from "react-icons/im";
import { SiFacebook } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";

export const Footer = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <div className="footer">
      <small> &copy; {copyrightYear} GreenBite</small>
      <div className="social-links">

        <Link
          to="https://github.com/SoeungBonna/Green_Bite-App.git"
          target="_blank"
        >
          <ImGithub />
        </Link>
        <Link to="https://www.facebook.com/share/1GYstvQ8Yk/?mibextid=wwXIfr" target="_blank">
          <SiFacebook />
        </Link>
        <Link
          to="https://www.tiktok.com/@su_jun_ho?_t=ZS-8xRiK7xiMYD&_r=1"
          target="_blank"
        >
          <FaTiktok />
        </Link>
  
       
      </div>
    </div>
  );
};