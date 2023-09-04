<template>
  <div class="not-found" v-show="noPokemonFound">
    <h1>Uh-oh!</h1>
    <p>You look lost on your journey!</p>
    <button-component @click="clearSearch"> Go back home </button-component>
  </div>
</template>

<script setup>
import ButtonComponent from './ButtonComponent.vue';
const props = defineProps({
  noPokemonFound: {
    type: Boolean,
  },
  clearSearch: {
    type: Function,
  },
});
</script>

<style scoped>
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
