import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { getAllPokemon } from "../../services/getData"
import "../home/Home.css"
import { Link } from "react-router-dom";


export default function Home() {
  const URL_PICTURE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  const [listaPokemon, setListaPokemon]: any = useState();
  const [offset, setOffset]: any = useState(0);
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
      <div className="container text-center ">
        <div className="row justify-content-center">
          {listaPokemon
            ? listaPokemon.results?.map((pokemon: any, index: any) => {
              let div = pokemon.url.split("/");
              let id_pokedex = div[div.length - 2]
              const firstLetter = pokemon.name.charAt(0).toUpperCase();
              const pokemonName = firstLetter + pokemon.name.slice(1);
              return (
                <div key={index} className="col-2 card my-1 mx-2 justify-content-center" >
                  <img className="img-size" src={URL_PICTURE + id_pokedex + ".png"} alt={pokemonName}></img>
                  <button type="button" className="btn btn-info btn-sm">
                    <Link className="link-decoration" to={{
                      pathname: `/pokemon/${id_pokedex}` 
                    }}>
                      {`${pokemonName} #${id_pokedex}`}</Link>
                  </button>
                </div>
              )
            }) : null}
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item"><button className="page-link" onClick={e => getData(offset - limit, limit)}>Previous</button></li>
          {/*<li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>*/}
          <li className="page-item"><button className="page-link" onClick={e => getData(offset + limit, limit)}>Next</button></li>
        </ul>
      </nav>
    </>
  );
}