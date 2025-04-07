import React from "react";
import "./infos.css";

const Infos: React.FC = () => {
  return (
    <div className="infos">
      <div>
        <h2>HORAIRES :</h2>
        <h3 className="infos__container">
          Lundi: 8h - 16h
          <br />
          Mardi: 6h - 20h
          <br />
          Mercredi: 6h - 20h
          <br />
          Jeudi: 6h - 20h
          <br />
          Vendredi: 6h - 20h
          <br />
          Samedi: 8h - 16h
          <br />
          Dimanche: 8h - 12h
        </h3>
      </div>
      <div>
        <h2>LOCALISATION :</h2>
        <h3 className="infos__container">
          1 Rue du Château d'Eau,
          <br />
          11320 Soupex
        </h3>
      </div>
      <div>
        <img src="" alt="carte" />
      </div>
    </div>
  );
};

export default Infos;
