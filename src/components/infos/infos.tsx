import React from "react";
import "./infos.css";

const Infos: React.FC = () => {
  return (
    <div className="infos">
      <div>
        <h2>HORAIRES :</h2>
        <div className="infos__container">
          <h3>
            Lundi:
            <br />
            Mardi:
            <br />
            Mercredi:
            <br />
            Jeudi:
            <br />
            Vendredi:
            <br />
            Samedi:
            <br />
            Dimanche:
          </h3>
          <h3 className="infos__text">
            8h - 16h
            <br />
            6h - 20h
            <br />
            6h - 20h
            <br />
            6h - 20h
            <br />
            6h - 20h
            <br />
            8h - 16h
            <br />
            8h - 12h
          </h3>
        </div>
      </div>
      <div>
        <h2>LOCALISATION :</h2>
        <h3 className="infos__container infos__text">
          1 Rue du Château d'Eau,
          <br />
          11320 Soupex
        </h3>
      </div>
      <div>
        <img
          style={{ width: "300px", borderRadius: "15px" }}
          src="public/soupex.png"
          alt="carte"
        />
      </div>
    </div>
  );
};

export default Infos;
