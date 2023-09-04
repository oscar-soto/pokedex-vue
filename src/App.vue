<template>
  <component :is="currentView" />
</template>

<script setup>
import { computed, onBeforeMount, onMounted, ref } from 'vue';

import Home from './views/Home.vue';
import AllList from './views/AllList.vue';
import FavoriteList from './views/FavoriteList.vue';

const routes = {
  '/': Home,
  '/all': AllList,
  '/favorite': FavoriteList,
};

const currentPath = ref(window.location.hash);

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || 'NotFound';
});

onMounted(() => {
  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash;
  });
});

onBeforeMount(() => {
  window.removeEventListener('hashchange', () => {
    currentPath.value = window.location.hash;
  })
})
</script>

<style>
:root {
  --yelow: #eca539;
  --dark-red: #c00e20;
  --light-red: #f22539;
  --black: #353535;
  --dark-gray: #5e5e5e;
  --gray: #bfbfbf;
  --light-gray: #e8e8e8;
  --snow-white: #f5f5f5;
  --white: #f9f9f9;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Lato', sans-serif;
  background-color: var(--white);
}

#app {
  min-height: 100vh;
  padding: 0 32px 90px;
}

.container {
  max-width: 570px;
  margin: 0 auto;
}

.list {
  padding-top: 2.188rem;
  color: var(--black);
}
</style>
