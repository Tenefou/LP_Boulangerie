import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer__texte">
          <h2>CONTACT :</h2>
          <h3>boulangerie.soupex@gmail.com</h3>
        </div>
        <div className="footer__texte">
          <h2>RESEAUX SOCIAUX :</h2>
          <div className="padding">
            <img src="/logos_contact.png" alt="sfqf" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
