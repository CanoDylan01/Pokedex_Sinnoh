import React, { useState, useEffect } from 'react';
import FavoritePokemon from '../../models/FavoritePokemon';
import Pokemon from '../../models/Pokemon.interface';

export default function FavoriteButton ({pokemon} : {pokemon: Pokemon}) {
  const [favorites, setFavorites] = useState<FavoritePokemon[]>([]);
  const [isfavorite, setIsFavorite] = useState(true);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleAddFavorite = (id: number, name: string) => {
    var favorite = {id: id, name:name}
    const newFavorites = [...favorites, favorite];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(false)
  };

  const handleRemoveFavorite = (favoriteId: number) => {
    const newFavorites = favorites.filter((f) => f.id !== favoriteId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(true)

  };

  return (
    <div>
      {
        isfavorite ? (
          <button className='btn btn-outline-warning' onClick={() => handleAddFavorite(pokemon.id, pokemon.name)}>Fav</button>
        ) : (
          <button className='btn btn-outline-warning' onClick={() => handleRemoveFavorite(pokemon.id)}>Eliminar Fav</button>
        )
      }
    </div>
  );
};