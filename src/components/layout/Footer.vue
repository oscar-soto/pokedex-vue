<template>
  <footer>
    <div class="container">
      <div class="footer__container">
        <button-component>
          <BurgerIcon />
          All
        </button-component>
  
        <button-component>
          <StarIcon />
          Favorites
        </button-component>
      </div>
    </div>
  </footer>
</template>

<script setup>
import ButtonComponent from '../UI/ButtonComponent.vue';
import BurgerIcon from '../icons/BurgerIcon.vue';
import StarIcon from '../icons/StarIcon.vue';

</script>
<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1.125rem 0;
  background-color: #FFF;
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