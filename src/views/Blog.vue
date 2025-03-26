<template>
  <div v-if="$route.path === '/blog'">
    <section
      class="bg-blog relative bg-cover bg-center text-white py-16 px-6 mt-20 md:px-12"
    >
      <div class="container mx-auto flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/3 text-center mx-auto">
          <h1 class="text-2xl md:text-6xl">Blog</h1>
        </div>
      </div>
    </section>

    <section class="relative w-full max-w-7xl mx-auto my-16 px-4">
      <div class="overflow-hidden relative">
        <div class="flex flex-wrap">
          <div
            v-for="(item_blog, index) in paginatedBlogs"
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
                <a :href="`blog/` + item_blog.href"
                  ><img :src="item_blog.image" class="w-full h-64 object-cover"
                /></a>
              </div>
              <div class="p-6">
                <p class="opacity-50">{{ item_blog.date }}</p>
                <a :href="`blog/` + item_blog.href" class="font-bold text-lg">{{
                  item_blog.title
                }}</a>
                <p class="text-gray-600 text-sm mt-2">
                  {{ item_blog.description }}
                </p>
                <button
                  class="mt-4 bg-gray-200 text-orange-400 px-4 py-2 rounded-full text-sm hover:bg-white"
                >
                  <a :href="`blog/` + item_blog.href">CONTINUE READING</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-8">
        <button
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="px-4 py-2 mx-2 border rounded"
        >
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button
          v-for="page in visiblePages"
          :key="page"
          @click="typeof page === 'number' && goToPage(page)"
          class="px-4 py-2 border rounded-md"
          :class="{
            'bg-gray-600 text-white': currentPage === page,
            'cursor-not-allowed': page === '...',
          }"
        >
          {{ page }}
        </button>
        <button
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 mx-2 border rounded"
        >
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </section>

    <BrandComponent />
    <FooterComponent />
  </div>
  <router-view></router-view>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import BrandComponent from "../components/Brand.vue";
import FooterComponent from "../components/Footer.vue";

import { RouterView } from "vue-router";
import { blogs } from "../js/blogData.js";

const itemsPerSlide = () => {
  if (screenWidth.value >= 1024) return 3;
  if (screenWidth.value < 1024 && screenWidth.value > 600) return 2;
  return 1;
};

const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenWidth);
});

const currentPage = ref(1);
const itemsPerPage = 6;
const totalPages = computed(() => Math.ceil(blogs.value.length / itemsPerPage));
const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return blogs.value.slice(start, start + itemsPerPage);
});

const goToPage = (page) => {
  currentPage.value = page;
};

const visiblePages = computed(() => {
  const pages = [];
  const total = totalPages.value;
  const current = currentPage.value;

  if (total <= 3) {
    // Nếu tổng số trang nhỏ hơn hoặc bằng 4, hiển thị tất cả
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    pages.push(1); // Luôn hiển thị trang 1

    if (current > 3) pages.push("..."); // Dấu "..." nếu trang hiện tại lớn hơn 3

    // Hiển thị trang trước, hiện tại và sau nó
    let start = Math.max(2, current - 1);
    let end = Math.min(total - 1, current + 1);
    for (let i = start; i <= end; i++) pages.push(i);

    if (current < total - 2) pages.push("..."); // Dấu "..." nếu chưa gần trang cuối

    pages.push(total); // Luôn hiển thị trang cuối
  }

  return pages;
});
</script>

<style scoped>
template {
  font-family: Arial, Helvetica, sans-serif;
}
.bg-blog {
  width: 100%;
  height: auto;
  background-image: url("../assets/img/bg/bg-blog.jpg");
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
