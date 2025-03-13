<script setup>
import { ref } from "vue";
import RequestForm from "../components/RequestForm.vue";
import HeaderComponent from "../components/Header.vue";
import HeroComponent from "../components/Hero.vue";
import WrapperComponent from "../components/Wrapper.vue";
import ClothingComponent from "../components/Clothing.vue";
import SliderComponent from "../components/Slider.vue";
import BrandComponent from "../components/Brand.vue";
import FooterComponent from "../components/Footer.vue";

import hero_bg1 from "../assets/img/bg/background-1.jpg";
import hero_bg2 from "../assets/img/bg/background-2.jpg";
import hero_bg3 from "../assets/img/bg/background-3.jpg";
const backgrounds = ref([hero_bg1, hero_bg2, hero_bg3]);
const contents = ref([
  {
    title: "Xưởng May Chuyên Nghiệp",
    description:
      "Chúng tôi cung cấp dịch vụ may mặc chất lượng cao với giá cạnh tranh.",
    buttonText: "Liên hệ ngay",
  },
  {
    title: "Thiết Kế Độc Đáo",
    description: "Biến ý tưởng của bạn thành sản phẩm thời trang tuyệt vời.",
    buttonText: "Khám phá ngay",
  },
  {
    title: "Sản Xuất Số Lượng Lớn",
    description:
      "Đáp ứng đơn hàng lớn với thời gian nhanh chóng và chất lượng cao.",
    buttonText: "Bắt đầu ngay",
  },
]);

const isFormVisible = ref(false);

// const openForm = () => {
//   isFormVisible.value = true;
// };

// const closeForm = () => {
//   isFormVisible.value = false;
// };
</script>

<template>
  <!-- <HeaderComponent @open-form="openForm" /> -->
  <HeroComponent :contents="contents" :backgrounds="backgrounds" />
  <WrapperComponent />
  <ClothingComponent />
  <SliderComponent />
  <BrandComponent />
  <FooterComponent />

  <RequestForm :isOpen="isFormVisible" @close-form="closeForm" />
</template>
