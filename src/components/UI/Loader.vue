<template>
  <section v-if="isLoading" class="active">
    <PokeBall/>
  </section>
</template>

<script setup>
import PokeBall from '../icons/PokeBall.vue';

const props = defineProps({
  isLoading: {
    type: Boolean,
  },
});

</script>

<style scoped>
section {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  z-index: 10;
}
svg {
  animation: pokeballRotate .3s infinite ease-in-out
}

@keyframes pokeballRotate {
  100% { 
    transform: rotate(360deg);
  }
}
</style>
