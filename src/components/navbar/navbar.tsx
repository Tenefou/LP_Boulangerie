import React from "react";
import "./navbar.css";
import { Button } from "../button/button";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="/Logo.png" alt="Image" />
        <h3>Boulangerie</h3>
      </div>
      <div className="navbar__links">
        <Button style={{ boxShadow: "0 0px 0px" }} variant={"ghost"}>
          A PROPOS
        </Button>
        <Button style={{ boxShadow: "0 0px 0px" }} variant={"ghost"}>
          GALLERIE
        </Button>
        <Button>COMMANDER</Button>
      </div>
    </div>
  );
};

export default Navbar;
