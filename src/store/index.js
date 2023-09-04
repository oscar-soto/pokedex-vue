import { reactive } from "vue";

export const store = reactive({
  favoritePokemon: [],
  addFavoritePokemon({name, index}) {
    const exitsPokemon = this.favoritePokemon.find((pokemon) => pokemon.name === name);

    // Add pokemon if it's not in the array
    if(!exitsPokemon) {
      return this.favoritePokemon.push({name, index});
    }

    // Remove pokemon
    const newfavoritePokemon = this.favoritePokemon.filter(pokemon => pokemon.name !== name);
    return this.favoritePokemon = newfavoritePokemon
  },
})