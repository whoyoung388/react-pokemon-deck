import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  static defaultProps = {
    pokemons: [
      { id: 4, name: "Charmander", type: "fire", exp: 62 },
      { id: 7, name: "Squirtle", type: "water", exp: 63 },
      { id: 11, name: "Metapod", type: "bug", exp: 72 },
      { id: 12, name: "Butterfree", type: "flying", exp: 178 },
      { id: 25, name: "Pikachu", type: "electric", exp: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", exp: 95 },
      { id: 94, name: "Gengar", type: "poison", exp: 225 },
      { id: 133, name: "Eevee", type: "normal", exp: 65 }
    ]
  };
  render() {
    let title;
    if (this.props.isWinning) {
      title = <h4 className="Pokedex-win">Winning Hand</h4>
    } else {
      title = <h4 className="Pokedex-loss">Lossing Hand</h4>
    }
    return (
      <div className="Pokedex">
        {title}
        <p>Total Experience: {this.props.exps}</p>
        <div className="Pokedex-cards">
          {this.props.pokemons.map(pokemon => (
            <Pokecard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              exp={pokemon.exp}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
