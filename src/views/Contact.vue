<script setup>
import { ref } from "vue";
import BrandComponent from "../components/Brand.vue";
import FooterComponent from "../components/Footer.vue";

import map from "../assets/img/bg/map.png";

const formData = ref({
  name: "",
  number: "",
  email: "",
  contactMethod: "email",
  message: "",
});
</script>
<template>
  <div class="contact-hero">
    <img :src="map" alt="" width="100%" />
  </div>

  <div class="bg-opacity-50 flex items-center justify-center">
    <div class="flex bg-white p-6 rounded-lg relative">
      <div class="p-4">
        <p class="opacity-50">INFORMATION ABOUT US</p>
        <h2 class="text-2xl font-bold mb-4">CONTACT US FOR ANY QUESTIONS</h2>
        <form @submit.prevent="submitForm">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label>Name</label>
              <input
                v-model="formData.name"
                type="text"
                placeholder="Your Name"
                required
                class="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label>Number</label>
              <input
                v-model="formData.number"
                type="text"
                placeholder="Phone Number"
                required
                class="border p-2 rounded w-full"
              />
            </div>
          </div>
          <div class="mt-4">
            <label>Email</label>
            <input
              v-model="formData.email"
              type="email"
              placeholder="Your Email"
              required
              class="border p-2 rounded w-full"
            />
          </div>

          <div class="mt-4">
            <p class="mb-2">Preferred method of correspondence:</p>
            <label class="mr-4">
              <input
                v-model="formData.contactMethod"
                type="radio"
                value="email"
                name="contact"
                checked
              />
              Via email |
            </label>
            <label>
              <input
                v-model="formData.contactMethod"
                type="radio"
                value="call"
                name="contact"
              />
              Via Call / SMS
            </label>
          </div>

          <div class="mt-4">
            <p class="mb-2">Add any Attachments (if possible):</p>
            <input type="file" class="border p-2 rounded w-full" />
          </div>

          <textarea
            v-model="formData.message"
            placeholder="Detail of Your Idea"
            class="border p-2 rounded w-full mt-4 h-40"
          ></textarea>

          <button
            type="submit"
            class="bg-black text-white px-6 py-3 rounded-lg text-lg mt-4 w-1/2"
          >
            SUBMIT REQUEST
          </button>
        </form>
      </div>
    </div>
  </div>

  <BrandComponent />
  <FooterComponent />
</template>

<style scoped></style>
