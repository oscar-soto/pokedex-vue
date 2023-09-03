<template>
  <Loader :isLoading="isLoading" />

  <section class="container list">
    <!-- Search Input -->
    <SearchInput
      :key="3"
      :pokemons="pokemons"
      @updateList="searchPokemon = $event"
    />

    <!-- List Pokemon -->
    <List :key="1" :pokemons="searchPokemon" />

    <!-- No Pokemon -->
    <div class="not-found">
      <h1>Uh-oh!</h1>
      <p>You look lost on your journey!</p>
      <button-component> Go back home </button-component>
    </div>
  </section>

  <!-- Modal -->
  <Modal />

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
let isLoading = ref(true);
let searchPokemon = ref([]);
console.log()

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

const emit = defineEmits('updateList');

onMounted(() => {
  isLoading = true;
  getAllPokemons();
  isLoading = false;
});
</script>

<style scoped>
/* General */
.list {
  padding-top: 2.188rem;
  color: var(--black);
}

/* Section no found pokemon */
.not-found {
  display: none;
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
