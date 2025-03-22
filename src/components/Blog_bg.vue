<template>
  <section
    class="bg-blog relative bg-cover bg-center text-white py-16 px-6 mt-20 md:px-12"
  >
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <div class="lg:w-1/3 text-center mx-auto">
        <h1 class="text-2xl md:text-6xl">Blog</h1>
        <div class="mt-5">
          <span class="text-xs font-bold"><a href="/">HOME</a></span>
          <span class="text-xs font-bold ms-3">/</span>
          <span class="text-xs font-bold ms-3"
            ><a class="text-white" href="/blog">CUSTOM LISHIN GLOBAL</a></span
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
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
