<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Home from './views/Home.vue'
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <Home msg="Vite + Vue" />
</template>

<style>
:root {
  --yelow: #ECA539;
  --dark-red: #C00E20;
  --light-red: #F22539;
  --black: #353535;
  --dark-gray: #5E5E5E;
  --gray: #BFBFBF;
  --light-gray: #E8E8E8;
  --snow-white: #F5F5F5;
  --white: #F9F9F9;
}

body {
  font-family: 'Lato', sans-serif;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
