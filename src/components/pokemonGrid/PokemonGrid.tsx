import React from "react";
import { Link } from "react-router-dom";
import Pokemon from "../../models/Pokemon.interface";
import "../pokemonGrid/PokemonGrid.css"

export default function PokemonGrid({listaPokemon}: {listaPokemon: Pokemon[]}) {
  const URL_PICTURE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

  return (
    <div className="row justify-content-center bg-light">
      {listaPokemon
        ? listaPokemon.map((pokemon: Pokemon, index: any) => {
          let div = pokemon.url.split("/");
          let id_pokedex = div[div.length - 2]
          const firstLetter = pokemon.name.charAt(0).toUpperCase();
          const pokemonName = firstLetter + pokemon.name.slice(1);
          return (
            <div key={index} className="col-2 card my-1 mx-2 justify-content-center bg-white shadow" >
              <img className="img-size-grid" src={URL_PICTURE + id_pokedex + ".png"} alt={pokemonName}></img>

              <button type="button" className="btn btn-light btn-sm ">
                <Link className="link-decoration text-dark" to={{
                  pathname: `/pokemon/${id_pokedex}/info`
                }}>
                  {`${pokemonName} #${id_pokedex}`}</Link>
              </button>
            </div>
          )
        }) : null}
    </div>
  )
}