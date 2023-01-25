import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { getAllPokemon, getPokemon } from "../services/getData"
import "../pages/Home.css"


export default function Home() {
  const API_PICTURE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  const [listaPokemon, setListaPokemon]: any = useState();
  const [pokemon, setPokemon]: any = useState();
  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const data = await getAllPokemon()
    setListaPokemon(data)
  }
  async function clickPokemon(url: string) {
    const data = await getPokemon(url)
    setPokemon(data)
  }

  return (
    <>
      <NavBar />
      <div className="container text-center ">
        <div className="row">
          {
            listaPokemon
              ? listaPokemon.results.map((pokemon: any, index: any) => {
                let div = pokemon.url.split("/");
                let id_pokedex = div[div.length - 2]
                return (
                  <div key={index} className="col-2 card my-1 mx-2" >
                    <img className="img-size" src={API_PICTURE + id_pokedex + ".png"} alt={pokemon.name}></img>
                    <button type="button" className="btn btn-info btn-sm" onClick={e => clickPokemon(pokemon.url)}>{pokemon.name + " #" + id_pokedex} </button>
                  </div>
                )
              })
              : null
          }
        </div>
      </div>
    </>
  );
}