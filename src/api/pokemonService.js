import axio from 'axios';

const pokemonApi = axio.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    Accept: 'Application/json',
    'Content-Type': 'application/json',
  },
});


export const getPokemons = async () => {
  const res = pokemonApi.get('/pokemon');
  const {data} = await res
  return data
}

export const getPokemonByName = async (name) => {
  const res = pokemonApi.get(`/pokemon/${name}`);
  const {data} = await res
  return data
}