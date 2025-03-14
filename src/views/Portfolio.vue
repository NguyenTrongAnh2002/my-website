<script setup>
import { ref } from "vue";
import HeroComponent from "../components/Hero.vue";
import BrandComponent from "../components/Brand.vue";
import FooterComponent from "../components/Footer.vue";

import heroBg_portfolio from "../assets/img/bg/bg-portfolio.jpg";
import anh1 from "../assets/img/product/portfolio-1.jpg";
import anh2 from "../assets/img/product/portfolio-2.jpg";
import anh3 from "../assets/img/product/portfolio-3.jpg";
import anh4 from "../assets/img/product/portfolio-4.jpg";
import anh5 from "../assets/img/product/portfolio-5.jpg";
import anh6 from "../assets/img/product/portfolio-6.jpg";
import anh7 from "../assets/img/product/portfolio-7.jpg";
import anh8 from "../assets/img/product/portfolio-8.jpg";
import anh9 from "../assets/img/product/portfolio-9.jpg";
import anh10 from "../assets/img/product/portfolio-10.jpg";
import anh11 from "../assets/img/product/portfolio-11.jpg";
import anh12 from "../assets/img/product/portfolio-12.jpg";
import anh13 from "../assets/img/product/portfolio-13.jpg";
import anh14 from "../assets/img/product/portfolio-14.jpg";
import anh15 from "../assets/img/product/portfolio-15.jpg";
import anh16 from "../assets/img/product/portfolio-16.jpg";

const backgrounds = ref([heroBg_portfolio]);
const contents = ref([
  {
    title: "",
    description: "",
    buttonText: "",
  },
]);

const products = ref([
  { image: anh1 },
  { image: anh2 },
  { image: anh3 },
  { image: anh4 },
  { image: anh5 },
  { image: anh6 },
  { image: anh7 },
  { image: anh8 },
  { image: anh9 },
  { image: anh10 },
  { image: anh11 },
  { image: anh12 },
  { image: anh13 },
  { image: anh14 },
  { image: anh15 },
  { image: anh16 },
]);
</script>
<template>
  <div class="bg-portfolio">
    <HeroComponent :contents="contents" :backgrounds="backgrounds" />
  </div>

  <div class="w-9/12 mx-auto text-center">
    <div class="overflow-hidden relative">
      <div class="flex flex-wrap transition-transform duration-500 ease-in-out">
        <div v-for="product in products" class="w-1/4 flex-shrink-0 p-4">
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img :src="product.image" class="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </div>

    <div class="my-36">
      <h1 class="text-6xl font-semibold">
        ARE YOU LOOKING FOR A STYLE NOT FEATURED ON OUR WEBSITE? CONTACT US
        DIRECTLY AND WE WILL BE HAPPY TO ASSIST YOU!
      </h1>
      <button
        class="mt-14 border border-black px-4 py-2 hover:bg-black hover:text-white transition"
      >
        REQUEST YOUR FREE CONSULTATION!
      </button>
    </div>
  </div>
  <BrandComponent />
  <FooterComponent />
</template>
<style>
.bg-portfolio .hero-content {
  display: none;
}
</style>
