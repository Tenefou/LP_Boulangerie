import React from "react";
import "./story.css";
import { Button } from "../button/button";

const Story: React.FC = () => {
  return (
    <div className="story">
      <div className="story__text">
        <h1 className="story__titre">Bienvenue</h1>
        <div className="story__container">
          <h2 className="story__sous-titre">
            Boulangerie conçoit des <span className="orange">délices</span> et
            du <span className="orange">croustillant</span> depuis{" "}
            <span className="orange">1990</span>
          </h2>
        </div>
        <Button className="button">NOTRE HISTOIRE</Button>
      </div>
      <div>
        <img src="/Baguette.jpg" alt="" className="story__img" />
        <div className="triangle"></div>
      </div>
    </div>
  );
};

export default Story;
