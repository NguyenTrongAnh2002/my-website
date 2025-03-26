<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <!-- Nút Scroll To Top -->
    <button
      v-show="showScrollButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-gray-600 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-1000"
    >
      <i class="fa-solid fa-arrow-up text-xl"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Navbar from "./components/Header.vue";

const showScrollButton = ref(false);
let scrollTimeout = null;

const handleScroll = () => {
  showScrollButton.value = true;

  // Nếu người dùng không cuộn trong 2 giây => Ẩn nút
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    showScrollButton.value = false;
  }, 2000);
};

// Hàm cuộn lên đầu trang
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Gắn sự kiện khi component được tạo
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Xóa sự kiện khi component bị hủy
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
