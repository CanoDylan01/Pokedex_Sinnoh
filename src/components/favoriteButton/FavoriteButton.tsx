import React, { useEffect, useState } from "react";
import "../favoriteButton/FavoriteButton.css"

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(localStorage.getItem('isFavorite') === 'true')

  function handleClick() {
    setIsFavorite(!isFavorite)
  }

  useEffect(() => {
    localStorage.setItem('isFavorite', JSON.stringify(isFavorite));
  }, [isFavorite])

  return (
    <button type="button" onClick={handleClick}>
      {isFavorite ? (
        <img src="../../../public/isFav.png" alt="Remove from favorites"/>
      ) : (
        <img src="../../../public/isNotFav.png" alt="Add to favorites" />
      )}
    </button>
  )
}