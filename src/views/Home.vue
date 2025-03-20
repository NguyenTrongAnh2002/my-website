<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import HeroComponent from "../components/Hero.vue";
import SliderComponent from "../components/Slider.vue";
import BrandComponent from "../components/Brand.vue";
import FooterComponent from "../components/Footer.vue";
import RequestForm from "../components/RequestForm.vue";

// import bg của Hero
import hero_bg1 from "../assets/img/bg/background-1.jpg";
import hero_bg2 from "../assets/img/bg/background-2.jpg";
import hero_bg3 from "../assets/img/bg/background-3.jpg";

// import của Wrapper
import bg_wrapper from "../assets/img/bg/bg-wrapper.jpg";
import wrapper_1 from "../assets/img/bg/wrapper-1.jpg";
import wrapper2_1 from "../assets/img/bg/wrapper-2.1.jpg";
import wrapper2_2 from "../assets/img/bg/wrapper-2.2.jpg";
import wrapper2_3 from "../assets/img/bg/wrapper-2.3.jpg";
import wrapper2_4 from "../assets/img/bg/wrapper-2.4.jpg";
import wrapper2_5 from "../assets/img/bg/wrapper-2.5.jpg";
import wrapper2_6 from "../assets/img/bg/wrapper-2.6.jpg";

// import của parner
import partner_img from "../assets/img/bg/partner.png";

const openForm = ref(false);

// Phần HeroBackground
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

// phần Wrapper
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

