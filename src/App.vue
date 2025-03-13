<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from "./components/Header.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
</script>
