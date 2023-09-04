<template>
  <Loader :isLoading="isLoading" />

  <section class="container list">
    <!-- Search Input -->
    <SearchInput
      :key="1"
      :pokemons="pokemons"
      @updateList="searchPokemon = $event"
      v-model:inputValue="inputValue"
    />

    <!-- List Pokemon -->
    <List
      :key="2"
      :pokemons="searchPokemon"
      @updateCurrentPokemon="currentPokemon = $event"
      @updateIsModalOpen="isModalOpen = $event"
    />

    <!-- No Pokemon -->
    <div class="not-found" v-show="searchPokemon.length === 0">
      <h1>Uh-oh!</h1>
      <p>You look lost on your journey!</p>
      <button-component @click="clearSearch"> Go back home </button-component>
    </div>
  </section>

  <!-- Modal -->
  <Modal
    :isOpen="isModalOpen"
    :currentPokemon="currentPokemon"
    @updateIsModalOpen="isModalOpen = $event"
  />

  <!-- Footer -->
  <Footer />
</template>

<script setup>
import { onMounted, ref } from 'vue';

// Components
import ButtonComponent from '../components/UI/ButtonComponent.vue';
import List from '../components/layout/List.vue';
import Footer from '../components/layout/Footer.vue';
import Modal from '../components/UI/Modal.vue';

// Icons
import { getPokemons } from '../api/pokemonService';
import Loader from '../components/UI/Loader.vue';
import SearchInput from '../components/UI/SearchInput.vue';

// Data
const pokemons = ref([]);
const searchPokemon = ref([]);
const currentPokemon = ref('');
const isModalOpen = ref(false);
let inputValue = ref('');
let isLoading = ref(true);

onMounted(() => {
  isLoading = true;
  getAllPokemons();
  isLoading = false;
});

// Get pokemons by api
const getAllPokemons = async () => {
  try {
    const { results } = await getPokemons();
    pokemons.value = results;
  } catch (error) {
    console.log(error);
    pokemons.value = [];
  }
};

// Clear Search
const clearSearch = () => {
  inputValue.value = '';
};
</script>

<style scoped>
/* General */
.list {
  padding-top: 2.188rem;
  color: var(--black);
}

/* Section no found pokemon */
.not-found {
  /* display: none; */
  text-align: center;
}
.not-found h1 {
  font-size: 2.25rem;
  margin: 0 0 0.625rem;
}
.not-found p {
  color: var(--dark-gray);
  font-size: 1.25rem;
  margin: 0 0 1.563rem;
}
</style>
