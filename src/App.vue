<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Flex3.1</RouterLink>
        <RouterLink to="/flex23">Flex2.3</RouterLink>
        <RouterLink to="/cars">CarsAPI</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
