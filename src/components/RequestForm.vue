<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-30 bg-black bg-opacity-50 flex items-center justify-center"
  >
    <div class="flex bg-white p-6 rounded-lg w-11/12 lg:w-1/2 relative">
      <div class="w-full p-4">
        <button
          @click="$emit('close-form')"
          class="absolute top-2 right-2 text-5xl"
        >
          &times;
        </button>
        <h2 class="text-2xl font-bold mb-4">Request Quote!</h2>

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
              <label>Phone</label>
              <div class="flex">
                <select
                  v-model="formData.countryCode"
                  class="border border-gray-300 rounded-l-lg p-2 bg-white text-sm"
                >
                  <option value="+84">VN +84</option>
                  <option value="+1">US +1</option>
                  <option value="+61">AU +61</option>
                  <option value="+81">JP +81</option>
                </select>
                <input
                  v-model="formData.number"
                  type="text"
                  placeholder="Phone Number"
                  required
                  class="border p-2 rounded w-full"
                />
              </div>
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
                v-model="formData.preferred"
                type="radio"
                value="email"
                name="contact"
                checked
              />
              Via email |
            </label>
            <label>
              <input
                v-model="formData.preferred"
                type="radio"
                value="call"
                name="contact"
              />
              Via Call / SMS
            </label>
          </div>

          <textarea
            v-model="formData.message"
            placeholder="Detail of Your Idea"
            class="border p-2 rounded w-full mt-4 h-40"
          ></textarea>

          <button
            type="submit"
            class="bg-black text-white px-6 py-3 rounded-lg text-lg mt-4 w-full"
          >
            SUBMIT REQUEST
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { nextTick } from "vue";

const props = defineProps(["isOpen"]);
const emit = defineEmits(["close-form"]);

const formData = ref({
  name: "",
  number: "",
  countryCode: "+1",
  email: "",
  preferred: "email",
  message: "",
});

const submitForm = async () => {
  await nextTick();

  const formDataToSend = new FormData();
  formDataToSend.append("name", formData.value.name);
  formDataToSend.append("number", formData.value.number);
  formDataToSend.append("countryCode", "'" + formData.value.countryCode);
  formDataToSend.append("email", formData.value.email);
  formDataToSend.append("preferred", formData.value.preferred);
  formDataToSend.append("message", formData.value.message);
  const timestamp = new Date().toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
  });
  formDataToSend.append("timestamp", timestamp);

  alert("Request sent! Please wait...");

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyVHptmgvdYmj85wBkeYT8ZJtXzyJ1L2aQz3kLBXoonGupyA9_5fo_5yo1GW0RmSCp0/exec",
      {
        method: "POST",
        body: formDataToSend,
      }
    );

    const result = await response.json();
    console.log("Server response:", result);
    if (result.status === "success") {
      alert("Form submitted successfully!");
      formData.value = {
        name: "",
        number: "",
        countryCode: "+1",
        email: "",
        preferred: "email",
        message: "",
      };
      return;
    } else {
      alert("Error: " + result.message);
    }
  } catch (error) {
    alert("Failed to submit form.");
    console.error(error);
  }
};
</script>
