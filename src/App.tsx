import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import PokemonDetails from './pages/pokemonDetails/PokemonDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"pokemon/:id",
    element: <PokemonDetails/>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
