<script setup>
import { ref } from "vue";
import HeaderComponent from "../components/Header.vue";
import HeroComponent from "../components/Hero.vue";
import BrandComponent from "../components/Brand.vue";
import FooterComponent from "../components/Footer.vue";

import heroBg_about from "../assets/img/bg/bg-about.jpg";
import bg_about1 from "../assets/img/bg/bg-wrapper.jpg";
import bg_about2 from "../assets/img/bg/bg-about2.jpg";
import about1 from "../assets/img/bg/about1.jpg";
import about2 from "../assets/img/bg/about2.jpg";
import about3 from "../assets/img/bg/about3.jpg";
import about4 from "../assets/img/bg/about4.jpg";
import about5 from "../assets/img/bg/about5.jpg";
import about6 from "../assets/img/bg/about6.jpg";
import about7 from "../assets/img/bg/about7.jpg";
import about8 from "../assets/img/bg/about8.jpg";
import about9 from "../assets/img/bg/about9.jpg";

const backgrounds = ref([heroBg_about]);
const contents = ref([
  {
    title: "Xưởng May Chuyên Nghiệp",
    description:
      "Chúng tôi cung cấp dịch vụ may mặc chất lượng cao với giá cạnh tranh.",
    buttonText: "Liên hệ ngay",
  },
]);
</script>

