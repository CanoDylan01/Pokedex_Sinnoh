import axios from "axios";
const API_URL = "https://pokeapi.co/api/v2/"

export const getPokemon = async () =>{
  return axios.get(`${API_URL}pokemon/`)
    .then(response => {
      return response.data
    }
    )
    .catch(error => {
      console.log(error)
    })
}