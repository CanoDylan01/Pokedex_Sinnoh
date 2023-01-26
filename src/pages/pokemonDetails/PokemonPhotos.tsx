import React from "react";
import { useParams } from "react-router-dom";

export default function PokemonPhotos() {
  const pokemonID = useParams()
  return (
    <div className="card">{`Soy ${pokemonID.id}`}</div>
  )
}