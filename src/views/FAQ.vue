<template>
  <section
    class="bg-faq relative bg-cover bg-center text-white py-16 px-6 mt-20 md:px-12"
  >
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <div class="lg:w-1/3 text-center mx-auto">
        <h1 class="text-2xl md:text-6xl">FAQ's</h1>
        <div class="mt-5">
          <span class="text-xs font-bold"><a href="/">HOME</a></span>
          <span class="text-xs font-bold ms-2"
            ><i class="fa-solid fa-angles-right"></i
          ></span>
          <span class="text-xs font-bold ms-2"
            ><a class="text-white" href="/blog">FAQ'S</a></span
          >
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="w-3/4 mx-auto">
      <div class="mt-14">
        <h1 class="text-2xl md:text-4xl font-bold mb-5">
          Custom Apparel Manufacturing FAQ
        </h1>
        <p class="opacity-80">
          Manufacturing custom apparel — especially as a start-up clothing brand
          — is an involved process. There are many considerations and many
          questions you may have. Our Frequently Asked Questions (FAQ) can
          answer some basic and essential questions regarding custom apparel
          manufacturing and Affix Apparel. Please make sure you check this page
          before contacting Affix Apparel.
        </p>
      </div>

      <div class="mt-6">
        <div><h1 class="text-2xl md:text-4xl font-bold mb-5">FAQ's</h1></div>
        <div>
          <button @click="showFAQ1 = !showFAQ1" class="flex gap-5">
            <div
              class="w-8 h-8 border-2 border-orange-600 text-orange-600 text-center"
            >
              <div v-show="!showFAQ1">
                <i class="fa-solid fa-plus"></i>
              </div>
              <div v-show="showFAQ1">
                <i class="fa-solid fa-minus"></i>
              </div>
            </div>
            <h2 class="text-xl md:text-2xl">
              <strong>How do discounts work?</strong>
            </h2>
          </button>
          <div
            class="opacity-0"
            :class="{ 'opacity-100': showFAQ1 }"
            :style="{
              maxHeight: showFAQ1 ? '200px' : '0px',
              transition:
                'max-height 0.5s ease-in-out, opacity 0.7s ease-in-out',
            }"
          >
            <p class="mt-4 ps-12 opacity-80">
              Simply reach out to our team for a consultation. We’ll discuss
              your ideas, help with design and fabric selection, and guide you
              through the entire manufacturing process.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <div>
          <button @click="showFAQ2 = !showFAQ2" class="flex gap-5">
            <div
              class="w-8 h-8 border-2 border-orange-600 text-orange-600 text-center"
            >
              <div v-show="!showFAQ2">
                <i class="fa-solid fa-plus"></i>
              </div>
              <div v-show="showFAQ2">
                <i class="fa-solid fa-minus"></i>
              </div>
            </div>
            <h2 class="text-xl md:text-2xl">
              <strong>Can I order a sample before ordering?</strong>
            </h2>
          </button>
          <div
            class="overflow-hidden opacity-0"
            :class="{ 'opacity-100': showFAQ2 }"
            :style="{
              maxHeight: showFAQ2 ? '1000px' : '0px',
              transition: 'max-height 1s ease-in-out, opacity 0.7s ease-in-out',
            }"
          >
            <ul class="list-disc">
              <li class="mt-4 ps-12 opacity-80">
                Affix Apparel will produce a sample free of charge with any
                production order. However: free pre-production samples cannot be
                created until we have received the production order deposit.
              </li>
              <li class="mt-4 ps-12 opacity-80">
                If you would like a sample before putting in a production order,
                we can accommodate that request — but will have to charge for
                the sample.
              </li>
              <li class="mt-4 ps-12 opacity-80">
                While we can technically produce a finished sample for any
                garment, the cost of a sample can be prohibitively expensive in
                small orders. In small run orders, it is simply not cost
                effective to request a sample. If you want a sample no matter
                what, please be aware of the cost.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <BrandComponent />
  <FooterComponent />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, Transition } from "vue";
import BrandComponent from "../components/Brand.vue";
import FooterComponent from "../components/Footer.vue";

const showFAQ1 = ref(false);
const showFAQ2 = ref(false);
</script>

<style scoped>
.bg-faq {
  width: 100%;
  height: auto;
  background-image: url("../assets/img/bg/bg-blog.jpg");
  background-size: cover;
  background-position: center;
}

@media (max-width: 1024px) {
  .bg-faq {
    background-attachment: scroll;
  }
}
</style>
