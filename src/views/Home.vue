<template>
  <section class="container home">
    <figure class="home__logo">
      <PikachuIcon />
    </figure>

    <div class="home__description">
      <h1>Welcome to Pokédex</h1>

      <p>
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>

      <button>Get started</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import PikachuIcon from '../components/icons/PikachuIcon.vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<style scoped>
.home {
  display: grid;
  place-content: center;
  gap: 60px;
  min-height: 100vh;
  color: var(--black);
}
.home__logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.home__description {
  text-align: center;
}
.home__description h1 {
  margin: 0 0 1.875rem;
}
.home__description p {
  margin: 0 0 3.125rem;
}
</style>
