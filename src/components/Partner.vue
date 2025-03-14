<template>
  <section class="py-20">
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <div class="lg:w-2/3 w-full px-6 mt-6 lg:mt-0 text-center lg:text-left">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Why We're Your Partner of Choice?
        </h2>
        <p>
          Affix Apparel is dedicated to outstanding quality in our products. You
          can rest assured that each stitch produced by our custom apparel
          manufacturers USA reflects our commitment to excellence. Allow our
          knowledge to enhance your brand throughout every stage.
        </p>
        <div>
          <div class="flex">
            <div class="w-1/2 me-10">
              <div class="text-left my-10">
                <strong>1.Customized Solutions for Brands</strong>
                <p class="mt-3">
                  Affix Apparel is committed to exceptional craftsmanship. You
                  can be assured that every stitch we make in our custom apparel
                  factory is a testament to our excellence. Let our expertise
                  and precision elevate your brand from concept to creation.
                </p>
              </div>
              <div class="text-left my-10">
                <strong>2. Fast Turnaround Times</strong>
                <p class="mt-3">
                  It is important that deadlines are met, and we are aware of
                  how important they are for vendors to make clothing. We pride
                  ourselves on our quick turnaround without compromising on
                  quality. Make a lasting impression on the market by launching
                  your collections on time.
                </p>
              </div>
            </div>
            <div class="w-1/2">
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
                  Our tight-knit team of skilled and professional creators, like
                  a dedicated family, is here to serve you. Trust Affix to make
                  your clothing designs, ensuring every seam and design aligns
                  seamlessly with your vision, fostering a productive and robust
                  working partnership.
                </p>
              </div>
            </div>
          </div>
          <button
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
</template>
<script setup>
import partner_img from "../assets/img/bg/partner.png";
</script>
<style scoped></style>
