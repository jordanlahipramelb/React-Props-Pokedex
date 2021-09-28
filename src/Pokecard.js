import React from "react";
import "./Pokecard.css";

const POKEMON_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

const Pokecard = ({ id, name, type, exp }) => {
  let imgSrc = `${POKEMON_API}/${id}.png`;
  return (
    <div className="Pokecard">
      <h4 className="Pokecard-header">{name}</h4>
      <img src={imgSrc} className="Pokecard-img" alt="Pokecard-img" />
      <p className="Pokecard-type">Type: {type}</p>
      <p className="Pokecard-exp">EXP: {exp}</p>
    </div>
  );
};

export default Pokecard;
