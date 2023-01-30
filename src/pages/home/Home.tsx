import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import { getAllPokemon } from "../../services/getData"
import "../home/Home.css"
import { Link } from "react-router-dom";
import FavoriteButton from "../../components/favoriteButton/FavoriteButton";
import PokemonGrid from "../../components/pokemonGrid/PokemonGrid";
import PokemonList from "../../components/pokemonList/PokemonList";
import Favorites from "../../components/favoriteButton/FavoriteButton";


export default function Home() {
  const [listaPokemon, setListaPokemon]: any = useState();
  const [offset, setOffset]: any = useState(386);
  const [limit, setLimit]: any = useState(20);
  const [state, setState] = useState(true);

  useEffect(() => {
    getData(offset, limit)
  }, [offset])

  async function getData(_offset: number, _limit: number) {
    setOffset(_offset)
    setLimit(_limit)
    const data = await getAllPokemon(offset, limit)
    setListaPokemon(data)
  }

  function handleGrid() {
    setState(true)
  }
  function handleList() {
    setState(false)
  }

  return (
    <>
      <NavBar />
      <section className="row">
        <div className="col-2 text-center">
          
        </div>
        <div className="card col-8 my-2 bg-danger">
          <div className="container bg-light">
            {
              state
                ? <PokemonGrid listaPokemon={listaPokemon?.results} />
                : <PokemonList listaPokemon={listaPokemon?.results} />
            }
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item"><button className="btn btn-outline-danger mx-1 mt-2" onClick={() => getData(offset - limit, limit)}>Anterior</button></li>
                {/*<li className="page-item"><a className="page-link" href="#">1</a></li>
                 <li className="page-item"><a className="page-link" href="#">2</a></li>
                 <li className="page-item"><a className="page-link" href="#">3</a></li>*/}
                <li className="page-item"><button className="btn btn-outline-danger mx-1 mt-2" onClick={() => getData(offset + limit, limit)}>Siguiente</button></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-2 justify-content-center">
          <button type="button" className="btn myButton cuad-icon my-1 mx-1" onClick={handleGrid}></button>
          <button type="button" className="btn myButton list-icon my-1 mx-1" onClick={handleList}></button>
        </div>
      </section>
    </>
  )
}