import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import Pokemon from "../../models/Pokemon.interface";
import { getPokemon } from "../../services/getData";

export default function PokemonMovements() {
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
        <div className="card text-center">
          <section className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link" aria-current="true" href={`/pokemon/${pokemonID.id}/info`}>Información</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href={`/pokemon/${pokemonID.id}/movements`}>Movimientos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/pokemon/${pokemonID.id}/photos`}>Fotos</a>
              </li>
            </ul>
          </section>
          <section className="card-body">
            <div className="card">
              <div className="row">
                <div className="col-4">
                  <div className="row">
                    {<img className="figure-img img-fluid rounded" src={URL_PICTURE + pokemonID.id + ".png"} alt={pokemon?.name} placeholder={pokemon?.name}></img>}
                  </div>
                </div>
                <div className="col-7">
                  <div className="row">
                    {
                      pokemon?.moves
                        ? pokemon.moves.map((pokemon: any, index: any) => {
                          let levelZero = pokemon.version_group_details[0].level_learned_at
                          return (
                            <div key={index} className="card shadow my-1">
                              <div className="row">
                                <div className="col-6"><p>{`${pokemon.move.name}`}</p></div>
                                <div className="col-6">{levelZero ? `Aprendido al nivel: ${pokemon.version_group_details[0].level_learned_at}` : `A través de MT`}</div>
                              </div>
                            </div>)
                        }) : null
                    }
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer>
        <nav className="my-2">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <Link className="page-link" to={`/pokemon/${parseInt(pokemonID.id) - 1}/movements`} onClick={handleClick}>
                {"<<"}
                <img className="img-size-sm rounded" src={`${URL_PICTURE}${parseInt(pokemonID.id) - 1}.png`} alt={"pokemon"} />
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to={`/pokemon/${parseInt(pokemonID.id) + 1}/movements`}  onClick={handleClick}>
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