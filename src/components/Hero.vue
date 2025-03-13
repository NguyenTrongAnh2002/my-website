<template>
  <div
    class="relative h-[90vh] flex items-center text-center bg-cover bg-center transition-all duration-700"
    :style="{ backgroundImage: `url(${backgrounds[currentIndex]})` }"
  >
    <div class="absolute inset-0 bg-black/50"></div>

    <div class="relative z-10 text-white max-w-3xl mx-auto px-6">
      <h1 class="text-5xl font-bold mb-4">
        {{ contents[currentIndex].title }}
      </h1>
      <p class="text-lg mb-6 opacity-90">
        {{ contents[currentIndex].description }}
      </p>

      <button
        @click="$emit('open-form')"
        class="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 inline-block"
      >
        {{ contents[currentIndex].buttonText }}
      </button>
    </div>

    <button
      v-if="backgrounds.length > 1"
      @click="prevBackground"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 hover:bg-black/60 text-white text-4xl p-4 rounded-full"
    >
      ❮
    </button>

    <button
      v-if="backgrounds.length > 1"
      @click="nextBackground"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-black/60 text-white text-4xl p-4 rounded-full"
    >
      ❯
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
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
</script>

<style scoped>
section {
  transition: background-image 0.8s ease-in-out;
}
</style>
