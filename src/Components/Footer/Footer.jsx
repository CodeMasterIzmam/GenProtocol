import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../Assets/Web-Logo.jpeg";
import twitter from "../Assets/twitter.png";
import insta from "../Assets/insta.png";
import gamebox from "../Assets/gamebox.png";
import message from "../Assets/message.png";
import doots from "../Assets/doots.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex flex-wrap mb-3">
        <Link to="#">
          <img width="100" height="50" src={logo} alt="" />
        </Link>
        <Link to="#">
          <img  width="37" height="37" src={twitter} alt="" />
        </Link>
        <Link to="#">
          <img className="twitter" width="37" height="37" src={insta} alt="" />
        </Link>
        <Link to="#">
          <img className="twitter" width="37" height="37" src={gamebox} alt="" />
        </Link>
        <Link to="#">
          <img className="twitter" width="37" height="37" src={message} alt="" />
        </Link>
        <Link to="#">
          <img className="twitter" width="37" height="37" src={doots} alt="" />
        </Link>
      </div>
      <div className="link-div mb-3">
        <Link to="/about">About</Link>
        <Link to="/tokens">GEN VINCI</Link>
        <Link to="#">Whitepaper</Link>
        <Link to="#">Dashboard</Link>
        <Link to="#">info@byvinci.io</Link>
      </div>
    </div>
  );
};

export default Footer;
