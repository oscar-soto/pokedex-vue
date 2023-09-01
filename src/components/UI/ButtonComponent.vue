<template>
  <button :class="{disabled: isDisabled }" :type="type">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
  },
})
</script>

<style scoped>
button {
  padding: 0.688rem 1.25rem;
  color: #fff;
  font-size: 1.125rem;
  background-color: var(--light-red);
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease-in-out;
}
button:hover,
button:focus {
  background-color: var(--dark-red);
}
.disabled {
  background-color: var(--gray);
}
</style>
