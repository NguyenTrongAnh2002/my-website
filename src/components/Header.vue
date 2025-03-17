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
        class="hidden md:block bg-white border border-black text-black px-6 py-3 rounded-lg text-lg hover:bg-black hover:text-white"
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
    <div>
      <!-- Mobile Menu -->
      <div
        v-if="isMenuOpen"
        @click="closeMenu"
        class="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
      ></div>

      <!-- Mobile Menu -->
      <transition name="slide">
        <div
          v-if="isMenuOpen"
          class="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out"
        >
          <!-- Nút đóng -->
          <button
            @click="closeMenu"
            class="absolute top-4 right-4 text-white text-xl"
          >
            <i class="fa-solid fa-xmark"></i> Close
          </button>

          <!-- Ô tìm kiếm -->
          <div class="pt-16 pb-4">
            <div
              class="relative flex items-center w-full border-t border-gray-500 px-6 shadow-lg shadow-gray-900/50"
            >
              <input
                type="text"
                placeholder="Search for posts"
                class="px-3 h-16 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <button
                @click="search"
                class="absolute top-0 bottom-0 right-5 transform text-gray-400 hover:text-white"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          <!-- Menu Items -->
          <nav class="flex flex-col w-full">
            <a
              href="/"
              class="py-3 px-6 border-b border-gray-700 w-full hover:bg-gray-800"
            >
              HOME
            </a>
            <a
              href="/about"
              class="py-3 px-6 border-b border-gray-700 w-full hover:bg-gray-800"
            >
              ABOUT
            </a>
            <a
              href="/portfolio"
              class="py-3 px-6 border-b border-gray-700 w-full hover:bg-gray-800"
            >
              PORTFOLIO
            </a>
            <a
              href="/blog"
              class="py-3 px-6 border-b border-gray-700 w-full hover:bg-gray-800"
            >
              BLOG
            </a>
            <a href="/contact" class="py-3 px-6 w-full hover:bg-gray-800">
              CONTACT US
            </a>
          </nav>
        </div>
      </transition>
    </div>
  </div>

  <RequestForm :isOpen="openForm" @close-form="openForm = false" />
</template>

<script setup>
import { ref } from "vue";
import RequestForm from "./RequestForm.vue";
import logo_header from "../assets/img/logo/logo-header.png";
import { RouterLink } from "vue-router";

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
const closeMenu = () => {
  isMenuOpen.value = false;
};

const currentPath = ref(window.location.pathname);
const isActive = (path) => currentPath.value === path;

const openForm = ref(false);
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
