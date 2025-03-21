<template>
  <div class="relative w-full max-w-6xl mx-auto my-16 px-4">
    <h2 class="text-center text-3xl font-bold mb-8">
      A Dig into Limitless Possibilities of Our Customization Options!
    </h2>

    <div class="overflow-hidden relative">
      <div
        class="flex transition-transform duration-1000 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(item_blog, index) in limitedBlogs"
          :key="index"
          class="flex-shrink-0 p-4"
          :class="{
            'w-1/3': itemsPerSlide() === 3,
            'w-1/2': itemsPerSlide() === 2,
            'w-full': itemsPerSlide() === 1,
          }"
        >
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img :src="item_blog.image" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="font-bold text-lg">{{ item_blog.title }}</h3>
              <p class="text-gray-600 text-sm mt-2">
                {{ item_blog.description }}
              </p>
              <button
                class="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button
      v-if="currentIndex > 0"
      @click="prev"
      class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full"
    >
      <i class="fa-solid fa-angle-left"></i>
    </button>
    <button
      v-if="currentIndex < limitedBlogs.length / itemsPerSlide() - 1"
      @click="next"
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full"
    >
      <i class="fa-solid fa-angle-right"></i>
    </button>

    <div class="flex justify-center mt-4 space-x-2">
      <span
        v-for="(dot, index) in totalSlides"
        :key="index"
        @click="goToSlide(index)"
        class="button-goSlider w-3 h-3 rounded-full cursor-pointer"
        :class="
          currentIndex === index
            ? 'bg-black scale-125'
            : 'bg-gray-400 opacity-50'
        "
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { blogs } from "../js/blogData";

const limitedBlogs = computed(() => blogs.value.slice(0, 6));
const currentIndex = ref(0);

const itemsPerSlide = () => {
  if (screenWidth.value >= 1024) return 3;
  if (screenWidth.value < 1024 && screenWidth.value > 600) return 2;
  return 1;
};

const screenWidth = ref(window.innerWidth);

const totalSlides = computed(() =>
  Math.ceil(limitedBlogs.value.length / itemsPerSlide())
);

const next = () => {
  if (currentIndex.value < totalSlides.value - 1) {
    currentIndex.value++;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

// Theo dõi thay đổi kích thước màn hình
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

<style scoped></style>
