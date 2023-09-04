<template>
  <!-- List -->
  <ul class="pokemon-list">
    <li
      v-for="(pokemon, i) in pokemons"
      :key="i"
      @click="pokemonDetail(pokemon.name)"
    >
      <p>{{ pokemon.name }}</p>

      <button
        @click.stop="favoritePokemon({ name: pokemon.name, index: i })"
        :class="{ favorite: activeStart(pokemon.name) }"
      >
        <StarIcon />
      </button>
    </li>
  </ul>
</template>

<script setup>
import StarIcon from "../icons/StarIcon.vue";
import { store } from "../../store/index.js";

const props = defineProps({
  pokemons: {
    type: Array,
  },
  onUpdateCurrentPokemon: {
    type: Function,
  },
  onUpdateIsModalOpen: {
    type: Function,
  },
});

const emit = defineEmits(["UpdateCurrentPokemon", "updateIsModalOpen"]);

const pokemonDetail = (name, e) => {
  emit("UpdateCurrentPokemon", name);
  emit("updateIsModalOpen", true);
};

const favoritePokemon = ({ name, index }) => {
  store.addFavoritePokemon({ name, index });
};
const activeStart = (name) => {
  return store.favoritePokemon.find((p) => p.name === name);
};

</script>

<style scoped>
/* List */
.pokemon-list {
  display: grid;
  gap: 0.625rem 0;
  list-style: none;
  padding: 0;
  margin: 0;
}
.pokemon-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.063rem 1.25rem;
  color: var(--black);
  background-color: #fff;
  border-radius: 0.375rem;
  cursor: pointer;
}
.pokemon-list p {
  margin: 0;
  text-transform: capitalize;
  font-size: 1.375rem;
}
.pokemon-list button {
  display: grid;
  place-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  color: var(--gray);
  background-color: var(--snow-white);
  border: none;
  border-radius: 999999px;
  cursor: pointer;
}
.pokemon-list button.favorite svg {
  color: var(--yelow);
  animation: bigStart .5s ease-in-out
}

@keyframes bigStart {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }

  100% { 
    transform: scale(1);
  }
}
</style>
