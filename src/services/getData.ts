import axios from "axios";
const API_URL = "https://pokeapi.co/api/v2/"

export const getAllPokemon = async (offset: number, limit: number) =>{
  return axios.get(`${API_URL}pokemon/?offset=${offset}&limit=${limit}`)
    .then(response => {
      return response.data
    }
    )
    .catch(error => {
      console.log(error)
    })
}

export const getPokemon = async (id:number) => {
  return axios.get(`${API_URL}pokemon/${id}`)
    .then(response => {
      return response.data
    }
    )
    .catch(error => {
      console.log(error)
    })
}

export const getPokemonByName = async (name: string) => {
  return axios.get(`${API_URL}pokemon/${name}`)
    .then(response => {
      return response.data
    }
    )
    .catch(error => {
      console.log("No existe el pokemon " + name)
    })
}