<template>
  <HeroComponent :contents="contents" :backgrounds="backgrounds" />

  <section
    class="py-20 bg-gray-100"
    :style="{ backgroundImage: `url(${bg_about1})` }"
  >
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <div class="lg:w-1/2 w-full px-6">
        <img :src="about1" class="rounded-lg shadow-lg" />
      </div>

      <div class="lg:w-1/2 w-full px-6 mt-6 lg:mt-0 text-center lg:text-left">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Secrets To Start A Successful Clothing Line
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          There’s a lot that goes into starting a successful clothing line. When
          starting a clothing brand, you need to identify the need in the market
          and define your target audience accordingly. Then, create a clothing
          brand business plan and design distinct apparel styles exclusive to
          your clothing brand.
        </p>
        <p class="text-lg text-gray-600 mb-6">
          The question of how to start a clothing brand is finding an affordable
          and high quality clothing manufacturer. Then come up with the right
          branding and marketing strategies to market your new line of clothing.
        </p>
        <p class="text-lg text-gray-600 mb-6">
          You can’t rule out two major aspects when creating a clothing brand.
          First, your pricing strategy should be highly relevant. Second, you
          need a soft launch, and then invest gradually.
        </p>
        <p class="text-lg text-gray-600 mb-6">
          Creating a clothing line is not a simple process, but it is quite a
          challenge. Do not worry, in this article you will get all the needed
          tools to build your own clothing brand.
        </p>
        <button
          class="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-700 inline-block"
        >
          GET STARTED
        </button>
      </div>
    </div>
  </section>

  <section
    class="py-20 bg-gray-100"
    :style="{ backgroundImage: `url(${bg_about2})` }"
  >
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <div class="lg:w-1/2 w-full px-6 mt-6 lg:mt-0 text-center lg:text-left">
        <p class="text-lg text-white">Step 1</p>
        <h2 class="text-4xl font-bold text-white mb-4">
          Create a Solid Business Plan For Your Clothing Brand
        </h2>
        <p class="text-lg text-white mb-6">
          When you launch a clothing line, you have to consider several things
          first, including your business model. To define your business model
          effectively, you need to find a gap in your competitors’ services. You
          need to then find innovative ways to use those gaps in your clothing
          brand.
        </p>
        <p class="text-lg text-white mb-6">
          You can choose among different business models for your clothing line.
          You can either design and produce your apparel from scratch or if you
          have clothing fashion knowledge but no design skills, you can buy and
          resell products at a profit margin rate. Here are some more clothing
          business models to consider.
        </p>
        <ul class="text-lg text-white mb-6 list-disc ps-8">
          <li class="mb-4">
            Hand produce and sell your designs directly to clients through your
            own website or social media platforms or at markets and pop-ups.
          </li>
          <li class="mb-4">
            Create collections and produce clothing pieces through a
            manufacturer, then sell your clothing line wholesale to other
            retailers.
          </li>
          <li class="mb-4">
            Design repeating patterns or graphics to print on blank t-shirts and
            other clothing items using a print-on-demand model, selling online
            through your own store.
          </li>
        </ul>
        <p class="text-lg text-white mb-6">
          Talk to our Clothing Experts to help you decide a niche for your
          clothing brand.
        </p>
        <button
          class="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-700 inline-block"
        >
          GET STARTED
        </button>
      </div>

      <div class="lg:w-1/2 w-full px-6 text-center">
        <img :src="about2" class="rounded-lg shadow-lg pt-6" />
      </div>
    </div>
  </section>

  <section class="py-20 bg-gray-100">
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <div class="lg:w-1/2 w-full px-6">
        <img :src="about3" class="rounded-lg shadow-lg" />
      </div>

      <div class="lg:w-1/2 w-full px-6 mt-6 lg:mt-0 text-center lg:text-left">
        <p>Step 2</p>
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Stay On Top Of The Fashion Trends And Find Your Niche
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          Defining your target market before starting a clothing brand is
          essential. An excellent way to identify your marketing niche is by
          staying on top of fashion trends and knowing what’s trending in the
          fashion industry. By observing fashion industry trendsetters and
          finding gaps in their products, you can provide more value and stand
          out from your competitors.
        </p>
        <p class="text-2xl text-gray-600 mb-6">Some great examples include</p>
        <ul class="text-lg text-gray-600 mb-6 list-disc ps-8">
          <li>
            Leanne Mai-ly Hilgart launched vegan winter coat brand Vaute Couture
            after finding a disappointing lack of cruelty-free options on the
            market.
          </li>
          <li>
            Catalina Girald’s lingerie brand, Naja, was built on empowerment and
            inclusiveness.
          </li>
          <li>
            Camille Newman threw her hat in the plus game with Body by Love
            (formerly Pop Up Plus).
          </li>
          <li>
            Mel Wells launched a gender-neutral vintage-inspired swimwear line.
          </li>
          <li>
            Taryn Rodighiero also joined the swimwear game but focused on custom
            suits, made to order to each customer’s exact specifications.
          </li>
        </ul>
        <p class="text-lg text-gray-600 mb-6">
          Creating a clothing line is not a simple process, but it is quite a
          challenge. Do not worry, in this article you will get all the needed
          tools to build your own clothing brand.
        </p>
        <button
          class="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-700 inline-block"
        >
          GET STARTED
        </button>
      </div>
    </div>
  </section>

  <section
    class="py-20 bg-gray-100"
    :style="{ backgroundImage: `url(${bg_about2})` }"
  >
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <div class="lg:w-1/2 w-full px-6 mt-6 lg:mt-0 text-center lg:text-left">
        <p class="text-lg text-white">Step 3</p>
        <h2 class="text-4xl font-bold text-white mb-4">
          Create a Solid Business Plan For Your Clothing Brand
        </h2>
        <p class="text-lg text-white mb-6">
          When you launch a clothing line, you have to consider several things
          first, including your business model. To define your business model
          effectively, you need to find a gap in your competitors’ services. You
          need to then find innovative ways to use those gaps in your clothing
          brand.
        </p>
        <p class="text-lg text-white mb-6">
          You can choose among different business models for your clothing line.
          You can either design and produce your apparel from scratch or if you
          have clothing fashion knowledge but no design skills, you can buy and
          resell products at a profit margin rate. Here are some more clothing
          business models to consider.
        </p>
        <ul class="text-lg text-white mb-6 list-disc ps-8">
          <li class="mb-4">
            Hand produce and sell your designs directly to clients through your
            own website or social media platforms or at markets and pop-ups.
          </li>
          <li class="mb-4">
            Create collections and produce clothing pieces through a
            manufacturer, then sell your clothing line wholesale to other
            retailers.
          </li>
          <li class="mb-4">
            Design repeating patterns or graphics to print on blank t-shirts and
            other clothing items using a print-on-demand model, selling online
            through your own store.
          </li>
        </ul>
        <p class="text-lg text-white mb-6">
          Talk to our Clothing Experts to help you decide a niche for your
          clothing brand.
        </p>
        <button
          class="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-700 inline-block"
        >
          GET STARTED
        </button>
      </div>

      <div class="lg:w-1/2 w-full px-6 text-center">
        <img :src="about4" class="rounded-lg shadow-lg pt-6" />
      </div>
    </div>
  </section>

  <section class="py-20 bg-gray-100">
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <div class="lg:w-1/2 w-full px-6">
        <img :src="about5" class="rounded-lg shadow-lg pt-6" />
      </div>

      <div class="lg:w-1/2 w-full px-6 mt-6 lg:mt-0 text-center lg:text-left">
        <p>Step 4</p>
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Stay On Top Of The Fashion Trends And Find Your Niche
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          Defining your target market before starting a clothing brand is
          essential. An excellent way to identify your marketing niche is by
          staying on top of fashion trends and knowing what’s trending in the
          fashion industry. By observing fashion industry trendsetters and
          finding gaps in their products, you can provide more value and stand
          out from your competitors.
        </p>
        <p class="text-2xl text-gray-600 mb-6">Some great examples include</p>
        <ul class="text-lg text-gray-600 mb-6 list-disc ps-8">
          <li>
            Leanne Mai-ly Hilgart launched vegan winter coat brand Vaute Couture
            after finding a disappointing lack of cruelty-free options on the
            market.
          </li>
          <li>
            Catalina Girald’s lingerie brand, Naja, was built on empowerment and
            inclusiveness.
          </li>
          <li>
            Camille Newman threw her hat in the plus game with Body by Love
            (formerly Pop Up Plus).
          </li>
          <li>
            Mel Wells launched a gender-neutral vintage-inspired swimwear line.
          </li>
          <li>
            Taryn Rodighiero also joined the swimwear game but focused on custom
            suits, made to order to each customer’s exact specifications.
          </li>
        </ul>
        <p class="text-lg text-gray-600 mb-6">
          Creating a clothing line is not a simple process, but it is quite a
          challenge. Do not worry, in this article you will get all the needed
          tools to build your own clothing brand.
        </p>
        <button
          class="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-700 inline-block"
        >
          GET STARTED
        </button>
      </div>
    </div>
  </section>

  <section
    class="py-20 bg-gray-100"
    :style="{ backgroundImage: `url(${bg_about2})` }"
  >
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <div class="lg:w-1/2 w-full px-6 mt-6 lg:mt-0 text-center lg:text-left">
        <p class="text-lg text-white">Step 5</p>
        <h2 class="text-4xl font-bold text-white mb-4">
          Create a Solid Business Plan For Your Clothing Brand
        </h2>
        <p class="text-lg text-white mb-6">
          When you launch a clothing line, you have to consider several things
          first, including your business model. To define your business model
          effectively, you need to find a gap in your competitors’ services. You
          need to then find innovative ways to use those gaps in your clothing
          brand.
        </p>
        <p class="text-lg text-white mb-6">
          You can choose among different business models for your clothing line.
          You can either design and produce your apparel from scratch or if you
          have clothing fashion knowledge but no design skills, you can buy and
          resell products at a profit margin rate. Here are some more clothing
          business models to consider.
        </p>
        <ul class="text-lg text-white mb-6 list-disc ps-8">
          <li class="mb-4">
            Hand produce and sell your designs directly to clients through your
            own website or social media platforms or at markets and pop-ups.
          </li>
          <li class="mb-4">
            Create collections and produce clothing pieces through a
            manufacturer, then sell your clothing line wholesale to other
            retailers.
          </li>
          <li class="mb-4">
            Design repeating patterns or graphics to print on blank t-shirts and
            other clothing items using a print-on-demand model, selling online
            through your own store.
          </li>
        </ul>
        <p class="text-lg text-white mb-6">
          Talk to our Clothing Experts to help you decide a niche for your
          clothing brand.
        </p>
        <button
          class="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-700 inline-block"
        >
          GET STARTED
        </button>
      </div>

      <div class="lg:w-1/2 w-full px-6 text-center pt-6">
        <img :src="about6" class="rounded-lg shadow-lg" />
      </div>
    </div>
  </section>

  <section class="py-20 bg-gray-100">
    <div class="container mx-auto flex flex-col items-center">
      <div class="lg:w-5/6 w-full px-6">
        <img :src="about7" class="rounded-lg shadow-lg mb-10" />
      </div>

      <div class="lg:w-5/6 w-full px-6 mt-6 lg:mt-0 text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Make Sure That Your Store Goes Ecommerce
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          Ecommerce flourishes exponentially. Transition to Ecommerce as soon as
          you launch your clothing brand so that it becomes a revenue-generating
          website in the long run.
        </p>

        <p class="text-lg text-gray-600 mb-6 list-disc ps-8">
          Moreover, if your clothing brand is well-received online, your reviews
          and ratings would be showcased online for the world to see and your
          clients would act as free referrals for your business.
        </p>
        <p class="text-lg text-gray-600 mb-6">(323) 515-1919 | Live Chat</p>
      </div>
    </div>
  </section>

  <section class="py-20 bg-gray-100">
    <div class="container mx-auto flex flex-col items-center">
      <div class="lg:w-5/6 w-full px-6">
        <img :src="about8" class="rounded-lg shadow-lg mb-10" />
      </div>

      <div class="lg:w-5/6 w-full px-6 mt-6 lg:mt-0 text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Start with being present on Social Media
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          Social media has become a key marketing tool for clothing brands. If
          you simply create some social media accounts and post them on
          Instagram or Facebook without a strategy, you might overlook this
          method of advertising. To run your clothing brand you must have a
          bulletproof social media marketing strategy. You should tailor your
          social media to specific clothing brand business objectives.
        </p>
        <p class="text-lg text-gray-600 mb-6 list-disc ps-8">
          Having a robust social media strategy for your clothing brand can help
          you increase brand awareness for your clothing brand. It can also help
          you connect with your audience, implement advertising campaigns and
          drive traffic to your website.
        </p>
        <p class="text-lg text-gray-600 mb-6 list-disc ps-8">
          For your clothing brand, Affix Apparel has the expertise, experience,
          and capabilities to effectively manage social media marketing. We have
          an in-house team of skilled digital marketers who have helped us
          market more than 100 clothing brands that have manufactured their
          products with us. Besides manufacturing, Affix apparel can also serve
          as your marketing partners which can help you get ahead in the
          competitive fashion industry.
        </p>
        <p class="text-lg text-gray-600 mb-6 list-disc ps-8">
          Click here to connect with our Marketing Expert who’ll guide you
          further on how to use social media for your clothing brand.
        </p>
        <p class="text-lg text-gray-600 mb-6">(323) 515-1919 | Live Chat</p>
      </div>
    </div>
  </section>

  <section class="py-20 bg-gray-100">
    <div class="container mx-auto flex flex-col items-center">
      <div class="lg:w-5/6 w-full px-6">
        <img :src="about9" class="rounded-lg shadow-lg mb-10" />
      </div>

      <div class="lg:w-5/6 w-full px-6 mt-6 lg:mt-0 text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Continuous product development
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          The chances of success increases to more than 60% when you
          successfully launch your clothing brand digitally and sell your firs
        </p>

        <p class="text-lg text-gray-600 mb-6 list-disc ps-8">
          Looking at the success of your startup clothing brand you might get a
          lot of investors’ attention. Many venture capitalist firms are
          enthusiastically looking for successful clothing entrepreneurs to
          scale up as a clothing brand.
        </p>
        <p class="text-lg text-gray-600 mb-6">(323) 515-1919 | Live Chat</p>
      </div>
    </div>
  </section>

  <BrandComponent />
  <FooterComponent />
</template>

<style scoped></style>
