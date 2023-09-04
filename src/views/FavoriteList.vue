<template>
  <section class="container list">
    <!-- Search Input -->
    <SearchInput
      :pokemons="pokemons"
      @updateList="searchPokemon = $event"
      v-model:inputValue="inputValue"
    />

    <List
      :pokemons="searchPokemon"
      @updateCurrentPokemon="currentPokemon = $event"
      @updateIsModalOpen="isModalOpen = $event"
    />

    <!-- No Pokemon -->
    <NotFound :noPokemonFound="noPokemonFound" :clear-search="clearSearch" />
  </section>

  <!-- Modal -->
  <Modal
    :isOpen="isModalOpen"
    :currentPokemon="currentPokemon"
    @updateIsModalOpen="isModalOpen = $event"
  />

  <Footer />
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { store } from '../store';

// Componentes
import List from '../components/layout/List.vue';
import Footer from '../components/layout/Footer.vue';
import Modal from '../components/UI/Modal.vue';
import SearchInput from '../components/UI/SearchInput.vue';
import NotFound from '../components/UI/NotFound.vue';

// Data
const pokemons = ref([]);
const searchPokemon = ref([]);
const currentPokemon = ref('');
const isModalOpen = ref(false);
const inputValue = ref('');

// Mounted
onMounted(() => {
  orderPokemonSearch(store.favoritePokemon);
});

// if the store change
watch(store, () => {
  orderPokemonSearch(store.favoritePokemon);
});

// Computed
const noPokemonFound = computed(() => searchPokemon.value.length === 0);

// Order bokemon by Index
const orderPokemonSearch = (pokemonsList) => {
  if (!pokemonsList) return [];

  const orderPokemonList = pokemonsList.sort((a, b) => a.index - b.index);
  pokemons.value = orderPokemonList;
  searchPokemon.value = orderPokemonList;
};

// Clear Search
const clearSearch = () => {
  if (store.favoritePokemon.length) {
    inputValue.value = '';
    searchPokemon.value = pokemons.value;
    return;
  }

  // If There are not pokemons return to home
  return (window.location.href = '#/all');
};
</script>
