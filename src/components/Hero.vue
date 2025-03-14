<template>
  <div
    class="relative h-[80vh] flex items-center text-center bg-cover bg-center transition-all duration-700 mt-20"
    :style="{ backgroundImage: `url(${backgrounds[currentIndex]})` }"
  >
    <div
      v-if="currentIndex % 2 === 0"
      class="hero-content absolute z-10 text-white w-full right-1/4"
    >
      <h1 class="text-5xl font-bold mb-4">
        {{ contents[currentIndex].title }}
      </h1>
      <p class="text-lg mb-6 opacity-90">
        {{ contents[currentIndex].description }}
      </p>

      <button
        @click="$emit('open-form')"
        class="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-black inline-block"
      >
        {{ contents[currentIndex].buttonText }}
      </button>
    </div>

    <div v-else class="hero-content absolute z-10 text-white w-full left-1/4">
      <div class="">
        <h1 class="text-5xl font-bold mb-4">
          {{ contents[currentIndex].title }}
        </h1>
        <p class="text-lg mb-6 opacity-90">
          {{ contents[currentIndex].description }}
        </p>

        <button
          @click="$emit('open-form')"
          class="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-black inline-block"
        >
          {{ contents[currentIndex].buttonText }}
        </button>
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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { computed } from "vue";

const props = defineProps({
  backgrounds: Array,
  contents: Array,
});

const backgrounds = computed(() => props.backgrounds || []);
const contents = computed(() => props.contents || []);

const currentIndex = ref(0);

const prevBackground = () => {
  currentIndex.value =
    (currentIndex.value - 1 + backgrounds.value.length) %
    backgrounds.value.length;
};

const nextBackground = () => {
  currentIndex.value = (currentIndex.value + 1) % backgrounds.value.length;
};

const screenWidth = ref(window.innerWidth);
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
</style>
