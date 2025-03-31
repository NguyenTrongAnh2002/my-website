<template>
  <section
    class="bg-faq relative bg-cover bg-center text-white py-16 px-6 mt-20 md:px-12"
  >
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <div class="lg:w-1/3 text-center mx-auto">
        <h1 class="text-2xl md:text-6xl">FAQ's</h1>
        <div class="mt-5">
          <span class="text-xs font-bold"><a href="/">HOME</a></span>
          <span class="text-xs font-bold ms-2"
            ><i class="fa-solid fa-angles-right"></i
          ></span>
          <span class="text-xs font-bold ms-2"
            ><a class="text-white" href="/blog">FAQ'S</a></span
          >
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="w-3/4 mx-auto">
      <div class="mt-14">
        <h1 class="text-2xl md:text-4xl font-bold mb-5">
          Custom LiShin Manufacturing FAQ
        </h1>
        <p class="opacity-80">
          Manufacturing custom LiShin — especially as a start-up clothing brand
          — is an involved process. There are many considerations and many
          questions you may have. Our Frequently Asked Questions (FAQ) can
          answer some basic and essential questions regarding custom LiShin
          manufacturing and LiShin Global. Please make sure you check this page
          before contacting LiShin Global.
        </p>
      </div>

      <div class="mt-6">
        <div><h1 class="text-2xl md:text-4xl font-bold mb-5">FAQ's</h1></div>

        <div class="">
          <button @click="showFAQ1 = !showFAQ1" class="flex gap-5">
            <div
              class="w-8 h-8 border-2 border-orange-600 text-orange-600 text-center"
            >
              <div v-show="!showFAQ1">
                <i class="fa-solid fa-plus"></i>
              </div>
              <div v-show="showFAQ1">
                <i class="fa-solid fa-minus"></i>
              </div>
            </div>
            <h2 class="text-xl md:text-2xl">
              <strong>How do discounts work?</strong>
            </h2>
          </button>

          <div
            class="left-0 w-full transition-all duration-500 ease-in-out"
            :class="
              showFAQ1
                ? 'opacity-100 max-h-40'
                : 'opacity-0 max-h-0 pointer-events-none'
            "
          >
            <p class="mt-4 ps-12 opacity-80">
              Simply reach out to our team for a consultation. We’ll discuss
              your ideas, help with design and fabric selection, and guide you
              through the entire manufacturing process.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <div class="">
          <button @click="showFAQ2 = !showFAQ2" class="flex gap-5">
            <div
              class="w-8 h-8 border-2 border-orange-600 text-orange-600 text-center"
            >
              <div v-show="!showFAQ2">
                <i class="fa-solid fa-plus"></i>
              </div>
              <div v-show="showFAQ2">
                <i class="fa-solid fa-minus"></i>
              </div>
            </div>
            <h2 class="text-xl md:text-2xl">
              <strong>Do you send proofs prior to LiShin production?</strong>
            </h2>
          </button>
          <div
            class="transition-all duration-700 ease-in-out"
            :class="
              showFAQ2
                ? 'opacity-100 max-h-[100vh]'
                : 'opacity-0 max-h-0 pointer-events-none'
            "
          >
            <ul class="list-disc ps-14">
              <li class="mt-4 opacity-80">
                LiShin Global will produce a sample free of charge with any
                production order. However: free pre-production samples cannot be
                created until we have received the production order deposit.
              </li>
              <li class="mt-4 opacity-80">
                If you would like a sample before putting in a production order,
                we can accommodate that request — but will have to charge for
                the sample.
              </li>
              <li class="mt-4 opacity-80">
                While we can technically produce a finished sample for any
                garment, the cost of a sample can be prohibitively expensive in
                small orders. In small run orders, it is simply not cost
                effective to request a sample. If you want a sample no matter
                what, please be aware of the cost.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <div class="">
          <button @click="showFAQ3 = !showFAQ3" class="flex gap-5">
            <div
              class="w-8 h-8 border-2 border-orange-600 text-orange-600 text-center"
            >
              <div v-show="!showFAQ3">
                <i class="fa-solid fa-plus"></i>
              </div>
              <div v-show="showFAQ3">
                <i class="fa-solid fa-minus"></i>
              </div>
            </div>
            <h2 class="text-xl md:text-2xl">
              <strong>Can I order a sample before ordering?</strong>
            </h2>
          </button>
          <div
            class="transition-all duration-700 ease-in-out"
            :class="
              showFAQ3
                ? 'opacity-100 max-h-[100vh]'
                : 'opacity-0 max-h-0 pointer-events-none'
            "
          >
            <p class="mt-4 ps-12 opacity-80">
              You will always receive a proof of your order before it is put
              into production. We do not print, sublimate, embroider, or
              otherwise create anything without your express, written approval.
            </p>
            <div>
              <p class="mt-4 ps-12 opacity-80">
                Please review your proofs carefully. Look over all the
                information listed within the proof, review the images
                carefully, and request changes with anything you are not happy
                with.
              </p>
              <ul class="list-disc ps-20">
                <li class="mt-4 opacity-80">
                  If you need changes made to your items, please let us know
                  upon receipt of your proof. We cannot be held responsible for
                  mistakes and errors that occur if you have approved production
                  without carefully reviewing your proof information.
                </li>
                <li class="mt-4 opacity-80">
                  If you do not need changes to your proof, please reply to the
                  e-mail and let us know you approve your proof for production.
                  Remember, we cannot move forward with production until we have
                  received written approval of a proof.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <div class="">
          <button @click="showFAQ4 = !showFAQ4" class="flex gap-5">
            <div
              class="w-8 h-8 border-2 border-orange-600 text-orange-600 text-center"
            >
              <div v-show="!showFAQ4">
                <i class="fa-solid fa-plus"></i>
              </div>
              <div v-show="showFAQ4">
                <i class="fa-solid fa-minus"></i>
              </div>
            </div>
            <h2 class="text-xl md:text-2xl">
              <strong
                >When does the clock start for my order turnaround time?</strong
              >
            </h2>
          </button>
          <div
            class="transition-all duration-700 ease-in-out"
            :class="
              showFAQ4
                ? 'opacity-100 max-h-[100vh]'
                : 'opacity-0 max-h-0 pointer-events-none'
            "
          >
            <ul class="list-disc ps-14">
              <li class="mt-4 opacity-80">
                Custom LiShin manufacturing is a large undertaking for anyone.
              </li>
              <li class="mt-4 opacity-80">
                Your order turnaround time begins when payment has been
                processed. Please take this into consideration when calculating
                your in-hands date.
              </li>
              <li class="mt-4 opacity-80">
                Here's an example — let's say you contact LiShin Global on the
                1st of January for screen printed garments. You need your
                garments on the 15th of January for an event. On the 1st of
                January, you begin the ordering process, and you let everyone
                know you need your goods on the 15th of January. After the order
                is initialized, however, you do not make a payment immediately —
                you wait until the 6th of January to make your payment.
                Unfortunately, at this point, we will need to either charge a
                rush fee, or we must deliver your goods with the standard two
                week turnaround for the 20th of January.
              </li>
              <li class="mt-4 opacity-80">
                This is, again, because we do not begin processing your order
                until after you have submitted a payment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <BrandComponent />
  <FooterComponent />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, Transition } from "vue";
import BrandComponent from "../components/Brand.vue";
import FooterComponent from "../components/Footer.vue";

const showFAQ1 = ref(false);
const showFAQ2 = ref(false);
const showFAQ3 = ref(false);
const showFAQ4 = ref(false);
</script>

<style scoped>
.bg-faq {
  width: 100%;
  height: auto;
  background-image: url("../assets/img/bg/bg-blog.jpg");
  background-size: cover;
  background-position: center;
}

@media (max-width: 1024px) {
  .bg-faq {
    background-attachment: scroll;
  }
}
</style>
