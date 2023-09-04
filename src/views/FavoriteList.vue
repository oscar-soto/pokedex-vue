<template>
  <section class="container list">
    <div class="search">
      <label for="search">
        <Search />
      </label>
      <input type="text" id="search" placeholder="Search" />
    </div>

    <List
      :pokemons="orderPokemon(store.favoritePokemon)"
      @updateCurrentPokemon="currentPokemon = $event"
      @updateIsModalOpen="isModalOpen = $event"
    />

    <!-- No Pokemon -->
    <div class="not-found" v-show="store.favoritePokemon.length === 0">
      <h1>Uh-oh!</h1>
      <p>You look lost on your journey!</p>
      <button-component @click="pageAll()"> Go back home </button-component>
    </div>
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
import { ref } from "vue";
import { store } from "../store";

// Componentes
import ButtonComponent from "../components/UI/ButtonComponent.vue";
import List from "../components/layout/List.vue";
import Footer from "../components/layout/Footer.vue";
import Modal from '../components/UI/Modal.vue';
// Icons
import Search from "../components/icons/Search.vue";

// Data
const currentPokemon = ref("");
const isModalOpen = ref(false);

// Order bokemon by Index
const orderPokemon = (pokemons) => {
  return pokemons.sort((a, b) => a.index - b.index);
};

const pageAll = () => {
  return window.location.href = '#/all'
}
</script>

<style scoped>
/* General */
.list {
  padding-top: 2.188rem;
  color: var(--black);
}

/* Input Search */
.search {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2.5rem;
  color: var(--gray);
  font-family: "Montserrat", sans-serif;
}
.search label {
  position: absolute;
  left: 0.938rem;
}
.search input {
  width: 100%;
  color: var(--black);
  border: none;
  padding: 0.875rem 2.688rem;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.04), 0 2px 4px -2px rgb(0 0 0 / 0.05);
  outline: 2px solid #00000000;
  transition: all 0.3s ease-in-out;
}
.search input::placeholder {
  color: var(--gray);
}
.search input:focus {
  outline-color: var(--gray);
}

/* Section no found pokemon */
.not-found {
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
