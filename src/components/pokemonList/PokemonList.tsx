import React from "react";
import { Link } from "react-router-dom";
import Pokemon from "../../models/Pokemon.interface";
import FavoriteButton from "../favoriteButton/FavoriteButton";

import "../pokemonList/PokemonList.css"

export default function PokemonList({ listaPokemon }: { listaPokemon: Pokemon[] }) {
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
            <div key={index} className="row card my-1 mx-4 justify-content-center bg-white shadow" >
              <section className="row">
                <div className="col-3">
                  <div className="row img-size-list">
                    <img className="img-size-list" src={URL_PICTURE + id_pokedex + ".png"} alt={pokemonName} />
                    <button type="button" className="btn btn-outline-danger btn-sm btn-size-list">
                      <Link className="link-decoration text-dark" to={{
                        pathname: `/pokemon/${id_pokedex}/info`
                      }}>
                        {`${pokemonName} #${id_pokedex}`}</Link>
                    </button>
                  </div>
                </div>
                <div className="col-9 d-flex">
                  <FavoriteButton pokemon={pokemon}/>
                </div>
              </section>
            </div>
          )
        }) : null}
    </div>
  )
}