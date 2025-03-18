<template>
  <div class="flex flex-col items-center text-center py-10">
    <div class="bg-yellow-400 w-3/4 py-10 rounded-md">
      <h2 class="text-2xl font-semibold">
        Get Your Brand Noticed with Custom Apparel!
      </h2>
      <div class="mt-2 border-t-2 border-black w-16 mx-auto"></div>
      <button
        @click="openForm = true"
        class="mt-4 border border-black px-4 py-2 hover:bg-black hover:text-white transition"
      >
        REQUEST YOUR FREE CONSULTATION!
      </button>
    </div>

    <div class="flex flex-wrap justify-center mt-8 space-x-6">
      <img
        v-for="(logo, index) in logos"
        :key="index"
        :src="logo"
        class="h-16"
      />
    </div>
  </div>
  <RequestForm :isOpen="openForm" @close-form="openForm = false" />
</template>

<script setup>
import { ref } from "vue";
import RequestForm from "./RequestForm.vue";
import brand1 from "../assets/img/logo/brand-1.jpg";
import brand2 from "../assets/img/logo/brand-2.jpg";
import brand3 from "../assets/img/logo/brand-3.png";
import brand4 from "../assets/img/logo/brand-4.jpg";

const logos = [brand1, brand2, brand3, brand4];

const openForm = ref(false);
</script>
