import React, { useState } from "react";
import { getPokemon } from "../services/getData";
interface props {
  data?: Array<any>
}


export default function PokemonCard(listaPokemon: props) {
  const API_PICTURE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  const [pokemon, setPokemon]: any = useState();
  /*async function clickPokemon(url: string) {
    const data = await getPokemon(url)
    setPokemon(data)
  }*/
  return (
    <div>
      {listaPokemon
       ? listaPokemon.data?.map((pokemon: any, index: any) => {
        let div = pokemon.url.split("/");
        let id_pokedex = div[div.length - 2]
        return (
          <div key={index} className="col-2 card my-1 mx-2" >
            <img className="img-size" src={API_PICTURE + id_pokedex + ".png"} alt={pokemon.name}></img>
            <button type="button" className="btn btn-info btn-sm" /*onClick={e => clickPokemon(pokemon.url)}*/>{pokemon.name + " #" + id_pokedex} </button>
          </div>
        )
      }):null}
    </div>
  )
}