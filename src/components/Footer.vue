<template>
  <div class="bg-black text-white py-10">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16">
      <div class="">
        <div>
          <a href="/">
            <img :src="logo_footer" alt="LiShin Global Logo" class="h-28" />
          </a>
        </div>
        <div class="flex flex-col gap-2 space-y-2 mt-4 text-gray-400">
          <p>
            <i class="fa-solid fa-phone" style="color: #ff5a3d"></i>(098)
            765-4321
          </p>
          <p>
            <i class="fa-solid fa-envelope" style="color: #11a7c5"></i>
            abc@gmail.com
          </p>
          <p>
            <i class="fa-solid fa-location-dot" style="color: #e01c06"></i>
            Nguyễn Văn Cừ , Long Biên , Hà Nội
          </p>
        </div>
      </div>
      <div>
        <div>
          <h3 class="text-lg font-semibold mb-4">QUICK LINKS</h3>
          <ul class="space-y-2 text-gray-400">
            <li v-for="link in quickLinks">
              <a :href="link.href" class="hover:text-white">{{ link.name }}</a>
            </li>
          </ul>
        </div>
        <div class="mt-4 flex space-x-3">
          <a
            href="https://www.facebook.com"
            class="text-gray-400 hover:text-white text-xl"
            target="_blank"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com"
            class="text-gray-400 hover:text-white text-xl"
            target="_blank"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            class="text-gray-400 hover:text-white text-xl"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.x.com"
            class="text-gray-400 hover:text-white text-xl"
            target="_blank"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
      <div class="mt-6">
        <h3 class="text-lg font-semibold mb-2">Secure Payments</h3>
        <div class="flex space-x-2">
          <img :src="logo_visa" class="w-14 h-8" />
          <img :src="logo_mastercard" class="w-14 h-8" />
          <img :src="logo_paypal" class="w-14 h-8" />
          <img :src="logo_discover" class="w-14 h-8" />
        </div>
      </div>
    </div>

    <div
      class="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm"
    >
      <p>Design by lishinglobal</p>
      <!-- <p>
        <a href="#" class="hover:text-white">Terms & Conditions</a> |
        <a href="#" class="hover:text-white">Privacy Policy</a>
      </p> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import logo_footer from "../assets/img/logo/logo-footer.png";
import logo_visa from "../assets/img/logo/logo-visa.png";
import logo_mastercard from "../assets/img/logo/logo-mastercard.png";
import logo_paypal from "../assets/img/logo/logo-paypal.png";
import logo_discover from "../assets/img/logo/logo-discover.png";

const quickLinks = ref([
  { name: "Home", href: "/" },
  { name: "Contact Us", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "FAQ's", href: "/faq" },
]);
</script>
