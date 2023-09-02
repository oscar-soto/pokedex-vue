<template>
  <div class="modal" :class="{ active: open }">
    <section class="modal__container">
      <span class="modal__close" @click="open = false">
        <XIcon />
      </span>

      <div class="modal__hero">
        <!-- <PikachuIcon :height="20" :width="20" /> -->
        <!-- <img src="../icons/BurgerIcon.vue" alt=""> -->
      </div>

      <div class="modal__content">
        <ul>
          <li><span>Name: </span> Squirtle</li>
          <li><span>Weight: </span> 20</li>
          <li><span>Height: </span> 18</li>
          <li><span>Types: </span> Normal, Water</li>
        </ul>

        <div class="modal__btns">
          <button-component> Share to my friends </button-component>

          <button class="favorite__button">
            <StarIcon />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
// import PikachuIcon from '../icons/PikachuIcon.vue';
import StarIcon from '../icons/StarIcon.vue';
import XIcon from '../icons/XIcon.vue';
import ButtonComponent from './ButtonComponent.vue';

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.modal {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000099;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
}
.modal.active {
  opacity: 1;
  visibility: visible;
}
.modal__close {
  position: absolute;
  right: 0.938rem;
  top: 0.938rem;
  color: #fff;
  cursor: pointer;
}
.modal__container {
  position: relative;
  max-width: 570px;
  width: 100vw;
}
.modal__hero {
  width: 100%;
  height: 14rem;
  background-image: url('/background.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.modal__hero svg {
  max-height: 10px;
}
.modal__content {
  padding: 1.25rem 1.875rem;
  background-color: #fff;
}
.modal__content ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.modal__content li {
  padding: 0.625rem 0;
  color: var(--dark-gray);
  font-size: 1.125rem;
  border-bottom: 1px solid var(--light-gray);
}
.modal__content span {
  font-weight: 700;
}
.modal__btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.625rem;
}

.favorite__button {
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
.favorite__button.favorite {
  color: var(--yelow);
}
</style>
