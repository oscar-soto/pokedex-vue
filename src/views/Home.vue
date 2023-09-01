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

      <button-component> Get started </button-component>
    </div>
  </section>
</template>

<script setup>
import PikachuIcon from '../components/icons/PikachuIcon.vue';
import ButtonComponent from '../components/ButtonComponent.vue';
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
  font-size: 1.625rem;
  margin: 0 0 1.875rem;
}
.home__description p {
  font-size: 1.125rem;
  color: var(--dark-gray);
  margin: 0 auto 3.125rem;
}
</style>
