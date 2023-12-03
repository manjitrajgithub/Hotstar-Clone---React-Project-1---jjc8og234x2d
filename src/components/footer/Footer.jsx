import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        {/* <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul> */}
        <div className="infoText">
          Disney+ Hotstar is an Indian subscription video-on-demand over-the-top streaming service owned by
          The Walt Disney Company India and operated by Disney Streaming.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>

        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;







