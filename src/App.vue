<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from "./components/Header.vue";
import Home from "./layouts/Home.vue";
import About from "./layouts/About.vue";
</script>
