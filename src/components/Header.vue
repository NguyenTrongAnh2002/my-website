<template>
  <div
    class="bg-white shadow-md fixed top-0 left-0 w-full z-50 h-20 flex items-center"
  >
    <div
      class="container mx-auto flex items-center justify-between px-6 w-full max-w-7xl"
    >
      <div>
        <a href="/">
          <img :src="logo_header" alt="Affix Apparel Logo" class="h-18" />
        </a>
      </div>

      <nav class="hidden md:flex space-x-8 text-lg">
        <!-- <ul class="flex">
          <li class="p-6" v-for="navlink in navlinks">
            <a :href="navlink.href" class="text-gray-700 hover:text-gray-900">{{
              navlink.name
            }}</a>
          </li>
        </ul> -->
        <a
          href="/"
          class="hover:underline"
          :class="{
            'font-bold ': isActive('/'),
          }"
          >HOME</a
        >
        <a
          href="/about"
          class="hover:underline"
          :class="{
            'font-bold ': isActive('/about'),
          }"
          >ABOUT</a
        >
        <a
          href="/portfolio"
          class="hover:underline"
          :class="{
            'font-bold ': isActive('/portfolio'),
          }"
          >PORTFOLIO</a
        >
        <a
          href="/blog"
          class="hover:underline"
          :class="{
            'font-bold ': isActive('/blog'),
          }"
          >BLOG</a
        >
        <a
          href="/contact"
          class="hover:underline"
          :class="{
            'font-bold': isActive('/contact'),
          }"
          >CONTACT US</a
        >
      </nav>

      <button
        @click="openForm = true"
        class="hidden md:block bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
      >
        Liên hệ ngay
      </button>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="md:hidden text-gray-700 focus:outline-none text-2xl"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-white shadow-lg absolute w-full left-0 top-20 p-6"
    >
      <a href="/" class="block text-gray-700 py-2 hover:text-gray-900 text-lg"
        >HOME</a
      >
      <a
        href="/about"
        class="block text-gray-700 py-2 hover:text-gray-900 text-lg"
        >ABOUT</a
      >
      <a
        href="/portfolio"
        class="block text-gray-700 py-2 hover:text-gray-900 text-lg"
        >PORTFOLIO</a
      >
      <a
        href="/blog"
        class="block text-gray-700 py-2 hover:text-gray-900 text-lg"
        >BLOG</a
      >
      <a
        href="/contact"
        class="block text-gray-700 py-2 hover:text-gray-900 text-lg"
        >CONTACT US</a
      >
    </div>
  </div>

  <RequestForm :isOpen="openForm" @close-form="openForm = false" />
</template>

<script setup>
import { ref } from "vue";
import RequestForm from "./RequestForm.vue";
import logo_header from "../assets/img/logo/logo-header.png";

const navlinks = ref([
  { href: "#", name: "HOME" },
  { href: "#", name: "ABOUT" },
  { href: "#", name: "PORTFOLIO" },
  { href: "#", name: "BLOG" },
  { href: "#", name: "CONTACT US" },
]);

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const currentPath = ref(window.location.pathname);
const isActive = (path) => currentPath.value === path;

const openForm = ref(false);
</script>

<style scoped>
.router-link-active {
  font-weight: bold;
  color: red;
  border-bottom: 2px solid red;
}
</style>
