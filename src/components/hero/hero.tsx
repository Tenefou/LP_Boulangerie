import React from "react";
import "./hero.css";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div style={{ color: "var(--texte-color)" }}>NOUS CUISONS</div>
      <div style={{ color: "var(--primary-color)" }}>VOUS MANGEZ</div>
    </div>
  );
};

export default Hero;
