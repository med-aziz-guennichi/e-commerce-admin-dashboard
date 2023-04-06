import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerDiv">
          <div className="footerLogo">
            <NavLink to="/" className="footerLogoLink">
              <h2 className="footerLogoTitle">Guest House</h2>
              <h4 className="footerLogoTitle">Get Your House online</h4>
            </NavLink>
          </div>
          <div className="footerLinks">
            <Link to="/">Tunisia</Link>
            <Link to="/">Mohamed Aziz Guennichi</Link>
            <Link to="/">+216 92 156 030</Link>
          </div>
        </div>
        <div className="footerDiv">
          <div className="footerTitle">
            <h4>Get Your Dream House</h4>
          </div>
          <div className="footerLinks">
            <Link to="/">In Beach</Link>
            <Link to="/">In Mountain</Link>
            <Link to="/">In Village</Link>
          </div>
        </div>
        <div className="footerDiv">
          <div className="footerTitle">
            <h4>Useful Links</h4>
          </div>
          <div className="footerLinks">
            <Link to="/">HomePage</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Help</Link>
            <Link to="/">Contact Us</Link>
          </div>
        </div>
        <div className="footerDiv">
          <div className="footerTitle">
            <h4>Help & Information</h4>
          </div>
          <div className="footerLinks">
            <Link to="/">Helps</Link>
            <Link to="/">FAQ's</Link>
            <Link to="/">Shipping</Link>
            <Link to="/">Tracking ID</Link>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerBottomCopyright">
          <p className="footerBottomText">
            Copyright &copy; Aziz GUEST HOUSE. All Rights Reserved.
          </p>
          <p className="footerBottomText">
            Design:
            <Link target="_blank" to="/">
              {" "}
              Med Aziz Code
            </Link>
          </p>
          <p className="footerBottomText">
            Distributed By:
            <Link target="_blank" to="/">
              {" "}
              Mohamed Aziz Guennichi
            </Link>
          </p>
          <div className="footerBottomSocials">
            <Link target="_blank" to="https://www.facebook.com/azizguennichi">
              <FaFacebookF />
            </Link>
            <Link target="_blank" to="https://www.facebook.com/azizguennichi">
              <FaInstagram />
            </Link>
            <Link
              target="_blank"
              to="https://www.youtube.com/channel/UCcz5QskvMmtyp9YCt6eNUyg"
            >
              <FaYoutube />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/mohamed-aziz-guennichi-473386255"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;