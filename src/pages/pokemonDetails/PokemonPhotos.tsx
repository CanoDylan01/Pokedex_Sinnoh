import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import Pokemon from "../../models/Pokemon.interface";
import { getPokemon } from "../../services/getData";
import "../pokemonDetails/PokemonDetails.css"

export default function PokemonPhotos() {
  const URL_PICTURE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  const pokemonID: any = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    getPokemonById(pokemonID.id)
  }, [pokemonID.id])

  async function getPokemonById(id: number) {
    const data = await getPokemon(id)
    setPokemon(data)
    console.log(data)
  }
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <NavBar />
      <div className="row justify-content-center">
        <div className="card">
          <section className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link" aria-current="true" href={`/pokemon/${pokemonID.id}/info`}>Información</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/pokemon/${pokemonID.id}/movements`}>Movimientos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href={`/pokemon/${pokemonID.id}/photos`}>Fotos</a>
              </li>
            </ul>
          </section>
          <section className="card-body">
            {
              pokemon ? (
                <div className="card text-center">
                  <div className="row  text-center">
                    <div className="col-6">
                      <div className="row">
                        <img className="figure-img img-fluid rounded" src={pokemon.sprites.front_default} alt={pokemon.name} placeholder={pokemon.name}></img>
                      </div>
                      <div className="row">
                        <img className="figure-img img-fluid rounded" src={pokemon.sprites.front_shiny} alt={pokemon.name} placeholder={pokemon.name}></img>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <img className="figure-img img-fluid rounded" src={pokemon.sprites.back_default} alt={pokemon.name} placeholder={pokemon.name}></img>
                      </div>
                      <div className="row">
                        <img className="figure-img img-fluid rounded" src={pokemon.sprites.back_shiny} alt={pokemon.name} placeholder={pokemon.name}></img>
                      </div>
                    </div>
                  </div>
                </div>
              ) : <div><h1>Algo ha ido mal</h1></div>
            }
          </section>
        </div>
      </div>
      <footer>
        <nav className="my-2">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <Link className="page-link" to={`/pokemon/${parseInt(pokemonID.id) - 1}/photos`} onClick={handleClick}>
                {"<<"}
                <img className="img-size-sm rounded" src={`${URL_PICTURE}${parseInt(pokemonID.id) - 1}.png`} alt={"pokemon"} />
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to={`/pokemon/${parseInt(pokemonID.id) + 1}/photos`}  onClick={handleClick}>
                <img className="img-size-sm rounded" src={`${URL_PICTURE}${parseInt(pokemonID.id) + 1}.png`} alt={"pokemon"} />
                {">>"}
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}