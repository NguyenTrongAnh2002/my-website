<template>
  <section
    class="production-process relative bg-cover bg-center text-white py-16 px-6 md:px-12"
  >
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <div class="lg:w-1/3 text-left">
        <h2 class="text-3xl md:text-4xl font-bold leading-tight">
          <span class="text-orange-500">Clothing Manufacturer</span> For Small
          Business: How We Make Your Clothes?
        </h2>
        <p class="mt-4 text-lg">
          Creating custom clothing with Affix Apparel is effortless and
          seamless. Our custom clothing manufacturers in the USA guide you
          through each step, from material selection to design finalization,
          ensuring the product aligns with your brand’s vision. We start by
          discussing your design ideas and requirements, followed by providing
          mockups for approval. Once confirmed, we produce samples to ensure the
          final product meets your expectations. After sample approval, we begin
          manufacturing, ensuring top-notch quality and consistency at every
          stage of production. Affix Apparel makes the production process of
          custom clothing for small businesses easy and reliable.
        </p>
        <p class="mt-4 text-lg">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less.
        </p>
        <div
          class="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <button
            class="bg-orange-500 text-white px-6 py-2 rounded font-semibold"
          >
            LET’S GET STARTED!
          </button>
          <button class="border border-white px-6 py-2 rounded font-semibold">
            OUR PORTFOLIO
          </button>
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
</template>

<style scoped>
.production-process {
  width: 100%;
  height: auto;
  background-image: url("../assets//img/bg/bg-clothing.jpg");
  background-size: cover;
  background-position: center;
}

@media (max-width: 1024px) {
  .production-process {
    background-attachment: scroll;
  }
}
</style>