<template>
  <HeroComponent :contents="contents" :backgrounds="backgrounds" />

  <div class="wrapper">
    <section
      class="py-20 bg-gray-100"
      :style="{ backgroundImage: `url(${bg_wrapper})` }"
    >
      <div
        class="container mx-auto md:px-10 flex flex-col lg:flex-row items-center"
      >
        <div class="lg:w-1/2 w-full px-6">
          <img :src="wrapper_1" alt="Xưởng May" class="rounded-lg shadow-lg" />
        </div>

        <div class="lg:w-1/2 w-full px-6 mt-6 lg:mt-0 text-left">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            Premier Clothing Manufacturers Shaping Trends Beyond Fashion
          </h2>
          <p class="text-lg text-gray-600 mb-6">
            Affix Apparel is a leading made-to-order clothing manufacturer,
            specializing in private-label solutions that help brands showcase
            their unique identity. With a focus on quality and innovation, we
            turn your ideas into custom clothing that resonates with your target
            market. As a trusted custom clothing manufacturer for startups and
            retailers of all sizes, we offer tailored solutions with MOQs as low
            as 50 pieces.
          </p>
          <button
            class="bg-gray-800 text-white px-6 py-3 ms-4 rounded-lg text-lg hover:bg-black inline-block"
            @click="openForm = true"
          >
            GET IN TOUCH
          </button>
          <a
            href="/about"
            class="text-black px-6 py-3 ms-4 mt-3 border border-black rounded-lg text-lg hover:bg-black hover:text-white inline-block"
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
            At Affix Apparel, we provide a complete range of services as a
            custom apparel factory, from idea to shipment. Our team of custom
            clothes manufacturers offers design, production, and customization
            services by professionals to make your brand noticeable.
          </p>
        </div>
        <div class="services-section">
          <div
            class="service"
            v-for="(service, index) in services"
            :key="index"
          >
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
  </div>

  <div class="clothing">
    <section
      class="production-clothing relative bg-cover bg-center text-white py-16 px-6 md:px-12"
    >
      <div
        class="container mx-auto md:px-10 flex flex-col lg:flex-row items-center"
      >
        <div class="lg:w-1/3 text-left">
          <h2 class="text-xl md:text-4xl font-bold leading-tight">
            <span class="text-orange-500">Clothing Manufacturer</span> For Small
            Business: How We Make Your Clothes?
          </h2>
          <p class="mt-4 text-lg">
            Creating custom clothing with Affix Apparel is effortless and
            seamless. Our custom clothing manufacturers in the USA guide you
            through each step, from material selection to design finalization,
            ensuring the product aligns with your brand’s vision. We start by
            discussing your design ideas and requirements, followed by providing
            mockups for approval. Once confirmed, we produce samples to ensure
            the final product meets your expectations. After sample approval, we
            begin manufacturing, ensuring top-notch quality and consistency at
            every stage of production. Affix Apparel makes the production
            process of custom clothing for small businesses easy and reliable.
          </p>
          <p class="mt-4 text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less.
          </p>
          <div
            class="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <div>
              <button
                class="bg-orange-500 text-white px-6 py-2 hover:bg-orange-700 rounded font-semibold"
                @click="openForm = true"
              >
                LET’S GET STARTED!
              </button>
            </div>
            <a href="/portfolio">
              <button
                class="border border-gray-500 px-6 py-2 hover:border-white rounded font-semibold"
              >
                OUR PORTFOLIO
              </button>
            </a>
          </div>
        </div>
      </div>

      <div
        class="container mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        <div
          class="text-lg md:text-xl font-bold text-orange-500"
          style="white-space: nowrap"
        >
          1. <span class="text-white">Consultation</span>
        </div>
        <div
          class="text-lg md:text-xl font-bold text-orange-500"
          style="white-space: nowrap"
        >
          2.
          <span class="text-white">Design Mockups</span>
        </div>
        <div
          class="text-lg md:text-xl font-bold text-orange-500"
          style="white-space: nowrap"
        >
          3. <span class="text-white">Sample Production</span>
        </div>
        <div
          class="text-lg md:text-xl font-bold text-orange-500"
          style="white-space: nowrap"
        >
          4. <span class="text-white">Full-Scale Production</span>
        </div>
      </div>
    </section>
  </div>

  <SliderComponent />

  <div class="experience">
    <section
      class="experience-box relative bg-cover bg-center text-white py-16 px-6 md:px-12"
    >
      <div class="container mx-auto flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/3 text-center mx-auto">
          <h2 class="text-2xl md:text-5xl font-bold leading-tight">
            Experience the Quality Difference With
            <span class="text-orange-500">Affix Apparel!</span>
          </h2>

          <div
            class="mt-6 flex flex-col justify-center sm:flex-row space-y-4 sm:space-y-0"
          >
            <button
              @click="openForm = true"
              class="border border-gray-400 px-6 py-2 rounded font-semibold hover:border-white"
            >
              GET PERSONALIZEDHELP!
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="partner">
    <section class="py-20">
      <div
        class="container mx-auto md:px-10 flex flex-col lg:flex-row items-center"
      >
        <div class="lg:w-2/3 w-full px-6 mt-6 lg:mt-0 text-center lg:text-left">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            Why We're Your Partner of Choice?
          </h2>
          <p>
            Affix Apparel is dedicated to outstanding quality in our products.
            You can rest assured that each stitch produced by our custom apparel
            manufacturers USA reflects our commitment to excellence. Allow our
            knowledge to enhance your brand throughout every stage.
          </p>
          <div>
            <div class="flex" :class="{ 'flex-wrap': screenWidth < 600 }">
              <div
                class="w-1/2 me-10"
                :class="{ 'w-full me-0': screenWidth < 600 }"
              >
                <div class="text-left my-10">
                  <strong>1.Customized Solutions for Brands</strong>
                  <p class="mt-3">
                    Affix Apparel is committed to exceptional craftsmanship. You
                    can be assured that every stitch we make in our custom
                    apparel factory is a testament to our excellence. Let our
                    expertise and precision elevate your brand from concept to
                    creation.
                  </p>
                </div>
                <div class="text-left my-10">
                  <strong>2. Fast Turnaround Times</strong>
                  <p class="mt-3">
                    It is important that deadlines are met, and we are aware of
                    how important they are for vendors to make clothing. We
                    pride ourselves on our quick turnaround without compromising
                    on quality. Make a lasting impression on the market by
                    launching your collections on time.
                  </p>
                </div>
              </div>
              <div class="w-1/2" :class="{ 'w-full me-0': screenWidth < 600 }">
                <div class="text-left my-10">
                  <strong>3. First-Class Custom Labeling</strong>
                  <p class="mt-3">
                    Refine the look of your product with our custom labeling. As
                    producers of custom apparel USA, we provide premium labels
                    that you can customize to your exact needs. We create unique
                    branding that highlights the qualities of your company.
                  </p>
                </div>
                <div class="text-left my-10">
                  <strong>4. Professionals at Your Service</strong>
                  <p class="mt-3">
                    Our tight-knit team of skilled and professional creators,
                    like a dedicated family, is here to serve you. Trust Affix
                    to make your clothing designs, ensuring every seam and
                    design aligns seamlessly with your vision, fostering a
                    productive and robust working partnership.
                  </p>
                </div>
              </div>
            </div>
            <button
              @click="openForm = true"
              class="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-700 inline-block"
            >
              CONSULT NOW
            </button>
            <a
              href="/about"
              class="text-black px-6 py-3 ms-4 mt-3 border border-black rounded-lg text-lg hover:bg-black hover:text-white inline-block"
            >
              OUR PORTFOLIO
            </a>
          </div>
        </div>

        <div class="lg:w-1/2 w-full px-6 scale-x-[-1]">
          <img :src="partner_img" alt="Xưởng May" class="rounded-lg" />
        </div>
      </div>
    </section>
  </div>

  <BrandComponent />
  <FooterComponent />
  <RequestForm :isOpen="openForm" @close-form="openForm = false" />
</template>

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

  .production-clothing {
    background-attachment: scroll;
  }

  .experience-box {
    background-attachment: scroll;
  }
}
@media (max-width: 768px) {
  .services-section {
    grid-template-columns: repeat(1, 1fr);
  }
}

.production-clothing {
  width: 100%;
  height: auto;
  background-image: url("../assets//img/bg/bg-clothing.jpg");
  background-size: cover;
  background-position: center;
}

.experience-box {
  width: 100%;
  height: auto;
  background-image: url("../assets/img/bg/cta-banner.jpg");
  background-size: cover;
  background-position: center;
}
</style>
