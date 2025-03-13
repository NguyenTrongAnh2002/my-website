<template>
  <section
    class="py-20 bg-gray-100"
    :style="{ backgroundImage: `url(${bg_wrapper})` }"
  >
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <div class="lg:w-1/2 w-full px-6">
        <img :src="wrapper_1" alt="Xưởng May" class="rounded-lg shadow-lg" />
      </div>

      <div class="lg:w-1/2 w-full px-6 mt-6 lg:mt-0 text-center lg:text-left">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Premier Clothing Manufacturers Shaping Trends Beyond Fashion
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          Affix Apparel is a leading made-to-order clothing manufacturer,
          specializing in private-label solutions that help brands showcase
          their unique identity. With a focus on quality and innovation, we turn
          your ideas into custom clothing that resonates with your target
          market. As a trusted custom clothing manufacturer for startups and
          retailers of all sizes, we offer tailored solutions with MOQs as low
          as 50 pieces.
        </p>
        <button
          class="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 inline-block"
        >
          GET IN TOUCH
        </button>
        <a
          href=""
          class="text-black px-6 py-3 ms-4 mt-3 border border-black rounded-lg text-lg hover:bg-blue-700 inline-block"
        >
          HOW TO START A BRAND
        </a>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col justify-center items-center my-16">
      <div class="services-title text-center px-5">
        <h1 class="text-xl lg:text-4xl md:text-3xl sm:text-2xl font-bold">
          Our Full Range of Services as a Custom Clothing Manufacturer!
        </h1>
        <p class="text-base pt-4">
          At Affix Apparel, we provide a complete range of services as a custom
          apparel factory, from idea to shipment. Our team of custom clothes
          manufacturers offers design, production, and customization services by
          professionals to make your brand noticeable.
        </p>
      </div>
      <div class="services-section">
        <div class="service" v-for="(service, index) in services" :key="index">
          <div class="service-image">
            <img :src="service.image" alt="" />
          </div>
          <div class="service-content">
            <h3>{{ service.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import bg_wrapper from "../assets/img/bg/bg-wrapper.jpg";
import wrapper_1 from "../assets/img/bg/wrapper-1.jpg";
import wrapper2_1 from "../assets/img/bg/wrapper-2.1.jpg";
import wrapper2_2 from "../assets/img/bg/wrapper-2.2.jpg";
import wrapper2_3 from "../assets/img/bg/wrapper-2.3.jpg";
import wrapper2_4 from "../assets/img/bg/wrapper-2.4.jpg";
import wrapper2_5 from "../assets/img/bg/wrapper-2.5.jpg";
import wrapper2_6 from "../assets/img/bg/wrapper-2.6.jpg";
const services = ref([
  {
    title: "T-Shirt Manufacturing",
    image: wrapper2_1,
  },
  {
    title: "T-Shirt Manufacturing",
    image: wrapper2_2,
  },
  {
    title: "Private Label & Branding",
    image: wrapper2_3,
  },
  {
    title: "Private Label & Branding",
    image: wrapper2_4,
  },
  {
    title: "Private Label & Branding",
    image: wrapper2_5,
  },
  {
    title: "Private Label & Branding",
    image: wrapper2_6,
  },
]);
</script>

<style scoped>
.services-title {
  max-width: 1200px;
}
.services-section {
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 20px;
  padding: 50px;
  flex-wrap: wrap;
}

.service {
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.service-image {
  width: 100%;
  max-width: 400px;
  height: 250px;
  background-size: cover;
  background-position: center;
  filter: brightness(0.7);
  overflow: hidden;
}

.service-image img {
  transition: transform 0.3s ease-in-out;
  object-fit: cover;
}

.service:hover .service-image img {
  transform: scale(1.1);
}

.service-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
}

@media (max-width: 1024px) {
  .services-section {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .services-section {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
