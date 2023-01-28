import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";

export default function PokemonMovements() {
  const URL_PICTURE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  const pokemonID: any = useParams();
  return(
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
                    {/*<img className="figure-img img-fluid rounded" src={URL_PICTURE + pokemonID.id + ".png"} alt={pokemon.name} placeholder={pokemon.name}></img>*/}
                  </div>
                </div>
                <div className="col-8">
                  <div className="row">
                    
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
              <button className="page-link" >
                {"<<"}
                <img className="img-size-sm rounded" /*src={`${URL_PICTURE}${parseInt(pokemonID.id) - 1}.png`} alt={"pokemon"} *//>
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" >
                <img className="img-size-sm rounded" /*src={`${URL_PICTURE}${parseInt(pokemonID.id) + 1}.png`} alt={"pokemon"} *//>
                {">>"}
              </button>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}