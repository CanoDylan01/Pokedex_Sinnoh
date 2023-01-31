import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import { getPokemonByName } from "../../services/getData";
interface FavoritePokemon {
  id: number;
  name: string;
}

export default function PokemonFavourites() {
  const URL_PICTURE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  const [favorites, setFavorites] = useState<FavoritePokemon[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  function handleRemoveAll() {
    localStorage.removeItem('favorites')
  }

   function getPokemon(name: string) {
    const pokemon:any =  getPokemonByName(name)
    return pokemon.id
  }

  return (
    <>
      <NavBar />
      <div>
        <h2>Favorites</h2>
        <button className="btn btn-outline-danger" onClick={() => handleRemoveAll()}>Eliminar favoritos</button>
        <ul>
          {favorites ?
            favorites.map((favorite, index) => {
              let pokeId:any = getPokemon(favorite.name)
              console.log(pokeId)
              return (
                <li className="card" key={index}>
                  {favorite.name}{' '}
                  <div key={favorite.id} className="col-2 card my-1 mx-2 justify-content-center bg-white shadow text-center" >
                    <img className="img-size-grid" src={`${URL_PICTURE}${pokeId}.png`} alt={favorite.name}></img>
                  </div>
                </li>)
            }) : null}
        </ul>
      </div>
    </>
  )
}