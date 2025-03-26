<template>
  <div
    :key="currentIndex"
    class="relative h-[30vh] md:h-[80vh] sm:h-[60vh] flex items-center text-center bg-cover bg-center transition-all duration-1000 mt-20 overflow-hidden"
    :style="{ backgroundImage: `url(${backgrounds[currentIndex]})` }"
  >
    <div
      v-if="currentIndex % 2 === 0"
      class="hero-content absolute z-10 text-white w-full"
    >
      <div class="w-4/5 mx-auto">
        <div class="w-1/2 text-left">
          <h1 class="text-5xl font-bold mb-4">
            {{ contents[currentIndex].title }}
          </h1>
          <p class="text-lg mb-6 opacity-90">
            {{ contents[currentIndex].description }}
          </p>

          <button
            @click="openForm = true"
            class="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-black inline-block"
          >
            {{ contents[currentIndex].buttonText }}
          </button>
        </div>
      </div>
    </div>

    <div v-else class="hero-content absolute z-10 text-white w-full">
      <div class="w-4/5 mx-auto">
        <div class="w-1/2 ms-auto text-left">
          <h1 class="text-5xl font-bold mb-4">
            {{ contents[currentIndex].title }}
          </h1>
          <p class="text-lg mb-6 opacity-90">
            {{ contents[currentIndex].description }}
          </p>

          <button
            @click="openForm = true"
            class="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-black inline-block"
          >
            {{ contents[currentIndex].buttonText }}
          </button>
        </div>
      </div>
    </div>

    <button
      v-if="backgrounds.length > 1"
      @click="prevBackground"
      class="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 hover:bg-black/60 text-white text-4xl p-4 rounded-full"
    >
      ❮
    </button>

    <button
      v-if="backgrounds.length > 1"
      @click="nextBackground"
      class="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 hover:bg-black/60 text-white text-4xl p-4 rounded-full"
    >
      ❯
    </button>
  </div>
  <RequestForm :isOpen="openForm" @close-form="openForm = false" />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import RequestForm from "./RequestForm.vue";

const openForm = ref(false);

const props = defineProps({
  backgrounds: Array,
  contents: Array,
});

const backgrounds = computed(() => props.backgrounds || []);
const contents = computed(() => props.contents || []);

const currentIndex = ref(0);
console.log(currentIndex.value);
const prevBackground = () => {
  currentIndex.value =
    (currentIndex.value - 1 + backgrounds.value.length) %
    backgrounds.value.length;
  startAutoSlide();
};

const nextBackground = () => {
  currentIndex.value = (currentIndex.value + 1) % backgrounds.value.length;
  startAutoSlide();
};

const screenWidth = ref(window.innerWidth);

let intervalId = null;
const startAutoSlide = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % backgrounds.value.length;
  }, 6000);
};
// Theo dõi thay đổi kích thước màn hình
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateScreenWidth);
  startAutoSlide();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenWidth);
  clearInterval(intervalId);
});
</script>

<style scoped>
section {
  transition: background-image 3s ease-in-out;
}

@media (max-width: 1024px) {
  .hero-content {
    left: 0;
    right: 0;
  }
}
@media (max-width: 640px) {
  .hero-content h1 {
    font-size: 30px;
  }
  button,
  p {
    display: none;
  }
}

.hero-content h1 {
  animation-name: moveLeft;
  animation-duration: 1.5s;
  animation-fill-mode: both;
}

.hero-content p {
  animation-name: moveLeft;
  animation-duration: 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: both;
}
.hero-content button {
  animation-name: moveLeft;
  animation-duration: 0.8s;
  animation-delay: 1s;
  animation-fill-mode: both;
}
@keyframes moveLeft {
  from {
    transform: translateX(-300px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
