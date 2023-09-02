<script setup>
import AllList from './views/AllList.vue';
// import Home from './views/Home.vue';
</script>

<template>
  <!-- <Home /> -->
  <AllList />
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

* {
  box-sizing: border-box;
}

body {
  font-family: 'Lato', sans-serif;
  background-color: var(--white);
}

#app {
  min-height: 100vh;
}

.container {
  max-width: 570px;
  margin: 0 auto;
}
</style>
