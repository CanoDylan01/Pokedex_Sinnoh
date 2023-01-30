import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import { getAllPokemon } from "../../services/getData"
import "../home/Home.css"
import PokemonGrid from "../../components/pokemonGrid/PokemonGrid";
import PokemonList from "../../components/pokemonList/PokemonList";

export default function Home() {
  const [listaPokemon, setListaPokemon]: any = useState();
  const [offset, setOffset]: any = useState(386);
  const [limit, setLimit]: any = useState(20);
  const [state, setState] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [color, setColor] = useState("white")

  useEffect(() => {
    getData(offset, limit)
  }, [offset])

  async function getData(_offset: number, _limit: number) {
    setOffset(_offset)
    setLimit(_limit)
    const data = await getAllPokemon(offset, limit)
    setListaPokemon(data)
  }

  function handleDarkMode() {
    setIsDark(!isDark)
    isDark ? setColor("white") : setColor("dark")
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
      <section className={`row poke-classic bg-${color}`}>
        <div className="col-2 text-center my-2">
          <button onClick={handleDarkMode}>{isDark ? 'Modo Claro' : 'Modo Oscuro'}</button>
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
          <button type="button" className="btn myButton cuad-icon my-1 mx-1 bg-white" onClick={handleGrid}></button>
          <button type="button" className="btn myButton list-icon my-1 mx-1 bg-white" onClick={handleList}></button>
        </div>
      </section>
    </>
  )
}