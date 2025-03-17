<template>
  <section
    class="bg-blog relative bg-cover bg-center text-white py-16 px-6 mt-20 md:px-12"
  >
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <div class="lg:w-1/3 text-center mx-auto">
        <h1 class="text-2xl md:text-6xl">BLOG 1</h1>
      </div>
    </div>
  </section>

  <div class="relative w-full h-auto mx-auto my-16 px-4">
    <div class="relative w-3/5 h-auto mx-auto">
      <div class="bg-orange-500 text-center w-52 mx-auto my-5">
        <a class="text-white" href="/blog"> CUSTOM AFFIX APPAREL</a>
      </div>

      <div class="blog-item my-5">
        <div class="text-center mb-5">
          <strong class="text-2xl md:text-3xl">
            Sustainable Packaging for Clothing: Eco-Friendly Ideas to Try
          </strong>
        </div>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img :src="blog1_img1" class="w-full object-cover" />
        </div>
        <p class="mt-10 leading-7">
          Sustainable packaging for clothing​ is more than a trend; it is a
          requirement. With growing environmental awareness among consumers,
          they anticipate that brands will take action to reduce their
          ecological footprint. But where do you begin? You can examine a range
          of environmentally friendly packaging options, such as compostable
          mailers and washable fabric wraps. This blog will guide you through
          straightforward, effective, and creative methods to make your
          packaging more environmentally friendly. Are you prepared to enhance
          your brand while being eco-friendly? Let’s look at sustainable
          packaging options for clothing that work for you and your customers!
        </p>
      </div>

      <div class="blog-item my-16">
        <div class="text-left mb-5">
          <strong class="text-xl md:text-2xl">
            The Importance of Sustainable Packaging for Clothing Businesses
          </strong>
        </div>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img :src="blog1_img2" class="w-full object-cover" />
        </div>
        <p class="mt-6 leading-7">
          Traditional packaging materials, specifically plastic, significantly
          make a contribution to environmental pollution. By using an
          overabundance of plastic baggage and non-recyclable tags, the fashion
          region generates huge waste that frequently ends up in landfills or
          oceans, growing carbon emissions and harming ecosystems.
        </p>
        <p class="mt-6 leading-7">
          Transitioning to clothing packaging that is sustainable can assist
          brands in minimizing their ecological impact while supporting
          worldwide sustainability objectives, including carbon neutrality and
          circular economy efforts.
        </p>
        <p class="mt-6 leading-7">
          Additionally, modern consumers intentionally seek eco-conscious
          brands, preferring those that highlight sustainability. Through the
          use of more sustainable packaging for clothes, businesses not only
          reduce waste but also enhance their brand image, promote customer
          loyalty, and stay competitive in an evolving, environmentally aware
          market.
        </p>
      </div>

      <div class="blog-item my-16">
        <div class="text-left mb-5">
          <strong class="text-xl md:text-2xl">
            The Importance of Sustainable Packaging for Clothing Businesses
          </strong>
        </div>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img :src="blog1_img3" class="w-full object-cover" />
        </div>
        <p class="mt-6 leading-7">
          Traditional packaging materials, specifically plastic, significantly
          make a contribution to environmental pollution. By using an
          overabundance of plastic baggage and non-recyclable tags, the fashion
          region generates huge waste that frequently ends up in landfills or
          oceans, growing carbon emissions and harming ecosystems.
        </p>
        <p class="mt-6 leading-7">
          Transitioning to clothing packaging that is sustainable can assist
          brands in minimizing their ecological impact while supporting
          worldwide sustainability objectives, including carbon neutrality and
          circular economy efforts.
        </p>
        <p class="mt-6 leading-7">
          Additionally, modern consumers intentionally seek eco-conscious
          brands, preferring those that highlight sustainability. Through the
          use of more sustainable packaging for clothes, businesses not only
          reduce waste but also enhance their brand image, promote customer
          loyalty, and stay competitive in an evolving, environmentally aware
          market.
        </p>
      </div>

      <div class="blog-item my-16">
        <div class="text-left mb-5">
          <strong class="text-xl md:text-2xl">
            The Importance of Sustainable Packaging for Clothing Businesses
          </strong>
        </div>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img :src="blog1_img4" class="w-full object-cover" />
        </div>
        <p class="mt-6 leading-7">
          Traditional packaging materials, specifically plastic, significantly
          make a contribution to environmental pollution. By using an
          overabundance of plastic baggage and non-recyclable tags, the fashion
          region generates huge waste that frequently ends up in landfills or
          oceans, growing carbon emissions and harming ecosystems.
        </p>
        <p class="mt-6 leading-7">
          Transitioning to clothing packaging that is sustainable can assist
          brands in minimizing their ecological impact while supporting
          worldwide sustainability objectives, including carbon neutrality and
          circular economy efforts.
        </p>
        <p class="mt-6 leading-7">
          Additionally, modern consumers intentionally seek eco-conscious
          brands, preferring those that highlight sustainability. Through the
          use of more sustainable packaging for clothes, businesses not only
          reduce waste but also enhance their brand image, promote customer
          loyalty, and stay competitive in an evolving, environmentally aware
          market.
        </p>
      </div>
    </div>
  </div>

  <BrandComponent />
  <FooterComponent />
</template>

<script setup>
import { ref } from "vue";
import BrandComponent from "../components/Brand.vue";
import FooterComponent from "../components/Footer.vue";

import bg_blog from "../assets/img/bg/bg-blog.jpg";
import blog1_img1 from "../assets/img/bg/blog1.jpg";
import blog1_img2 from "../assets/img/bg/blog1_img2.jpg";
import blog1_img3 from "../assets/img/bg/blog1_img3.jpg";
import blog1_img4 from "../assets/img/bg/blog1_img4.jpg";
</script>

<style scoped>
.bg-blog {
  width: 100%;
  height: auto;
  background-image: url("../assets/img/bg/cta-banner.jpg");
  background-size: cover;
  background-position: center;
}

@media (max-width: 1024px) {
  .bg-blog {
    background-attachment: scroll;
  }
}
</style>
