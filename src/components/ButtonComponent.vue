<template>
  <button :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
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
  transition: background-color 0.3s ease-in-out;
}
button:hover {
  background-color: var(--dark-red);
}
button:disabled {
  background-color: var(--gray);
}
</style>
