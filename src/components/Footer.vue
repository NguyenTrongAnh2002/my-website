<template>
  <div class="bg-black text-white py-10">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <a href=""
          ><img :src="logo_footer" alt="Affix Apparel" class="w-40 mb-4"
        /></a>
        <div class="mt-4 space-y-2 text-gray-400">
          <p>
            <i class="fa-solid fa-phone" style="color: #ff5a3d"></i>(323)
            713-0672
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
        <div class="mt-4 flex space-x-3">
          <a
            href="https://www.facebook.com"
            class="text-gray-400 hover:text-white text-xl"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com"
            class="text-gray-400 hover:text-white text-xl"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            class="text-gray-400 hover:text-white text-xl"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.x.com"
            class="text-gray-400 hover:text-white text-xl"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-4">OUR SERVICES</h3>
        <ul class="space-y-2 text-gray-400">
          <li v-for="service in services">
            <a :href="service.href" class="hover:text-white">{{
              service.name
            }}</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-4">QUICK LINKS</h3>
        <ul class="space-y-2 text-gray-400">
          <li v-for="link in quickLinks">
            <a :href="link.href" class="hover:text-white">{{ link.name }}</a>
          </li>
        </ul>

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
    </div>

    <div
      class="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm"
    >
      <p>Copyright by Nguyen Trong Anh 2025</p>
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

const services = ref([
  { name: "Jeans Manufacturer", href: "#" },
  { name: "Leggings Manufacturer", href: "#" },
  { name: "Cut and Sew Manufacturer", href: "#" },
  { name: "Cushion Covers Manufacturer", href: "#" },
  { name: "Leather Goods Manufacturer", href: "#" },
  { name: "Hoodie Manufacturer", href: "#" },
  { name: "T-Shirt Manufacturer", href: "#" },
]);

const quickLinks = ref([
  { name: "Home", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Customization", href: "#" },
  { name: "Who We Are", href: "#" },
  { name: "FAQ's", href: "#" },
  { name: "Start A Successful Clothing Line", href: "#" },
]);
</script>
