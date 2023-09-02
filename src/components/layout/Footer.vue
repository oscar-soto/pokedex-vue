<template>
  <footer>
    <div class="container">
      <div class="footer__container">
        <button-component @click="pageAll" :is-disabled="activePage !== 'all'">
          <BurgerIcon />
          All
        </button-component>

        <button-component
          @click="pageFavorite"
          :is-disabled="activePage !== 'favorite'"
        >
          <StarIcon />
          Favorites
        </button-component>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import ButtonComponent from '../UI/ButtonComponent.vue';
import BurgerIcon from '../icons/BurgerIcon.vue';
import StarIcon from '../icons/StarIcon.vue';

// Add class disable by location
const getHashUrl = window.location.hash;
const activePage = ref(getHashUrl.slice(2));

// Redirect Page
const pageAll = () => {
  return window.location.href = '#/all'
}
const pageFavorite = () => {
  return window.location.href = '#/favorite'
}
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1.125rem 0;
  background-color: #fff;
}
.footer__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
}
.footer__container button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex: 1;
  text-transform: capitalize;
}
</style>
