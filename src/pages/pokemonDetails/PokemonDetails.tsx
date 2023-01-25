import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Pokemon from "../../models/Pokemon.interface";
import { getPokemon } from "../../services/getData";
import "../pokemonDetails/PokemonDetails.css"

export default function PokemonDetails() {
  const URL_PICTURE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  const pokemonID: any = useParams();
  const [pokemon, setPokemon]: any = useState([]);
  let pokemonName=""
  
  useEffect(() => {
    getPokemonById()
  }, [])
  
  
  async function getPokemonById() {
    const data: Pokemon = await getPokemon(pokemonID.id)
    setPokemon(data)
    const firstLetter = pokemon.name.charAt(0).toUpperCase();
    pokemonName = firstLetter + pokemon.name.slice(1);
  }

  return (
    <>
      <NavBar />
      <div className="row justify-content-center">
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" aria-current="true" href="#">Informacion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Habilidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Evoluciones</a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="card">
              <div className="row">
                <div className="col-4">
                  <div className="row">
                    <img className="figure-img img-fluid rounded" src={URL_PICTURE + pokemonID.id + ".png"} alt={pokemon.name} placeholder={pokemon.name}></img>
                  </div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <h1>{pokemonName}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link" onClick={e => getPokemonById()}>
              {"<<"}
              <img className="img-size-sm rounded" src={`${URL_PICTURE}${parseInt(pokemonID.id)-1}.png`} alt={"pokemon"}/>
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={e => getPokemonById()}>
              {">>"}
              <img className="img-size-sm rounded" src={`${URL_PICTURE}${parseInt(pokemonID.id)+1}.png`} alt={"pokemon"} />
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}