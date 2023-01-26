import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import PokemonInfo from './pages/pokemonDetails/PokemonInfo';
import PokemonMovements from './pages/pokemonDetails/PokemonMovements';
import PokemonPhotos from './pages/pokemonDetails/PokemonPhotos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"pokemon/:id/info",
    element: <PokemonInfo/>
  },
  {
    path:"pokemon/:id/movements",
    element: <PokemonMovements/>
  },
  {
    path:"pokemon/:id/photos",
    element: <PokemonPhotos/>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
