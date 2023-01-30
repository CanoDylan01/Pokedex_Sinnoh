import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPokemonByName } from "../../services/getData";
import "../navBar/NavBar.css"

export default function NavBar() {
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()

  async function handleSearchPokemon() {
    const data = await getPokemonByName(inputValue)
    data ? navigate(`/pokemon/${data.id}/info`) : window.alert(inputValue + " no existe")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid d-flex">
        <a className="navbar-brand poke-font" href="/">POKÉDEX SINNOH</a>
        <div className="navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 poke-classic">
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="/">Inicio</a>
            </li>
            <a className="nav-link active" aria-current="page" href="/pokemon/favorites">Favoritos</a>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar pokemon..." onChange={e => setInputValue(e.target.value)} />
            <button className="btn btn-outline-light" type="button" onClick={handleSearchPokemon}>Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  )
}