import React from "react";
import "../navBar/NavBar.css"

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
    <div className="container-fluid">
      <a className="navbar-brand poke-font" href="/">POKÉDEX SINNOH</a>
      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar pokemon..." aria-label="Search"/>
          <button className="btn btn-outline-light" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
  )
}