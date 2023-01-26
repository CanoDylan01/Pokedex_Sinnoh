import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { getAllPokemon } from "../../services/getData"
import "../home/Home.css"
import { Link } from "react-router-dom";


export default function Home() {
  const URL_PICTURE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  const [listaPokemon, setListaPokemon]: any = useState();
  const [offset, setOffset]: any = useState(386);
  const [limit, setLimit]: any = useState(20);

  useEffect(() => {
    getData(offset, limit)
  }, [offset])

  async function getData(_offset: number, _limit: number) {
    setOffset(_offset)
    setLimit(_limit)
    const data = await getAllPokemon(offset, limit)
    setListaPokemon(data)
  }

  return (
    <>
      <NavBar />
      <section className="row">
        <div className="col-1 text-center">
          <h4>Favoritos</h4>
        </div>
        <div className="card col-10 my-2 bg-danger">
          <div className="container text-center ">
            <div className="row justify-content-center bg-light">
              {listaPokemon
                ? listaPokemon.results?.map((pokemon: any, index: any) => {
                  let div = pokemon.url.split("/");
                  let id_pokedex = div[div.length - 2]
                  const firstLetter = pokemon.name.charAt(0).toUpperCase();
                  const pokemonName = firstLetter + pokemon.name.slice(1);
                  return (
                    <div key={index} className="col-2 card my-1 mx-2 justify-content-center bg-white" >
                      <img className="img-size" src={URL_PICTURE + id_pokedex + ".png"} alt={pokemonName}></img>
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
          </div>
        </div>
        <div className="col-1 text-center justify-content-center">
          <button type="button" className="btn btn-primary my-1 me-6">Cuadricula</button>
          <button type="button" className="btn btn-primary my-1 me-6">Lista</button>
        </div>
      </section>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item"><button className="btn btn-outline-danger mx-1" onClick={e => getData(offset - limit, limit)}>Previous</button></li>
          {/*<li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>*/}
          <li className="page-item"><button className="btn btn-outline-danger mx-1" onClick={e => getData(offset + limit, limit)}>Next</button></li>
        </ul>
      </nav>
    </>
  );
}