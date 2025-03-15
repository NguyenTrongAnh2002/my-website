<template>
  <section
    class="bg-blog relative bg-cover bg-center text-white py-16 px-6 mt-20 md:px-12"
  >
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <div class="lg:w-1/3 text-center mx-auto">
        <h1 class="text-2xl md:text-6xl">BLOG 1</h1>
      </div>
    </div>
  </section>

  <div class="relative w-full h-auto mx-auto my-16 px-4">
    <div class="relative w-2/3 h-auto mx-auto">
      <div class="bg-orange-500 text-center w-52 mx-auto my-5">
        <a class="text-white" href="/blog"> CUSTOM AFFIX APPAREL</a>
      </div>
      <div class="text-center mb-5">
        <strong class="text-2xl md:text-3xl">
          {{ service.title }}
        </strong>
      </div>
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img :src="service.image" class="w-full object-cover" />
      </div>
      <p>
        Sustainable packaging for clothing​ is more than a trend; it is a
        requirement. With growing environmental awareness among consumers, they
        anticipate that brands will take action to reduce their ecological
        footprint. But where do you begin? You can examine a range of
        environmentally friendly packaging options, such as compostable mailers
        and washable fabric wraps. This blog will guide you through
        straightforward, effective, and creative methods to make your packaging
        more environmentally friendly. Are you prepared to enhance your brand
        while being eco-friendly? Let’s look at sustainable packaging options
        for clothing that work for you and your customers!
      </p>
    </div>
  </div>

  <BrandComponent />
  <FooterComponent />
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

const service = ref({
  date: "21 Feb 2025",
  title: "Sustainable Packaging for Clothing: Eco-Friendly Ideas to Try",
  description:
    "Sustainable packaging for clothing​ is more than a trend; it is a requirement. With growing environmental awareness among consumers, th...",
  image: blog_img1,
});
</script>

<style scoped>
.bg-blog {
  width: 100%;
  height: auto;
  background-image: url("../assets/img/bg/cta-banner.jpg");
  background-size: cover;
  background-position: center;
}

@media (max-width: 1024px) {
  .bg-blog {
    background-attachment: scroll;
  }
}
</style>
