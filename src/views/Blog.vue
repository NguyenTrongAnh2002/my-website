<template>
  <div v-if="$route.path === '/blog'">
    <section
      class="bg-blog relative bg-cover bg-center text-white py-16 px-6 mt-20 md:px-12"
    >
      <div class="container mx-auto flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/3 text-center mx-auto">
          <h1 class="text-2xl md:text-6xl">BLOG</h1>
        </div>
      </div>
    </section>

    <div class="relative w-full max-w-7xl mx-auto my-16 px-4">
      <div class="overflow-hidden relative">
        <div class="flex flex-wrap">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="flex-shrink-0 p-4"
            :class="{
              'w-1/3': itemsPerSlide() === 3,
              'w-1/2': itemsPerSlide() === 2,
              'w-full': itemsPerSlide() === 1,
            }"
          >
            <div
              class="itemBlog-container bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div class="overflow-hidden">
                <a :href="`blog/` + service.href"
                  ><img :src="service.image" class="w-full h-64 object-cover"
                /></a>
              </div>
              <div class="p-6">
                <p class="opacity-50">{{ service.date }}</p>
                <a href="" class="font-bold text-lg">{{ service.title }}</a>
                <p class="text-gray-600 text-sm mt-2">
                  {{ service.description }}
                </p>
                <button
                  class="mt-4 bg-gray-200 text-orange-400 px-4 py-2 rounded-full text-sm hover:bg-white"
                >
                  <a :href="`blog/` + service.href">CONTINUE READING</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BrandComponent />
    <FooterComponent />
  </div>
  <router-view></router-view>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import HeroComponent from "../components/Hero.vue";
import BrandComponent from "../components/Brand.vue";
import FooterComponent from "../components/Footer.vue";

import bg_blog from "../assets/img/bg/bg-blog.jpg";
import blog_img1 from "../assets/img/bg/blog1.jpg";
import blog_img2 from "../assets/img/bg/blog2.jpg";
import blog_img3 from "../assets/img/bg/blog3.jpg";
import blog_img4 from "../assets/img/bg/blog4.jpg";
import blog_img5 from "../assets/img/bg/blog5.jpg";
import blog_img6 from "../assets/img/bg/blog6.jpg";
import { RouterView } from "vue-router";

const services = ref([
  {
    href: "info_blog1",
    date: "21 Feb 2025",
    title: "Sustainable Packaging for Clothing: Eco-Friendly Ideas to Try",
    description:
      "Sustainable packaging for clothing​ is more than a trend; it is a requirement. With growing environmental awareness among consumers, th...",
    image: blog_img1,
  },
  {
    href: "info_blog2",
    date: "16 Feb 2025",
    title: "How to Promote Your T-Shirt Business & Grow Faster",
    description:
      "Starting a t-shirt business is exciting, but do you know how to promote your t-shirt business effectively to stand out? No matter if yo...",
    image: blog_img2,
  },
  {
    href: "info_blog3",
    date: "21 jan 2025",
    title: "The Benefits of Fast Fashion: Style at Lightning Speed",
    description:
      "Fast fashion has transformed the way you purchase and dress, making fashionable clothing more affordable than ever. So, what makes it s...",
    image: blog_img3,
  },
  {
    href: "info_blog4",
    date: "01 Feb 2025",
    title: "Cost to Start a Swimwear Line: Complete Guide for Beginners",
    description:
      "Starting your own swimwear line can be an exciting venture, but understanding the cost to start a swimwear line is essential for succes...",
    image: blog_img4,
  },
  {
    href: "info_blog5",
    date: "21 Feb 2025",
    title:
      "What is a Trucker Hat And Why it’s Back? Everything You Need to Know",
    description:
      "Have you ever wondered what a trucker hat is and why trucker hats evolved from freebies to high-end fashion essentials? Whether you wer...",
    image: blog_img5,
  },
  {
    href: "info_blog6",
    date: "21 Feb 2025",
    title: "Sweater vs Sweatshirt: A Guide To Key Differences!",
    description:
      "Have you ever considered what truly separates a sweater from a sweatshirt? This question is frequently asked in the fashion industry an..",
    image: blog_img6,
  },
]);

const itemsPerSlide = () => {
  if (screenWidth.value >= 1024) return 3;
  if (screenWidth.value < 1024 && screenWidth.value > 600) return 2;
  return 1;
};

const screenWidth = ref(window.innerWidth);

const totalSlides = computed(() =>
  Math.ceil(services.value.length / itemsPerSlide())
);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenWidth);
});
</script>

<style scoped>
template {
  font-family: Arial, Helvetica, sans-serif;
}
.bg-blog {
  width: 100%;
  height: auto;
  background-image: url("../assets/img/bg/cta-banner.jpg");
  background-size: cover;
  background-position: center;
}

.itemBlog-container img {
  transition: transform 0.3s ease-in-out;
  object-fit: cover;
}
.itemBlog-container img:hover {
  transform: scale(1.1);
}

@media (max-width: 1024px) {
  .bg-blog {
    background-attachment: scroll;
  }
}
</style>
