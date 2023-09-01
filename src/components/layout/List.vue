<template>
  <!-- List -->
  <ul class="pokemon-list">
    <li>
      <p>Bulbasaur</p>

      <button class="favorite">
        <StarIcon />
      </button>
    </li>
    <li>
      <p>Bulbasaur</p>

      <button>
        <StarIcon />
      </button>
    </li>
  </ul>
</template>

<script setup>
import StarIcon from '../icons/StarIcon.vue';
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
  font-size: 1.375rem;
  margin: 0;
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
.pokemon-list button.favorite {
  color: var(--yelow);
}
</style>