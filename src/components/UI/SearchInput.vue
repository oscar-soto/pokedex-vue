<template>
  <div class="search">
    <label for="search">
      <Search />
    </label>

    <input
      type="text"
      id="search"
      placeholder="Search"
      v-model="value"
      @keyup="filter"
    />
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import Search from '../icons/Search.vue';

const props = defineProps({
  inputValue: {
    type: String,
  },
  pokemons: {
    type: Array,
  },
  onUpdateList: {
    type: Function,
  },
});

// Events
const emit = defineEmits(['updateList', 'update:inputValue']);

watch(props, () => {
  emit('updateList', props.pokemons);
});

// Filter
const filter = (e) => {
  const text = e.target.value;

  if (text === '') {
    emit('updateList', props.pokemons);
  } else {
    const newList = props.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(text.toLowerCase())
    );

    emit('updateList', newList);
  }
};

// Computed Input Value
const value = computed({
  get() {
    return props.inputValue
  },
  set(newValue) {
    emit('update:inputValue', newValue)
  }
})
</script>

<style scoped>
/* Input Search */
.search {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2.5rem;
  color: var(--gray);
  font-family: 'Montserrat', sans-serif;
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
</style>
