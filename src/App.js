import React from "react";
import pokemon from "./pokemon";
import Pokedex from "./Pokedex";

function App() {
  return (
    <div>
      <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
