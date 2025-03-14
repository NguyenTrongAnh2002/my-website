<template>
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
          class="mt-6 flex flex-col justify-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <button
            class="border border-gray-400 px-6 py-2 rounded font-semibold hover:border-white"
          >
            GET PERSONALIZEDHELP!
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-box {
  width: 100%;
  height: auto;
  background-image: url("../assets/img/bg/cta-banner.jpg");
  background-size: cover;
  background-position: center;
}

@media (max-width: 1024px) {
  .experience-box {
    background-attachment: scroll;
  }
}
</style>
