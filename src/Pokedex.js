import React from "react";

import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = (props) => {
  const pokemon = props.pokemon;
  let winnerMessage;
  if (props.isWinner) {
    winnerMessage = <p className="Pokedex-winner">THIS HAND WINS!</p>;
  }

  return (
    <div className="Pokedex">
      <h1 className="Pokedex-header">Pokedex</h1>
      <div className="Pokedex-cards">
        {pokemon.map((p) => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
      <h3 className="Pokedex-total-exp">Total Experience: {props.exp}</h3>
      {winnerMessage}
    </div>
  );
};

export default Pokedex;
