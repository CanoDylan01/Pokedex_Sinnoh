import React, { useEffect, useState } from "react";

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
      {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    </button>
  )
}