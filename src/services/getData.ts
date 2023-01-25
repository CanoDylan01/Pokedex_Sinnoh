import axios from "axios";
const API_URL = "https://pokeapi.co/api/v2/"

export const getAllPokemon = async () =>{
  return axios.get(`${API_URL}pokemon/`)
    .then(response => {
      return response.data
    }
    )
    .catch(error => {
      console.log(error)
    })
}

export const getPokemon = async (url:string) => {
  return axios.get(url)
    .then(response => {
      return response.data
    }
    )
    .catch(error => {
      console.log(error)
    })
}