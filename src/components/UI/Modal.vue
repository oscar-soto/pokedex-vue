<template>
  <div class="modal" :class="{ active: isOpen }">
    <section class="modal__container">
      <span class="modal__close" @click="toggleModal">
        <XIcon />
      </span>

      <div class="modal__hero">
        <img
          :src="pokemon.sprites?.other.dream_world.front_default"
          :alt="`pokemon ${pokemon?.name}`"
        />
      </div>

      <div class="modal__content">
        <ul>
          <li><span>Name: </span> {{ pokemon?.name }}</li>
          <li><span>Weight: </span> {{ pokemon?.weight }}</li>
          <li><span>Height: </span> {{ pokemon?.height }}</li>
          <li>
            <span>Types: </span>
            <p v-for="(type, i) in pokemon?.types" :key="i">
              {{ type.type.name }}
            </p>
          </li>
        </ul>

        <div class="modal__btns">
          <input
            type="text"
            :value="`name: ${pokemon.name}, weight: ${pokemon.weight}, height: ${pokemon.height}`"
            class="input-clipboar"
            id="clipboar"
          />
          <button-component @click="getPokemonInfo">
            Share to my friends
          </button-component>

          <button class="favorite__button">
            <StarIcon />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { getPokemonByName } from '../../api/pokemonService';
import StarIcon from '../icons/StarIcon.vue';
import XIcon from '../icons/XIcon.vue';
import ButtonComponent from './ButtonComponent.vue';

const tagHtml = document.querySelector('html');


// Data
const pokemon = ref([]);

// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
  },
  currentPokemon: {
    type: String,
  },
});

// Watch
watch(props, () => {
  getPokemon(props.currentPokemon);
  if (props.isOpen) {
    tagHtml.style.overflow = 'hidden';
  }
});

// Emit
const emit = defineEmits(['updateIsModalOpen']);

// Get pokemons by api
const getPokemon = async (name) => {
  try {
    const resp = await getPokemonByName(name);
    pokemon.value = resp;
  } catch (error) {
    console.log(error);
  }
};

// Close modal
const toggleModal = () => {
  tagHtml.style.removeProperty('overflow');
  emit('updateIsModalOpen', false);
};

// Copy info in clipboar
const getPokemonInfo = () => {
  const inputClipboar = document.querySelector('#clipboar');
  inputClipboar.select();
  inputClipboar.setSelectionRange(0, 999999); // Mobile

  navigator.clipboard.writeText(inputClipboar.value);
};
</script>

<style scoped>
.modal {
  position: fixed;
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
  display: grid;
  place-content: center;
  width: 100%;
  height: 14rem;
  background-image: url('/background.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.modal__hero img {
  height: 11.25rem;
  width: auto;
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
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.625rem 0;
  color: var(--dark-gray);
  font-size: 1.125rem;
  border-bottom: 1px solid var(--light-gray);
  text-transform: capitalize;
}
.modal__content li p {
  margin: 0;
}
.modal__content li p::after {
  content: ',';
}
.modal__content li p:last-child::after {
  content: '';
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
.input-clipboar {
  display: none;
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
