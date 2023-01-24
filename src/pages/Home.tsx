import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Pokemon from "../components/Pokemon";
import {getPokemon} from "../services/getData"

export default function Home() {
  const[datos, setDatos]:any = useState();
  useEffect(() => {
    getData()
  },[])

  async function getData() {
    const data = await getPokemon()
    console.log(data)
    setDatos(data)
  }
  return (
    <>
      <NavBar />
      {
        datos 
        ? datos.results.map((pokemon:any, index:any) => {
          return <p key={index}>{pokemon.name}</p>
        })
      : null
      }


    </>
  );
}