import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import Pokemon from "../../models/Pokemon.interface";
import { getPokemon } from "../../services/getData";
import "../pokemonDetails/PokemonDetails.css"

export default function PokemonDetails() {
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

  return (
    <>
      <NavBar />
      <div className="row justify-content-center">
        <div className="card">
          <section className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" aria-current="true" href={`/pokemon/${pokemonID.id}/info`}>Información</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/pokemon/${pokemonID.id}/movements`}>Movimientos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/pokemon/${pokemonID.id}/photos`}>Fotos</a>
              </li>
            </ul>
          </section>
          <section className="card-body">
            {
              pokemon ? (
                <div className="card">
                  <div className="row">
                    <div className="col-4">
                      <div className="row">
                        <img className="figure-img img-fluid rounded" src={URL_PICTURE + pokemonID.id + ".png"} alt={pokemon.name} placeholder={pokemon.name}></img>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="row">
                        <h1>{`${pokemon.name?.toUpperCase()} #${pokemonID.id}`}</h1>
                        <div className="col-6 border rounded">
                          <div className="container text-center">
                            <div className="row my-2">
                              <div className="col-6 col-sm-4 border">{`Hp: ${pokemon.stats[0].base_stat}`}</div>
                              <div className="col-6 col-sm-4 border">{`Ataque: ${pokemon.stats[1].base_stat}`}</div>
                              <div className="col-6 col-sm-4 border">{`Defensa: ${pokemon.stats[2].base_stat}`}</div>
                              <div className="w-100 d-none d-md-block"></div><br />
                              <div className="col-6 col-sm-4 border">{`Velocidad: ${pokemon.stats[5].base_stat}`}</div>
                              <div className="col-6 col-sm-4 border">{`Ataque Especial: ${pokemon.stats[3].base_stat}`}</div>
                              <div className="col-6 col-sm-4 border">{`Defensa Especial: ${pokemon.stats[4].base_stat}`}</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 text-center border rounded">
                          <p>{`Altura: ${pokemon.height * 10} Cms`}</p>
                          <p>{`Peso: ${pokemon.weight / 10} Kg`}</p>
                          <p>{`Experiencia base: ${pokemon.base_experience} xp`}</p>
                        </div>
                        <div className="col-6 d-flex">
                          Tipo:
                          {
                            pokemon.types ? pokemon.types.map((pokemon: any, index: any) => {
                              return (<div key={index} className="mx-1">{` ${pokemon.type.name} `}</div>)
                            }) : null
                          }
                        </div>
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
              <Link className="page-link" to={`/pokemon/${parseInt(pokemonID.id) - 1}/info`}>
                {"<<"}
                <img className="img-size-sm rounded" src={`${URL_PICTURE}${parseInt(pokemonID.id) - 1}.png`} alt={"pokemon"} />
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to={`/pokemon/${parseInt(pokemonID.id) + 1}/info`}>
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